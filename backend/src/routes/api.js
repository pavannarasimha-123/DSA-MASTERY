import express from "express";
import { getProblems, getProblemBySlug } from "../controllers/problemsController.js";
import { getPatterns, getPatternBySlug } from "../controllers/patternsController.js";
import { getDataStructures, getDataStructureBySlug } from "../controllers/dataStructuresController.js";
import { getCollectionsData } from "../controllers/collectionsController.js";
import { runCode, submitCode } from "../controllers/executionController.js";
import { analyzeProblemDescription } from "../controllers/advisorController.js";
import { registerUser, loginUser, getUserProfile, updateProgress } from "../controllers/authController.js";

const router = express.Router();

// Problems
router.get("/problems", getProblems);
router.get("/problems/:slug", getProblemBySlug);

// Patterns
router.get("/patterns", getPatterns);
router.get("/patterns/:slug", getPatternBySlug);

// Data Structures
router.get("/data-structures", getDataStructures);
router.get("/data-structures/:slug", getDataStructureBySlug);

// Java Collections
router.get("/collections", getCollectionsData);

// Code Execution
router.post("/execute/run", runCode);
router.post("/execute/submit", submitCode);

// Pattern Advisor
router.post("/pattern-advisor", analyzeProblemDescription);

// User & Auth
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.get("/user/profile", getUserProfile);
router.post("/user/progress", updateProgress);

export default router;
