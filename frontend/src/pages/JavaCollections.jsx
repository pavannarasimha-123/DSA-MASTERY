import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Info, Code2, Check, X } from "lucide-react";

export default function JavaCollections() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    API.get("/collections")
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Loading Java Collections Matrix...</div>;
  }

  const tableData = data?.table || [];
  const footnotes = data?.footnotes || [];
  const categories = data?.categories || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Java Collections Framework Master Guide</h1>
        <p className="text-sm text-slate-600 mt-1">
          Operational complexity table, amortized guarantees, internal backing structures, and interview recommendations.
        </p>
      </div>

      {/* Interactive Complexity Table */}
      <div className="border border-slate-200 rounded overflow-hidden bg-white shadow-sm">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <span className="font-bold text-xs text-slate-800 uppercase tracking-wider">
            Operational Complexity Comparison Table
          </span>
          <span className="text-xs text-slate-500 font-mono">JDK 21+ Specs</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-white text-slate-500 font-semibold">
                <th className="p-3">Collection</th>
                <th className="p-3">Add</th>
                <th className="p-3">Remove</th>
                <th className="p-3">Search</th>
                <th className="p-3">Access</th>
                <th className="p-3">Ordered?</th>
                <th className="p-3">Duplicates?</th>
                <th className="p-3">Null Allowed?</th>
                <th className="p-3">Backing Structure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {tableData.map((row) => (
                <tr key={row.name} className="hover:bg-slate-50 transition-colors font-sans">
                  <td className="p-3 font-bold text-slate-900 font-mono">{row.name}</td>
                  <td className="p-3 font-mono font-semibold text-blue-700">{row.add}</td>
                  <td className="p-3 font-mono text-slate-700">{row.remove}</td>
                  <td className="p-3 font-mono text-slate-700">{row.search}</td>
                  <td className="p-3 font-mono text-slate-700">{row.access}</td>
                  <td className="p-3 text-slate-600 text-[11px]">{row.ordered}</td>
                  <td className="p-3">
                    {row.allowsDuplicates ? (
                      <span className="text-emerald-700 font-semibold text-[11px]">Yes</span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">No</span>
                    )}
                  </td>
                  <td className="p-3">
                    {row.allowsNull ? (
                      <span className="text-emerald-700 font-semibold text-[11px]">Yes</span>
                    ) : (
                      <span className="text-rose-600 text-[11px]">No</span>
                    )}
                  </td>
                  <td className="p-3 text-slate-500 text-[11px] font-mono">{row.backingStructure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footnotes Alert */}
      <div className="p-4 rounded border border-slate-200 bg-slate-50 space-y-2 text-xs">
        <div className="flex items-center space-x-1.5 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
          <Info className="w-3.5 h-3.5 text-blue-600" />
          <span>Understanding Asymptotic Notation in Java Collections</span>
        </div>
        <div className="space-y-1.5 text-slate-600">
          {footnotes.map((fn, idx) => (
            <p key={idx} className="leading-relaxed">
              <strong className="font-mono text-slate-900">{fn.symbol} </strong>
              {fn.explanation}
            </p>
          ))}
        </div>
      </div>

      {/* Deep Dive Category Breakdown */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-900">Collection Categories & Best Practices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <div key={cat.type} className="border border-slate-200 rounded p-5 bg-white space-y-4">
              <div className="border-b border-slate-100 pb-2">
                <span className="font-bold text-sm text-slate-900 block">{cat.type} Collections</span>
                <p className="text-xs text-slate-500">{cat.description}</p>
              </div>

              <div className="space-y-4 text-xs">
                {cat.items.map((item) => (
                  <div key={item.name} className="p-3 rounded border border-slate-100 bg-slate-50 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 font-mono">{item.name}</span>
                      <span className="text-[11px] text-slate-500">{item.exampleProblem}</span>
                    </div>

                    <pre className="p-2 rounded bg-slate-900 text-slate-100 font-mono text-[10px] overflow-x-auto">
                      <code>{item.syntax}</code>
                    </pre>

                    <div className="space-y-1 text-slate-600 text-[11px]">
                      <div><strong className="text-slate-800">Best for: </strong>{item.bestFor}</div>
                      <div><strong className="text-rose-800">Avoid when: </strong>{item.avoidWhen}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
