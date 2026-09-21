import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, StepForward, Shuffle, CheckCircle2, Clock, Cpu } from "lucide-react";

const ALGORITHMS = {
  bubble: {
    name: "Bubble Sort",
    time: "O(n²)",
    bestTime: "O(n)",
    space: "O(1)",
    stable: "Yes",
    desc: "Repeatedly steps through the list, compares adjacent pairs, and swaps them if they are in the wrong order.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      const sorted = [];
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: "Initial array state.", comps, swaps });

      for (let i = 0; i < a.length; i++) {
        let swapped = false;
        for (let j = 0; j < a.length - i - 1; j++) {
          comps++;
          steps.push({ array: [...a], comparing: [j, j + 1], swapping: [], sorted: [...sorted], message: `Comparing arr[${j}]=${a[j]} and arr[${j + 1}]=${a[j + 1]}`, comps, swaps });
          if (a[j] > a[j + 1]) {
            const temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
            swaps++;
            swapped = true;
            steps.push({ array: [...a], comparing: [], swapping: [j, j + 1], sorted: [...sorted], message: `Swapped ${a[j + 1]} and ${a[j]}`, comps, swaps });
          }
        }
        sorted.unshift(a.length - 1 - i);
        steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: `Element at index ${a.length - 1 - i} (${a[a.length - 1 - i]}) placed in correct sorted position.`, comps, swaps });
        if (!swapped) break;
      }
      for (let k = 0; k < a.length; k++) {
        if (!sorted.includes(k)) sorted.push(k);
      }
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: "Array is completely sorted!", comps, swaps });
      return steps;
    }
  },
  selection: {
    name: "Selection Sort",
    time: "O(n²)",
    bestTime: "O(n²)",
    space: "O(1)",
    stable: "No",
    desc: "Repeatedly finds the minimum element from the unsorted subarray and puts it at the beginning.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      const sorted = [];
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: "Initial array state.", comps, swaps });

      for (let i = 0; i < a.length - 1; i++) {
        let minIdx = i;
        steps.push({ array: [...a], comparing: [minIdx], swapping: [], sorted: [...sorted], message: `Current minimum candidate is arr[${minIdx}]=${a[minIdx]}`, comps, swaps });
        for (let j = i + 1; j < a.length; j++) {
          comps++;
          steps.push({ array: [...a], comparing: [minIdx, j], swapping: [], sorted: [...sorted], message: `Comparing arr[${j}]=${a[j]} with current min arr[${minIdx}]=${a[minIdx]}`, comps, swaps });
          if (a[j] < a[minIdx]) {
            minIdx = j;
            steps.push({ array: [...a], comparing: [minIdx], swapping: [], sorted: [...sorted], message: `Found new minimum arr[${minIdx}]=${a[minIdx]}`, comps, swaps });
          }
        }
        if (minIdx !== i) {
          const temp = a[i];
          a[i] = a[minIdx];
          a[minIdx] = temp;
          swaps++;
          steps.push({ array: [...a], comparing: [], swapping: [i, minIdx], sorted: [...sorted], message: `Swapped minimum ${a[i]} to index ${i}`, comps, swaps });
        }
        sorted.push(i);
      }
      sorted.push(a.length - 1);
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: "Array is completely sorted!", comps, swaps });
      return steps;
    }
  },
  insertion: {
    name: "Insertion Sort",
    time: "O(n²)",
    bestTime: "O(n)",
    space: "O(1)",
    stable: "Yes",
    desc: "Builds the sorted array one element at a time by repeatedly shifting larger elements right and inserting the key.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      const sorted = [0];
      steps.push({ array: [...a], comparing: [0], swapping: [], sorted: [...sorted], message: `arr[0]=${a[0]} is trivially sorted.`, comps, swaps });

      for (let i = 1; i < a.length; i++) {
        const key = a[i];
        let j = i - 1;
        steps.push({ array: [...a], comparing: [i], swapping: [], sorted: [...sorted], message: `Selected key arr[${i}]=${key} to insert into sorted prefix.`, comps, swaps });

        while (j >= 0) {
          comps++;
          steps.push({ array: [...a], comparing: [j, j + 1], swapping: [], sorted: [...sorted], message: `Comparing key ${key} with arr[${j}]=${a[j]}`, comps, swaps });
          if (a[j] > key) {
            a[j + 1] = a[j];
            swaps++;
            steps.push({ array: [...a], comparing: [], swapping: [j, j + 1], sorted: [...sorted], message: `Shifted ${a[j]} right to index ${j + 1}`, comps, swaps });
            j--;
          } else {
            break;
          }
        }
        a[j + 1] = key;
        sorted.push(i);
        steps.push({ array: [...a], comparing: [], swapping: [j + 1], sorted: [...sorted], message: `Inserted key ${key} at position ${j + 1}`, comps, swaps });
      }
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: a.map((_, idx) => idx), message: "Array is completely sorted!", comps, swaps });
      return steps;
    }
  },
  merge: {
    name: "Merge Sort",
    time: "O(n log n)",
    bestTime: "O(n log n)",
    space: "O(n)",
    stable: "Yes",
    desc: "Divide and conquer algorithm that splits array into halves, recursively sorts them, and merges sorted halves.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [], message: "Initial array state for Merge Sort.", comps, swaps });

      function merge(l, m, r) {
        const leftArr = a.slice(l, m + 1);
        const rightArr = a.slice(m + 1, r + 1);
        let i = 0, j = 0, k = l;

        steps.push({
          array: [...a],
          comparing: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
          swapping: [],
          sorted: [],
          message: `Merging subarrays [${l}..${m}] (${leftArr.join(", ")}) and [${m + 1}..${r}] (${rightArr.join(", ")})`,
          comps,
          swaps
        });

        while (i < leftArr.length && j < rightArr.length) {
          comps++;
          if (leftArr[i] <= rightArr[j]) {
            a[k] = leftArr[i];
            i++;
          } else {
            a[k] = rightArr[j];
            j++;
          }
          swaps++;
          steps.push({ array: [...a], comparing: [], swapping: [k], sorted: [], message: `Placed ${a[k]} at index ${k}`, comps, swaps });
          k++;
        }

        while (i < leftArr.length) {
          a[k] = leftArr[i];
          i++;
          k++;
          swaps++;
          steps.push({ array: [...a], comparing: [], swapping: [k - 1], sorted: [], message: `Placed remaining ${a[k - 1]} at index ${k - 1}`, comps, swaps });
        }

        while (j < rightArr.length) {
          a[k] = rightArr[j];
          j++;
          k++;
          swaps++;
          steps.push({ array: [...a], comparing: [], swapping: [k - 1], sorted: [], message: `Placed remaining ${a[k - 1]} at index ${k - 1}`, comps, swaps });
        }
      }

      function mergeSort(l, r) {
        if (l < r) {
          const m = Math.floor((l + r) / 2);
          mergeSort(l, m);
          mergeSort(m + 1, r);
          merge(l, m, r);
        }
      }

      mergeSort(0, a.length - 1);
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: a.map((_, idx) => idx), message: "Merge sort complete! Array is fully sorted.", comps, swaps });
      return steps;
    }
  },
  quick: {
    name: "Quick Sort",
    time: "O(n log n)",
    bestTime: "O(n log n)",
    space: "O(log n)",
    stable: "No",
    desc: "Picks a pivot element and partitions the array around it such that smaller elements are left and larger are right.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      const sorted = [];
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: "Initial array state for Quick Sort.", comps, swaps });

      function partition(low, high) {
        const pivot = a[high];
        steps.push({ array: [...a], comparing: [high], swapping: [], sorted: [...sorted], message: `Chosen pivot arr[${high}]=${pivot}`, comps, swaps });
        let i = low - 1;

        for (let j = low; j < high; j++) {
          comps++;
          steps.push({ array: [...a], comparing: [j, high], swapping: [], sorted: [...sorted], message: `Comparing arr[${j}]=${a[j]} with pivot ${pivot}`, comps, swaps });
          if (a[j] < pivot) {
            i++;
            if (i !== j) {
              const temp = a[i];
              a[i] = a[j];
              a[j] = temp;
              swaps++;
              steps.push({ array: [...a], comparing: [], swapping: [i, j], sorted: [...sorted], message: `Swapped arr[${i}]=${a[i]} with arr[${j}]=${a[j]} (smaller than pivot)`, comps, swaps });
            }
          }
        }
        const temp = a[i + 1];
        a[i + 1] = a[high];
        a[high] = temp;
        swaps++;
        sorted.push(i + 1);
        steps.push({ array: [...a], comparing: [], swapping: [i + 1, high], sorted: [...sorted], message: `Pivot ${pivot} placed into final partition index ${i + 1}`, comps, swaps });
        return i + 1;
      }

      function quickSort(low, high) {
        if (low < high) {
          const pi = partition(low, high);
          quickSort(low, pi - 1);
          quickSort(pi + 1, high);
        } else if (low === high) {
          if (!sorted.includes(low)) sorted.push(low);
        }
      }

      quickSort(0, a.length - 1);
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: a.map((_, idx) => idx), message: "Quick sort complete! Array is sorted.", comps, swaps });
      return steps;
    }
  },
  heap: {
    name: "Heap Sort",
    time: "O(n log n)",
    bestTime: "O(n log n)",
    space: "O(1)",
    stable: "No",
    desc: "Builds a max-heap from the input data, then repeatedly extracts the maximum element and restores heap property.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      const sorted = [];
      const n = a.length;
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [...sorted], message: "Initial array state for Heap Sort.", comps, swaps });

      function heapify(size, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < size) {
          comps++;
          steps.push({ array: [...a], comparing: [left, largest], swapping: [], sorted: [...sorted], message: `Comparing left child arr[${left}]=${a[left]} with arr[${largest}]=${a[largest]}`, comps, swaps });
          if (a[left] > a[largest]) largest = left;
        }

        if (right < size) {
          comps++;
          steps.push({ array: [...a], comparing: [right, largest], swapping: [], sorted: [...sorted], message: `Comparing right child arr[${right}]=${a[right]} with largest arr[${largest}]=${a[largest]}`, comps, swaps });
          if (a[right] > a[largest]) largest = right;
        }

        if (largest !== i) {
          const temp = a[i];
          a[i] = a[largest];
          a[largest] = temp;
          swaps++;
          steps.push({ array: [...a], comparing: [], swapping: [i, largest], sorted: [...sorted], message: `Swapped root ${a[largest]} with largest child ${a[i]} to maintain max-heap`, comps, swaps });
          heapify(size, largest);
        }
      }

      // Build heap
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        steps.push({ array: [...a], comparing: [i], swapping: [], sorted: [...sorted], message: `Heapifying subtree rooted at index ${i}`, comps, swaps });
        heapify(n, i);
      }

      // Extract elements
      for (let i = n - 1; i > 0; i--) {
        const temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        swaps++;
        sorted.unshift(i);
        steps.push({ array: [...a], comparing: [], swapping: [0, i], sorted: [...sorted], message: `Swapped max element ${a[i]} from root to position ${i}`, comps, swaps });
        heapify(i, 0);
      }
      sorted.unshift(0);
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: a.map((_, idx) => idx), message: "Heap sort complete! Array is sorted.", comps, swaps });
      return steps;
    }
  },
  counting: {
    name: "Counting Sort",
    time: "O(n + k)",
    bestTime: "O(n + k)",
    space: "O(k)",
    stable: "Yes",
    desc: "Non-comparison integer sorting algorithm that counts the frequency of each distinct value in the input.",
    generateSteps: (arr) => {
      const steps = [];
      const a = [...arr];
      let comps = 0;
      let swaps = 0;
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [], message: "Initial array state for Counting Sort.", comps, swaps });

      const maxVal = Math.max(...a);
      const minVal = Math.min(...a);
      const range = maxVal - minVal + 1;
      const count = new Array(range).fill(0);

      steps.push({ array: [...a], comparing: [], swapping: [], sorted: [], message: `Identified value range: [${minVal} .. ${maxVal}], allocating count array of size ${range}`, comps, swaps });

      // Count frequencies
      for (let i = 0; i < a.length; i++) {
        count[a[i] - minVal]++;
        steps.push({ array: [...a], comparing: [i], swapping: [], sorted: [], message: `Incrementing frequency of element ${a[i]} at count index ${a[i] - minVal}`, comps, swaps });
      }

      // Reconstruct sorted array
      let idx = 0;
      const sorted = [];
      for (let i = 0; i < range; i++) {
        while (count[i] > 0) {
          a[idx] = i + minVal;
          sorted.push(idx);
          swaps++;
          steps.push({ array: [...a], comparing: [], swapping: [idx], sorted: [...sorted], message: `Placing value ${i + minVal} into sorted array at index ${idx}`, comps, swaps });
          count[i]--;
          idx++;
        }
      }
      steps.push({ array: [...a], comparing: [], swapping: [], sorted: a.map((_, i) => i), message: "Counting sort complete! Array is sorted.", comps, swaps });
      return steps;
    }
  }
};

