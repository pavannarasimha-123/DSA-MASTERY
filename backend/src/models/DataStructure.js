import mongoose from "mongoose";

const DataStructureSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String },
  theory: { type: String },
  operationsTable: [{
    operation: String,
    complexity: String,
    note: String
  }],
  javaComparison: {
    primitive: String,
    dynamic: String,
    whenToUse: String
  },
  commonPatterns: [{ type: String }],
  topProblems: [{ type: String }]
});

export const DataStructure = mongoose.model("DataStructure", DataStructureSchema);
