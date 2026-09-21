import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  userId: { type: String },
  problemSlug: { type: String, required: true },
  code: { type: String, required: true },
  status: { type: String, required: true },
  passedCount: { type: Number },
  totalCount: { type: Number },
  executionTimeMs: { type: Number },
  memoryUsedKB: { type: Number },
  estimatedTimeComplexity: { type: String },
  estimatedSpaceComplexity: { type: String },
  recommendations: [{ type: mongoose.Schema.Types.Mixed }],
  createdAt: { type: Date, default: Date.now }
});

export const Submission = mongoose.model("Submission", SubmissionSchema);
