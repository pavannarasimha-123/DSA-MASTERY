import React, { useState } from "react";
import { 
  ArrowDownUp, 
  Search, 
  SlidersHorizontal, 
  Layers, 
  GitBranch, 
  Sparkles,
  Zap
} from "lucide-react";
import SortingVisualizer from "../components/visualizers/SortingVisualizer";
import SearchingVisualizer from "../components/visualizers/SearchingVisualizer";
import PointerVisualizers from "../components/visualizers/PointerVisualizers";
import StructureVisualizers from "../components/visualizers/StructureVisualizers";
import DpPatternVisualizers from "../components/visualizers/DpPatternVisualizers";

const TABS = [
  {
    id: "sorting",
    name: "Sorting Algorithms",
    count: "7 Techniques",
    icon: ArrowDownUp,
    desc: "Bubble, Selection, Insertion, Merge, Quick, Heap & Counting sorts with real-time comparisons and pointer movements."
  },
  {
    id: "searching",
    name: "Searching Techniques",
    count: "4 Techniques",
    icon: Search,
    desc: "Linear Search, Binary Search, Lower Bound, and Upper Bound with interval boundary pruning."
  },
  {
    id: "pointers",
    name: "Pointers & Sliding Window",
    count: "3 Patterns",
    icon: SlidersHorizontal,
    desc: "Two Pointers (converging target sum), Sliding Window (fixed subarray of size K), and Floyd's Cycle Detection."
  },
  {
    id: "structures",
    name: "Stacks, Trees & Heaps",
    count: "3 Structures",
    icon: Layers,
    desc: "Monotonic Stack (Next Greater Element), Binary Tree Traversals (In/Pre/Post/Level Order), and Min-Heap PriorityQueue."
  },
  {
    id: "dp",
    name: "DP & Prefix Sum",
    count: "3 Techniques",
    icon: GitBranch,
    desc: "Kadane's Algorithm (Max Subarray Sum), Prefix Sum (O(1) Range Queries), and 0/1 Knapsack 2D DP Table."
  }
];

export default function Visualizers() {
  const [activeTab, setActiveTab] = useState("sorting");

  const currentTabMeta = TABS.find((t) => t.id === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center space-x-2 text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Algorithm Lab</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Algorithm & Data Structure Visualizers
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Step-by-step visual execution environments for essential sorting algorithms, search mechanics, pointer techniques, and algorithmic design patterns.
        </p>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 border-b border-slate-200 pb-3">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col text-left p-2.5 rounded border transition-all ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? "bg-slate-800 text-slate-300 border border-slate-700" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </div>
              <span className="text-xs font-semibold truncate">{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Visualizer Container */}
      <div className="transition-all duration-200">
        {activeTab === "sorting" && <SortingVisualizer />}
        {activeTab === "searching" && <SearchingVisualizer />}
        {activeTab === "pointers" && <PointerVisualizers />}
        {activeTab === "structures" && <StructureVisualizers />}
        {activeTab === "dp" && <DpPatternVisualizers />}
      </div>
    </div>
  );
}
