import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MonacoEditorWrapper from "../components/MonacoEditorWrapper";
import DifficultyBadge from "../components/DifficultyBadge";
import API from "../services/api";
import { Clock, Play, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function InterviewMode() {
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Load a standard interview problem (e.g. Two Sum or Valid Palindrome)
    API.get("/problems/two-sum")
      .then(res => {
        setProblem(res.data);
        setCode(res.data.starterCode);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let timer = null;
    if (started && timeLeft > 0 && !result?.status) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [started, timeLeft, result]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  async function handleRun() {
    setIsRunning(true);
    try {
      const res = await API.post("/execute/run", { slug: problem.slug, code });
      setResult(res.data);
    } catch (err) {
      setResult({ status: "ERROR", error: err.message });
    } finally {
      setIsRunning(false);
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      const res = await API.post("/execute/submit", { slug: problem.slug, code });
      setResult(res.data);
    } catch (err) {
      setResult({ status: "ERROR", error: err.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-500 text-sm">Preparing interview environment...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Technical Interview Simulator</h1>
          <p className="text-xs text-slate-500">Timed 30-minute mock coding round. No hints provided until submission.</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className={`flex items-center space-x-2 px-3 py-1.5 rounded font-mono text-sm font-bold border ${
            timeLeft < 300 ? "bg-rose-50 border-rose-300 text-rose-700" : "bg-slate-100 border-slate-300 text-slate-800"
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTimer(timeLeft)}</span>
          </div>

          {!started ? (
            <button
              onClick={() => setStarted(true)}
              className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
            >
              Start Timer
            </button>
          ) : (
            <span className="text-xs text-emerald-700 font-semibold px-2 py-1 bg-emerald-50 border border-emerald-200 rounded">
              ● Live Interview
            </span>
          )}
        </div>
      </div>

      {/* Main Interview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Problem Statement */}
        <div className="border border-slate-200 rounded p-5 bg-white space-y-4 max-h-[700px] overflow-y-auto text-xs">
          <div className="flex items-center space-x-3">
            <h2 className="text-base font-bold text-slate-900">{problem?.title}</h2>
            <DifficultyBadge difficulty={problem?.difficulty} />
          </div>

          <p className="text-slate-800 leading-relaxed whitespace-pre-line">{problem?.description}</p>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">Examples</span>
            {problem?.examples?.map((ex, idx) => (
              <div key={idx} className="p-3 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1">
                <div><strong className="text-slate-600">Input: </strong>{ex.input}</div>
                <div><strong className="text-slate-600">Output: </strong>{ex.output}</div>
              </div>
            ))}
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">Constraints</span>
            <ul className="list-disc pl-4 text-slate-600 space-y-1 font-mono text-[11px]">
              {problem?.constraints?.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex flex-col space-y-4 min-h-[500px]">
          <MonacoEditorWrapper
            code={code}
            onChange={(val) => setCode(val || "")}
            onRun={handleRun}
            onSubmit={handleSubmit}
            onReset={() => setCode(problem.starterCode)}
            isRunning={isRunning}
            isSubmitting={isSubmitting}
          />

          {/* Evaluation Result */}
          {result && (
            <div className="p-4 rounded border border-slate-200 bg-white space-y-2 text-xs">
              <div className="flex justify-between items-center font-bold">
                <span>Verdict: <strong className={result.status === "ACCEPTED" ? "text-emerald-700" : "text-rose-700"}>{result.status}</strong></span>
                <span className="font-mono text-slate-500">{result.passedCount} / {result.totalCount} Passed</span>
              </div>
              {result.analysis && (
                <div className="text-slate-600">
                  Estimated Time: <strong className="font-mono text-slate-900">{result.analysis.estimatedTimeComplexity}</strong> • Space: <strong className="font-mono text-slate-900">{result.analysis.estimatedSpaceComplexity}</strong>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
