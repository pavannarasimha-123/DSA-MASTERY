import React, { useState } from "react";
import { StepForward, RotateCcw, ArrowRight, Play, Pause } from "lucide-react";

export default function DpPatternVisualizers() {
  const [subTab, setSubTab] = useState("kadane"); // 'kadane' | 'prefixSum' | 'knapsack'

  return (
    <div className="space-y-6">
      <div className="flex space-x-2 border-b border-slate-200 pb-2 text-xs font-medium">
        <button
          onClick={() => setSubTab("kadane")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "kadane" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Kadane's Algorithm (Max Subarray Sum)
        </button>
        <button
          onClick={() => setSubTab("prefixSum")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "prefixSum" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Prefix Sum (Range Sum Queries O(1))
        </button>
        <button
          onClick={() => setSubTab("knapsack")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "knapsack" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          0/1 Knapsack (2D Dynamic Programming)
        </button>
      </div>

      {subTab === "kadane" && <KadaneVisualizer />}
      {subTab === "prefixSum" && <PrefixSumVisualizer />}
      {subTab === "knapsack" && <KnapsackVisualizer />}
    </div>
  );
}

// 1. Kadane's Algorithm
function KadaneVisualizer() {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const [currIdx, setCurrIdx] = useState(0);
  const [currSum, setCurrSum] = useState(arr[0]);
  const [maxSum, setMaxSum] = useState(arr[0]);
  const [startIdx, setStartIdx] = useState(0);
  const [bestRange, setBestRange] = useState([0, 0]);
  const [status, setStatus] = useState("Initialized at index 0. Current Sum = -2, Max Sum = -2.");
  const [done, setDone] = useState(false);

  function reset() {
    setCurrIdx(0);
    setCurrSum(arr[0]);
    setMaxSum(arr[0]);
    setStartIdx(0);
    setBestRange([0, 0]);
    setStatus("Reset to start.");
    setDone(false);
  }

  function step() {
    if (currIdx >= arr.length - 1) {
      setStatus(`Scan completed! Maximum contiguous subarray sum is ${maxSum} spanning indices [${bestRange[0]} .. ${bestRange[1]}].`);
      setDone(true);
      return;
    }

    const nextIdx = currIdx + 1;
    const val = arr[nextIdx];
    let newCurrSum;
    let newStart = startIdx;

    if (currSum + val < val) {
      newCurrSum = val;
      newStart = nextIdx;
      setStartIdx(newStart);
      setStatus(`currSum (${currSum}) + val (${val}) < val (${val}). Starting fresh subarray at index ${nextIdx}.`);
    } else {
      newCurrSum = currSum + val;
      setStatus(`Added arr[${nextIdx}]=${val} to subarray. currSum = ${newCurrSum}.`);
    }

    let updatedMax = maxSum;
    if (newCurrSum > maxSum) {
      updatedMax = newCurrSum;
      setMaxSum(newCurrSum);
      setBestRange([newStart, nextIdx]);
      setStatus((prev) => `${prev} New maximum subarray sum: ${newCurrSum}!`);
    }

    setCurrSum(newCurrSum);
    setCurrIdx(nextIdx);

    if (nextIdx === arr.length - 1) {
      setDone(true);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Kadane's Algorithm – O(n) Maximum Subarray Sum</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Decides at each element whether to extend existing subarray or start fresh, maintaining running maximum.
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Current Sum: <span className="font-bold text-blue-600">{currSum}</span>
          </div>
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Max So Far: <span className="font-bold text-emerald-600">{maxSum}</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {status}
      </div>

      <div className="py-6">
        <div className="grid grid-cols-9 gap-2">
          {arr.map((val, idx) => {
            const isCurrent = currIdx === idx;
            const inActiveSubarray = idx >= startIdx && idx <= currIdx;
            const inBestRange = done && idx >= bestRange[0] && idx <= bestRange[1];

            let bg = "bg-white border-slate-300 text-slate-800";
            if (inBestRange) {
              bg = "bg-emerald-50 border-emerald-600 text-emerald-900 font-bold ring-2 ring-emerald-400";
            } else if (isCurrent) {
              bg = "bg-blue-600 border-blue-700 text-white font-bold ring-2 ring-blue-400";
            } else if (inActiveSubarray) {
              bg = "bg-blue-50 border-blue-400 text-blue-900 font-semibold";
            }

            return (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[10px] text-slate-400 font-mono mb-1">[{idx}]</span>
                <div className={`w-full aspect-square flex items-center justify-center rounded border font-mono text-base ${bg}`}>
                  {val}
                </div>
                {isCurrent && <span className="text-[9px] text-blue-600 font-bold mt-1">curr</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex space-x-2 pt-2">
        <button
          onClick={step}
          disabled={done}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <StepForward className="w-3.5 h-3.5" />
          <span>Next Element</span>
        </button>
        <button
          onClick={reset}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}

// 2. Prefix Sum Visualizer
function PrefixSumVisualizer() {
  const arr = [3, 1, 4, 1, 5, 9, 2, 6];
  // Precompute prefix sum array: prefix[0] = arr[0], prefix[i] = prefix[i-1] + arr[i]
  const prefix = [];
  let s = 0;
  for (let x of arr) {
    s += x;
    prefix.push(s);
  }

  const [leftRange, setLeftRange] = useState(2);
  const [rightRange, setRightRange] = useState(5);

  const L = Math.min(leftRange, rightRange);
  const R = Math.max(leftRange, rightRange);
  const rangeSum = L === 0 ? prefix[R] : prefix[R] - prefix[L - 1];

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Prefix Sum – O(1) Range Queries</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Preprocesses in O(n) time. Range sum formula: sum(L..R) = prefix[R] - (L &gt; 0 ? prefix[L-1] : 0).
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-slate-600 font-sans font-medium">L:</span>
          <input
            type="number"
            min="0"
            max={arr.length - 1}
            value={leftRange}
            onChange={(e) => setLeftRange(Math.max(0, Math.min(arr.length - 1, Number(e.target.value))))}
            className="w-12 px-2 py-1 border border-slate-300 rounded font-mono text-xs"
          />
          <span className="text-slate-600 font-sans font-medium">R:</span>
          <input
            type="number"
            min="0"
            max={arr.length - 1}
            value={rightRange}
            onChange={(e) => setRightRange(Math.max(0, Math.min(arr.length - 1, Number(e.target.value))))}
            className="w-12 px-2 py-1 border border-slate-300 rounded font-mono text-xs"
          />
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        Range [{L} .. {R}]: sum = {prefix[R]} - {L > 0 ? prefix[L - 1] : 0} = <span className="font-bold text-blue-600">{rangeSum}</span>
      </div>

      <div className="space-y-4">
        {/* Original Array */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Original Array (arr)</h4>
          <div className="grid grid-cols-8 gap-2">
            {arr.map((val, idx) => {
              const inRange = idx >= L && idx <= R;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[10px] text-slate-400 font-mono mb-1">[{idx}]</span>
                  <div
                    className={`w-full aspect-square flex items-center justify-center rounded border font-mono text-base ${
                      inRange ? "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-400" : "bg-white border-slate-300 text-slate-800"
                    }`}
                  >
                    {val}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prefix Array */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Precomputed Prefix Array (prefix)</h4>
          <div className="grid grid-cols-8 gap-2">
            {prefix.map((val, idx) => {
              const isR = idx === R;
              const isLminus1 = idx === L - 1;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[10px] text-slate-400 font-mono mb-1">[{idx}]</span>
                  <div
                    className={`w-full aspect-square flex items-center justify-center rounded border font-mono text-base ${
                      isR
                        ? "bg-emerald-50 border-emerald-600 text-emerald-900 font-bold ring-2 ring-emerald-500"
                        : isLminus1
                        ? "bg-rose-50 border-rose-600 text-rose-900 font-bold ring-2 ring-rose-400"
                        : "bg-white border-slate-300 text-slate-800"
                    }`}
                  >
                    {val}
                  </div>
                  {isR && <span className="text-[9px] text-emerald-700 font-bold mt-1">prefix[R]</span>}
                  {isLminus1 && <span className="text-[9px] text-rose-700 font-bold mt-1">prefix[L-1]</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. 0/1 Knapsack Visualizer
function KnapsackVisualizer() {
  const weights = [1, 2, 3];
  const values = [6, 10, 12];
  const capacity = 5;

  // dp table dimensions: (weights.length + 1) x (capacity + 1)
  // precomputed sequence of table cell fills
  const [stepIdx, setStepIdx] = useState(0);

  // Generate steps
  const n = weights.length;
  const W = capacity;
  const steps = [];

  const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));
  steps.push({
    dp: dp.map((r) => [...r]),
    currI: 0,
    currW: 0,
    msg: "Initialized DP table with 0s for base cases (0 items or 0 capacity)."
  });

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      let msg = "";
      if (weights[i - 1] <= w) {
        const take = values[i - 1] + dp[i - 1][w - weights[i - 1]];
        const skip = dp[i - 1][w];
        dp[i][w] = Math.max(take, skip);
        msg = `Item ${i} (wt: ${weights[i - 1]}, val: ${values[i - 1]}): max(skip ${skip}, take ${take}) = ${dp[i][w]}`;
      } else {
        dp[i][w] = dp[i - 1][w];
        msg = `Item ${i} weight ${weights[i - 1]} > capacity ${w}. Must skip -> dp[${i}][${w}] = ${dp[i][w]}`;
      }
      steps.push({
        dp: dp.map((r) => [...r]),
        currI: i,
        currW: w,
        msg
      });
    }
  }

  const current = steps[Math.min(stepIdx, steps.length - 1)];

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">0/1 Knapsack – 2D Dynamic Programming</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Weights: [1, 2, 3], Values: [6, 10, 12], Capacity: 5. Time & Space Complexity: O(N × W).
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200">
          Step {stepIdx + 1} / {steps.length}
        </span>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {current.msg}
      </div>

      {/* DP Grid */}
      <div className="overflow-x-auto py-2">
        <table className="border-collapse border border-slate-200 text-xs font-mono text-center">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="border border-slate-200 px-3 py-1.5">Item \ Cap</th>
              {Array.from({ length: capacity + 1 }, (_, w) => (
                <th key={w} className="border border-slate-200 px-3 py-1.5">
                  W={w}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {current.dp.map((row, i) => (
              <tr key={i}>
                <td className="border border-slate-200 px-3 py-1.5 font-bold bg-slate-50 text-slate-800">
                  {i === 0 ? "None" : `Item ${i} (w:${weights[i - 1]}, v:${values[i - 1]})`}
                </td>
                {row.map((val, w) => {
                  const isCurrent = current.currI === i && current.currW === w;
                  return (
                    <td
                      key={w}
                      className={`border border-slate-200 px-3 py-1.5 ${
                        isCurrent
                          ? "bg-blue-600 text-white font-bold"
                          : val > 0
                          ? "bg-emerald-50 text-emerald-900 font-semibold"
                          : "text-slate-400"
                      }`}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex space-x-2 pt-2">
        <button
          onClick={() => setStepIdx((p) => Math.min(steps.length - 1, p + 1))}
          disabled={stepIdx >= steps.length - 1}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <StepForward className="w-3.5 h-3.5" />
          <span>Next Cell</span>
        </button>
        <button
          onClick={() => setStepIdx(0)}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
