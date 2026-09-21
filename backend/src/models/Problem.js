import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
  topic: { type: String },
  dataStructures: [{ type: String }],
  patterns: [{ type: String }],
  companies: [{ type: String }],
  leetcodeUrl: { type: String },
  gfgUrl: { type: String },
  description: { type: String, required: true },
  constraints: [{ type: String }],
  examples: [{
    input: String,
    output: String,
    explanation: String
  }],
  starterCode: { type: String },
  solution: { type: String },
  hints: [{ type: String }],
  approaches: [{
    name: String,
    timeComplexity: String,
    spaceComplexity: String,
    explanation: String,
    whyBetter: String,
    code: String
  }],
  testCases: [{
    input: mongoose.Schema.Types.Mixed,
    expected: mongoose.Schema.Types.Mixed,
    isHidden: Boolean
  }]
});

export const Problem = mongoose.model("Problem", ProblemSchema);
