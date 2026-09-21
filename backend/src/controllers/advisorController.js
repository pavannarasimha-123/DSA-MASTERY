import { identifyLikelyPatterns } from "../services/patternDetector.js";

export function analyzeProblemDescription(req, res) {
  const { description, constraints } = req.body;

  if (!description) {
    return res.status(400).json({ error: "Problem description is required." });
  }

  const result = identifyLikelyPatterns(description, constraints || "");
  res.json(result);
}
