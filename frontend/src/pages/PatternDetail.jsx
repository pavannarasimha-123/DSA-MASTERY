import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import DifficultyBadge from "../components/DifficultyBadge";
import {
  ArrowLeft, ExternalLink, Code2, AlertTriangle, CheckCircle,
  Lightbulb, ChevronDown, ChevronUp, Sparkles, BookOpen
} from "lucide-react";

export default function PatternDetail() {
  const { slug } = useParams();
  const [pattern, setPattern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedHints, setExpandedHints] = useState({});

  useEffect(() => {
    setLoading(true);
    API.get(`/patterns/${slug}`)
      .then(res => setPattern(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  function toggleHint(idx) {
    setExpandedHints(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  }

  if (loading) {
    return <div className="max-w-5xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Loading Pattern Details...</div>;
  }

  if (!pattern) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Pattern not found</h2>
        <Link to="/patterns" className="text-xs text-blue-600 hover:underline">Back to Pattern Library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header */}
      <div>
        <Link to="/patterns" className="inline-flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 mb-2">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to 30 Patterns Library</span>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{pattern.name} Pattern</h1>
            <p className="text-xs text-slate-600 mt-0.5">{pattern.category || "Algorithmic Pattern"}</p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
              Avg Time: {pattern.timeComplexity}
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
              Space: {pattern.spaceComplexity}
            </span>
          </div>
        </div>
      </div>

      {/* Pattern Explanation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded border border-slate-200 bg-white space-y-2">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">What is this pattern?</h2>
          <p className="text-xs text-slate-600 leading-relaxed">{pattern.description}</p>
        </div>

        <div className="p-5 rounded border border-slate-200 bg-white space-y-2">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Why does it work?</h2>
          <p className="text-xs text-slate-600 leading-relaxed">{pattern.whyItWorks}</p>
        </div>

        <div className="p-5 rounded border border-slate-200 bg-white space-y-2">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">When should I recognize it?</h2>
          <p className="text-xs text-slate-600 leading-relaxed">{pattern.whenToUse}</p>
        </div>

        <div className="p-5 rounded border border-slate-200 bg-white space-y-2">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Recognition Clues</h2>
          <ul className="space-y-1 text-xs text-slate-600">
            {pattern.recognitionClues?.map((clue, idx) => (
              <li key={idx} className="flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{clue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Standard Java Template */}
      <div className="border border-slate-200 rounded overflow-hidden bg-white">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <Code2 className="w-4 h-4 text-slate-700" />
            <span>Standard Java Template & Blueprint</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Idiomatic Java Implementation</span>
        </div>
        <pre className="p-4 text-xs font-mono bg-slate-900 text-slate-100 overflow-x-auto leading-relaxed">
          <code>{pattern.javaTemplate}</code>
        </pre>
      </div>

      {/* Common Mistakes */}
      {pattern.commonMistakes && (
        <div className="p-4 rounded border border-amber-200 bg-amber-50/50 space-y-2">
          <div className="flex items-center space-x-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Common Pitfalls & Traps to Avoid</span>
          </div>
          <ul className="space-y-1 text-xs text-slate-700 pl-6 list-disc">
            {pattern.commonMistakes.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TOP 10 PROBLEMS SECTION WITH PATTERN-SPECIFIC HINTS */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Top 10 Problems for {pattern.name}</h2>
            <p className="text-xs text-slate-600">
              Verified problem sets with step-by-step pattern hints, complexity bounds, and direct editor access.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-mono">
            {pattern.top10Problems?.length || 10} Problems
          </span>
        </div>

        <div className="space-y-3">
          {pattern.top10Problems?.map((prob, idx) => {
            const probSlug = prob.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            const isHintOpen = !!expandedHints[idx];

            return (
              <div
                key={prob.id || idx}
                className="p-4 rounded border border-slate-200 bg-white space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-slate-400 w-5">#{idx + 1}</span>
                    <h3 className="text-sm font-bold text-slate-900">{prob.name}</h3>
                    <DifficultyBadge difficulty={prob.difficulty} />
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {prob.dataStructure}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                    <span>Time: {prob.expectedTime}</span>
                    <span>•</span>
                    <span>Space: {prob.expectedSpace}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 pl-8 leading-relaxed">{prob.shortDescription}</p>

                {/* HINTS & PATTERN STRATEGY TOGGLE */}
                <div className="pl-8">
                  <button
                    onClick={() => toggleHint(idx)}
                    className="inline-flex items-center space-x-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isHintOpen ? "Hide Pattern Hints & Strategy" : "Show Pattern Hints & Solving Strategy"}</span>
                    {isHintOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isHintOpen && (
                    <div className="mt-2.5 p-3.5 rounded bg-slate-50 border border-slate-200 text-xs space-y-2.5">
                      <div className="flex items-center space-x-1.5 font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>Pattern Solving Blueprint for {prob.name}</span>
                      </div>

                      <div className="space-y-1.5 text-slate-700">
                        <div>
                          <strong className="text-slate-900">Pattern Intuition: </strong>
                          Apply {pattern.name} to avoid brute-force scanning. The problem structure provides monotonic or interval properties that guarantee pruning.
                        </div>
                        <div>
                          <strong className="text-slate-900">Data Structure Setup: </strong>
                          Utilize an idiomatic Java structure ({prob.dataStructure}) to maintain state in {prob.expectedSpace} space.
                        </div>
                        <div>
                          <strong className="text-slate-900">Core Invariant: </strong>
                          At every iteration, verify the target condition. If invariant is violated, adjust boundaries or state transitions immediately before continuing.
                        </div>
                        <div>
                          <strong className="text-slate-900">Target Efficiency: </strong>
                          Must execute strictly in <span className="font-mono font-semibold text-blue-700">{prob.expectedTime}</span> time and <span className="font-mono font-semibold text-blue-700">{prob.expectedSpace}</span> space.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons & Links */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 border-t border-slate-100 pl-8 text-xs">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <span className="text-[11px]">Related:</span>
                    {prob.relatedProblems?.map((rel, rIdx) => (
                      <span key={rIdx} className="text-[11px] px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                        {rel}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href={prob.leetcodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium inline-flex items-center space-x-1"
                    >
                      <span>LeetCode</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    <a
                      href={prob.gfgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium inline-flex items-center space-x-1"
                    >
                      <span>GFG</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    <Link
                      to={`/problems/${probSlug}`}
                      className="px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white font-medium"
                    >
                      Practice in Editor
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
