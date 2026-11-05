import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { isDbConnected } from "../config/db.js";
import { JWT_SECRET_RESOLVED } from "../middleware/auth.js";
import crypto from "crypto";

const JWT_SECRET = JWT_SECRET_RESOLVED;

// Fallback in-memory map if MongoDB is unavailable
const fallbackUsers = new Map();

function sanitizeUser(u) {
  if (!u) return null;
  const doc = u.toObject ? u.toObject() : { ...u };
  delete doc.passwordHash;
  delete doc.__v;
  return doc;
}

/**
 * Validate password strength
 */
function validatePassword(password) {
  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return null;
}

/**
 * Validate email format
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please provide a valid email address.";
  }
  return null;
}

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }

    // Input validation
    const emailErr = validateEmail(email);
    if (emailErr) return res.status(400).json({ error: emailErr });

    const passErr = validatePassword(password);
    if (passErr) return res.status(400).json({ error: passErr });

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name.trim().substring(0, 100); // Limit name length

    // Check MongoDB if connected
    if (isDbConnected()) {
      const existing = await User.findOne({ email: cleanEmail });
      if (existing) {
        return res.status(400).json({ error: "An account with this email already exists." });
      }

      const passwordHash = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        name: cleanName,
        email: cleanEmail,
        passwordHash,
        solvedProblems: [], // Brand new fresh state
        streak: 1,
        level: "Beginner",
        weakAreas: [],
        strongAreas: [],
        patternMastery: {}
      });

      const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: "24h" });
      return res.status(201).json({ user: sanitizeUser(newUser), token });
    }

    // Fallback in-memory
    if (fallbackUsers.has(cleanEmail)) {
      return res.status(400).json({ error: "An account with this email already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = {
      id: "user_" + crypto.randomUUID(),
      name: cleanName,
      email: cleanEmail,
      passwordHash,
      solvedProblems: [], // Fresh
      streak: 1,
      level: "Beginner",
      weakAreas: [],
      strongAreas: [],
      patternMastery: {},
      createdAt: new Date().toISOString()
    };
    fallbackUsers.set(cleanEmail, newUser);

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: "24h" });
    res.status(201).json({ user: sanitizeUser(newUser), token });
  } catch (err) {
    console.error("[AUTH] Registration error:", err.message);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const cleanEmail = email.toLowerCase().trim();

    if (isDbConnected()) {
      const user = await User.findOne({ email: cleanEmail });
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      const match = await bcrypt.compare(password, user.passwordHash);
      if (!match) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "24h" });
      return res.json({ user: sanitizeUser(user), token });
    }

    // Fallback in-memory
    const user = fallbackUsers.get(cleanEmail);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "24h" });
    res.json({ user: sanitizeUser(user), token });
  } catch (err) {
    console.error("[AUTH] Login error:", err.message);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
}

export async function getUserProfile(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Return null user if not authenticated, so fresh state is maintained
    return res.json({ user: null, isGuest: true });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (isDbConnected()) {
      const user = await User.findById(decoded.id) || await User.findOne({ email: decoded.email });
      if (!user) {
        return res.json({ user: null, isGuest: true });
      }
      return res.json({ user: sanitizeUser(user), isGuest: false });
    }

    const user = fallbackUsers.get(decoded.email);
    if (!user) {
      return res.json({ user: null, isGuest: true });
    }
    res.json({ user: sanitizeUser(user), isGuest: false });
  } catch (_) {
    res.json({ user: null, isGuest: true });
  }
}

export async function updateProgress(req, res) {
  try {
    const { problemSlug, patternSlug } = req.body;

    // req.user is set by requireAuth middleware
    const decoded = req.user;
    if (!decoded) {
      return res.json({ success: false, message: "Authentication required" });
    }

    // Sanitize slugs — only allow alphanumeric, hyphens, underscores
    const slugRegex = /^[a-z0-9\-_]+$/;
    if (problemSlug && !slugRegex.test(problemSlug)) {
      return res.status(400).json({ error: "Invalid problem slug." });
    }
    if (patternSlug && !slugRegex.test(patternSlug)) {
      return res.status(400).json({ error: "Invalid pattern slug." });
    }

    if (isDbConnected()) {
      const user = await User.findById(decoded.id) || await User.findOne({ email: decoded.email });
      if (user) {
        if (problemSlug && !user.solvedProblems.includes(problemSlug)) {
          user.solvedProblems.push(problemSlug);
        }
        if (patternSlug) {
          const current = user.patternMastery?.get(patternSlug) || 0;
          user.patternMastery.set(patternSlug, Math.min(100, current + 20));
        }
        await user.save();
        return res.json({ success: true, user: sanitizeUser(user) });
      }
    }

    const user = fallbackUsers.get(decoded.email);
    if (user) {
      if (problemSlug && !user.solvedProblems.includes(problemSlug)) {
        user.solvedProblems.push(problemSlug);
      }
      if (patternSlug) {
        const current = user.patternMastery[patternSlug] || 0;
        user.patternMastery[patternSlug] = Math.min(100, current + 20);
      }
      return res.json({ success: true, user: sanitizeUser(user) });
    }

    res.json({ success: false, message: "User not found" });
  } catch (err) {
    console.error("[AUTH] Update progress error:", err.message);
    res.status(500).json({ error: "Failed to update progress." });
  }
}
