import { PATTERNS_DATA } from "../data/patternsData.js";

export function getPatterns(req, res) {
  const { search } = req.query;
  let results = PATTERNS_DATA;

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.recognitionClues.some(c => c.toLowerCase().includes(q))
    );
  }

  res.json({
    total: results.length,
    patterns: results.map(p => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      description: p.description,
      timeComplexity: p.timeComplexity,
      spaceComplexity: p.spaceComplexity,
      problemCount: p.top10Problems ? p.top10Problems.length : 0,
      recognitionClues: p.recognitionClues
    }))
  });
}

export function getPatternBySlug(req, res) {
  const { slug } = req.params;
  const pattern = PATTERNS_DATA.find(p => p.slug === slug || p.id === slug);

  if (!pattern) {
    return res.status(404).json({ error: `Pattern '${slug}' not found.` });
  }

  res.json(pattern);
}
