import React, { useState } from "react";
import API from "../services/api";
import { Sparkles, ArrowRight, HelpCircle, CheckCircle, Code2, AlertCircle, Info } from "lucide-react";

export default function PatternAdvisor() {
  const [description, setDescription] = useState("");
  const [constraints, setConstraints] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const samplePrompts = [
    {
      label: "Longest Unique Substring",
      desc: "Given a string s, find the length of the longest substring without repeating characters.",
      cons: "s.length <= 5 * 10^4"
    },
    {
      label: "Kth Largest Element",
      desc: "Find the kth largest element in an unsorted integer array without sorting the entire array.",
      cons: "1 <= k <= nums.length <= 10^5"
    },
    {
      label: "Course Prerequisites",
      desc: "There are numCourses courses you have to take. Some courses may have prerequisites [a, b]. Return the ordering of courses you should take.",
      cons: "numCourses <= 2000"
    },
    {
      label: "Minimum Ship Capacity",
      desc: "A conveyor belt has packages that must be shipped within D days. Return least weight capacity of ship that will result in all packages being shipped.",
      cons: "1 <= days <= weights.length <= 5 * 10^4"
    }
  ];

  async function handleAnalyze(e) {
    e?.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    try {
      const res = await API.post("/pattern-advisor", { description, constraints });
      setResults(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function loadSample(sample) {
    setDescription(sample.desc);
    setConstraints(sample.cons);
    setResults(null);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 space-y-1">
        <div className="inline-flex items-center space-x-1.5 text-blue-600 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intelligent Algorithmic Heuristic</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Pattern Recognition Advisor</h1>
        <p className="text-sm text-slate-600">
          "Which pattern should I use?" — Enter a problem description or interview question to analyze structural signals and constraints.
        </p>
      </div>

      {/* Preset sample buttons */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Try a Sample Problem Scenario:</span>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((s, idx) => (
            <button
              key={idx}
              onClick={() => loadSample(s)}
              className="px-3 py-1.5 rounded border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-medium transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleAnalyze} className="border border-slate-200 rounded p-5 bg-white space-y-4 shadow-sm">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            Problem Description / Question Prompt
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. Find the contiguous subarray which has the largest sum and return its sum..."
            className="w-full p-3 rounded border border-slate-300 focus:outline-none focus:border-slate-500 text-xs text-slate-900 leading-relaxed font-sans"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            Constraints (Optional but highly recommended)
          </label>
          <input
            type="text"
            value={constraints}
            onChange={(e) => setConstraints(e.target.value)}
            placeholder="e.g. 1 <= nums.length <= 10^5, -10^4 <= nums[i] <= 10^4"
            className="w-full p-2.5 rounded border border-slate-300 focus:outline-none focus:border-slate-500 text-xs text-slate-900 font-mono"
          />
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="submit"
            disabled={loading || !description.trim()}
            className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors disabled:opacity-50 flex items-center space-x-1.5"
          >
            <span>{loading ? "Analyzing Signals..." : "Identify Likely Patterns"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Advisor Results */}
      {results && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Analysis & Recommendation</h2>
            <span className="text-xs text-slate-500">Heuristic Classification</span>
          </div>

          <div className="space-y-4">
            {results.patterns?.map((rec, idx) => (
              <div key={idx} className="p-5 rounded border border-slate-200 bg-white space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono font-bold text-xs">
                      Candidate #{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">Likely Pattern: {rec.pattern}</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    Confidence: {rec.confidence}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Why this pattern applies:</strong>
                    <p className="text-slate-700 leading-relaxed">{rec.rationale}</p>
                  </div>

                  {rec.recommendedJavaCollections?.length > 0 && (
                    <div className="pt-2">
                      <strong className="text-slate-900 block mb-1">Recommended Java Collections / Types:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {rec.recommendedJavaCollections.map((col, cIdx) => (
                          <span key={cIdx} className="px-2 py-1 rounded bg-slate-100 font-mono text-slate-800 text-[11px]">
                            {col}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {rec.exampleProblem && (
                    <div className="pt-1 text-slate-500">
                      <strong>Classic Interview Problems: </strong>{rec.exampleProblem}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {results.notes && (
              <div className="p-3 rounded border border-slate-200 bg-slate-50 text-slate-600 text-xs flex items-start space-x-2">
                <Info className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p>{results.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
