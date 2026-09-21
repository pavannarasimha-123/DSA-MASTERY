import React, { useState } from "react";
import { Info, HelpCircle } from "lucide-react";

export default function ComplexityVisualizer() {
  const [n, setN] = useState(16);

  function factorial(num) {
    if (num <= 1) return 1;
    let res = 1;
    for (let i = 2; i <= Math.min(num, 14); i++) res *= i;
    return res;
  }

  const complexList = [
    { name: "O(1)", label: "Constant", val: 1, color: "bg-emerald-600", tag: "Excellent" },
    { name: "O(log n)", label: "Logarithmic", val: Math.round(Math.log2(n || 1)), color: "bg-emerald-500", tag: "Excellent" },
    { name: "O(n)", label: "Linear", val: n, color: "bg-blue-600", tag: "Good" },
    { name: "O(n log n)", label: "Linearithmic", val: Math.round(n * Math.log2(n || 1)), color: "bg-indigo-600", tag: "Fair" },
    { name: "O(n²)", label: "Quadratic", val: Math.pow(n, 2), color: "bg-amber-500", tag: "Bad" },
    { name: "O(2ⁿ)", label: "Exponential", val: n <= 25 ? Math.pow(2, n) : "> 3.3 × 10⁷", color: "bg-rose-500", tag: "Horrible" },
    { name: "O(n!)", label: "Factorial", val: n <= 12 ? factorial(n) : "> 4.7 × 10⁸", color: "bg-rose-700", tag: "Horrible" }
  ];

  const maxValForBar = Math.min(typeof complexList[4].val === "number" ? complexList[4].val : 1000, 1000);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Big-O Complexity Visualizer</h1>
        <p className="text-sm text-slate-600 mt-1">
          Explore how execution operations scale asymptotically as input size N grows.
        </p>
      </div>

      {/* Interactive N Slider */}
      <div className="border border-slate-200 rounded p-6 bg-white space-y-4 shadow-sm">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Input Size (n = {n})
          </label>
          <span className="text-xs font-mono text-slate-500">Range: 1 to 40</span>
        </div>

        <input
          type="range"
          min="1"
          max="35"
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />

        <div className="flex justify-between text-[11px] text-slate-400 font-mono">
          <span>n = 1</span>
          <span>n = 10</span>
          <span>n = 20</span>
          <span>n = 35</span>
        </div>
      </div>

      {/* Real-time Operation Counts */}
      <div className="border border-slate-200 rounded overflow-hidden bg-white shadow-sm">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-xs font-bold text-slate-800 uppercase tracking-wider">
          <span>Operations Count Comparison for n = {n}</span>
          <span className="text-slate-500 font-mono font-normal">Approximate Ops</span>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {complexList.map((item) => (
            <div key={item.name} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50">
              <div className="flex items-center space-x-3 w-48">
                <span className="font-mono font-bold text-slate-900 w-20">{item.name}</span>
                <span className="text-slate-500 text-[11px]">{item.label}</span>
              </div>

              {/* Bar visualization */}
              <div className="flex-1 max-w-md mx-2">
                <div className="w-full bg-slate-100 h-2 rounded overflow-hidden">
                  <div
                    className={`${item.color} h-2 rounded`}
                    style={{
                      width: `${Math.min(100, Math.max(2, (Number(item.val) / (maxValForBar || 1)) * 100))}%`
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-end w-48">
                <span className="font-mono font-semibold text-slate-800 text-right">
                  {typeof item.val === "number" ? item.val.toLocaleString() : item.val} ops
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold text-white ${item.color}`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asymptotic Definitions Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded border border-slate-200 bg-white space-y-1">
          <span className="font-bold text-slate-900 font-mono block">Big-O (O)</span>
          <span className="text-blue-700 font-semibold block text-[11px]">Upper Bound</span>
          <p className="text-slate-600 leading-relaxed">
            Worst-case performance guarantee. Represents the absolute upper ceiling of operations for sufficiently large inputs.
          </p>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white space-y-1">
          <span className="font-bold text-slate-900 font-mono block">Big-Theta (Θ)</span>
          <span className="text-indigo-700 font-semibold block text-[11px]">Tight Bound</span>
          <p className="text-slate-600 leading-relaxed">
            Algorithm grows at the exact same asymptotic rate in both upper and lower bounds (e.g. Merge Sort is always Θ(n log n)).
          </p>
        </div>

        <div className="p-4 rounded border border-slate-200 bg-white space-y-1">
          <span className="font-bold text-slate-900 font-mono block">Big-Omega (Ω)</span>
          <span className="text-emerald-700 font-semibold block text-[11px]">Lower Bound</span>
          <p className="text-slate-600 leading-relaxed">
            Best-case scenario performance. (e.g. Insertion Sort on already sorted array is Ω(n)).
          </p>
        </div>
      </div>
    </div>
  );
}
