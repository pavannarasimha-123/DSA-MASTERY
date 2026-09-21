import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import apiRouter from "./routes/api.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend clients (local, Render domains, and custom domains)
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true
}));

app.use(express.json({ limit: "5mb" }));

// API Routes
app.use("/api", apiRouter);

// Health check endpoint (for Render health probes)
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "DSA Mastery - Java Backend",
    timestamp: new Date().toISOString()
  });
});

// Serve frontend static assets if built into frontend/dist
const frontendDist = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendDist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(frontendDist, "index.html"), (err) => {
    if (err) next();
  });
});

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 DSA Mastery Java Backend listening on http://localhost:${PORT}`);
  });
}

startServer();
