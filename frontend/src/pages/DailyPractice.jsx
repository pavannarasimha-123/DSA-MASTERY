import React from "react";
import { Link } from "react-router-dom";
import DifficultyBadge from "../components/DifficultyBadge";
import { Calendar, ArrowRight, Target, CheckCircle2 } from "lucide-react";

export default function DailyPractice() {
  const dailyProblems = [
    {
      type: "Easy Warmup",
      title: "Valid Palindrome",
      slug: "valid-palindrome",
      difficulty: "Easy",
      pattern: "Two Pointers",
      topic: "Strings",
      estimatedMinutes: 15,
      reason: "Reinforce in-place two pointer pointer boundary convergence."
    },
    {
      type: "Medium Core",
      title: "Two Sum II - Input Array Is Sorted",
      slug: "two-sum-ii-input-array-is-sorted",
      difficulty: "Medium",
      pattern: "Two Pointers",
      topic: "Arrays",
      estimatedMinutes: 25,
      reason: "Pair complement optimization in sorted 1D array space."
    },
    {
      type: "Medium Pattern",
      title: "Longest Substring Without Repeating Characters",
      slug: "longest-substring-without-repeating-characters",
      difficulty: "Medium",
      pattern: "Sliding Window",
      topic: "Strings / Hashing",
      estimatedMinutes: 30,
      reason: "Dynamic window resizing and Hash Map index caching."
    },
    {
      type: "Hard Challenge",
      title: "Trapping Rain Water",
      slug: "trapping-rain-water",
      difficulty: "Hard",
      pattern: "Two Pointers / Monotonic Stack",
      topic: "Arrays",
      estimatedMinutes: 45,
      reason: "Elevation map boundary tracking with constant auxiliary space."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <Calendar className="w-4 h-4" />
          <span>Curated Daily Set • Spaced Repetition</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Today's DSA Practice Set</h1>
        <p className="text-sm text-slate-600 mt-1">
          Complete these 4 targeted problems to build consistency and reinforce core pattern mechanics.
        </p>
      </div>

      {/* Daily Set List */}
      <div className="space-y-4">
        {dailyProblems.map((p, idx) => (
          <div key={idx} className="p-5 rounded border border-slate-200 bg-white space-y-3 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {p.type}
                </span>
                <h2 className="text-base font-bold text-slate-900">{p.title}</h2>
                <DifficultyBadge difficulty={p.difficulty} />
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
                <span>~{p.estimatedMinutes} mins</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 pl-1">
              <strong className="text-slate-800">Learning objective: </strong>{p.reason}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-500">Pattern: <strong className="text-slate-700">{p.pattern}</strong></span>

              <Link
                to={`/problems/${p.slug}`}
                className="px-4 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-white font-medium flex items-center space-x-1 transition-colors"
              >
                <span>Solve Problem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
