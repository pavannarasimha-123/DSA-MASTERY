import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  solvedProblems: [{ type: String }],
  streak: { type: Number, default: 1 },
  level: { type: String, default: "Beginner" },
  patternMastery: { type: Map, of: Number, default: {} },
  weakAreas: [{ type: String }],
  strongAreas: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model("User", UserSchema);