export default function SortingVisualizer() {
  const [selectedAlgo, setSelectedAlgo] = useState("bubble");
  const [initialArray, setInitialArray] = useState([35, 12, 68, 24, 85, 42, 19, 53]);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(600);
  const timerRef = useRef(null);

  useEffect(() => {
    const algo = ALGORITHMS[selectedAlgo];
    if (algo) {
      const generated = algo.generateSteps(initialArray);
      setSteps(generated);
      setCurrentStepIndex(0);
      setIsPlaying(false);
    }
  }, [selectedAlgo, initialArray]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
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

  function handleShuffle() {
    setIsPlaying(false);
    const newArr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 85) + 12);
    setInitialArray(newArr);
  }

  function handleReset() {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  }

  function handleStepForward() {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  }

  const currentStep = steps[currentStepIndex] || {
    array: initialArray,
    comparing: [],
    swapping: [],
    sorted: [],
    message: "Ready to start.",
    comps: 0,
    swaps: 0
  };

  const algoMeta = ALGORITHMS[selectedAlgo];
  const maxVal = Math.max(...currentStep.array, 100);

  return (
    <div className="space-y-6">
      {/* Algorithm Selection Buttons */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded border border-slate-200 text-xs font-medium">
        {Object.keys(ALGORITHMS).map((key) => {
          const item = ALGORITHMS[key];
          const isActive = selectedAlgo === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedAlgo(key)}
              className={`px-3 py-1.5 rounded transition-colors ${
                isActive ? "bg-slate-900 text-white font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Info & Metrics Card */}
      <div className="bg-white border border-slate-200 rounded p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-bold text-slate-900">{algoMeta.name}</h2>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200">
              Avg: {algoMeta.time}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200">
              Space: {algoMeta.space}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
              Stable: {algoMeta.stable}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">{algoMeta.desc}</p>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono shrink-0">
          <div className="border border-slate-200 rounded px-3 py-1.5 bg-slate-50">
            <span className="text-slate-500 block text-[10px] uppercase">Comparisons</span>
            <span className="text-slate-900 font-bold text-sm">{currentStep.comps}</span>
          </div>
          <div className="border border-slate-200 rounded px-3 py-1.5 bg-slate-50">
            <span className="text-slate-500 block text-[10px] uppercase">Swaps/Writes</span>
            <span className="text-slate-900 font-bold text-sm">{currentStep.swaps}</span>
          </div>
          <div className="border border-slate-200 rounded px-3 py-1.5 bg-slate-50">
            <span className="text-slate-500 block text-[10px] uppercase">Step</span>
            <span className="text-blue-600 font-bold text-sm">
              {currentStepIndex + 1} / {steps.length || 1}
            </span>
          </div>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="bg-white border border-slate-200 rounded p-6">
        {/* Step Explanation Banner */}
        <div className="mb-6 p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center justify-between font-mono">
          <span>{currentStep.message}</span>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-amber-400 inline-block"></span>
              <span className="text-slate-600">Comparing</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-rose-500 inline-block"></span>
              <span className="text-slate-600">Swapping</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block"></span>
              <span className="text-slate-600">Sorted</span>
            </span>
          </div>
        </div>

        {/* Array Bars Visualization */}
        <div className="h-52 flex items-end justify-center space-x-4 border-b border-slate-200 pb-2">
          {currentStep.array.map((val, idx) => {
            const isComparing = currentStep.comparing.includes(idx);
            const isSwapping = currentStep.swapping.includes(idx);
            const isSorted = currentStep.sorted.includes(idx);

            let barColor = "bg-slate-300";
            let textColor = "text-slate-700";

            if (isSwapping) {
              barColor = "bg-rose-500";
              textColor = "text-rose-600 font-bold";
            } else if (isComparing) {
              barColor = "bg-amber-400";
              textColor = "text-amber-700 font-bold";
            } else if (isSorted) {
              barColor = "bg-emerald-500";
              textColor = "text-emerald-700 font-bold";
            }

            const heightPct = Math.max(12, Math.round((val / maxVal) * 100));

            return (
              <div key={idx} className="flex flex-col items-center flex-1 max-w-[56px] transition-all duration-150">
                <span className={`text-xs font-mono mb-1 ${textColor}`}>{val}</span>
                <div
                  className={`w-full rounded-t-sm transition-all duration-200 ${barColor}`}
                  style={{ height: `${heightPct * 1.6}px` }}
                ></div>
                <span className="text-[10px] text-slate-400 font-mono mt-1">[{idx}]</span>
              </div>
            );
          })}
        </div>

        {/* Controls Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
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
              onClick={handleStepForward}
              disabled={isPlaying || currentStepIndex >= steps.length - 1}
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
              <Shuffle className="w-3.5 h-3.5" />
              <span>New Array</span>
            </button>
          </div>

          {/* Speed Control Slider */}
          <div className="flex items-center space-x-2 text-xs text-slate-600">
            <span>Speed:</span>
            <input
              type="range"
              min="100"
              max="1200"
              step="100"
              value={1300 - speed}
              onChange={(e) => setSpeed(1300 - Number(e.target.value))}
              className="w-24 accent-slate-900 cursor-pointer"
            />
            <span className="font-mono text-[11px] w-12">{speed}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
