import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import { globalLimiter } from "./middleware/rateLimiters.js";
import { connectDB } from "./config/db.js";
import apiRouter from "./routes/api.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Trust first proxy (necessary when behind Render / Cloudflare reverse proxy for rate-limiting)
app.set("trust proxy", 1);

// ─── Security Headers (helmet) ──────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:"],
    }
  },
  crossOriginEmbedderPolicy: false,
}));

// ─── CORS — restricted origin verification ──────────────────────────
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser requests (no origin)
    if (!origin) return callback(null, true);

    // Allow configured origins
    if (ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
      return callback(null, true);
    }

    // Allow Render deployments
    try {
      const parsed = new URL(origin);
      if (parsed.hostname.endsWith(".onrender.com")) {
        return callback(null, true);
      }
    } catch (_) {}

    return callback(new Error("CORS policy violation: origin not permitted"));
  },
  credentials: true
}));

// ─── Global Rate Limiting ───────────────────────────────────────────
app.use(globalLimiter);

// ─── Body Parser with size limit ────────────────────────────────────
app.use(express.json({ limit: "1mb" }));

// ─── API Routes ─────────────────────────────────────────────────────
app.use("/api", apiRouter);

// Health check endpoint (for Render health probes)
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "DSA Mastery - Java Backend",
    timestamp: new Date().toISOString()
  });
});

// ─── Serve frontend static assets ───────────────────────────────────
const frontendDist = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendDist, {
  maxAge: "1d",
  etag: true,
}));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(frontendDist, "index.html"), (err) => {
    if (err) next();
  });
});

// ─── Global Error Handler (masks internal traces in production) ─────
app.use((err, req, res, _next) => {
  console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === "production"
      ? "Internal server error"
      : err.message
  });
});

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 DSA Mastery Java Backend listening on http://localhost:${PORT}`);
  });
}

startServer();
