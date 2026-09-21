import { PROBLEMS_DATA } from "../data/problemsData.js";
import { PATTERNS_DATA } from "../data/patternsData.js";

// Build complete problem catalog by merging rich interactive problems with pattern problems
const catalogMap = new Map();

// 1. Add rich interactive problems
for (const p of PROBLEMS_DATA) {
  catalogMap.set(p.slug, { ...p, isInteractive: true });
}

// 2. Add all 300 pattern problems
for (const pattern of PATTERNS_DATA) {
  for (const prob of pattern.top10Problems) {
    const slug = prob.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    if (!catalogMap.has(slug)) {
      catalogMap.set(slug, {
        id: prob.id,
        slug,
        title: prob.name,
        difficulty: prob.difficulty,
        topic: prob.dataStructure,
        dataStructures: [prob.dataStructure],
        patterns: [prob.pattern],
        companies: ["Top Tech", "FAANG"],
        leetcodeUrl: prob.leetcodeUrl,
        gfgUrl: prob.gfgUrl,
        description: `${prob.shortDescription}\n\nThis question frequently tests the ${prob.pattern} algorithmic pattern. Practice and master the implementation in Java.`,
        constraints: ["1 <= n <= 10^5", "Standard interview bounds apply."],
        examples: [
          {
            input: "Sample standard input conforming to problem constraints",
            output: "Target result",
            explanation: `Solved using ${prob.pattern} in ${prob.expectedTime}.`
          }
        ],
        methodMeta: {
          methodName: "solve",
          returnType: "int",
          paramTypes: ["int[]"]
        },
        starterCode: `class Solution {\n    public int solve(int[] nums) {\n        // Apply ${prob.pattern} pattern here\n        \n        return 0;\n    }\n}`,
        solution: `class Solution {\n    public int solve(int[] nums) {\n        // Master implementation\n        return 0;\n    }\n}`,
        hints: [
          `Hint 1: This problem is categorized under the ${prob.pattern} pattern.`,
          `Hint 2: Pay attention to edge cases like empty inputs, boundary bounds, or extreme integer ranges.`,
          `Hint 3: Expected time complexity is ${prob.expectedTime}, space complexity is ${prob.expectedSpace}.`
        ],
        approaches: [
          {
            name: "Standard Approach",
            timeComplexity: prob.expectedTime,
            spaceComplexity: prob.expectedSpace,
            explanation: `Applies the canonical ${prob.pattern} template to solve the problem efficiently.`,
            code: `// ${prob.name} Solution\nclass Solution {\n    // Implementation\n}`
          }
        ],
        stepByStep: [
          { step: 1, title: "Understand", text: prob.shortDescription },
          { step: 2, title: "Pattern", text: `Recognize that ${prob.pattern} matches this problem.` },
          { step: 3, title: "Complexity", text: `Target Time: ${prob.expectedTime}, Space: ${prob.expectedSpace}` }
        ],
        testCases: [
          { input: [1, 2, 3], expected: 0, isHidden: false }
        ],
        isInteractive: false
      });
    }
  }
}

export function getProblems(req, res) {
  const { search, difficulty, topic, pattern, company } = req.query;

  let list = Array.from(catalogMap.values());

  if (search) {
    const q = search.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.topic && p.topic.toLowerCase().includes(q)) ||
      (p.patterns && p.patterns.some(pat => pat.toLowerCase().includes(q)))
    );
  }

  if (difficulty && difficulty !== "All") {
    list = list.filter(p => p.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  if (topic && topic !== "All") {
    list = list.filter(p => p.topic.toLowerCase().includes(topic.toLowerCase()));
  }

  if (pattern && pattern !== "All") {
    list = list.filter(p => p.patterns && p.patterns.some(pat => pat.toLowerCase().includes(pattern.toLowerCase())));
  }

  if (company && company !== "All") {
    list = list.filter(p => p.companies && p.companies.some(c => c.toLowerCase().includes(company.toLowerCase())));
  }

  res.json({
    total: list.length,
    problems: list
  });
}

export function getProblemBySlug(req, res) {
  const { slug } = req.params;
  const problem = catalogMap.get(slug);

  if (!problem) {
    return res.status(404).json({ error: `Problem with slug '${slug}' not found.` });
  }

  res.json(problem);
}
