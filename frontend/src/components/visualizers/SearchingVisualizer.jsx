import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, StepForward, Search, Target, CheckCircle2, AlertCircle } from "lucide-react";

const SEARCH_MODES = {
  linear: {
    name: "Linear Search",
    time: "O(n)",
    bestTime: "O(1)",
    space: "O(1)",
    sortedRequired: false,
    desc: "Sequentially checks each element of the list until a match is found or the whole list has been searched.",
    generateSteps: (arr, target) => {
      const steps = [];
      let comps = 0;
      steps.push({
        pointers: {},
        activeIdx: -1,
        eliminated: [],
        foundIdx: -1,
        comps,
        message: `Starting linear search for target ${target}.`
      });

      for (let i = 0; i < arr.length; i++) {
        comps++;
        if (arr[i] === target) {
          steps.push({
            pointers: { current: i },
            activeIdx: i,
            eliminated: Array.from({ length: i }, (_, k) => k),
            foundIdx: i,
            comps,
            message: `Target ${target} matches arr[${i}]=${arr[i]}! Search successful.`
          });
          return steps;
        } else {
          steps.push({
            pointers: { current: i },
            activeIdx: i,
            eliminated: Array.from({ length: i + 1 }, (_, k) => k),
            foundIdx: -1,
            comps,
            message: `arr[${i}]=${arr[i]} does not match ${target}. Moving to next index.`
          });
        }
      }

      steps.push({
        pointers: {},
        activeIdx: -1,
        eliminated: arr.map((_, i) => i),
        foundIdx: -1,
        comps,
        message: `Target ${target} was not found in the array.`
      });
      return steps;
    }
  },
  binary: {
    name: "Binary Search",
    time: "O(log n)",
    bestTime: "O(1)",
    space: "O(1)",
    sortedRequired: true,
    desc: "Finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.",
    generateSteps: (arr, target) => {
      const steps = [];
      let comps = 0;
      let low = 0;
      let high = arr.length - 1;

      steps.push({
        pointers: { low, high },
        activeIdx: -1,
        eliminated: [],
        foundIdx: -1,
        comps,
        message: `Array is sorted. Starting search interval [${low} .. ${high}] for target ${target}.`
      });

      while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        comps++;

        const currentEliminated = [];
        for (let i = 0; i < low; i++) currentEliminated.push(i);
        for (let i = high + 1; i < arr.length; i++) currentEliminated.push(i);

        steps.push({
          pointers: { low, mid, high },
          activeIdx: mid,
          eliminated: currentEliminated,
          foundIdx: -1,
          comps,
          message: `Calculated mid = ${low} + (${high} - ${low}) / 2 = ${mid}. Checking arr[${mid}] = ${arr[mid]}`
        });

        if (arr[mid] === target) {
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: currentEliminated,
            foundIdx: mid,
            comps,
            message: `arr[${mid}] == ${target}! Match found at index ${mid}.`
          });
          return steps;
        } else if (arr[mid] < target) {
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: [...currentEliminated, ...Array.from({ length: mid - low + 1 }, (_, k) => low + k)],
            foundIdx: -1,
            comps,
            message: `arr[${mid}]=${arr[mid]} < ${target}. Target must be in right half. Adjusting low = ${mid + 1}.`
          });
          low = mid + 1;
        } else {
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: [...currentEliminated, ...Array.from({ length: high - mid + 1 }, (_, k) => mid + k)],
            foundIdx: -1,
            comps,
            message: `arr[${mid}]=${arr[mid]} > ${target}. Target must be in left half. Adjusting high = ${mid - 1}.`
          });
          high = mid - 1;
        }
      }

      steps.push({
        pointers: { low, high },
        activeIdx: -1,
        eliminated: arr.map((_, i) => i),
        foundIdx: -1,
        comps,
        message: `Interval exhausted (low ${low} > high ${high}). Target ${target} does not exist in array.`
      });
      return steps;
    }
  },
  lowerBound: {
    name: "Lower Bound (arr[i] >= target)",
    time: "O(log n)",
    bestTime: "O(log n)",
    space: "O(1)",
    sortedRequired: true,
    desc: "Finds the first index where the element is greater than or equal to target. Essential for search insertion positions.",
    generateSteps: (arr, target) => {
      const steps = [];
      let comps = 0;
      let low = 0;
      let high = arr.length - 1;
      let ans = arr.length;

      steps.push({
        pointers: { low, high },
        activeIdx: -1,
        eliminated: [],
        foundIdx: -1,
        comps,
        message: `Searching for the first index where arr[i] >= ${target}. Default ans = ${arr.length}.`
      });

      while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        comps++;

        const currentEliminated = [];
        for (let i = 0; i < low; i++) currentEliminated.push(i);
        for (let i = high + 1; i < arr.length; i++) currentEliminated.push(i);

        steps.push({
          pointers: { low, mid, high },
          activeIdx: mid,
          eliminated: currentEliminated,
          foundIdx: ans < arr.length ? ans : -1,
          comps,
          message: `Inspecting mid = ${mid}, arr[${mid}] = ${arr[mid]}.`
        });

        if (arr[mid] >= target) {
          ans = mid;
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: currentEliminated,
            foundIdx: ans,
            comps,
            message: `arr[${mid}]=${arr[mid]} >= ${target}. Potential lower bound found at ${ans}. Searching left for earlier occurrence (high = ${mid - 1}).`
          });
          high = mid - 1;
        } else {
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: currentEliminated,
            foundIdx: ans < arr.length ? ans : -1,
            comps,
            message: `arr[${mid}]=${arr[mid]} < ${target}. Cannot be lower bound. Searching right (low = ${mid + 1}).`
          });
          low = mid + 1;
        }
      }

      steps.push({
        pointers: { ans },
        activeIdx: ans < arr.length ? ans : -1,
        eliminated: [],
        foundIdx: ans,
        comps,
        message: `Search finished! Lower bound index for ${target} is ${ans} ${ans < arr.length ? `(value = ${arr[ans]})` : "(beyond end of array)"}.`
      });
      return steps;
    }
  },
  upperBound: {
    name: "Upper Bound (arr[i] > target)",
    time: "O(log n)",
    bestTime: "O(log n)",
    space: "O(1)",
    sortedRequired: true,
    desc: "Finds the first index where the element is strictly greater than target. Useful for counting occurrences in sorted arrays.",
    generateSteps: (arr, target) => {
      const steps = [];
      let comps = 0;
      let low = 0;
      let high = arr.length - 1;
      let ans = arr.length;

      steps.push({
        pointers: { low, high },
        activeIdx: -1,
        eliminated: [],
        foundIdx: -1,
        comps,
        message: `Searching for the first index where arr[i] > ${target}. Default ans = ${arr.length}.`
      });

      while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        comps++;

        const currentEliminated = [];
        for (let i = 0; i < low; i++) currentEliminated.push(i);
        for (let i = high + 1; i < arr.length; i++) currentEliminated.push(i);

        steps.push({
          pointers: { low, mid, high },
          activeIdx: mid,
          eliminated: currentEliminated,
          foundIdx: ans < arr.length ? ans : -1,
          comps,
          message: `Inspecting mid = ${mid}, arr[${mid}] = ${arr[mid]}.`
        });

        if (arr[mid] > target) {
          ans = mid;
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: currentEliminated,
            foundIdx: ans,
            comps,
            message: `arr[${mid}]=${arr[mid]} > ${target}. Potential upper bound found at ${ans}. Searching left (high = ${mid - 1}).`
          });
          high = mid - 1;
        } else {
          steps.push({
            pointers: { low, mid, high },
            activeIdx: mid,
            eliminated: currentEliminated,
            foundIdx: ans < arr.length ? ans : -1,
            comps,
            message: `arr[${mid}]=${arr[mid]} <= ${target}. Upper bound must be strictly greater. Searching right (low = ${mid + 1}).`
          });
          low = mid + 1;
        }
      }

      steps.push({
        pointers: { ans },
        activeIdx: ans < arr.length ? ans : -1,
        eliminated: [],
        foundIdx: ans,
        comps,
        message: `Search finished! Upper bound index for ${target} is ${ans} ${ans < arr.length ? `(value = ${arr[ans]})` : "(beyond end of array)"}.`
      });
      return steps;
    }
  }
};

