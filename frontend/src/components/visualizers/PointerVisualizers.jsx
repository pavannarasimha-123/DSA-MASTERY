import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, StepForward, Shuffle, GitCommit } from "lucide-react";

export default function PointerVisualizers() {
  const [subTab, setSubTab] = useState("twoPointers"); // 'twoPointers' | 'slidingWindow' | 'fastSlow'

  return (
    <div className="space-y-6">
      {/* Sub tabs */}
      <div className="flex space-x-2 border-b border-slate-200 pb-2 text-xs font-medium">
        <button
          onClick={() => setSubTab("twoPointers")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "twoPointers" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Two Pointers (Target Pair Sum)
        </button>
        <button
          onClick={() => setSubTab("slidingWindow")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "slidingWindow" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Sliding Window (Max Sum Subarray K)
        </button>
        <button
          onClick={() => setSubTab("fastSlow")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "fastSlow" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Fast & Slow Pointers (Floyd's Cycle Detection)
        </button>
      </div>

      {subTab === "twoPointers" && <TwoPointersVisualizer />}
      {subTab === "slidingWindow" && <SlidingWindowVisualizer />}
      {subTab === "fastSlow" && <FastSlowVisualizer />}
    </div>
  );
}

// 1. Two Pointers
function TwoPointersVisualizer() {
  const arr = [2, 4, 7, 11, 15, 19, 24, 30];
  const [target, setTarget] = useState(26);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(arr.length - 1);
  const [status, setStatus] = useState("Click 'Next Step' to find pair summing to " + target);
  const [found, setFound] = useState(false);
  const [done, setDone] = useState(false);

  function reset() {
    setLeft(0);
    setRight(arr.length - 1);
    setStatus("Reset pointers to start.");
    setFound(false);
    setDone(false);
  }

  function step() {
    if (left >= right || done) return;
    const sum = arr[left] + arr[right];
    if (sum === target) {
      setStatus(`Found solution! arr[${left}] (${arr[left]}) + arr[${right}] (${arr[right]}) = ${target}.`);
      setFound(true);
      setDone(true);
    } else if (sum < target) {
      setStatus(`Sum is ${sum} < ${target}. Array is sorted; increment left pointer to increase sum.`);
      setLeft((prev) => prev + 1);
    } else {
      setStatus(`Sum is ${sum} > ${target}. Array is sorted; decrement right pointer to decrease sum.`);
      setRight((prev) => prev - 1);
    }
    if (left + 1 >= right && sum !== target) {
      setDone(true);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Two Pointers – Target Sum</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Converging left and right pointers in sorted array to find pair in O(n) time and O(1) space.
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-slate-600 font-sans font-medium">Target:</span>
          <input
            type="number"
            value={target}
            onChange={(e) => {
              setTarget(Number(e.target.value));
              reset();
            }}
            className="w-16 px-2 py-1 border border-slate-300 rounded font-mono text-xs"
          />
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Current Sum: <span className="font-bold text-blue-600">{arr[left] + arr[right]}</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {status}
      </div>

      <div className="py-8">
        <div className="grid grid-cols-8 gap-2">
          {arr.map((val, idx) => {
            const isLeft = idx === left;
            const isRight = idx === right;
            let bg = "bg-white border-slate-300 text-slate-900";
            if (found && (isLeft || isRight)) {
              bg = "bg-emerald-50 border-emerald-600 text-emerald-800 font-bold ring-2 ring-emerald-500";
            } else if (isLeft) {
              bg = "bg-blue-50 border-blue-600 text-blue-800 font-bold ring-2 ring-blue-400";
            } else if (isRight) {
              bg = "bg-indigo-50 border-indigo-600 text-indigo-800 font-bold ring-2 ring-indigo-400";
            }

            return (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="absolute -top-7 text-[10px] font-bold font-mono">
                  {isLeft && <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded-xs">Left</span>}
                  {isRight && <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded-xs">Right</span>}
                </div>
                <div className={`w-full aspect-square flex items-center justify-center rounded border text-base font-mono ${bg}`}>
                  {val}
                </div>
                <span className="text-[10px] text-slate-400 font-mono mt-1">idx {idx}</span>
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
          <span>Next Step</span>
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

// 2. Sliding Window
function SlidingWindowVisualizer() {
  const arr = [2, 1, 5, 1, 3, 2, 8, 4, 3];
  const k = 3;
  const [windowStart, setWindowStart] = useState(0);
  const [windowEnd, setWindowEnd] = useState(k - 1);
  const [maxSum, setMaxSum] = useState(0);
  const [currentSum, setCurrentSum] = useState(0);
  const [bestWindow, setBestWindow] = useState([0, k - 1]);
  const [status, setStatus] = useState("Click 'Next Window' to slide the window across the array.");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let initial = 0;
    for (let i = 0; i < k; i++) initial += arr[i];
    setCurrentSum(initial);
    setMaxSum(initial);
    setBestWindow([0, k - 1]);
  }, []);

  function reset() {
    let initial = 0;
    for (let i = 0; i < k; i++) initial += arr[i];
    setWindowStart(0);
    setWindowEnd(k - 1);
    setCurrentSum(initial);
    setMaxSum(initial);
    setBestWindow([0, k - 1]);
    setStatus("Reset sliding window to start.");
    setFinished(false);
  }

  function step() {
    if (windowEnd >= arr.length - 1) {
      setStatus(`Completed scan! Maximum sum for window of size ${k} is ${maxSum} at indices [${bestWindow[0]} .. ${bestWindow[1]}].`);
      setFinished(true);
      return;
    }
    const nextStart = windowStart + 1;
    const nextEnd = windowEnd + 1;
    const newSum = currentSum - arr[windowStart] + arr[nextEnd];

    setWindowStart(nextStart);
    setWindowEnd(nextEnd);
    setCurrentSum(newSum);

    let updatedMax = maxSum;
    let msg = `Subtracted arr[${windowStart}]=${arr[windowStart]}, added arr[${nextEnd}]=${arr[nextEnd]}. New window sum = ${newSum}.`;
    if (newSum > maxSum) {
      updatedMax = newSum;
      setMaxSum(newSum);
      setBestWindow([nextStart, nextEnd]);
      msg += ` (New maximum sum found: ${newSum}!)`;
    }
    setStatus(msg);

    if (nextEnd === arr.length - 1) {
      setFinished(true);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Fixed Sliding Window – Maximum Subarray of Size K</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Slides a fixed window of size K=3 in O(n) time by subtracting the exiting left item and adding the entering right item.
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Window Sum: <span className="font-bold text-blue-600">{currentSum}</span>
          </div>
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Max Sum: <span className="font-bold text-emerald-600">{maxSum}</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {status}
      </div>

      <div className="py-8">
        <div className="grid grid-cols-9 gap-2">
          {arr.map((val, idx) => {
            const inWindow = idx >= windowStart && idx <= windowEnd;
            let bg = "bg-white border-slate-300 text-slate-400";
            if (inWindow) {
              bg = "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-500";
            }

            return (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="absolute -top-7 text-[10px] font-bold font-mono">
                  {idx === windowStart && <span className="bg-blue-600 text-white px-1 rounded-xs">Start</span>}
                  {idx === windowEnd && <span className="bg-blue-600 text-white px-1 rounded-xs">End</span>}
                </div>
                <div className={`w-full aspect-square flex items-center justify-center rounded border text-base font-mono ${bg}`}>
                  {val}
                </div>
                <span className="text-[10px] text-slate-400 font-mono mt-1">idx {idx}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex space-x-2 pt-2">
        <button
          onClick={step}
          disabled={finished}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <StepForward className="w-3.5 h-3.5" />
          <span>Next Slide</span>
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

// 3. Fast & Slow Pointers (Floyd's Cycle)
function FastSlowVisualizer() {
  // Linked list: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 2 (cycle back to 2)
  const nodes = [0, 1, 2, 3, 4, 5];
  const nextPointers = [1, 2, 3, 4, 5, 2]; // node 5 loops to 2
  const [slow, setSlow] = useState(0);
  const [fast, setFast] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [met, setMet] = useState(false);
  const [status, setStatus] = useState("Both slow and fast pointers start at head node 0. Click 'Step Next'.");

  function reset() {
    setSlow(0);
    setFast(0);
    setStepCount(0);
    setMet(false);
    setStatus("Reset to head node 0.");
  }

  function step() {
    if (met) return;
    const nextSlow = nextPointers[slow];
    const fastMid = nextPointers[fast];
    const nextFast = nextPointers[fastMid];

    setSlow(nextSlow);
    setFast(nextFast);
    setStepCount((prev) => prev + 1);

    if (nextSlow === nextFast) {
      setMet(true);
      setStatus(`Cycle Detected! Tortoise and Hare met at Node ${nextSlow} after ${stepCount + 1} steps (O(n) time, O(1) space).`);
    } else {
      setStatus(`Slow advanced 1 step to Node ${nextSlow}. Fast advanced 2 steps to Node ${nextFast}.`);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Fast & Slow Pointers – Floyd's Cycle Detection</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Tortoise moves 1 step, Hare moves 2 steps. If a cycle exists, they must collide within the loop in O(n) time.
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Slow (Tortoise): <span className="font-bold text-amber-600">Node {slow}</span>
          </div>
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Fast (Hare): <span className="font-bold text-blue-600">Node {fast}</span>
          </div>
          <div className="border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
            Steps: <span className="font-bold text-slate-900">{stepCount}</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {status}
      </div>

      {/* Nodes visualization */}
      <div className="py-6 flex flex-wrap items-center justify-center gap-3">
        {nodes.map((val) => {
          const isSlow = slow === val;
          const isFast = fast === val;
          const isBoth = isSlow && isFast;

          let ring = "border-slate-300 bg-white text-slate-800";
          if (met && isBoth) {
            ring = "border-emerald-600 bg-emerald-50 text-emerald-800 ring-4 ring-emerald-400 font-bold";
          } else if (isBoth) {
            ring = "border-purple-600 bg-purple-50 text-purple-800 ring-2 ring-purple-400 font-bold";
          } else if (isSlow) {
            ring = "border-amber-500 bg-amber-50 text-amber-800 ring-2 ring-amber-400 font-bold";
          } else if (isFast) {
            ring = "border-blue-600 bg-blue-50 text-blue-800 ring-2 ring-blue-400 font-bold";
          }

          return (
            <div key={val} className="flex items-center space-x-2">
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-7 text-[10px] font-bold font-mono">
                  {isBoth && <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded-xs">Both</span>}
                  {!isBoth && isSlow && <span className="bg-amber-500 text-white px-1.5 py-0.5 rounded-xs">Slow</span>}
                  {!isBoth && isFast && <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded-xs">Fast</span>}
                </div>
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm shadow-xs ${ring}`}>
                  {val}
                </div>
                {val === 2 && <span className="text-[9px] text-purple-600 font-semibold mt-1">Loop Entry</span>}
              </div>
              {val < 5 && <span className="text-slate-400 font-bold">→</span>}
              {val === 5 && <span className="text-purple-600 font-mono text-xs font-bold">↳ loops to [2]</span>}
            </div>
          );
        })}
      </div>

      <div className="flex space-x-2 pt-2">
        <button
          onClick={step}
          disabled={met}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <StepForward className="w-3.5 h-3.5" />
          <span>Next Step</span>
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
