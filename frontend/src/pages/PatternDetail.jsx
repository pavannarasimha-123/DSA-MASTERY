import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import DifficultyBadge from "../components/DifficultyBadge";
import { ArrowLeft, ExternalLink, Code2, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function PatternDetail() {
  const { slug } = useParams();
  const [pattern, setPattern] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/patterns/${slug}`)
      .then(res => setPattern(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

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
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{pattern.name} Pattern</h1>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="px-2 py-1 rounded bg-slate-100 text-slate-700">Time: {pattern.timeComplexity}</span>
            <span className="px-2 py-1 rounded bg-slate-100 text-slate-700">Space: {pattern.spaceComplexity}</span>
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
            {pattern.recognitionClues.map((clue, idx) => (
              <li key={idx} className="flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{clue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Java Template */}
      <div className="border border-slate-200 rounded overflow-hidden bg-white">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <Code2 className="w-4 h-4 text-slate-700" />
            <span>Standard Java Template</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">O(n) Java Reference</span>
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
            <span>Common Pitfalls & Mistakes in Interviews</span>
          </div>
          <ul className="space-y-1 text-xs text-slate-700 pl-6 list-disc">
            {pattern.commonMistakes.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TOP 10 PROBLEMS SECTION */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Top 10 Problems for {pattern.name}</h2>
            <p className="text-xs text-slate-600">
              Verified problem sets with exact time/space targets, GFG & LeetCode links.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-mono">
            {pattern.top10Problems?.length || 10} Problems
          </span>
        </div>

        <div className="space-y-3">
          {pattern.top10Problems?.map((prob, idx) => {
            const probSlug = prob.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
