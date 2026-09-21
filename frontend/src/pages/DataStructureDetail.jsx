import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import { ArrowLeft, Code2, Clock, CheckCircle } from "lucide-react";

export default function DataStructureDetail() {
  const { slug } = useParams();
  const [ds, setDs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/data-structures/${slug}`)
      .then(res => setDs(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Loading Data Structure...</div>;
  }

  if (!ds) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Data structure not found</h2>
        <Link to="/data-structures" className="text-xs text-blue-600 hover:underline">Back to Data Structures</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb & Navigation */}
      <div>
        <Link to="/data-structures" className="inline-flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 mb-2">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all Data Structures</span>
        </Link>
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-extrabold text-slate-900">{ds.name}</h1>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">{ds.category}</span>
        </div>
      </div>

      {/* Theory */}
      <div className="border border-slate-200 rounded p-6 bg-white space-y-3">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Theory & Memory Architecture</h2>
        <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-sans">
          {ds.theory}
        </div>
      </div>

      {/* Complexity Table */}
      <div className="border border-slate-200 rounded overflow-hidden bg-white">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800 uppercase tracking-wider">
          Operational Complexity Matrix
        </div>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-white text-slate-500 font-semibold">
              <th className="p-3">Operation</th>
              <th className="p-3">Time Complexity</th>
              <th className="p-3">Implementation Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ds.operationsTable.map((op, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-3 font-medium text-slate-900">{op.operation}</td>
                <td className="p-3 font-mono font-semibold text-blue-700">{op.complexity}</td>
                <td className="p-3 text-slate-600">{op.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Java Implementations Comparison */}
      {ds.javaComparison && (
        <div className="border border-slate-200 rounded p-6 bg-slate-50 space-y-4">
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-slate-700" />
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Java Implementation & Best Practices</h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-white p-3 rounded border border-slate-200 font-mono text-slate-800">
              {ds.javaComparison.primitive}
            </div>
            <div className="bg-white p-3 rounded border border-slate-200 font-mono text-slate-800">
              {ds.javaComparison.dynamic}
            </div>
            <div className="p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 leading-relaxed">
              <strong>When to use each: </strong>{ds.javaComparison.whenToUse}
            </div>
          </div>
        </div>
      )}

      {/* Related Patterns & Problems */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded border border-slate-200 bg-white space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Common Algorithmic Patterns</h3>
          <div className="flex flex-wrap gap-1.5">
            {ds.commonPatterns.map(p => (
              <Link
                key={p}
                to={`/patterns`}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
              >
                {p}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Essential Problems</h3>
          <div className="flex flex-wrap gap-1.5">
            {ds.topProblems.map(prob => {
              const slug = prob.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
              return (
                <Link
                  key={prob}
                  to={`/problems/${slug}`}
                  className="px-2.5 py-1 rounded border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-medium transition-colors"
                >
                  {prob}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
