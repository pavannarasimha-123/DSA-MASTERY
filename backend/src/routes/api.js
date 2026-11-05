import express from "express";
import { getProblems, getProblemBySlug } from "../controllers/problemsController.js";
import { getPatterns, getPatternBySlug } from "../controllers/patternsController.js";
import { getDataStructures, getDataStructureBySlug } from "../controllers/dataStructuresController.js";
import { getCollectionsData } from "../controllers/collectionsController.js";
import { runCode, submitCode } from "../controllers/executionController.js";
import { analyzeProblemDescription } from "../controllers/advisorController.js";
import { registerUser, loginUser, getUserProfile, updateProgress } from "../controllers/authController.js";
import { authLimiter, executionLimiter } from "../middleware/rateLimiters.js";
import { optionalAuth } from "../middleware/auth.js";

const router = express.Router();

// Problems (public, read-only)
router.get("/problems", getProblems);
router.get("/problems/:slug", getProblemBySlug);

// Patterns (public, read-only)
router.get("/patterns", getPatterns);
router.get("/patterns/:slug", getPatternBySlug);

// Data Structures (public, read-only)
router.get("/data-structures", getDataStructures);
router.get("/data-structures/:slug", getDataStructureBySlug);

// Java Collections (public, read-only)
router.get("/collections", getCollectionsData);

// Code Execution — rate limited + attaches user if logged in
router.post("/execute/run", executionLimiter, optionalAuth, runCode);
router.post("/execute/submit", executionLimiter, optionalAuth, submitCode);

// Pattern Advisor — rate limited
router.post("/pattern-advisor", executionLimiter, analyzeProblemDescription);

// Auth — strictly rate limited to prevent brute force
router.post("/auth/register", authLimiter, registerUser);
router.post("/auth/login", authLimiter, loginUser);

// User profile & progress
router.get("/user/profile", getUserProfile);
router.post("/user/progress", optionalAuth, updateProgress);

export default router;
