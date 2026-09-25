import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import {
  ArrowLeft, Code2, Clock, CheckCircle, Eye, BookOpen,
  Layers, StepForward, RotateCcw, Cpu, ExternalLink, Search
} from "lucide-react";
import { getPatternSlug } from "../utils/slugs";

export default function DataStructureDetail() {
  const { slug } = useParams();
  const [ds, setDs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'visual' | 'methods' | 'complexity'
  const [methodSearch, setMethodSearch] = useState("");
  const [visualStep, setVisualStep] = useState(0);

  useEffect(() => {
    setLoading(true);
    API.get(`/data-structures/${slug}`)
      .then(res => {
        setDs(res.data);
        setVisualStep(0);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="max-w-5xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Loading Data Structure Details...</div>;
  }

  if (!ds) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Data structure not found</h2>
        <Link to="/data-structures" className="text-xs text-blue-600 hover:underline">Back to all Data Structures</Link>
      </div>
    );
  }

  const filteredMethods = (ds.methodsList || []).filter(m =>
    m.name.toLowerCase().includes(methodSearch.toLowerCase()) ||
    m.description.toLowerCase().includes(methodSearch.toLowerCase())
  );

  const visualWorkflow = ds.visualWorkflow;
  const currentStep = visualWorkflow?.steps?.[visualStep] || visualWorkflow?.steps?.[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb & Navigation */}
      <div>
        <Link to="/data-structures" className="inline-flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 mb-2">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all Data Structures</span>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{ds.name}</h1>
            <p className="text-xs text-slate-600 mt-0.5">{ds.category}</p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
              {ds.methodsList?.length || 0} Standard Methods
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
              {ds.operationsTable?.length || 0} Core Operations
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 border-b border-slate-200 pb-2 text-xs font-medium overflow-x-auto">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
            activeTab === "overview" ? "bg-slate-900 text-white font-bold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Overview & How It Works</span>
        </button>

        {visualWorkflow && (
          <button
            onClick={() => setActiveTab("visual")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
              activeTab === "visual" ? "bg-slate-900 text-white font-bold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Visual Explanation</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab("methods")}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
            activeTab === "methods" ? "bg-slate-900 text-white font-bold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Methods & API Reference ({ds.methodsList?.length || 0})</span>
        </button>

        <button
          onClick={() => setActiveTab("complexity")}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
            activeTab === "complexity" ? "bg-slate-900 text-white font-bold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Complexity & Best Practices</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & ARCHITECTURE */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Core Theory */}
          <div className="border border-slate-200 rounded p-6 bg-white space-y-3">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Concept & Core Theory</h2>
            <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-sans">
              {ds.theory}
            </div>
          </div>

          {/* Detailed In-Depth Architecture */}
          {ds.detailedDescription && (
            <div className="border border-slate-200 rounded p-6 bg-white space-y-3">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Deep Architectural Overview</h2>
              <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-sans">
                {ds.detailedDescription}
              </div>
            </div>
          )}

          {/* How It Works Under the Hood */}
          {ds.howItWorks && (
            <div className="border border-slate-200 rounded p-6 bg-slate-50 space-y-3">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>How It Works Under the Hood (Memory, Pointers & Hardware)</span>
              </div>
              <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-mono bg-white p-4 rounded border border-slate-200">
                {ds.howItWorks}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: VISUAL EXPLANATION */}
      {activeTab === "visual" && visualWorkflow && (
        <div className="border border-slate-200 rounded bg-white p-6 space-y-6">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-base font-bold text-slate-900">{visualWorkflow.title}</h2>
              <p className="text-xs text-slate-600 mt-0.5">{visualWorkflow.description}</p>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Stage {visualStep + 1} of {visualWorkflow.steps.length}
            </div>
          </div>

          {/* Explanation Banner */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800 font-mono">
            <strong>Stage: {currentStep.stage}</strong>
            <p className="mt-1 font-sans text-slate-600">{currentStep.explanation}</p>
          </div>

          {/* Visual Memory / Element Canvas */}
          <div className="p-8 border border-slate-200 rounded bg-slate-50/60 min-h-[160px] flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {currentStep.visualState?.map((item, idx) => {
                const isInserted = item.highlight === "inserted";
                const isShifted = item.highlight === "shifted";

                let boxClass = "bg-white border-slate-300 text-slate-800";
                if (isInserted) {
                  boxClass = "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-400";
                } else if (isShifted) {
                  boxClass = "bg-amber-50 border-amber-600 text-amber-900 font-bold ring-2 ring-amber-400";
                }

                return (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-400 font-mono mb-1">[{item.idx}]</span>
                    <div className={`min-w-16 h-14 px-3 flex items-center justify-center rounded border font-mono text-xs shadow-xs text-center transition-all ${boxClass}`}>
                      {item.val !== null ? String(item.val) : "empty"}
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium mt-1 max-w-[100px] text-center truncate">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Controls */}
          <div className="flex items-center space-x-2 pt-2">
            <button
              onClick={() => setVisualStep(prev => Math.min(visualWorkflow.steps.length - 1, prev + 1))}
              disabled={visualStep >= visualWorkflow.steps.length - 1}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50 transition-colors"
            >
              <StepForward className="w-3.5 h-3.5" />
              <span>Next Stage</span>
            </button>

            <button
              onClick={() => setVisualStep(prev => Math.max(0, prev - 1))}
              disabled={visualStep <= 0}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 disabled:opacity-50 transition-colors"
            >
              <span>Previous</span>
            </button>

            <button
              onClick={() => setVisualStep(0)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: COMPLETE METHODS LIST & API REFERENCE */}
      {activeTab === "methods" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">Standard Java Methods & Operations</h2>
              <p className="text-xs text-slate-600">
                Detailed method signatures, return types, time and space bounds, and usage guidelines.
              </p>
            </div>

            {/* Method Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Filter methods (e.g. add, get, poll)..."
                value={methodSearch}
                onChange={e => setMethodSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded border border-slate-300 text-xs focus:outline-hidden focus:border-blue-600"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredMethods.map((m, idx) => (
              <div key={idx} className="border border-slate-200 rounded p-4 bg-white space-y-2 hover:border-slate-300 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <code className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {m.name}
                    </code>
                    <span className="text-[11px] font-mono text-slate-500">
                      returns <strong className="text-slate-800">{m.returnType}</strong>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">Time: {m.timeComplexity}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">Space: {m.spaceComplexity}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>

                {m.example && (
                  <div className="p-2 rounded bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                    <code>{m.example}</code>
                  </div>
                )}
              </div>
            ))}

            {filteredMethods.length === 0 && (
              <div className="text-center py-8 text-xs text-slate-400">
                No methods found matching "{methodSearch}".
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: OPERATIONAL COMPLEXITY & BEST PRACTICES */}
      {activeTab === "complexity" && (
        <div className="space-y-6">
          {/* Complexity Table */}
          <div className="border border-slate-200 rounded overflow-hidden bg-white">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800 uppercase tracking-wider">
              Operational Complexity Matrix
            </div>
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-white text-slate-500 font-semibold">
                  <th className="p-3">Operation</th>
                  <th className="p-3">Time Complexity</th>
                  <th className="p-3">Implementation Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ds.operationsTable?.map((op, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-medium text-slate-900">{op.operation}</td>
                    <td className="p-3 font-mono font-semibold text-blue-700">{op.complexity}</td>
                    <td className="p-3 text-slate-600">{op.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Java Implementations Comparison */}
          {ds.javaComparison && (
            <div className="border border-slate-200 rounded p-6 bg-slate-50 space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-slate-700" />
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Java Implementation & Best Practices</h2>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-3 rounded border border-slate-200 font-mono text-slate-800">
                  {ds.javaComparison.primitive}
                </div>
                <div className="bg-white p-3 rounded border border-slate-200 font-mono text-slate-800">
                  {ds.javaComparison.dynamic}
                </div>
                <div className="p-3 rounded bg-blue-50 border border-blue-200 text-blue-900 leading-relaxed">
                  <strong>When to use each: </strong>{ds.javaComparison.whenToUse}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* COMMON PATTERNS & TOP PROBLEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
        <div className="p-4 rounded border border-slate-200 bg-white space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Common Algorithmic Patterns</h3>
          <div className="flex flex-wrap gap-1.5">
            {ds.commonPatterns?.map(p => (
              <Link
                key={p}
                to={`/patterns/${getPatternSlug(p)}`}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-transparent hover:border-blue-200 text-slate-800 text-xs font-medium transition-colors"
              >
                {p} →
              </Link>
            ))}
          </div>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Essential Problems</h3>
          <div className="flex flex-wrap gap-1.5">
            {ds.topProblems?.map(prob => {
              const pSlug = prob.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
              return (
                <Link
                  key={prob}
                  to={`/problems/${pSlug}`}
                  className="px-2.5 py-1 rounded border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-medium transition-colors"
                >
                  {prob}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
