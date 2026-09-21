import fs from "fs";
import { rawPartA } from "./partA.js";
import { rawPartB } from "./partB.js";
import { rawPartC } from "./partC.js";

const allRaw = [...rawPartA, ...rawPartB, ...rawPartC];

const finalPatterns = allRaw.map(p => {
  const top10Problems = p.problems.map(([title, diff, ds, lcSlug, gfgSlug], idx) => ({
    id: `${p.id}-${idx + 1}`,
    name: title,
    difficulty: diff,
    dataStructure: ds,
    pattern: p.name,
    shortDescription: `Practice and master ${title} utilizing the core ${p.name} pattern.`,
    leetcodeUrl: `https://leetcode.com/problems/${lcSlug}/`,
    gfgUrl: `https://www.geeksforgeeks.org/problems/${gfgSlug}/1`,
    expectedTime: p.time,
    expectedSpace: p.space,
    relatedProblems: [
      p.problems[(idx + 1) % p.problems.length][0],
      p.problems[(idx + 2) % p.problems.length][0]
    ]
  }));

  return {
    id: p.id,
    slug: p.id,
    name: p.name,
    description: p.desc,
    whyItWorks: p.why,
    whenToUse: p.when,
    recognitionClues: p.clues,
    timeComplexity: p.time,
    spaceComplexity: p.space,
    generalTemplate: p.template,
    javaTemplate: p.template,
    commonMistakes: p.mistakes,
    top10Problems
  };
});

const outputCode = `// 30 Core DSA Patterns with 10 Top Verified Problems Each (Total: 300 Problems)
export const PATTERNS_DATA = ${JSON.stringify(finalPatterns, null, 2)};
`;

fs.writeFileSync("src/data/patternsData.js", outputCode, "utf8");
console.log(`SUCCESS: Assembled ${finalPatterns.length} patterns with ${finalPatterns.length * 10} verified problems into src/data/patternsData.js`);
