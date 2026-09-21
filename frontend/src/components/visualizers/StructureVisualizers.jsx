import React, { useState } from "react";
import { StepForward, RotateCcw, Plus, Trash2, ArrowDown } from "lucide-react";

export default function StructureVisualizers() {
  const [subTab, setSubTab] = useState("monotonicStack"); // 'monotonicStack' | 'treeTraversal' | 'minHeap'

  return (
    <div className="space-y-6">
      <div className="flex space-x-2 border-b border-slate-200 pb-2 text-xs font-medium">
        <button
          onClick={() => setSubTab("monotonicStack")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "monotonicStack" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Monotonic Stack (Next Greater Element)
        </button>
        <button
          onClick={() => setSubTab("treeTraversal")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "treeTraversal" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Binary Tree Traversals (DFS & BFS)
        </button>
        <button
          onClick={() => setSubTab("minHeap")}
          className={`px-3 py-1.5 rounded transition-colors ${
            subTab === "minHeap" ? "bg-slate-900 text-white font-bold" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Min-Heap / PriorityQueue
        </button>
      </div>

      {subTab === "monotonicStack" && <MonotonicStackVisualizer />}
      {subTab === "treeTraversal" && <TreeTraversalVisualizer />}
      {subTab === "minHeap" && <MinHeapVisualizer />}
    </div>
  );
}

// 1. Monotonic Stack (Next Greater Element)
function MonotonicStackVisualizer() {
  const arr = [4, 5, 2, 10, 8];
  // We compute steps scanning from right to left (standard NGE pattern)
  // Stack stores elements in decreasing order from bottom to top
  const [stepIdx, setStepIdx] = useState(0);

  const steps = [
    { currIdx: -1, stack: [], nge: [-1, -1, -1, -1, -1], msg: "Starting Next Greater Element scan from right to left (i = 4)." },
    { currIdx: 4, stack: [8], nge: [-1, -1, -1, -1, -1], msg: "i = 4, arr[4]=8. Stack empty -> NGE[4] = -1. Push 8 onto stack." },
    { currIdx: 3, stack: [8], nge: [-1, -1, -1, -1, -1], msg: "i = 3, arr[3]=10. Top of stack (8) <= 10. Popping 8." },
    { currIdx: 3, stack: [10], nge: [-1, -1, -1, -1, -1], msg: "Stack empty -> NGE[3] = -1. Push 10 onto stack." },
    { currIdx: 2, stack: [10, 2], nge: [-1, -1, 10, -1, -1], msg: "i = 2, arr[2]=2. Top is 10 > 2 -> NGE[2] = 10. Push 2 onto stack." },
    { currIdx: 1, stack: [10, 2], nge: [-1, -1, 10, -1, -1], msg: "i = 1, arr[1]=5. Top of stack (2) <= 5. Popping 2." },
    { currIdx: 1, stack: [10, 5], nge: [-1, 10, 10, -1, -1], msg: "Top is 10 > 5 -> NGE[1] = 10. Push 5 onto stack." },
    { currIdx: 0, stack: [10, 5, 4], nge: [5, 10, 10, -1, -1], msg: "i = 0, arr[0]=4. Top is 5 > 4 -> NGE[0] = 5. Push 4 onto stack." },
    { currIdx: -1, stack: [10, 5, 4], nge: [5, 10, 10, -1, -1], msg: "Scan complete in O(n) total time! Every element pushed and popped at most once." }
  ];

  const current = steps[stepIdx];

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Monotonic Stack – Next Greater Element</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Maintains monotonic invariant. Each element is pushed and popped at most once for O(n) overall time complexity.
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200">
          Step {stepIdx + 1} / {steps.length}
        </span>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {current.msg}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        {/* Array */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Input Array & NGE Result</h4>
          <div className="grid grid-cols-5 gap-3">
            {arr.map((val, idx) => {
              const isCurrent = current.currIdx === idx;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[10px] text-slate-400 font-mono mb-1">[{idx}]</span>
                  <div
                    className={`w-full aspect-square flex items-center justify-center rounded border font-mono text-lg transition-all ${
                      isCurrent
                        ? "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-500"
                        : "bg-white border-slate-300 text-slate-900"
                    }`}
                  >
                    {val}
                  </div>
                  <div className="mt-2 w-full text-center py-1 bg-slate-100 rounded border border-slate-200 text-xs font-mono">
                    <span className="text-[9px] text-slate-500 block">NGE</span>
                    <span className="font-bold text-slate-800">{current.nge[idx]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stack Visualizer */}
        <div className="space-y-2 border-l border-slate-200 pl-6">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Stack (Top to Bottom)</h4>
          <div className="w-36 h-48 border-2 border-dashed border-slate-300 rounded flex flex-col justify-end p-2 bg-slate-50 space-y-1">
            {current.stack.length === 0 ? (
              <span className="text-[11px] text-slate-400 text-center my-auto">Stack Empty</span>
            ) : (
              [...current.stack].reverse().map((item, idx) => (
                <div
                  key={idx}
                  className={`w-full py-1 text-center font-mono text-xs rounded border ${
                    idx === 0
                      ? "bg-blue-600 text-white font-bold border-blue-700"
                      : "bg-white text-slate-800 border-slate-300"
                  }`}
                >
                  {item} {idx === 0 && <span className="text-[9px]">(top)</span>}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-2 pt-2">
        <button
          onClick={() => setStepIdx((p) => Math.min(steps.length - 1, p + 1))}
          disabled={stepIdx >= steps.length - 1}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <StepForward className="w-3.5 h-3.5" />
          <span>Next Step</span>
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

// 2. Tree Traversal Visualizer
function TreeTraversalVisualizer() {
  const [traversalType, setTraversalType] = useState("inorder");
  const [visitIndex, setVisitIndex] = useState(0);

  // Tree structure:
  //         1
  //       /   \
  //      2     3
  //     / \   / \
  //    4   5 6   7
  const treeNodes = [
    { id: 1, val: 1, left: 2, right: 3, x: 200, y: 30 },
    { id: 2, val: 2, left: 4, right: 5, x: 100, y: 100 },
    { id: 3, val: 3, left: 6, right: 7, x: 300, y: 100 },
    { id: 4, val: 4, left: null, right: null, x: 50, y: 170 },
    { id: 5, val: 5, left: null, right: null, x: 150, y: 170 },
    { id: 6, val: 6, left: null, right: null, x: 250, y: 170 },
    { id: 7, val: 7, left: null, right: null, x: 350, y: 170 }
  ];

  const orders = {
    inorder: {
      name: "Inorder Traversal (Left, Root, Right)",
      sequence: [4, 2, 5, 1, 6, 3, 7],
      desc: "For a Binary Search Tree (BST), Inorder traversal visits keys in strictly sorted ascending order."
    },
    preorder: {
      name: "Preorder Traversal (Root, Left, Right)",
      sequence: [1, 2, 4, 5, 3, 6, 7],
      desc: "Visits the root first; commonly used to clone, serialize, or copy a tree structure."
    },
    postorder: {
      name: "Postorder Traversal (Left, Right, Root)",
      sequence: [4, 5, 2, 6, 7, 3, 1],
      desc: "Processes children before the root; ideal for bottom-up calculation (tree depth, deletion)."
    },
    levelorder: {
      name: "Level Order Traversal (BFS via Queue)",
      sequence: [1, 2, 3, 4, 5, 6, 7],
      desc: "Visits nodes level by level horizontally using an ArrayDeque queue."
    }
  };

  const activeSeq = orders[traversalType].sequence;
  const visitedSoFar = activeSeq.slice(0, visitIndex);
  const currentVisitedNode = activeSeq[visitIndex - 1];

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">{orders[traversalType].name}</h3>
          <p className="text-xs text-slate-600 mt-0.5">{orders[traversalType].desc}</p>
        </div>

        <div className="flex space-x-1.5 text-xs font-medium">
          {Object.keys(orders).map((key) => (
            <button
              key={key}
              onClick={() => {
                setTraversalType(key);
                setVisitIndex(0);
              }}
              className={`px-2.5 py-1 rounded capitalize transition-colors ${
                traversalType === key ? "bg-slate-900 text-white font-bold" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* SVG Tree */}
        <div className="w-full max-w-md h-56 bg-slate-50 border border-slate-200 rounded relative">
          <svg className="w-full h-full" viewBox="0 0 400 220">
            {/* Edges */}
            <line x1="200" y1="30" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="200" y1="30" x2="300" y2="100" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="100" y1="100" x2="50" y2="170" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="100" y1="100" x2="150" y2="170" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="300" y1="100" x2="250" y2="170" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="300" y1="100" x2="350" y2="170" stroke="#cbd5e1" strokeWidth="2" />

            {/* Nodes */}
            {treeNodes.map((node) => {
              const isVisited = visitedSoFar.includes(node.val);
              const isCurrent = currentVisitedNode === node.val;
              let fill = "#ffffff";
              let stroke = "#94a3b8";
              let textFill = "#1e293b";

              if (isCurrent) {
                fill = "#2563eb";
                stroke = "#1d4ed8";
                textFill = "#ffffff";
              } else if (isVisited) {
                fill = "#10b981";
                stroke = "#059669";
                textFill = "#ffffff";
              }

              return (
                <g key={node.id}>
                  <circle cx={node.x} cy={node.y} r="18" fill={fill} stroke={stroke} strokeWidth="2" />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill={textFill}
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {node.val}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Traversal Order Output List */}
        <div className="w-full md:w-64 space-y-2">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Visited Output Order</h4>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded min-h-24 flex flex-wrap gap-2 items-center">
            {visitedSoFar.length === 0 ? (
              <span className="text-xs text-slate-400 font-mono">No nodes visited yet. Click 'Step Next'.</span>
            ) : (
              visitedSoFar.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-bold ${
                    item === currentVisitedNode ? "bg-blue-600 text-white ring-2 ring-blue-400" : "bg-emerald-600 text-white"
                  }`}
                >
                  {item}
                </div>
              ))
            )}
          </div>
          <span className="text-[11px] text-slate-500 font-mono block">
            Progress: {visitIndex} / {activeSeq.length} nodes
          </span>
        </div>
      </div>

      <div className="flex space-x-2 pt-2">
        <button
          onClick={() => setVisitIndex((prev) => Math.min(activeSeq.length, prev + 1))}
          disabled={visitIndex >= activeSeq.length}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50"
        >
          <StepForward className="w-3.5 h-3.5" />
          <span>Step Next</span>
        </button>
        <button
          onClick={() => setVisitIndex(0)}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}

// 3. Min-Heap Visualizer
function MinHeapVisualizer() {
  const [heap, setHeap] = useState([4, 10, 7, 15, 20, 12]);
  const [inputVal, setInputVal] = useState("");
  const [log, setLog] = useState("Min-Heap initialized. Root is always the minimum element (O(1) peek).");

  function insertHeap() {
    const val = Number(inputVal);
    if (isNaN(val) || inputVal.trim() === "") return;
    const newHeap = [...heap, val];
    let curr = newHeap.length - 1;

    // Bubble up
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);
      if (newHeap[curr] < newHeap[parent]) {
        const temp = newHeap[curr];
        newHeap[curr] = newHeap[parent];
        newHeap[parent] = temp;
        curr = parent;
      } else {
        break;
      }
    }
    setHeap(newHeap);
    setLog(`Inserted ${val} and performed bubble-up in O(log n) time.`);
    setInputVal("");
  }

  function extractMin() {
    if (heap.length === 0) return;
    const min = heap[0];
    if (heap.length === 1) {
      setHeap([]);
      setLog(`Extracted min ${min}. Heap is now empty.`);
      return;
    }

    const newHeap = [...heap];
    newHeap[0] = newHeap.pop();
    let curr = 0;

    // Sift down
    while (true) {
      let smallest = curr;
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;

      if (left < newHeap.length && newHeap[left] < newHeap[smallest]) smallest = left;
      if (right < newHeap.length && newHeap[right] < newHeap[smallest]) smallest = right;

      if (smallest !== curr) {
        const temp = newHeap[curr];
        newHeap[curr] = newHeap[smallest];
        newHeap[smallest] = temp;
        curr = smallest;
      } else {
        break;
      }
    }
    setHeap(newHeap);
    setLog(`Extracted root minimum ${min}. Moved last element to root and sifted down in O(log n) time.`);
  }

  return (
    <div className="bg-white border border-slate-200 rounded p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Binary Min-Heap (Java PriorityQueue)</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Complete binary tree array representation where parent ≤ children. Insert & Extract-Min take O(log n).
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Val"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="w-16 px-2 py-1 border border-slate-300 rounded text-xs font-mono"
          />
          <button
            onClick={insertHeap}
            className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Insert</span>
          </button>
          <button
            onClick={extractMin}
            disabled={heap.length === 0}
            className="flex items-center space-x-1 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded hover:bg-slate-800 disabled:opacity-50"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Extract Min</span>
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-800">
        {log}
      </div>

      {/* Heap Array View */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Internal Array Representation</h4>
        <div className="grid grid-cols-8 gap-2">
          {heap.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-[10px] text-slate-400 font-mono mb-1">[{idx}]</span>
              <div
                className={`w-full aspect-square flex items-center justify-center rounded border font-mono text-base font-bold ${
                  idx === 0 ? "bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-400" : "bg-white border-slate-300 text-slate-800"
                }`}
              >
                {val}
              </div>
              {idx === 0 && <span className="text-[9px] text-emerald-700 font-bold mt-1">Min (Root)</span>}
            </div>
          ))}
          {heap.length === 0 && <span className="text-xs text-slate-400 italic">Heap is currently empty.</span>}
        </div>
      </div>
    </div>
  );
}
