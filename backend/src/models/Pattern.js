import mongoose from "mongoose";

const PatternSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  whyItWorks: { type: String },
  whenToUse: { type: String },
  recognitionClues: [{ type: String }],
  timeComplexity: { type: String },
  spaceComplexity: { type: String },
  generalTemplate: { type: String },
  javaTemplate: { type: String },
  commonMistakes: [{ type: String }],
  top10Problems: [{
    id: String,
    name: String,
    difficulty: String,
    dataStructure: String,
    pattern: String,
    shortDescription: String,
    leetcodeUrl: String,
    gfgUrl: String,
    expectedTime: String,
    expectedSpace: String,
    relatedProblems: [String]
  }]
});

export const Pattern = mongoose.model("Pattern", PatternSchema);
