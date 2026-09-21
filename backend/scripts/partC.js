export const rawPartC = [
  {
    id: "union-find", name: "Union Find / Disjoint Set Union",
    desc: "Tracks partitioning of elements into disjoint equivalence sets with near-constant O(α(n)) find and union.",
    why: "Path compression flattens tree depth during lookups while union-by-rank minimizes tree height.",
    when: "Connected components, Kruskal's MST, cycle detection in undirected graphs, accounts merge.",
    clues: ["Connected components", "Redundant connection", "Accounts merge", "Dynamic graph connectivity"],
    time: "O(α(n)) ≈ O(1)", space: "O(n)",
    template: `class DSU {
    int[] parent, rank;
    DSU(int n) {
        parent = new int[n]; rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int i) { return parent[i] == i ? i : (parent[i] = find(parent[i])); }
    boolean union(int i, int j) {
        int rI = find(i), rJ = find(j);
        if (rI == rJ) return false;
        if (rank[rI] < rank[rJ]) parent[rI] = rJ;
        else if (rank[rI] > rank[rJ]) parent[rJ] = rI;
        else { parent[rJ] = rI; rank[rI]++; }
        return true;
    }
}`,
    mistakes: ["Omitting path compression", "Calling union on elements instead of roots"],
    problems: [
      ["Number of Provinces", "Medium", "Graph", "number-of-provinces", "number-of-provinces"],
      ["Redundant Connection", "Medium", "Graph", "redundant-connection", "redundant-connection"],
      ["Accounts Merge", "Medium", "Graph", "accounts-merge", "merging-details"],
      ["Number of Operations to Make Network Connected", "Medium", "Graph", "number-of-operations-to-make-network-connected", "connecting-the-graph"],
      ["Graph Valid Tree", "Medium", "Graph", "graph-valid-tree", "is-it-a-tree"],
      ["Satisfiability of Equality Equations", "Medium", "Graph", "satisfiability-of-equality-equations", "satisfiability-of-equality-equations"],
      ["Min Cost to Connect All Points", "Medium", "Graph", "min-cost-to-connect-all-points", "minimum-spanning-tree"],
      ["Surrounded Regions (DSU)", "Medium", "Grid", "surrounded-regions", "replace-os-with-xs0052"],
      ["Smallest String With Swaps", "Medium", "Graph", "smallest-string-with-swaps", "smallest-string-with-swaps"],
      ["Making A Large Island", "Hard", "Grid", "making-a-large-island", "making-a-large-island"]
    ]
  },
  {
    id: "trie", name: "Trie (Prefix Tree)",
    desc: "A tree structure where nodes represent characters, allowing prefix matching and search in O(L) time.",
    why: "Common string prefixes share path nodes, enabling linear lookup independent of dictionary size.",
    when: "Autocomplete, spell-checking, prefix queries, bitwise XOR trie.",
    clues: ["Prefix matching", "Autocomplete dictionary", "Maximum XOR pair"],
    time: "O(L) per word", space: "O(Total Characters)",
    template: `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd = false;
}`,
    mistakes: ["Assuming fixed 26 letters when unicode appears", "Forgetting isEnd on complete words"],
    problems: [
      ["Implement Trie (Prefix Tree)", "Medium", "Trie", "implement-trie-prefix-tree", "trie-insert-and-search0651"],
      ["Design Add and Search Words Data Structure", "Medium", "Trie", "design-add-and-search-words-data-structure", "word-boggle4143"],
      ["Word Search II", "Hard", "Trie", "word-search-ii", "word-boggle-ii"],
      ["Maximum XOR of Two Numbers in an Array", "Medium", "Trie", "maximum-xor-of-two-numbers-in-an-array", "maximum-xor-of-two-numbers-in-an-array"],
      ["Replace Words", "Medium", "Trie", "replace-words", "replace-words"],
      ["Longest Word in Dictionary", "Medium", "Trie", "longest-word-in-dictionary", "find-the-longest-string--170647"],
      ["Map Sum Pairs", "Medium", "Trie", "map-sum-pairs", "trie-insert-and-search0651"],
      ["Index Pairs of a String", "Easy", "Trie", "index-pairs-of-a-string", "search-pattern-rabin-karp-algorithm--141631"],
      ["Palindrome Pairs", "Hard", "Trie", "palindrome-pairs", "palindrome-pairs"],
      ["Concatenated Words", "Hard", "Trie", "concatenated-words", "word-break-part-23249"]
    ]
  },
  {
    id: "dynamic-programming-1d", name: "Dynamic Programming (1D)",
    desc: "Solves sequential state problems where dp[i] depends on a bounded set of previous states.",
    why: "Caches subproblem solutions, converting exponential recursive trees to linear O(n).",
    when: "Climbing stairs, house robber, coin change, LIS, decode ways.",
    clues: ["Maximum profit at step i", "Count ways to reach target", "dp[i] = opt(dp[i-1], dp[i-2])"],
    time: "O(n)", space: "O(1) or O(n)",
    template: `int prev2 = 1, prev1 = 1;
for (int i = 2; i <= n; i++) {
    int curr = prev1 + prev2;
    prev2 = prev1; prev1 = curr;
}`,
    mistakes: ["Using O(n) array when only last two variables needed", "Base case index errors"],
    problems: [
      ["Climbing Stairs", "Easy", "DP", "climbing-stairs", "count-ways-to-reach-the-nth-stair-1587115620"],
      ["House Robber", "Medium", "DP", "house-robber", "stickler-theif-1587115621"],
      ["House Robber II", "Medium", "DP", "house-robber-ii", "house-robber-ii"],
      ["Coin Change", "Medium", "DP", "coin-change", "coin-change2448"],
      ["Longest Increasing Subsequence", "Medium", "DP", "longest-increasing-subsequence", "longest-increasing-subsequence-1587115620"],
      ["Word Break", "Medium", "DP", "word-break", "word-break1352"],
      ["Decode Ways", "Medium", "DP", "decode-ways", "total-decoding-messages1235"],
      ["Maximum Subarray", "Medium", "DP", "maximum-subarray", "kadanes-algorithm-1587115620"],
      ["Maximum Product Subarray", "Medium", "DP", "maximum-product-subarray", "maximum-product-subarray3604"],
      ["Partition Equal Subset Sum", "Medium", "DP", "partition-equal-subset-sum", "subset-sum-problem2014"]
    ]
  },
  {
    id: "dynamic-programming-2d", name: "Dynamic Programming (2D)",
    desc: "Computes solutions across two interdependent state dimensions (string indices, grid cells) using dp[i][j].",
    why: "Evaluating state dependencies in row-major order guarantees preceding states are precalculated.",
    when: "LCS, edit distance, 0/1 knapsack, unique paths in grid.",
    clues: ["Two string comparison", "Grid minimum cost path", "0/1 Knapsack capacity"],
    time: "O(m * n)", space: "O(n) rolling",
    template: `int[][] dp = new int[m + 1][n + 1];
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        if (s1.charAt(i - 1) == s2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
}`,
    mistakes: ["1-based DP indexing vs 0-based string mismatch", "Not rolling rows for space savings"],
    problems: [
      ["Longest Common Subsequence", "Medium", "DP", "longest-common-subsequence", "longest-common-subsequence-1587115620"],
      ["Edit Distance", "Medium", "DP", "edit-distance", "edit-distance3702"],
      ["Unique Paths", "Medium", "DP", "unique-paths", "number-of-unique-paths5339"],
      ["Unique Paths II", "Medium", "DP", "unique-paths-ii", "special-matrix4201"],
      ["Minimum Path Sum", "Medium", "DP", "minimum-path-sum", "minimum-cost-path3833"],
      ["0/1 Knapsack Problem", "Medium", "DP", "partition-equal-subset-sum", "0-1-knapsack-problem0945"],
      ["Target Sum", "Medium", "DP", "target-sum", "target-sum-1626326450"],
      ["Coin Change II", "Medium", "DP", "coin-change-ii", "coin-change2448"],
      ["Interleaving String", "Medium", "DP", "interleaving-string", "interleaved-strings"],
      ["Maximal Square", "Medium", "DP", "maximal-square", "maximum-size-square-sub-matrix-with-all-1s0301"]
    ]
  },
  {
    id: "bit-manipulation", name: "Bit Manipulation",
    desc: "Performs bitwise boolean algebra directly on binary integer representations in single-cycle O(1) time.",
    why: "Bit operations execute natively on processor ALUs; XOR identity cancels duplicates instantly.",
    when: "Single number finding, power of two verification, counting set bits.",
    clues: ["Numbers appear twice except one", "Check power of two", "Count set bits"],
    time: "O(1)", space: "O(1)",
    template: `int count = 0;
while (n != 0) {
    n &= (n - 1); // clears lowest set bit
    count++;
}`,
    mistakes: ["Bitwise operator precedence bugs", "Negative number bit shifts"],
    problems: [
      ["Single Number", "Easy", "Bit", "single-number", "single-number1014"],
      ["Single Number II", "Medium", "Bit", "single-number-ii", "find-element-occuring-once-when-all-other-are-present-thrice"],
      ["Number of 1 Bits", "Easy", "Bit", "number-of-1-bits", "set-bits0143"],
      ["Counting Bits", "Easy", "Bit", "counting-bits", "count-total-set-bits-1587115620"],
      ["Reverse Bits", "Easy", "Bit", "reverse-bits", "reverse-bits3556"],
      ["Missing Number", "Easy", "Bit", "missing-number", "missing-number-in-array1416"],
      ["Power of Two", "Easy", "Bit", "power-of-two", "power-of-2-1587115620"],
      ["Bitwise AND of Numbers Range", "Medium", "Bit", "bitwise-and-of-numbers-range", "bitwise-and-of-the-array"],
      ["Subsets (Bit Manipulation)", "Medium", "Bit", "subsets", "subsets-1613027340"],
      ["Sum of Two Integers", "Medium", "Bit", "sum-of-two-integers", "addition-without-arithmetic-operators"]
    ]
  },
  {
    id: "bitmasking", name: "Bitmasking (Subset State DP)",
    desc: "Uses an integer bitmask to represent presence/absence of N elements (N <= 20) during state transitions.",
    why: "Integer bits compactly store 2^N state flags, allowing bitwise transitions (mask | (1 << i)).",
    when: "Traveling Salesperson, small matching sets, partition into K subsets.",
    clues: ["N <= 16 to 20", "Choose subset of elements", "Permutation states with memory"],
    time: "O(n * 2ⁿ)", space: "O(2ⁿ)",
    template: `int total = 1 << n;
int[] dp = new int[total];
for (int mask = 0; mask < total; mask++) {
    for (int i = 0; i < n; i++) {
        if ((mask & (1 << i)) == 0) {
            dp[mask | (1 << i)] = Math.min(dp[mask | (1 << i)], dp[mask] + cost[i]);
        }
    }
}`,
    mistakes: ["Using when N > 25 (OutOfMemory)", "Shift precedence errors"],
    problems: [
      ["Partition to K Equal Sum Subsets", "Medium", "Bitmask", "partition-to-k-equal-sum-subsets", "partition-array-to-k-subsets"],
      ["Matchsticks to Square", "Medium", "Bitmask", "matchsticks-to-square", "matchsticks-to-square"],
      ["Shortest Path Visiting All Nodes", "Hard", "Bitmask", "shortest-path-visiting-all-nodes", "traveling-salesman-problem"],
      ["Find the Shortest Superstring", "Hard", "Bitmask", "find-the-shortest-superstring", "shortest-common-supersequence0322"],
      ["Smallest Sufficient Team", "Hard", "Bitmask", "smallest-sufficient-team", "smallest-sufficient-team"],
      ["Maximum Students Taking Exam", "Hard", "Bitmask", "maximum-students-taking-exam", "maximum-students"],
      ["Distribute Repeating Integers", "Hard", "Bitmask", "distribute-repeating-integers", "distribute-integers"],
      ["Can I Win", "Medium", "Bitmask", "can-i-win", "can-i-win"],
      ["Stickers to Spell Word", "Hard", "Bitmask", "stickers-to-spell-word", "stickers-to-spell-word"],
      ["Number of Ways to Wear Different Hats", "Hard", "Bitmask", "number-of-ways-to-wear-different-hats-to-each-other", "assign-hats"]
    ]
  },
  {
    id: "matrix-traversal", name: "Matrix Traversal",
    desc: "Traverses 2D arrays using directional arrays (dx/dy), boundary peeling, and state markings.",
    why: "Direction vectors unify 4-directional transitions cleanly into a single compact loop.",
    when: "Spiral matrix, rotating image, matrix zeroes, word search grid.",
    clues: ["2D grid input", "Spiral traversal", "Rotate matrix 90 degrees"],
    time: "O(m * n)", space: "O(1)",
    template: `int top = 0, bottom = m - 1, left = 0, right = n - 1;
while (top <= bottom && left <= right) {
    for (int i = left; i <= right; i++) res.add(matrix[top][i]);
    top++;
    // continue spiral
}`,
    mistakes: ["Index boundary overflow", "Row and column variable mixups"],
    problems: [
      ["Spiral Matrix", "Medium", "Matrix", "spiral-matrix", "spirally-traversing-a-matrix-1587115621"],
      ["Spiral Matrix II", "Medium", "Matrix", "spiral-matrix-ii", "spiral-matrix-ii"],
      ["Rotate Image", "Medium", "Matrix", "rotate-image", "rotate-by-90-degree-1587115621"],
      ["Set Matrix Zeroes", "Medium", "Matrix", "set-matrix-zeroes", "set-matrix-zeroes"],
      ["Word Search", "Medium", "Matrix", "word-search", "word-search"],
      ["Game of Life", "Medium", "Matrix", "game-of-life", "game-of-life"],
      ["Diagonal Traverse", "Medium", "Matrix", "diagonal-traverse", "print-diagonally4331"],
      ["Valid Sudoku", "Medium", "Matrix", "valid-sudoku", "is-sudoku-valid4820"],
      ["Search a 2D Matrix", "Medium", "Matrix", "search-a-2d-matrix", "search-in-a-matrix-1587115621"],
      ["Transpose Matrix", "Easy", "Matrix", "transpose-matrix", "transpose-of-matrix-1587115621"]
    ]
  },
  {
    id: "kadanes-algorithm", name: "Kadane's Algorithm",
    desc: "Finds the maximum contiguous subarray sum in O(n) time and O(1) space by dynamic prefix restarts.",
    why: "A negative prefix sum only decreases subsequent sums, so resetting to zero is always optimal.",
    when: "Maximum subarray sum, maximum circular subarray sum.",
    clues: ["Maximum subarray sum", "Contiguous subarray with highest sum", "Kadane"],
    time: "O(n)", space: "O(1)",
    template: `int maxSoFar = nums[0], currMax = nums[0];
for (int i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
}
return maxSoFar;`,
    mistakes: ["Initializing to 0 instead of nums[0] (fails on all-negative inputs)"],
    problems: [
      ["Maximum Subarray", "Medium", "Array", "maximum-subarray", "kadanes-algorithm-1587115620"],
      ["Maximum Sum Circular Subarray", "Medium", "Array", "maximum-sum-circular-subarray", "max-circular-subarray-sum-1587115620"],
      ["Maximum Product Subarray", "Medium", "Array", "maximum-product-subarray", "maximum-product-subarray3604"],
      ["Maximum Absolute Sum of Subarray", "Medium", "Array", "maximum-absolute-sum-of-any-subarray", "maximum-absolute-sum"],
      ["Best Time to Buy and Sell Stock", "Easy", "Array", "best-time-to-buy-and-sell-stock", "stock-buy-and-sell2615"],
      ["K-Concatenation Maximum Sum", "Medium", "Array", "k-concatenation-maximum-sum", "k-concatenation"],
      ["Largest Sum Subarray Size >= K", "Medium", "Array", "maximum-subarray", "largest-sum-subarray-of-size-at-least-k3121"],
      ["Maximum Subarray Sum with One Deletion", "Medium", "Array", "maximum-subarray-sum-with-one-deletion", "max-sum-subarray-with-deletion"],
      ["Continuous Subarray Sum", "Medium", "Array", "continuous-subarray-sum", "subarray-with-given-sum-1587115621"],
      ["Maximum Score of Spliced Array", "Hard", "Array", "maximum-score-of-spliced-array", "maximum-spliced-array"]
    ]
  },
  {
    id: "sweep-line", name: "Sweep Line",
    desc: "Processes geometric or interval events along an ordered timeline, tracking active state transitions in O(n log n).",
    why: "Sorting endpoints discretizes continuous time into discrete critical transition timestamps.",
    when: "The skyline problem, meeting rooms, overlapping rectangles.",
    clues: ["Active overlapping intervals", "Skyline outline", "Max simultaneous meetings"],
    time: "O(n log n)", space: "O(n)",
    template: `List<int[]> events = new ArrayList<>();
for (int[] inv : intervals) {
    events.add(new int[]{inv[0], 1});
    events.add(new int[]{inv[1], -1});
}
events.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);`,
    mistakes: ["Tie-breaking errors when start and end overlap at exact same x"],
    problems: [
      ["The Skyline Problem", "Hard", "Sweep", "the-skyline-problem", "the-skyline-problem"],
      ["Meeting Rooms II", "Medium", "Sweep", "meeting-rooms-ii", "attend-all-meetings-ii"],
      ["Rectangle Area II", "Hard", "Sweep", "rectangle-area-ii", "total-area-of-two-overlapping-rectangles"],
      ["Car Pooling (Line Sweep)", "Medium", "Sweep", "car-pooling", "bus-conductor"],
      ["Describe the Painting", "Medium", "Sweep", "describe-the-painting", "line-sweep"],
      ["My Calendar III", "Hard", "Sweep", "my-calendar-iii", "meeting-rooms"],
      ["Minimum Interval to Include Each Query", "Hard", "Sweep", "minimum-interval-to-include-each-query", "minimum-interval"],
      ["Number of Flowers in Full Bloom", "Hard", "Sweep", "number-of-flowers-in-full-bloom", "flowers-in-bloom"],
      ["Employee Free Time", "Hard", "Sweep", "employee-free-time", "employee-free-time"],
      ["Maximum Events That Can Be Attended", "Medium", "Sweep", "maximum-number-of-events-that-can-be-attended", "maximum-number-of-events-that-can-be-attended"]
    ]
  },
  {
    id: "fast-exponentiation", name: "Fast Exponentiation / Math",
    desc: "Computes x^n or matrix^n in logarithmic O(log n) time by squaring the base on even powers and multiplying on odd.",
    why: "Since x^n = (x²)^(n/2) for even n, each squaring step halves the remaining power.",
    when: "Pow(x, n), modular exponentiation, N-th Fibonacci via matrix exponentiation.",
    clues: ["Compute x^n", "Large exponent n up to 10^18", "Matrix exponentiation"],
    time: "O(log n)", space: "O(1)",
    template: `long N = n;
if (N < 0) { x = 1 / x; N = -N; }
double ans = 1.0;
while (N > 0) {
    if (N % 2 == 1) ans *= x;
    x *= x;
    N /= 2;
}`,
    mistakes: ["Overflow on negating Integer.MIN_VALUE in Java", "Modulo missing on intermediate multiplication"],
    problems: [
      ["Pow(x, n)", "Medium", "Math", "powx-n", "power-of-numbers-1587115620"],
      ["Super Pow", "Medium", "Math", "super-pow", "modular-exponentiation-for-large-numbers5537"],
      ["Count Good Numbers", "Medium", "Math", "count-good-numbers", "count-good-numbers"],
      ["Fibonacci Number (Matrix Exp)", "Easy", "Math", "fibonacci-number", "nth-fibonacci-number1359"],
      ["Modular Exponentiation", "Medium", "Math", "powx-n", "modular-exponentiation-for-large-numbers5537"],
      ["Power of Three", "Easy", "Math", "power-of-three", "power-of-3"],
      ["Power of Four", "Easy", "Math", "power-of-four", "power-of-four"],
      ["Check If Number is Powers of Three", "Medium", "Math", "check-if-number-is-a-sum-of-powers-of-three", "powers-of-3"],
      ["Prime Arrangements", "Easy", "Math", "prime-arrangements", "prime-arrangements"],
      ["Knight Dialer (Matrix Exp)", "Medium", "Math", "knight-dialer", "knight-dialer"]
    ]
  }
];
