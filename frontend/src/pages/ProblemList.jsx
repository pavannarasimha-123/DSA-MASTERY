import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import DifficultyBadge from "../components/DifficultyBadge";
import { Search, Filter, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function ProblemList() {
  const { user } = useAuth();
  const [problems, setProblems] = useState([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProblems();
  }, [difficulty, topic]);

  function fetchProblems() {
    setLoading(true);
    API.get("/problems", {
      params: {
        difficulty: difficulty !== "All" ? difficulty : undefined,
        topic: topic !== "All" ? topic : undefined,
        search: search || undefined
      }
    })
      .then(res => setProblems(res.data.problems || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    fetchProblems();
  }

  const solvedSet = new Set(user?.solvedProblems || []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Practice Problems</h1>
          <p className="text-sm text-slate-600 mt-1">
            Carefully curated problem catalog indexed by algorithmic pattern, complexity, and verified references.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Showing <span className="font-semibold text-slate-900">{problems.length}</span> problems
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded border border-slate-200 text-xs">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2" />
          <input
            type="text"
            placeholder="Search problem title or pattern..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded border border-slate-300 focus:outline-none focus:border-slate-500 bg-white"
          />
        </form>

        {/* Filters */}
        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto">
          <div className="flex items-center space-x-1">
            <span className="text-slate-500 font-medium">Difficulty:</span>
            {["All", "Easy", "Medium", "Hard"].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  difficulty === d
                    ? "bg-slate-900 text-white font-semibold"
                    : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-1 pl-2 border-l border-slate-200">
            <span className="text-slate-500 font-medium">Topic:</span>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="px-2 py-1 rounded border border-slate-300 bg-white text-slate-700 focus:outline-none"
            >
              <option value="All">All Topics</option>
              <option value="Array">Array</option>
              <option value="String">String</option>
              <option value="Linked List">Linked List</option>
              <option value="Stack">Stack</option>
              <option value="Queue">Queue / Deque</option>
              <option value="Tree">Tree</option>
              <option value="Heap">Heap / PriorityQueue</option>
              <option value="Graph">Graph</option>
              <option value="DP">Dynamic Programming</option>
            </select>
          </div>
        </div>
      </div>

      {/* Problem Table / List */}
      {loading ? (
        <div className="py-12 text-center text-slate-500 text-sm">Loading problem catalog...</div>
      ) : (
        <div className="border border-slate-200 rounded overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-semibold">
                  <th className="p-3 w-10">Status</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Difficulty</th>
                  <th className="p-3">Pattern</th>
                  <th className="p-3">Data Structure</th>
                  <th className="p-3">External References</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {problems.map((prob) => {
                  const isSolved = solvedSet.has(prob.slug);
                  return (
                    <tr key={prob.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        {isSolved ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-slate-300"></div>
                        )}
                      </td>

                      <td className="p-3 font-semibold text-slate-900">
                        <Link to={`/problems/${prob.slug}`} className="hover:text-blue-600 transition-colors">
                          {prob.title}
                        </Link>
                      </td>

                      <td className="p-3">
                        <DifficultyBadge difficulty={prob.difficulty} />
                      </td>

                      <td className="p-3 text-slate-600">
                        {prob.patterns?.[0] || "General DSA"}
                      </td>

                      <td className="p-3 text-slate-600">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                          {prob.topic || prob.dataStructures?.[0]}
                        </span>
                      </td>

                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          {prob.leetcodeUrl && (
                            <a
                              href={prob.leetcodeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] text-slate-500 hover:text-slate-900 inline-flex items-center space-x-0.5"
                            >
                              <span>LeetCode</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          )}
                          {prob.gfgUrl && (
                            <a
                              href={prob.gfgUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] text-slate-500 hover:text-slate-900 inline-flex items-center space-x-0.5"
                            >
                              <span>GFG</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          )}
                        </div>
                      </td>

                      <td className="p-3 text-right">
                        <Link
                          to={`/problems/${prob.slug}`}
                          className="px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white font-medium text-[11px] inline-flex items-center space-x-1 transition-colors"
                        >
                          <span>Solve</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
