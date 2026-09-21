/**
 * Pattern Recognition Advisor.
 * Analyzes problem descriptions, keywords, and constraints to suggest likely DSA patterns.
 */
export function identifyLikelyPatterns(description, constraints = "") {
  if (!description || typeof description !== "string") {
    return {
      patterns: [],
      notes: "Please provide a problem statement or scenario to evaluate."
    };
  }

  const text = (description + " " + constraints).toLowerCase();
  const suggestions = [];

  // 1. Sliding Window
  if (
    /(substring|subarray|contiguous|window|longest.*distinct|longest.*unique|max sum subarray of size|at most k|at least k)/i.test(text) &&
    !/(non-contiguous|subsequence)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Sliding Window",
      confidence: "High",
      rationale: "The problem asks for an optimal contiguous subarray or substring matching a condition (e.g. longest, shortest, sum equals/at most K). Sliding Window expands the right boundary and contracts the left boundary to achieve O(n) instead of O(n²).",
      recommendedJavaCollections: ["HashMap<Character, Integer>", "HashSet<Character>", "int[] count = new int[128]"],
      templateName: "Variable Size Window Template",
      exampleProblem: "Longest Substring Without Repeating Characters, Minimum Window Substring"
    });
  }

  // 2. Two Pointers
  if (
    /(sorted array|pair with sum|triplet|palindrome|reverse in place|two sum.*sorted|container with most water|remove duplicates.*sorted)/i.test(text) ||
    (/(left.*right|start.*end|opposite ends)/i.test(text) && /sorted/i.test(text))
  ) {
    suggestions.push({
      pattern: "Two Pointers (Opposite Direction or Same Direction)",
      confidence: "High",
      rationale: "Operating on a sorted sequence or checking symmetrical properties (like palindromes) allows narrowing the search space by moving left and right pointers towards each other based on comparison against the target.",
      recommendedJavaCollections: ["int[] array", "No extra collections needed (O(1) space)"],
      templateName: "Opposite Pointers Template",
      exampleProblem: "Two Sum II - Input Array Is Sorted, 3Sum, Valid Palindrome"
    });
  }

  // 3. Fast and Slow Pointers (Floyd's Tortoise and Hare)
  if (
    /(cycle|loop in linked list|middle of linked list|find duplicate number|circular array)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Fast and Slow Pointers (Floyd's Cycle Finding)",
      confidence: "High",
      rationale: "Moving two pointers at different speeds (1 step vs 2 steps) detects periodicity or finds middle elements in a linked structure without needing extra hash set storage.",
      recommendedJavaCollections: ["ListNode references"],
      templateName: "Tortoise & Hare Template",
      exampleProblem: "Linked List Cycle, Middle of the Linked List, Find the Duplicate Number"
    });
  }

  // 4. Monotonic Stack
  if (
    /(next greater|previous greater|next smaller|previous smaller|daily temperatures|largest rectangle|stock span|histogram)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Monotonic Stack",
      confidence: "High",
      rationale: "Requires finding the nearest greater or smaller element for every position in an array in linear O(n) total time. Maintaining elements in strictly increasing or decreasing order on the stack resolves questions immediately upon violation.",
      recommendedJavaCollections: ["Deque<Integer> stack = new ArrayDeque<>()"],
      templateName: "Monotonic Decreasing Stack Template",
      exampleProblem: "Next Greater Element I, Daily Temperatures, Largest Rectangle in Histogram"
    });
  }

  // 5. Binary Search on Answer
  if (
    /(minimum capacity|maximum minimum|minimum maximum|koko eating|split array largest sum|aggressive cows|capacity to ship)/i.test(text) ||
    (/(find minimum.*such that|find maximum.*such that)/i.test(text) && /(feasible|possible|can achieve)/i.test(text))
  ) {
    suggestions.push({
      pattern: "Binary Search on Answer (Monotonic Predicate)",
      confidence: "High",
      rationale: "The search space is monotonic: if a capacity or speed X is valid, then any value > X is also valid (or vice versa). Binary searching over the range [minAnswer, maxAnswer] with a boolean helper `canAchieve(mid)` delivers O(n log(range)) solution.",
      recommendedJavaCollections: ["Primitive variables (low, high, mid)"],
      templateName: "Binary Search Predicate Template",
      exampleProblem: "Koko Eating Bananas, Capacity To Ship Packages Within D Days, Aggressive Cows"
    });
  }

  // 6. Heap / Top K
  if (
    /(kth largest|kth smallest|top k frequent|merge k sorted|median of data stream|smallest k elements)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Heap / Top-K Pattern",
      confidence: "High",
      rationale: "Finding the K extreme elements or maintaining a dynamic running median is best handled with a PriorityQueue bounded to size K, avoiding costly O(n log n) full sorts.",
      recommendedJavaCollections: ["PriorityQueue<Integer> minHeap = new PriorityQueue<>()", "Collections.reverseOrder() for maxHeap"],
      templateName: "Bounded PriorityQueue Template",
      exampleProblem: "Kth Largest Element in an Array, Top K Frequent Elements, Find Median from Data Stream"
    });
  }

  // 7. BFS / Multi-Source BFS
  if (
    /(shortest path.*unweighted|minimum steps.*grid|level order|nearest zero|rotten oranges|flood fill|word ladder)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Breadth-First Search (BFS) / Multi-source BFS",
      confidence: "High",
      rationale: "Unweighted graphs and grid shortest-path problems guarantee that BFS explores states in order of increasing distance. Starting with all sources in the queue simultaneously solves nearest-distance matrix problems in linear O(V + E) time.",
      recommendedJavaCollections: ["Queue<int[]> queue = new ArrayDeque<>()", "boolean[][] visited"],
      templateName: "Level-by-Level Queue BFS Template",
      exampleProblem: "Rotting Oranges, 01 Matrix, Word Ladder"
    });
  }

  // 8. Topological Sort
  if (
    /(course schedule|prerequisite|task dependency|build order|dag|directed acyclic graph.*order)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Topological Sort (Kahn's Algorithm / In-degree BFS)",
      confidence: "High",
      rationale: "Directed dependencies requiring a valid sequence of tasks without circular dependency must be ordered using Kahn's algorithm with in-degree counting or DFS post-order reversal.",
      recommendedJavaCollections: ["int[] inDegree", "List<List<Integer>> adj", "Queue<Integer> queue = new ArrayDeque<>()"],
      templateName: "Kahn's In-Degree Template",
      exampleProblem: "Course Schedule, Course Schedule II, Alien Dictionary"
    });
  }

  // 9. Union Find / Disjoint Set Union (DSU)
  if (
    /(connected components|redundant connection|number of provinces|kruskal|is graph bipartite|dynamic connectivity|accounts merge)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Disjoint Set Union (Union-Find with Path Compression)",
      confidence: "High",
      rationale: "Dynamic grouping of nodes into equivalence sets or detecting cycles in undirected graphs is achieved with nearly constant time O(alpha(N)) via Union-Find with rank and path compression.",
      recommendedJavaCollections: ["int[] parent", "int[] rank"],
      templateName: "DSU Class Template",
      exampleProblem: "Number of Provinces, Redundant Connection, Accounts Merge"
    });
  }

  // 10. Dynamic Programming
  if (
    /(maximum profit|minimum cost|number of ways|longest common|climbing stairs|coin change|knapsack|edit distance|subsequence.*optimal)/i.test(text) ||
    (/(maximize|minimize|count ways)/i.test(text) && !/(unweighted shortest path)/i.test(text))
  ) {
    suggestions.push({
      pattern: "Dynamic Programming (Memoization / Tabulation)",
      confidence: "High",
      rationale: "The problem exhibits optimal substructure and overlapping subproblems where greedy choices fail. Break the problem into state transitions dp[i] or dp[i][j] representing subproblems.",
      recommendedJavaCollections: ["int[] dp", "int[][] dp", "Integer[][] memo"],
      templateName: "1D / 2D DP Table Template",
      exampleProblem: "Coin Change, Longest Common Subsequence, House Robber, Edit Distance"
    });
  }

  // 11. Prefix Sum / Difference Array
  if (
    /(range sum query|subarray sum equals k|continuous subarray sum|range addition|corporate flight)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Prefix Sum / Difference Array",
      confidence: "High",
      rationale: "Answering multiple range sum queries in O(1) or applying multiple range updates in O(1) before cumulative evaluation is done via prefix sums prefix[i] = prefix[i-1] + nums[i].",
      recommendedJavaCollections: ["int[] prefix", "HashMap<Integer, Integer> prefixCounts"],
      templateName: "Prefix Sum + Hash Map Template",
      exampleProblem: "Subarray Sum Equals K, Range Sum Query - Immutable, Corporate Flight Bookings"
    });
  }

  // 12. Trie (Prefix Tree)
  if (
    /(prefix matching|autocomplete|dictionary.*search|word search ii|maximum xor of two numbers|wildcard matching.*words)/i.test(text)
  ) {
    suggestions.push({
      pattern: "Trie (Prefix Tree)",
      confidence: "High",
      rationale: "Efficient retrieval of keys with common prefixes in O(L) where L is the word length. Avoids scanning through thousands of dictionary strings.",
      recommendedJavaCollections: ["class TrieNode { TrieNode[] children = new TrieNode[26]; boolean isEnd; }"],
      templateName: "Trie Node Insertion & Search Template",
      exampleProblem: "Implement Trie (Prefix Tree), Design Add and Search Words Data Structure, Word Search II"
    });
  }

  // Default fallback if no specific triggers fired
  if (suggestions.length === 0) {
    suggestions.push({
      pattern: "Hashing / Frequency Map",
      confidence: "Moderate",
      rationale: "Whenever you need to track counts, check duplicates, or look up complements in O(1) time without specific structural clues, a Hash Map or Hash Set is the most versatile starting tool.",
      recommendedJavaCollections: ["HashMap<K, V>", "HashSet<T>"],
      templateName: "Frequency Counting Template",
      exampleProblem: "Two Sum, Group Anagrams, Contains Duplicate"
    });
  }

  return {
    patterns: suggestions,
    notes: "DSA pattern classification is an educated heuristic. In technical interviews, start by analyzing constraints: N <= 20 implies Backtracking/Bitmask; N <= 10^5 implies O(N) or O(N log N) using Two Pointers, Sliding Window, or Binary Search; N <= 1000 implies O(N²) DP or Matrix traversal."
  };
}