export default function SearchingVisualizer() {
  const [mode, setMode] = useState("binary");
  const [array, setArray] = useState([3, 8, 14, 23, 31, 45, 59, 72, 88, 96]);
  const [targetVal, setTargetVal] = useState(45);
  const [steps, setSteps] = useState([]);
  const [stepIdx, setStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);
  const timerRef = useRef(null);

  useEffect(() => {
    const config = SEARCH_MODES[mode];
    if (config) {
      const generated = config.generateSteps(array, Number(targetVal));
      setSteps(generated);
      setStepIdx(0);
      setIsPlaying(false);
    }
  }, [mode, array, targetVal]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStepIdx((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            clearInterval(timerRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, speed, steps.length]);

  function handleReset() {
    setIsPlaying(false);
    setStepIdx(0);
  }

  function handleStep() {
    if (stepIdx < steps.length - 1) {
      setStepIdx((prev) => prev + 1);
    }
  }

  function handleShuffle() {
    setIsPlaying(false);
    let newArr;
    if (SEARCH_MODES[mode].sortedRequired) {
      const set = new Set();
      while (set.size < 10) {
        set.add(Math.floor(Math.random() * 90) + 5);
      }
      newArr = Array.from(set).sort((a, b) => a - b);
    } else {
      newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 5);
    }
    setArray(newArr);
    // pick one element or nearby as target
    setTargetVal(newArr[Math.floor(Math.random() * newArr.length)]);
  }

  const currentStep = steps[stepIdx] || {
    pointers: {},
    activeIdx: -1,
    eliminated: [],
    foundIdx: -1,
    comps: 0,
    message: "Ready."
  };

  const meta = SEARCH_MODES[mode];

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded border border-slate-200 text-xs font-medium">
        {Object.keys(SEARCH_MODES).map((key) => {
          const item = SEARCH_MODES[key];
          const isActive = mode === key;
          return (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`px-3 py-1.5 rounded transition-colors ${
                isActive ? "bg-slate-900 text-white font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Info Header */}
      <div className="bg-white border border-slate-200 rounded p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-bold text-slate-900">{meta.name}</h2>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200">
              Complexity: {meta.time}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200">
              Space: {meta.space}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">{meta.desc}</p>
        </div>

        {/* Target Input & Metrics */}
        <div className="flex items-center space-x-4 text-xs font-mono shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-slate-600 font-sans font-medium text-xs">Target:</span>
            <input
              type="number"
              value={targetVal}
              onChange={(e) => setTargetVal(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-slate-300 rounded font-mono text-xs focus:outline-hidden focus:border-blue-600"
            />
          </div>

          <div className="border border-slate-200 rounded px-3 py-1.5 bg-slate-50">
            <span className="text-slate-500 block text-[10px] uppercase">Probes</span>
            <span className="text-slate-900 font-bold text-sm">{currentStep.comps}</span>
          </div>
          <div className="border border-slate-200 rounded px-3 py-1.5 bg-slate-50">
            <span className="text-slate-500 block text-[10px] uppercase">Step</span>
            <span className="text-blue-600 font-bold text-sm">
              {stepIdx + 1} / {steps.length || 1}
            </span>
          </div>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="bg-white border border-slate-200 rounded p-6">
        {/* Step Banner */}
        <div className="mb-8 p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono flex items-center justify-between">
          <span>{currentStep.message}</span>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block"></span>
              <span className="text-slate-600">Active / Mid</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 inline-block"></span>
              <span className="text-slate-600">Found Match</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 inline-block"></span>
              <span className="text-slate-400">Eliminated</span>
            </span>
          </div>
        </div>

        {/* Array Cells & Pointers */}
        <div className="relative pt-8 pb-4">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {array.map((val, idx) => {
              const isActive = currentStep.activeIdx === idx;
              const isFound = currentStep.foundIdx === idx;
              const isEliminated = currentStep.eliminated.includes(idx);
              const isLow = currentStep.pointers.low === idx;
              const isMid = currentStep.pointers.mid === idx;
              const isHigh = currentStep.pointers.high === idx;
              const isCurrent = currentStep.pointers.current === idx;

              let cellStyle = "bg-white border-slate-300 text-slate-900";
              if (isFound) {
                cellStyle = "bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-500 font-bold";
              } else if (isActive) {
                cellStyle = "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500 font-bold";
              } else if (isEliminated) {
                cellStyle = "bg-slate-100 border-slate-200 text-slate-400 opacity-60";
              }

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Top Pointer Badge */}
                  <div className="absolute -top-7 h-5 flex items-center justify-center space-x-0.5 text-[10px] font-bold font-mono">
                    {isLow && <span className="bg-amber-100 text-amber-800 px-1 rounded-xs border border-amber-300">L</span>}
                    {isMid && <span className="bg-blue-100 text-blue-800 px-1 rounded-xs border border-blue-300">M</span>}
                    {isHigh && <span className="bg-indigo-100 text-indigo-800 px-1 rounded-xs border border-indigo-300">H</span>}
                    {isCurrent && <span className="bg-slate-800 text-white px-1 rounded-xs">cur</span>}
                  </div>

                  {/* Cell Box */}
                  <div className={`w-full aspect-square flex items-center justify-center rounded border text-base font-mono transition-all duration-200 ${cellStyle}`}>
                    {val}
                  </div>

                  {/* Bottom Index Label */}
                  <span className="text-[10px] text-slate-400 font-mono mt-1">idx {idx}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto Play</span>
                </>
              )}
            </button>

            <button
              onClick={handleStep}
              disabled={isPlaying || stepIdx >= steps.length - 1}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 disabled:opacity-50 transition-colors"
            >
              <StepForward className="w-3.5 h-3.5" />
              <span>Step Next</span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleShuffle}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Random Target</span>
            </button>
          </div>

          {/* Speed slider */}
          <div className="flex items-center space-x-2 text-xs text-slate-600">
            <span>Speed:</span>
            <input
              type="range"
              min="150"
              max="1400"
              step="100"
              value={1550 - speed}
              onChange={(e) => setSpeed(1550 - Number(e.target.value))}
              className="w-24 accent-slate-900 cursor-pointer"
            />
            <span className="font-mono text-[11px] w-12">{speed}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
