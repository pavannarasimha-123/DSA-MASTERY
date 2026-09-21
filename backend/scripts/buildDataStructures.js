import fs from "fs";

export const DATA_STRUCTURES = [
  {
    id: "arrays",
    slug: "arrays",
    name: "Arrays",
    category: "Linear Data Structures",
    theory: `An array is a contiguous memory allocation that holds elements of the same data type. Because memory addresses are sequential, any element can be accessed in O(1) time via base address offset: Address(i) = BaseAddress + i * SizeOfElement.

Static Arrays vs Dynamic Arrays:
- Static Array: Fixed size upon creation (int[] arr = new int[10]). Allocated on stack/heap with immutable bounds.
- Dynamic Array (Java ArrayList): Automatically doubles capacity when full (resizing takes O(n), giving O(1) amortized insertion).`,
    operationsTable: [
      { operation: "Access by Index", complexity: "O(1)", note: "Direct memory pointer arithmetic" },
      { operation: "Search (Unsorted)", complexity: "O(n)", note: "Linear scan through elements" },
      { operation: "Search (Sorted)", complexity: "O(log n)", note: "Binary search" },
      { operation: "Insert at beginning", complexity: "O(n)", note: "Shifts all existing elements to the right" },
      { operation: "Insert at end", complexity: "O(1)*", note: "Amortized constant time for dynamic array" },
      { operation: "Delete from beginning", complexity: "O(n)", note: "Shifts all elements left by 1 position" },
      { operation: "Delete from end", complexity: "O(1)", note: "Immediate decrement of size pointer" }
    ],
    javaComparison: {
      primitive: "int[] arr = new int[n]; // Fast, cache-friendly, zero boxing overhead, fixed length.",
      dynamic: "ArrayList<Integer> list = new ArrayList<>(); // Resizable, stores boxed Objects, supports Collections API.",
      whenToUse: "Use primitive int[] for competitive programming and performance-critical loops. Use ArrayList when collection size changes dynamically or Collections utility methods are required."
    },
    commonPatterns: ["Two Pointers", "Sliding Window", "Prefix Sum", "Kadane's Algorithm"],
    topProblems: ["Two Sum", "Container With Most Water", "Trapping Rain Water", "3Sum"]
  },
  {
    id: "strings",
    slug: "strings",
    name: "Strings",
    category: "Linear Data Structures",
    theory: `In Java, a String is an immutable object backed by a byte array (Java 9+ compact strings) or char array. Every modification (concatenation '+') creates a completely new String object, copying characters in O(n) time.

StringBuilder vs StringBuffer:
- StringBuilder: Mutable char sequence, NOT synchronized, high performance.
- StringBuffer: Mutable char sequence, synchronized (thread-safe), slower.`,
    operationsTable: [
      { operation: "Access char at index", complexity: "O(1)", note: "s.charAt(i)" },
      { operation: "Substrings", complexity: "O(k)", note: "Copies k characters into new string" },
      { operation: "Concatenation in loop (+)", complexity: "O(n²)", note: "Repeated string allocations" },
      { operation: "StringBuilder.append()", complexity: "O(1)*", note: "Amortized append to internal buffer" }
    ],
    javaComparison: {
      primitive: "String s = \"hello\"; // Immutable, pooled in String Constant Pool.",
      dynamic: "StringBuilder sb = new StringBuilder(); // Mutable buffer, use inside loops.",
      whenToUse: "Always use StringBuilder when building or appending strings in loops to prevent quadratic O(n²) memory copying overhead."
    },
    commonPatterns: ["Sliding Window", "Two Pointers", "Frequency Counting", "KMP / Rolling Hash"],
    topProblems: ["Valid Palindrome", "Longest Substring Without Repeating Characters", "Minimum Window Substring"]
  },
  {
    id: "linked-list",
    slug: "linked-list",
    name: "Linked List",
    category: "Linear Data Structures",
    theory: `A Linked List consists of sequential nodes where each node contains data and a pointer/reference to the next node (Singly Linked List) and optionally previous node (Doubly Linked List). Elements are scattered non-contiguously in heap memory.

Types:
1. Singly Linked List: node.next
2. Doubly Linked List: node.prev, node.next
3. Circular Linked List: tail.next points back to head`,
    operationsTable: [
      { operation: "Insert at Head", complexity: "O(1)", note: "newHead.next = head" },
      { operation: "Insert at Tail (with tail ref)", complexity: "O(1)", note: "tail.next = newNode" },
      { operation: "Delete Head", complexity: "O(1)", note: "head = head.next" },
      { operation: "Search by Value", complexity: "O(n)", note: "Must traverse node pointers sequentially" },
      { operation: "Access by Index", complexity: "O(n)", note: "No random access pointer arithmetic" }
    ],
    javaComparison: {
      primitive: "class ListNode { int val; ListNode next; ListNode(int x) { val = x; } }",
      dynamic: "LinkedList<Integer> list = new LinkedList<>(); // Doubly linked list in java.util",
      whenToUse: "Use custom ListNode when implementing DSA algorithms. Use java.util.LinkedList when implementing queue/deque operations, though ArrayDeque is often faster due to CPU caching."
    },
    commonPatterns: ["Fast and Slow Pointers", "Dummy Head Node", "In-Place Reversal", "Merge Technique"],
    topProblems: ["Reverse Linked List", "Linked List Cycle", "Middle of Linked List", "Merge Two Sorted Lists"]
  },
  {
    id: "stack",
    slug: "stack",
    name: "Stack",
    category: "Abstract Data Types",
    theory: `A Stack is a Last-In, First-Out (LIFO) abstract data structure. Elements can only be added (push) or removed (pop) from one end called the top.

Why Deque/ArrayDeque over legacy Stack in Java:
- java.util.Stack extends java.util.Vector, meaning EVERY method is synchronized. In single-threaded algorithms, synchronization adds unnecessary lock contention and latency.
- Deque<Integer> stack = new ArrayDeque<>() is unsynchronized, allocates a contiguous ring buffer, and is much faster.`,
    operationsTable: [
      { operation: "Push", complexity: "O(1)*", note: "Add to top of stack" },
      { operation: "Pop", complexity: "O(1)", note: "Remove top element" },
      { operation: "Peek", complexity: "O(1)", note: "Inspect top element without removing" },
      { operation: "Search", complexity: "O(n)", note: "Requires popping elements" }
    ],
    javaComparison: {
      primitive: "Deque<Integer> stack = new ArrayDeque<>(); // Recommended modern Java practice",
      dynamic: "Stack<Integer> stack = new Stack<>(); // Legacy class extending Vector (AVOID)",
      whenToUse: "Use ArrayDeque for all stack requirements. Never use java.util.Stack in modern Java interviews."
    },
    commonPatterns: ["Monotonic Stack", "Expression Parsing", "Parentheses Matching", "DFS Call Simulation"],
    topProblems: ["Valid Parentheses", "Daily Temperatures", "Largest Rectangle in Histogram", "Min Stack"]
  },
  {
    id: "queue",
    slug: "queue",
    name: "Queue & Deque",
    category: "Abstract Data Types",
    theory: `A Queue is a First-In, First-Out (FIFO) structure where items enter at the rear (enqueue / offer) and leave at the front (dequeue / poll).
A Deque (Double-Ended Queue) allows insertions and deletions at both ends in O(1) time.

Circular Queues utilize modulo arithmetic (tail = (tail + 1) % capacity) to reuse deallocated front slots in fixed arrays.`,
    operationsTable: [
      { operation: "Enqueue (offer)", complexity: "O(1)*", note: "Add to tail of queue" },
      { operation: "Dequeue (poll)", complexity: "O(1)", note: "Remove from head of queue" },
      { operation: "Peek", complexity: "O(1)", note: "Inspect head element" }
    ],
    javaComparison: {
      primitive: "Queue<Integer> q = new ArrayDeque<>(); // Standard FIFO queue",
      dynamic: "Deque<Integer> dq = new ArrayDeque<>(); // Double-ended queue",
      whenToUse: "Use ArrayDeque for BFS traversals and sliding window buffers. Use PriorityQueue when elements must be ordered by priority rather than arrival time."
    },
    commonPatterns: ["Breadth-First Search (BFS)", "Sliding Window Maximum", "Monotonic Queue"],
    topProblems: ["Sliding Window Maximum", "Implement Queue using Stacks", "Rotting Oranges"]
  },
  {
    id: "trees",
    slug: "trees",
    name: "Trees & Binary Search Trees",
    category: "Hierarchical Data Structures",
    theory: `A Tree is an acyclic connected hierarchical graph where every node has at most one parent. A Binary Tree restricts each node to at most two children (left and right).

Binary Search Tree (BST) property:
For any node X, all values in X.left < X.val and all values in X.right > X.val.
An in-order traversal of a BST visits nodes in strictly sorted ascending order!`,
    operationsTable: [
      { operation: "Search (Balanced BST)", complexity: "O(log n)", note: "Halves search space each branch" },
      { operation: "Search (Degenerate BST)", complexity: "O(n)", note: "Degenerates into a linked list" },
      { operation: "Insert / Delete (Balanced)", complexity: "O(log n)", note: "Tree rebalancing (AVL/Red-Black)" },
      { operation: "Tree Traversals (In/Pre/Post)", complexity: "O(n)", note: "Visits every node once" }
    ],
    javaComparison: {
      primitive: "class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } }",
      dynamic: "TreeSet<Integer> set = new TreeSet<>(); // Backed by Red-Black Tree",
      whenToUse: "Use custom TreeNode for tree problems. Use TreeSet/TreeMap when dynamic elements must be maintained in sorted order with range queries."
    },
    commonPatterns: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Tree Recursion", "Lowest Common Ancestor"],
    topProblems: ["Maximum Depth of Binary Tree", "Validate Binary Search Tree", "Lowest Common Ancestor", "Invert Binary Tree"]
  },
  {
    id: "heaps",
    slug: "heaps",
    name: "Heaps / Priority Queues",
    category: "Tree-based Data Structures",
    theory: `A Binary Heap is a complete binary tree implemented inside an array where every parent satisfies the heap property:
- Min-Heap: parent <= children (root is the minimum).
- Max-Heap: parent >= children (root is the maximum).

Array indexing: for node at index i:
- Left child = 2*i + 1
- Right child = 2*i + 2
- Parent = (i - 1) / 2`,
    operationsTable: [
      { operation: "Insert (offer)", complexity: "O(log n)", note: "Bubble up / sift up" },
      { operation: "Extract Min/Max (poll)", complexity: "O(log n)", note: "Replace root with last leaf, sift down" },
      { operation: "Peek Root", complexity: "O(1)", note: "Direct access to index 0" },
      { operation: "Heapify array", complexity: "O(n)", note: "Bottom-up buildHeap algorithm" }
    ],
    javaComparison: {
      primitive: "PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // Default Min-Heap",
      dynamic: "PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder()); // Max-Heap",
      whenToUse: "Use Min-Heap of size K to find the K largest elements. Use Max-Heap of size K to find the K smallest elements."
    },
    commonPatterns: ["Top K Elements", "Two Heaps (Running Median)", "Merge K Sorted Lists", "Dijkstra Algorithm"],
    topProblems: ["Kth Largest Element in an Array", "Top K Frequent Elements", "Find Median from Data Stream", "Merge k Sorted Lists"]
  },
  {
    id: "graphs",
    slug: "graphs",
    name: "Graphs",
    category: "Non-Linear Data Structures",
    theory: `A Graph G = (V, E) consists of a set of vertices V and edges E. Edges can be directed or undirected, weighted or unweighted.

Representations:
1. Adjacency List: List<List<Integer>> adj (Memory: O(V + E)). Best for sparse graphs.
2. Adjacency Matrix: int[][] matrix (Memory: O(V²)). Best for dense graphs and O(1) edge lookups.`,
    operationsTable: [
      { operation: "BFS / DFS Traversal", complexity: "O(V + E)", note: "Visits every node and edge once" },
      { operation: "Dijkstra (Shortest Path)", complexity: "O((V + E) log V)", note: "Non-negative edge weights using Min-Heap" },
      { operation: "Bellman-Ford", complexity: "O(V * E)", note: "Handles negative edge weights" },
      { operation: "Kruskal / Prim (MST)", complexity: "O(E log E)", note: "Minimum Spanning Tree" }
    ],
    javaComparison: {
      primitive: "List<List<Integer>> adj = new ArrayList<>(); // Standard Adjacency List",
      dynamic: "Map<Integer, List<Edge>> graph = new HashMap<>(); // For non-integer node labels",
      whenToUse: "Always prefer Adjacency List over Adjacency Matrix unless V is very small (V <= 200) and edge density is near 100%."
    },
    commonPatterns: ["Grid BFS/DFS", "Multi-Source BFS", "Topological Sort (Kahn's)", "Union-Find", "Shortest Path"],
    topProblems: ["Number of Islands", "Course Schedule", "Rotting Oranges", "Network Delay Time"]
  },
  {
    id: "sorting",
    slug: "sorting",
    name: "Sorting Algorithms",
    category: "Fundamental Algorithms",
    theory: `Sorting arranges elements of a list in non-decreasing order. Comparison-based sorting has a mathematical lower bound of Ω(n log n).

Non-comparison sorts (Counting Sort, Radix Sort, Bucket Sort) can achieve O(n) under constrained value ranges.

Key properties:
- Stability: Equal keys maintain their original relative order.
- In-place: Uses O(1) extra space beyond the array.`,
    operationsTable: [
      { operation: "Merge Sort", complexity: "O(n log n)", note: "Stable, Not in-place (O(n) space)" },
      { operation: "Quick Sort", complexity: "O(n log n) avg / O(n²) worst", note: "Unstable, In-place (O(log n) stack)" },
      { operation: "Heap Sort", complexity: "O(n log n)", note: "Unstable, In-place (O(1) space)" },
      { operation: "Counting Sort", complexity: "O(n + k)", note: "Stable, Non-comparison for small integer ranges" },
      { operation: "Insertion Sort", complexity: "O(n) best / O(n²) worst", note: "Stable, In-place, fast on nearly sorted data" }
    ],
    javaComparison: {
      primitive: "Arrays.sort(primitiveArray); // Uses Dual-Pivot Quicksort (O(n log n), in-place, unstable)",
      dynamic: "Arrays.sort(objectArray); // Uses TimSort (O(n log n), adaptive, stable)",
      whenToUse: "Use primitive arrays when stability is irrelevant for speed. Use Object arrays or Collections.sort() when stability matters."
    },
    commonPatterns: ["Divide and Conquer", "Quickselect for Kth element", "Custom Comparator sorting"],
    topProblems: ["Sort Colors (Dutch National Flag)", "Merge Intervals", "Largest Number"]
  }
];

fs.writeFileSync("src/data/dataStructuresData.js", "export const DATA_STRUCTURES = " + JSON.stringify(DATA_STRUCTURES, null, 2) + ";\n", "utf8");
console.log("Wrote dataStructuresData.js successfully!");
