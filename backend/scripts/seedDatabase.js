import mongoose from "mongoose";
import dotenv from "dotenv";
import { Pattern } from "../src/models/Pattern.js";
import { Problem } from "../src/models/Problem.js";
import { DataStructure } from "../src/models/DataStructure.js";
import { User } from "../src/models/User.js";
import { PATTERNS_DATA } from "../src/data/patternsData.js";
import { PROBLEMS_DATA } from "../src/data/problemsData.js";
import { DATA_STRUCTURES } from "../src/data/dataStructuresData.js";
import bcrypt from "bcryptjs";

dotenv.config();

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("No MONGODB_URI found in .env");
    process.exit(1);
  }

  console.log("Connecting to MongoDB Atlas...");
  await mongoose.connect(uri);
  console.log("✓ Connected to MongoDB Atlas!");

  console.log("Seeding Patterns (30 patterns with 10 problems each)...");
  await Pattern.deleteMany({});
  for (const p of PATTERNS_DATA) {
    await Pattern.create(p);
  }
  console.log(`✓ Seeded ${PATTERNS_DATA.length} Patterns successfully!`);

  console.log("Seeding Problems...");
  await Problem.deleteMany({});
  for (const prob of PROBLEMS_DATA) {
    await Problem.create(prob);
  }
  console.log(`✓ Seeded ${PROBLEMS_DATA.length} Interactive Problems successfully!`);

  console.log("Seeding Data Structures...");
  await DataStructure.deleteMany({});
  for (const ds of DATA_STRUCTURES) {
    await DataStructure.create(ds);
  }
  console.log(`✓ Seeded ${DATA_STRUCTURES.length} Data Structures successfully!`);

  console.log("Seeding Demo User...");
  await User.deleteMany({ email: "student@dsamastery.com" });
  const hash = await bcrypt.hash("password123", 10);
  await User.create({
    name: "Alex Developer",
    email: "student@dsamastery.com",
    passwordHash: hash,
    solvedProblems: ["two-sum", "valid-palindrome"],
    streak: 5,
    level: "Intermediate",
    patternMastery: {
      "two-pointers": 80,
      "sliding-window": 60,
      "binary-search": 100
    },
    weakAreas: ["Dynamic Programming (2D)", "Monotonic Queue"],
    strongAreas: ["Two Pointers", "Sliding Window", "Binary Search"]
  });
  console.log("✓ Seeded Demo User!");

  console.log("★ Database seeding complete!");
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => {
  console.error("Seeding error:", err);
  process.exit(1);
});
