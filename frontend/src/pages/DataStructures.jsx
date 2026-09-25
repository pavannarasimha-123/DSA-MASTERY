import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { ArrowRight, Layers, Database, Code2 } from "lucide-react";

export default function DataStructures() {
  const [dataStructures, setDataStructures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/data-structures")
      .then(res => setDataStructures(res.data.dataStructures || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="max-w-5xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Loading Data Structures...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Data Structures Curriculum</h1>
        <p className="text-sm text-slate-600 mt-1">
          Complete theory, internal memory architecture, operational complexities, standard Java methods, and visual workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dataStructures.map(ds => (
          <div key={ds.id} className="p-5 rounded border border-slate-200 bg-white space-y-3 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{ds.category}</span>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                  {ds.methodsCount > 0 && <span>{ds.methodsCount} Methods</span>}
                  <span>•</span>
                  <span>{ds.operationsCount} Operations</span>
                </div>
              </div>
              <h2 className="text-base font-bold text-slate-900">{ds.name}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{ds.theorySummary}</p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {ds.commonPatterns?.map(p => (
                  <span key={p} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                    {p}
                  </span>
                ))}
              </div>

              <Link
                to={`/data-structures/${ds.slug}`}
                className="w-full py-1.5 px-3 rounded border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-medium text-center flex items-center justify-center space-x-1 transition-colors"
              >
                <span>Study {ds.name} Architecture & Methods</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
