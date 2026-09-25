import { DATA_STRUCTURES } from "../data/dataStructuresData.js";

export function getDataStructures(req, res) {
  res.json({
    total: DATA_STRUCTURES.length,
    dataStructures: DATA_STRUCTURES.map(ds => ({
      id: ds.id,
      slug: ds.slug,
      name: ds.name,
      category: ds.category,
      theorySummary: ds.theory.slice(0, 180) + "...",
      operationsCount: ds.operationsTable.length,
      methodsCount: ds.methodsList?.length || 0,
      commonPatterns: ds.commonPatterns,
      topProblems: ds.topProblems
    }))
  });
}

export function getDataStructureBySlug(req, res) {
  const { slug } = req.params;
  const ds = DATA_STRUCTURES.find(d => d.slug === slug || d.id === slug);

  if (!ds) {
    return res.status(404).json({ error: `Data structure '${slug}' not found.` });
  }

  res.json(ds);
}
