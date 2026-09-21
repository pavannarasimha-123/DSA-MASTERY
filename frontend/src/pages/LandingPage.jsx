import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Terminal, Layers, Cpu, Code2, Sparkles, BookOpen } from "lucide-react";

export default function LandingPage() {
  const learningHighlights = [
    {
      title: "Algorithmic Patterns",
      desc: "Master 30 battle-tested patterns (Two Pointers, Sliding Window, Monotonic Stack, etc.) with 10 handpicked problems each."
    },
    {
      title: "Java Collections Mastery",
      desc: "Deep dive into ArrayList, HashMap, PriorityQueue, and ArrayDeque with strict time/space complexity analysis."
    },
    {
      title: "Secure Sandboxed Execution",
      desc: "Write and execute real Java code directly in your browser with strict isolation and instant multi-test evaluation."
    },
    {
      title: "Automated Code Analysis",
      desc: "Automatic detection of nested loops, collection anti-patterns (e.g. ArrayList.contains), and optimization suggestions."
    }
  ];

  const levels = [
    { num: "01", title: "Fundamentals & Big-O", topics: "Complexity Analysis, Memory Models, Recursion Trees" },
    { num: "02", title: "Linear Structures", topics: "Arrays, Strings, Linked Lists, Stacks, Deques" },
    { num: "03", title: "Hashing & Trees", topics: "Hash Tables, Binary Trees, BSTs, Heaps / PriorityQueues" },
    { num: "04", title: "Graphs & Advanced DP", topics: "BFS, DFS, Dijkstra, Kahn's Algo, 1D & 2D Dynamic Programming" }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 pt-10 sm:pt-14 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-700 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Production-grade Java DSA platform for interview preparation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Master DSA in Java — Understand. Practice. Optimize. Get Interview Ready.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The comprehensive platform designed for students and engineers preparing for FAANG, software engineering interviews, LeetCode, and competitive programming. Learn patterns, not memorization.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/roadmap"
            className="px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm inline-flex items-center space-x-1.5"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/problems"
            className="px-5 py-2.5 rounded border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-medium text-sm transition-colors"
          >
            Practice Problems
          </Link>

          <Link
            to="/patterns"
            className="px-5 py-2.5 rounded border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-medium text-sm transition-colors"
          >
            Explore 30 Patterns
          </Link>
        </div>
      </section>

      {/* Code Editor & Execution Architecture Preview */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="border border-slate-200 rounded p-6 bg-slate-50 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-slate-700" />
              <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                Integrated Java Sandbox & Analysis Engine
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Java 24 • Monitored Sandbox</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">1. Sandboxed Execution</span>
              <p className="text-slate-600">
                Isolated runner with memory caps (128MB), strict 4-second timeouts, and AST-level safety filters.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">2. Complexity Estimation</span>
              <p className="text-slate-600">
                Detects nested loops, recursive trees, and estimates both time and space Big-O complexities.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">3. Collection Advisor</span>
              <p className="text-slate-600">
                Identifies bottlenecks like ArrayList.contains() and suggests optimal Java Collections like HashSet or ArrayDeque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">What You Will Learn</h2>
          <p className="text-sm text-slate-600">Deep intuition over blind memorization.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {learningHighlights.map((item, idx) => (
            <div key={idx} className="p-4 rounded border border-slate-200 bg-white space-y-1.5">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <h3 className="font-semibold text-sm text-slate-900">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Level Roadmap Preview */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="flex justify-between items-end border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Curriculum Roadmap</h2>
            <p className="text-sm text-slate-600">A structured path from absolute fundamentals to advanced patterns.</p>
          </div>
          <Link to="/roadmap" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center space-x-1">
            <span>View Full Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {levels.map((lvl) => (
            <div key={lvl.num} className="p-4 rounded border border-slate-200 bg-white space-y-2">
              <span className="text-xs font-bold text-slate-400 font-mono">LEVEL {lvl.num}</span>
              <h3 className="font-semibold text-sm text-slate-900">{lvl.title}</h3>
              <p className="text-xs text-slate-600">{lvl.topics}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center py-8 border-t border-slate-200 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Ready to accelerate your Java interview prep?</h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Access all 30 algorithmic patterns, top 10 verified problems per pattern, complete collections matrix, and live code sandbox.
        </p>
        <div>
          <Link
            to="/problems"
            className="px-6 py-2.5 rounded bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors inline-block"
          >
            Start Solving Problems
          </Link>
        </div>
      </section>
    </div>
  );
}
