import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../services/api";
import { Flame, CheckCircle, TrendingUp, AlertCircle, ArrowRight, Award, Target, Sparkles, UserPlus } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const [allProblems, setAllProblems] = useState([]);

  useEffect(() => {
    API.get("/problems")
      .then(res => setAllProblems(res.data.problems || []))
      .catch(err => console.error(err));
  }, []);

  const solvedSlugs = new Set(user?.solvedProblems || []);
  const solvedCount = solvedSlugs.size;

  // Calculate actual difficulty breakdown
  let easySolved = 0, mediumSolved = 0, hardSolved = 0;
  for (const prob of allProblems) {
    if (solvedSlugs.has(prob.slug)) {
      if (prob.difficulty === "Easy") easySolved++;
      else if (prob.difficulty === "Medium") mediumSolved++;
      else if (prob.difficulty === "Hard") hardSolved++;
    }
  }

  const totalProblems = allProblems.length || 304;
  const isBrandNew = solvedCount === 0;

  // Build pattern mastery dynamically based on user's recorded mastery map
  const patternMasteryMap = user?.patternMastery || {};
  const corePatterns = [
    "two-pointers", "sliding-window", "binary-search",
    "fast-and-slow-pointers", "prefix-sum", "monotonic-stack", "dynamic-programming-1d"
  ];

  const formatPatternName = (slug) => {
    return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-slate-900">
              {user ? `${user.name}'s Learning Dashboard` : "Learning Dashboard"}
            </h1>
            {isBrandNew && (
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-semibold border border-blue-200">
                Fresh Account
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500">
            {isBrandNew
              ? "Welcome to your personal DSA workspace. Start solving below to build your streak and analytics."
              : "Track solved problems, pattern competencies, and weak areas."}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 px-3 py-1.5 rounded border border-amber-200 bg-amber-50 text-amber-900 text-xs font-semibold">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>{user?.streak || 1}-Day Streak</span>
          </div>
          {!user && (
            <Link
              to="/login"
              className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors"
            >
              Sign In to Save
            </Link>
          )}
        </div>
      </div>

      {/* Fresh User Welcome Banner */}
      {isBrandNew && (
        <div className="p-4 rounded border border-slate-200 bg-slate-50 flex items-start space-x-3 text-xs">
          <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-900 block font-semibold">Brand New Progress Record</strong>
            <p className="text-slate-600 leading-relaxed">
              Your profile has been created with a completely fresh slate. As you execute Java solutions and pass test cases, your progress metrics, pattern mastery percentages, and strong/weak area diagnostics will automatically populate.
            </p>
          </div>
        </div>
      )}

      {/* Progress Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded border border-slate-200 bg-white">
          <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider block">Total Solved</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {solvedCount} <span className="text-xs text-slate-400 font-normal">/ {totalProblems}</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded mt-2 overflow-hidden">
            <div className="bg-slate-900 h-1.5 rounded" style={{ width: `${(solvedCount / totalProblems) * 100}%` }}></div>
          </div>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white">
          <span className="text-[11px] text-emerald-600 font-medium uppercase tracking-wider block">Easy Solved</span>
          <div className="text-2xl font-bold text-emerald-700 mt-1">{easySolved}</div>
          <span className="text-xs text-slate-500">Fundamental mastery</span>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white">
          <span className="text-[11px] text-amber-600 font-medium uppercase tracking-wider block">Medium Solved</span>
          <div className="text-2xl font-bold text-amber-700 mt-1">{mediumSolved}</div>
          <span className="text-xs text-slate-500">Standard interview level</span>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white">
          <span className="text-[11px] text-rose-600 font-medium uppercase tracking-wider block">Hard Solved</span>
          <div className="text-2xl font-bold text-rose-700 mt-1">{hardSolved}</div>
          <span className="text-xs text-slate-500">Advanced competitive</span>
        </div>
      </div>

      {/* Recommended Next Problem */}
      <div className="p-5 rounded border border-blue-200 bg-blue-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-blue-700 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Recommended First Problem</span>
          </div>
          <h2 className="text-base font-bold text-slate-900">Two Sum (One-Pass HashMap)</h2>
          <p className="text-xs text-slate-600">
            Start with the canonical hash map complement search to calibrate the Java editor and test runner.
          </p>
        </div>
        <Link
          to="/problems/two-sum"
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors shadow-sm flex items-center space-x-1.5 flex-shrink-0"
        >
          <span>Solve Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Two Column Layout: Pattern Mastery & Diagnostics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pattern Mastery */}
        <div className="p-5 rounded border border-slate-200 bg-white space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h2 className="font-bold text-sm text-slate-900">Pattern Mastery</h2>
            <Link to="/patterns" className="text-xs text-blue-600 hover:underline">All 30 Patterns</Link>
          </div>

          <div className="space-y-3">
            {corePatterns.map((slug) => {
              const percent = patternMasteryMap[slug] || (isBrandNew ? 0 : 20);
              return (
                <div key={slug} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-slate-700">{formatPatternName(slug)}</span>
                    <span className="font-mono text-slate-500">{percent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded overflow-hidden">
                    <div className="bg-blue-600 h-1.5 rounded" style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weak vs Strong Areas */}
        <div className="space-y-4">
          <div className="p-4 rounded border border-slate-200 bg-white space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-emerald-700">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Strong Areas</span>
            </div>
            {isBrandNew ? (
              <p className="text-xs text-slate-500 italic">
                Solve problems in the workspace to automatically calibrate your strong areas.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2 pt-1">
                {(user?.strongAreas?.length ? user.strongAreas : ["Two Pointers", "Hashing / Frequency Map"]).map((area) => (
                  <span key={area} className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                    {area}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 rounded border border-slate-200 bg-white space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-rose-700">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Focus Needed</span>
            </div>
            {isBrandNew ? (
              <p className="text-xs text-slate-500 italic">
                Anti-patterns and timeouts will be flagged here as you attempt problems.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2 pt-1">
                {(user?.weakAreas?.length ? user.weakAreas : ["Dynamic Programming (2D)", "Monotonic Queue"]).map((area) => (
                  <span key={area} className="px-2.5 py-1 rounded bg-rose-50 text-rose-800 border border-rose-200 text-xs font-medium">
                    {area}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-4 rounded border border-slate-200 bg-slate-50 space-y-2">
            <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/daily-practice" className="p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium text-center">
                Daily Set
              </Link>
              <Link to="/pattern-advisor" className="p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium text-center">
                Pattern Advisor
              </Link>
              <Link to="/java-collections" className="p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium text-center">
                Collections Table
              </Link>
              <Link to="/interview-mode" className="p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium text-center">
                Mock Interview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
