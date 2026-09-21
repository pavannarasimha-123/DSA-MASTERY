import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { Search, ArrowRight, BookOpen, Layers } from "lucide-react";

export default function PatternLibrary() {
  const [patterns, setPatterns] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/patterns")
      .then(res => setPatterns(res.data.patterns || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = patterns.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase()) ||
    p.recognitionClues.some(c => c.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pattern Library (30 Core Patterns)</h1>
          <p className="text-sm text-slate-600 mt-1">
            Master the mental models behind 300+ standard interview problems.
          </p>
        </div>

        {/* Minimal Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search patterns or clues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-slate-500 bg-white"
          />
        </div>
      </div>

      {loading ? (
        <div className="py-12 text-center text-slate-500 text-sm">Loading 30 algorithmic patterns...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="p-4 rounded border border-slate-200 bg-white space-y-3 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono">
                  <span>{p.timeComplexity}</span>
                  <span className="font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">10 Problems</span>
                </div>
                <h2 className="text-sm font-bold text-slate-900 leading-snug">{p.name}</h2>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{p.description}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex flex-wrap gap-1">
                  {p.recognitionClues.slice(0, 2).map((clue, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                      {clue}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/patterns/${p.slug}`}
                  className="w-full py-1.5 px-3 rounded border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-medium text-center flex items-center justify-center space-x-1 transition-colors"
                >
                  <span>Template & 10 Problems</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
