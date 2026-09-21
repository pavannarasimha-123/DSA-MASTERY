import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { isDbConnected } from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET || "dsa_mastery_jwt_secret_key_2026";

// Fallback in-memory map if MongoDB is unavailable
const fallbackUsers = new Map();

function sanitizeUser(u) {
  if (!u) return null;
  const doc = u.toObject ? u.toObject() : { ...u };
  delete doc.passwordHash;
  delete doc.__v;
  return doc;
}

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check MongoDB if connected
    if (isDbConnected()) {
      const existing = await User.findOne({ email: cleanEmail });
      if (existing) {
        return res.status(400).json({ error: "An account with this email already exists." });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name: name.trim(),
        email: cleanEmail,
        passwordHash,
        solvedProblems: [], // Brand new fresh state
        streak: 1,
        level: "Beginner",
        weakAreas: [],
        strongAreas: [],
        patternMastery: {}
      });

      const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: "7d" });
      return res.status(201).json({ user: sanitizeUser(newUser), token });
    }

    // Fallback in-memory
    if (fallbackUsers.has(cleanEmail)) {
      return res.status(400).json({ error: "An account with this email already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: "user_" + Date.now(),
      name: name.trim(),
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

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({ user: sanitizeUser(newUser), token });
  } catch (err) {
    res.status(500).json({ error: "Registration failed: " + err.message });
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

      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
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

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ user: sanitizeUser(user), token });
  } catch (err) {
    res.status(500).json({ error: "Login failed: " + err.message });
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
    const authHeader = req.headers.authorization;
    const { problemSlug, patternSlug } = req.body;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Guest progress updated locally" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

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
    res.status(500).json({ error: "Failed to update progress: " + err.message });
  }
}
