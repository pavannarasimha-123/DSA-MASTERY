import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import MonacoEditorWrapper from "../components/MonacoEditorWrapper";
import DifficultyBadge from "../components/DifficultyBadge";
import { useAuth } from "../context/AuthContext";
import {
  ExternalLink, CheckCircle2, XCircle, AlertTriangle, Lightbulb,
  ArrowRight, Sparkles, Code2, Clock, Cpu, Check, Layers
} from "lucide-react";

export default function ProblemDetail() {
  const { slug } = useParams();
  const { markProblemSolved } = useAuth();

  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  // Execution state
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("tests"); // 'tests' | 'results' | 'analysis' | 'recommendations'
  const [executionResult, setExecutionResult] = useState(null);

  // Left sidebar tabs
  const [leftTab, setLeftTab] = useState("description"); // 'description' | 'approaches' | 'hints' | 'stepbystep'
  const [revealedHint, setRevealedHint] = useState(0);

  useEffect(() => {
    setLoading(true);
    API.get(`/problems/${slug}`)
      .then(res => {
        setProblem(res.data);
        setCode(res.data.starterCode || "class Solution {\n    // Write code\n}");
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  async function handleRun() {
    if (!problem) return;
    setIsRunning(true);
    setActiveTab("results");
    try {
      const res = await API.post("/execute/run", {
        slug: problem.slug,
        code
      });
      setExecutionResult(res.data);
    } catch (err) {
      setExecutionResult({
        status: "EXECUTION_ERROR",
        error: err.response?.data?.error || err.message,
        testResults: []
      });
    } finally {
      setIsRunning(false);
    }
  }

  async function handleSubmit() {
    if (!problem) return;
    setIsSubmitting(true);
    setActiveTab("results");
    try {
      const res = await API.post("/execute/submit", {
        slug: problem.slug,
        code
      });
      setExecutionResult(res.data);

      if (res.data.status === "ACCEPTED") {
        markProblemSolved(problem.slug, problem.patterns?.[0]);
      }
    } catch (err) {
      setExecutionResult({
        status: "SUBMISSION_ERROR",
        error: err.response?.data?.error || err.message,
        testResults: []
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    if (problem && window.confirm("Reset editor to starter code?")) {
      setCode(problem.starterCode);
    }
  }

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Loading problem workspace...</div>;
  }

  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Problem not found</h2>
        <Link to="/problems" className="text-xs text-blue-600 hover:underline">Back to problems catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1700px] mx-auto px-2 sm:px-4 py-4 space-y-3">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
        <div className="flex items-center space-x-3">
          <Link to="/problems" className="text-xs text-slate-500 hover:text-slate-800">
            ← Problems
          </Link>
          <h1 className="text-lg font-bold text-slate-900">{problem.title}</h1>
          <DifficultyBadge difficulty={problem.difficulty} />
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {problem.patterns?.[0] || "General"}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          {problem.leetcodeUrl && (
            <a href={problem.leetcodeUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 inline-flex items-center space-x-1">
              <span>LeetCode</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          )}
          {problem.gfgUrl && (
            <a href={problem.gfgUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 inline-flex items-center space-x-1">
              <span>GeeksforGeeks</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          )}
        </div>
      </div>

      {/* 3-Column LeetCode-style Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 min-h-[calc(100vh-160px)]">
        {/* LEFT COLUMN: Problem Statement, Approaches, Hints (Span 4) */}
        <div className="lg:col-span-4 flex flex-col border border-slate-200 rounded bg-white overflow-hidden max-h-[820px]">
          {/* Tabs */}
          <div className="flex items-center border-b border-slate-200 bg-slate-50 text-xs font-medium">
            <button
              onClick={() => setLeftTab("description")}
              className={`flex-1 py-2 text-center transition-colors ${
                leftTab === "description" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setLeftTab("approaches")}
              className={`flex-1 py-2 text-center transition-colors ${
                leftTab === "approaches" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Approaches
            </button>
            <button
              onClick={() => setLeftTab("hints")}
              className={`flex-1 py-2 text-center transition-colors ${
                leftTab === "hints" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Hints ({problem.hints?.length || 0})
            </button>
            <button
              onClick={() => setLeftTab("stepbystep")}
              className={`flex-1 py-2 text-center transition-colors ${
                leftTab === "stepbystep" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Steps
            </button>
          </div>

          {/* Left Tab Body */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4 text-xs">
            {leftTab === "description" && (
              <div className="space-y-4">
                <div className="text-slate-800 leading-relaxed whitespace-pre-line">
                  {problem.description}
                </div>

                {/* Examples */}
                <div className="space-y-3 pt-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">Examples</span>
                  {problem.examples?.map((ex, idx) => (
                    <div key={idx} className="p-3 rounded bg-slate-50 border border-slate-200 font-mono space-y-1">
                      <div><strong className="text-slate-600">Input: </strong><span className="text-slate-900">{ex.input}</span></div>
                      <div><strong className="text-slate-600">Output: </strong><span className="text-blue-700 font-semibold">{ex.output}</span></div>
                      {ex.explanation && (
                        <div className="text-[11px] font-sans text-slate-600 pt-1 border-t border-slate-200/60">{ex.explanation}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Constraints */}
                <div className="space-y-2 pt-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">Constraints</span>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 font-mono text-[11px]">
                    {problem.constraints?.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>

                {/* Company Tags */}
                {problem.companies?.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Companies</span>
                    <div className="flex flex-wrap gap-1">
                      {problem.companies.map(c => (
                        <span key={c} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {leftTab === "approaches" && (
              <div className="space-y-4">
                <div className="text-slate-600">
                  Study multiple approaches from Brute Force to Optimal to develop problem-solving intuition.
                </div>

                {problem.approaches?.map((app, idx) => (
                  <div key={idx} className="p-3 rounded border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">{app.name}</span>
                      <div className="text-[11px] font-mono text-slate-500">
                        <span>Time: {app.timeComplexity}</span> • <span>Space: {app.spaceComplexity}</span>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{app.explanation}</p>
                    {app.whyBetter && (
                      <div className="p-2 rounded bg-blue-50 border border-blue-200 text-blue-900 text-[11px]">
                        <strong>Why is this optimal? </strong>{app.whyBetter}
                      </div>
                    )}
                    <pre className="p-2.5 rounded bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                      <code>{app.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {leftTab === "hints" && (
              <div className="space-y-3">
                <p className="text-slate-600">Reveal hints progressively without immediately viewing the answer.</p>
                {problem.hints?.map((hint, idx) => (
                  <div key={idx} className="p-3 rounded border border-slate-200 bg-white space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-800 text-xs">Hint {idx + 1}</span>
                      {revealedHint <= idx && (
                        <button
                          onClick={() => setRevealedHint(idx + 1)}
                          className="px-2 py-0.5 rounded border border-slate-300 hover:bg-slate-100 text-slate-700 text-[11px]"
                        >
                          Reveal
                        </button>
                      )}
                    </div>
                    {revealedHint > idx ? (
                      <p className="text-slate-700 leading-relaxed">{hint}</p>
                    ) : (
                      <span className="text-slate-400 italic text-[11px]">Click reveal to view hint</span>
                    )}
                  </div>
                ))}

                {problem.solution && revealedHint >= (problem.hints?.length || 1) && (
                  <div className="p-3 rounded border border-emerald-200 bg-emerald-50/50 space-y-2">
                    <span className="font-bold text-emerald-900 text-xs block">Official Reference Solution</span>
                    <pre className="p-2.5 rounded bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                      <code>{problem.solution}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            {leftTab === "stepbystep" && (
              <div className="space-y-3">
                <span className="font-bold text-slate-900 text-xs block">10-Step Interview Strategy</span>
                <div className="space-y-2">
                  {problem.stepByStep?.map((s) => (
                    <div key={s.step} className="p-2.5 rounded border border-slate-200 bg-slate-50 space-y-0.5">
                      <div className="font-bold text-slate-800 text-[11px]">
                        Step {s.step}: {s.title}
                      </div>
                      <p className="text-slate-600 text-[11px]">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CENTER COLUMN: Monaco Editor (Span 5) */}
        <div className="lg:col-span-5 flex flex-col h-full min-h-[500px]">
          <MonacoEditorWrapper
            code={code}
            onChange={(val) => setCode(val || "")}
            onRun={handleRun}
            onSubmit={handleSubmit}
            onReset={handleReset}
            isRunning={isRunning}
            isSubmitting={isSubmitting}
          />
        </div>

        {/* RIGHT COLUMN: Test Cases, Results, Complexity Analysis & Collection Recommendations (Span 3) */}
        <div className="lg:col-span-3 flex flex-col border border-slate-200 rounded bg-white overflow-hidden max-h-[820px]">
          {/* Right Header Tabs */}
          <div className="flex items-center border-b border-slate-200 bg-slate-50 text-xs font-medium">
            <button
              onClick={() => setActiveTab("tests")}
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === "tests" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Test Cases
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === "results" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Output & Status
            </button>
            <button
              onClick={() => setActiveTab("analysis")}
              className={`flex-1 py-2 text-center transition-colors ${
                activeTab === "analysis" ? "bg-white text-slate-900 font-bold border-b-2 border-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Analysis
            </button>
          </div>

          {/* Right Tab Body */}
          <div className="p-3 overflow-y-auto flex-1 space-y-3 text-xs">
            {/* TAB: TEST CASES */}
            {activeTab === "tests" && (
              <div className="space-y-3">
                <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px] block">
                  Visible Test Inputs
                </span>
                {problem.testCases?.filter(tc => !tc.isHidden).map((tc, idx) => (
                  <div key={idx} className="p-2.5 rounded border border-slate-200 bg-slate-50 space-y-1 font-mono text-[11px]">
                    <span className="font-bold text-slate-700 text-xs block font-sans">Case #{idx + 1}</span>
                    <div className="text-slate-700">Input: {JSON.stringify(tc.input)}</div>
                    <div className="text-blue-700">Expected: {JSON.stringify(tc.expected)}</div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: EXECUTION RESULTS */}
            {activeTab === "results" && (
              <div className="space-y-3">
                {isRunning || isSubmitting ? (
                  <div className="py-8 text-center text-slate-500 text-xs">
                    Compiling and executing in sandbox...
                  </div>
                ) : executionResult ? (
                  <div className="space-y-3">
                    {/* Status Banner */}
                    <div className={`p-3 rounded border text-xs font-semibold flex items-center justify-between ${
                      executionResult.status === "ACCEPTED"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : executionResult.status === "WRONG_ANSWER"
                        ? "bg-rose-50 border-rose-200 text-rose-800"
                        : "bg-amber-50 border-amber-200 text-amber-900"
                    }`}>
                      <div className="flex items-center space-x-1.5">
                        {executionResult.status === "ACCEPTED" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600" />
                        )}
                        <span>{executionResult.status}</span>
                      </div>
                      <span className="font-mono">
                        {executionResult.passedCount} / {executionResult.totalCount} Passed
                      </span>
                    </div>

                    {/* Metrics */}
                    {executionResult.executionTimeMs !== undefined && (
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
                        <span>Runtime: {executionResult.executionTimeMs} ms</span>
                        <span>Memory: {executionResult.memoryUsedKB || 0} KB</span>
                      </div>
                    )}

                    {/* Error message */}
                    {executionResult.error && (
                      <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-mono whitespace-pre-wrap">
                        {executionResult.error}
                      </div>
                    )}

                    {/* Test Case Breakdown */}
                    {executionResult.testResults?.map((tr, idx) => (
                      <div key={idx} className={`p-2.5 rounded border text-[11px] space-y-1 font-mono ${
                        tr.passed ? "bg-white border-slate-200" : "bg-rose-50/40 border-rose-200"
                      }`}>
                        <div className="flex justify-between items-center font-sans font-bold text-xs">
                          <span className={tr.passed ? "text-emerald-700" : "text-rose-700"}>
                            Test #{tr.id} {tr.passed ? "✓ Passed" : "✗ Failed"}
                          </span>
                          <span className="text-slate-400 font-mono text-[10px]">{tr.executionMs} ms</span>
                        </div>
                        <div className="text-slate-600">Input: {tr.input}</div>
                        <div className="text-slate-800">Expected: {tr.expected}</div>
                        <div className={tr.passed ? "text-slate-800" : "text-rose-700 font-bold"}>
                          Actual: {tr.actual}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-slate-400 text-xs">
                    Click "Run Code" or "Submit Solution" to inspect results.
                  </div>
                )}
              </div>
            )}

            {/* TAB: CODE ANALYSIS & RECOMMENDATIONS */}
            {activeTab === "analysis" && (
              <div className="space-y-4">
                {executionResult?.analysis ? (
                  <div className="space-y-3">
                    {/* Complexity Estimate */}
                    <div className="p-3 rounded border border-slate-200 bg-slate-50 space-y-2">
                      <span className="font-bold text-xs text-slate-800 uppercase tracking-wider block">
                        Complexity Estimates
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-2 rounded bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">Time</span>
                          <strong className="text-blue-700">{executionResult.analysis.estimatedTimeComplexity}</strong>
                        </div>
                        <div className="p-2 rounded bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 block">Space</span>
                          <strong className="text-blue-700">{executionResult.analysis.estimatedSpaceComplexity}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Observations */}
                    {executionResult.analysis.observations?.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="font-semibold text-slate-700 text-xs block">Static Observations:</span>
                        <ul className="space-y-1 text-slate-600 text-[11px] list-disc pl-4">
                          {executionResult.analysis.observations.map((obs, idx) => (
                            <li key={idx}>{obs}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Warnings / Anti-patterns */}
                    {executionResult.analysis.warnings?.length > 0 && (
                      <div className="space-y-2">
                        <span className="font-semibold text-rose-700 text-xs block">Anti-Pattern Warnings:</span>
                        {executionResult.analysis.warnings.map((w, idx) => (
                          <div key={idx} className="p-2 rounded bg-rose-50 border border-rose-200 text-rose-800 text-[11px]">
                            {w.message}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Java Collection Recommendations */}
                    {executionResult.collectionRecommendations?.length > 0 && (
                      <div className="p-3 rounded border border-blue-200 bg-blue-50/60 space-y-2">
                        <div className="flex items-center space-x-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>Java Collection Recommendations</span>
                        </div>
                        {executionResult.collectionRecommendations.map((rec, idx) => (
                          <div key={idx} className="space-y-1 text-[11px] text-slate-700">
                            <div><strong>Current: </strong>{rec.currentCollection} ({rec.currentComplexity})</div>
                            <div className="text-blue-800 font-semibold">
                              <strong>Recommended: </strong>{rec.recommendedCollection} ({rec.recommendedComplexity})
                            </div>
                            <p className="text-slate-600">{rec.why}</p>
                            <pre className="p-2 rounded bg-slate-900 text-slate-100 font-mono text-[10px] overflow-x-auto">
                              <code>{rec.codeSnippet}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-8 text-center text-slate-400 text-xs">
                    Run or submit your Java code to receive static complexity and collection advice.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
