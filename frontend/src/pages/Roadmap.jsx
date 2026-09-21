import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Roadmap() {
  const levels = [
    {
      level: "LEVEL 1",
      title: "Fundamentals & Complexity Analysis",
      description: "Master the mathematical groundwork of algorithm analysis and primitive memory representation in Java.",
      topics: [
        { name: "Programming Basics & Memory", desc: "Stack vs Heap memory, reference vs primitive types, call frames." },
        { name: "Asymptotic Analysis", desc: "Big-O (upper bound), Big-Theta (tight bound), Big-Omega (lower bound)." },
        { name: "Recursion Basics", desc: "Base cases, call stack unwinding, recurrence relations, recursion trees." },
        { name: "Mathematics for DSA", desc: "Modulo arithmetic, fast exponentiation, prime sieves, bitwise operators." }
      ]
    },
    {
      level: "LEVEL 2",
      title: "Linear Data Structures & Classic Patterns",
      description: "Understand contiguous arrays, dynamic arrays, pointer manipulations, and LIFO/FIFO mechanics.",
      topics: [
        { name: "Arrays & Dynamic Arrays", desc: "int[] vs ArrayList<Integer>, amortized resizing, memory locality.", link: "/data-structures/arrays" },
        { name: "Strings & String Manipulation", desc: "String immutability, String Constant Pool, StringBuilder vs StringBuffer.", link: "/data-structures/strings" },
        { name: "Linked Lists", desc: "Singly, Doubly, Circular. Dummy head node, cycle detection, list reversal.", link: "/data-structures/linked-list" },
        { name: "Stack & Monotonic Stack", desc: "LIFO, why ArrayDeque > Stack, next greater/smaller element patterns.", link: "/data-structures/stack" },
        { name: "Queue & Deque", desc: "FIFO, ArrayDeque for BFS, sliding window maximum with monotonic deques.", link: "/data-structures/queue" }
      ]
    },
    {
      level: "LEVEL 3",
      title: "Hashing, Trees & Heaps",
      description: "Transition to hierarchical and bucket-based indexing for sub-linear lookups and priority scheduling.",
      topics: [
        { name: "Hashing & Java Collections", desc: "Hash function, collision resolution, load factors, HashMap internals, TreeSet/TreeMap.", link: "/java-collections" },
        { name: "Binary Trees & BSTs", desc: "DFS traversals (in/pre/post), BFS level order, LCA, balanced BST properties.", link: "/data-structures/trees" },
        { name: "Heaps & PriorityQueue", desc: "Binary min/max heaps, heapify in O(n), Top K elements, two heaps running median.", link: "/data-structures/heaps" },
        { name: "Sorting & Searching", desc: "Merge sort, Quicksort, Binary search on answers, lower/upper bounds.", link: "/data-structures/sorting" }
      ]
    },
    {
      level: "LEVEL 4",
      title: "Graphs & Dynamic Programming",
      description: "Master multi-dimensional state transitions and graph topological algorithms.",
      topics: [
        { name: "Graph Representations & Traversals", desc: "Adjacency lists, BFS shortest paths, multi-source BFS, cycle detection.", link: "/data-structures/graphs" },
        { name: "Topological Sort & DSU", desc: "Kahn's in-degree BFS, Disjoint Set Union with path compression & rank.", link: "/patterns/topological-sort" },
        { name: "1D Dynamic Programming", desc: "Memoization vs Tabulation, space optimization, climbing stairs, house robber, LIS.", link: "/patterns/dynamic-programming-1d" },
        { name: "2D & Grid DP", desc: "LCS, Edit Distance, 0/1 Knapsack, matrix path minimizations.", link: "/patterns/dynamic-programming-2d" }
      ]
    },
    {
      level: "LEVEL 5",
      title: "Advanced Patterns & Interview Polish",
      description: "High-level patterns for senior software engineer and competitive interview tracks.",
      topics: [
        { name: "Trie (Prefix Tree)", desc: "Prefix searches, autocomplete, maximum XOR bitwise trie.", link: "/patterns/trie" },
        { name: "Bitmask DP & Combinatorics", desc: "Subset state representation with integers for N <= 20.", link: "/patterns/bitmasking" },
        { name: "Sweep Line & Intervals", desc: "Timeline event sorting, overlapping range consolidation.", link: "/patterns/sweep-line" },
        { name: "Mock Interview Strategy", desc: "Timed coding, communicating trade-offs, constraint verification.", link: "/interview-mode" }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Complete Java DSA Roadmap</h1>
        <p className="text-sm text-slate-600 mt-1">
          A progression path designed to build strong mental models from fundamentals to advanced algorithmic patterns.
        </p>
      </div>

      <div className="space-y-8">
        {levels.map((lvl, idx) => (
          <div key={lvl.level} className="border border-slate-200 rounded p-6 bg-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-mono font-bold">
                  {lvl.level}
                </span>
                <h2 className="font-bold text-base text-slate-900">{lvl.title}</h2>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{lvl.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {lvl.topics.map((t, tIdx) => (
                <div key={tIdx} className="p-3 rounded border border-slate-100 bg-slate-50 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-slate-900">{t.name}</span>
                    {t.link && (
                      <Link to={t.link} className="text-[11px] text-blue-600 hover:underline flex items-center space-x-0.5">
                        <span>Learn</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
