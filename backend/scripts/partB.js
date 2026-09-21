export const rawPartB = [
  {
    id: "heap-top-k", name: "Heap / Top K",
    desc: "Uses a min-heap or max-heap bounded to size K to track extreme elements in O(n log k) time and O(k) space.",
    why: "A Min-Heap of size K stores the K largest elements seen so far; root points directly to the K-th largest element.",
    when: "Top K frequent elements, Kth largest/smallest, merging K sorted streams.",
    clues: ["Kth largest / smallest", "Top K frequent", "Running median", "Merge K sorted lists"],
    time: "O(n log k)", space: "O(k)",
    template: `PriorityQueue<Integer> minHeap = new PriorityQueue<>();
for (int num : nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) minHeap.poll();
}
return minHeap.peek();`,
    mistakes: ["Using Max-Heap when Min-Heap is needed", "Omitting Collections.reverseOrder()"],
    problems: [
      ["Kth Largest Element in an Array", "Medium", "Heap", "kth-largest-element-in-an-array", "k-largest-elements4207"],
      ["Top K Frequent Elements", "Medium", "Heap", "top-k-frequent-elements", "top-k-frequent-elements-in-array"],
      ["Find Median from Data Stream", "Hard", "Heap", "find-median-from-data-stream", "find-median-in-a-stream-1587115620"],
      ["Merge k Sorted Lists", "Hard", "Heap", "merge-k-sorted-lists", "merge-k-sorted-linked-lists"],
      ["K Closest Points to Origin", "Medium", "Heap", "k-closest-points-to-origin", "k-closest-point-to-origin"],
      ["Reorganize String", "Medium", "Heap", "reorganize-string", "rearrange-characters4649"],
      ["Task Scheduler", "Medium", "Heap", "task-scheduler", "task-scheduler"],
      ["Kth Smallest Element in a Sorted Matrix", "Medium", "Heap", "kth-smallest-element-in-a-sorted-matrix", "kth-element-in-matrix"],
      ["Smallest Range Covering Elements from K Lists", "Hard", "Heap", "smallest-range-covering-elements-from-k-lists", "find-smallest-range-containing-elements-from-k-lists"],
      ["Sort Characters By Frequency", "Medium", "Heap", "sort-characters-by-frequency", "sorting-elements-of-an-array-by-frequency"]
    ]
  },
  {
    id: "merge-intervals", name: "Merge Intervals",
    desc: "Sorts intervals by start coordinate and merges overlapping ranges into unified disjoint segments.",
    why: "Sorting guarantees that any overlapping candidate appears sequentially right after the current interval.",
    when: "Meeting rooms, calendar conflicts, range consolidation.",
    clues: ["Overlapping intervals", "Meeting schedule", "Merge ranges", "Insert interval"],
    time: "O(n log n)", space: "O(n)",
    template: `Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
List<int[]> merged = new ArrayList<>();
for (int[] inv : intervals) {
    if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < inv[0]) merged.add(inv);
    else merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], inv[1]);
}`,
    mistakes: ["Using a[0] - b[0] (integer overflow)", "Forgetting Math.max for interval end"],
    problems: [
      ["Merge Intervals", "Medium", "Array", "merge-intervals", "overlapping-intervals--170633"],
      ["Insert Interval", "Medium", "Array", "insert-interval", "insert-interval-1666736233"],
      ["Non-overlapping Intervals", "Medium", "Array", "non-overlapping-intervals", "non-overlapping-intervals"],
      ["Minimum Number of Arrows to Burst Balloons", "Medium", "Array", "minimum-number-of-arrows-to-burst-balloons", "minimum-platforms-1587115620"],
      ["Meeting Rooms", "Easy", "Array", "meeting-rooms", "attend-all-meetings"],
      ["Meeting Rooms II", "Medium", "Array", "meeting-rooms-ii", "attend-all-meetings-ii"],
      ["Interval List Intersections", "Medium", "Array", "interval-list-intersections", "interval-list-intersections"],
      ["Car Pooling", "Medium", "Array", "car-pooling", "bus-conductor"],
      ["Employee Free Time", "Hard", "Array", "employee-free-time", "employee-free-time"],
      ["Teemo Attacking", "Easy", "Array", "teemo-attacking", "teemo-attacking"]
    ]
  },
  {
    id: "greedy", name: "Greedy Algorithms",
    desc: "Chooses the locally optimal decision at each step with mathematical assurance of reaching global optimum.",
    why: "Greedy choice property proves that local choices never eliminate the global optimum.",
    when: "Activity selection, jump game, interval scheduling, fractional knapsack.",
    clues: ["Maximize profit at each step", "Jump Game reachability", "Gas Station circular trip"],
    time: "O(n) or O(n log n)", space: "O(1)",
    template: `int maxReach = 0;
for (int i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
}
return true;`,
    mistakes: ["Applying when decisions invalidate future alternatives (requires DP)", "Incorrect sort comparator"],
    problems: [
      ["Jump Game", "Medium", "Greedy", "jump-game", "jump-game"],
      ["Jump Game II", "Medium", "Greedy", "jump-game-ii", "minimum-number-of-jumps-1587115620"],
      ["Gas Station", "Medium", "Greedy", "gas-station", "circular-tour-1587115620"],
      ["Assign Cookies", "Easy", "Greedy", "assign-cookies", "assign-cookies"],
      ["Candy", "Hard", "Greedy", "candy", "candy"],
      ["Lemonade Change", "Easy", "Greedy", "lemonade-change", "lemonade-change"],
      ["Minimum Platforms", "Medium", "Greedy", "meeting-rooms-ii", "minimum-platforms-1587115620"],
      ["Fractional Knapsack", "Medium", "Greedy", "maximum-units-on-a-truck", "fractional-knapsack-1587115620"],
      ["Job Sequencing Problem", "Medium", "Greedy", "maximum-profit-in-job-scheduling", "job-sequencing-problem-1587115620"],
      ["Task Scheduler", "Medium", "Greedy", "task-scheduler", "task-scheduler"]
    ]
  },
  {
    id: "backtracking", name: "Backtracking",
    desc: "Builds candidates incrementally and abandons (backtracks) as soon as constraints are violated.",
    why: "Prunes entire combinatorial subtrees early (choose -> explore -> undo).",
    when: "Subsets, permutations, combinations, Sudoku solver, N-Queens, word search in grid.",
    clues: ["Find all combinations", "N-Queens", "Sudoku solver", "Generate permutations"],
    time: "O(k^n)", space: "O(n) call stack",
    template: `void backtrack(List<List<Integer>> res, List<Integer> curr, int[] nums, int start) {
    res.add(new ArrayList<>(curr));
    for (int i = start; i < nums.length; i++) {
        curr.add(nums[i]);
        backtrack(res, curr, nums, i + 1);
        curr.remove(curr.size() - 1);
    }
}`,
    mistakes: ["Forgetting to make a new ArrayList<>(curr) copy", "Forgetting to undo the choice"],
    problems: [
      ["Subsets", "Medium", "Backtracking", "subsets", "subsets-1613027340"],
      ["Subsets II", "Medium", "Backtracking", "subsets-ii", "subsets-ii"],
      ["Permutations", "Medium", "Backtracking", "permutations", "permutations-of-a-given-string1158"],
      ["Combination Sum", "Medium", "Backtracking", "combination-sum", "combination-sum-1587115620"],
      ["Combination Sum II", "Medium", "Backtracking", "combination-sum-ii", "combination-sum-ii"],
      ["N-Queens", "Hard", "Backtracking", "n-queens", "n-queen-problem0315"],
      ["Sudoku Solver", "Hard", "Backtracking", "sudoku-solver", "solve-the-sudoku-1587115621"],
      ["Word Search", "Medium", "Backtracking", "word-search", "word-search"],
      ["Palindrome Partitioning", "Medium", "Backtracking", "palindrome-partitioning", "palindromic-patitioning4845"],
      ["Letter Combinations of a Phone Number", "Medium", "Backtracking", "letter-combinations-of-a-phone-number", "possible-words-from-phone-digits-1587115620"]
    ]
  },
  {
    id: "divide-and-conquer", name: "Divide and Conquer",
    desc: "Splits a problem into independent subproblems, recursively solves them, and merges results in O(n log n).",
    why: "Balanced division reduces recursive depth to O(log n), beating quadratic brute force.",
    when: "Merge sort, quicksort, closest pair of points, fast exponentiation.",
    clues: ["Split into balanced halves", "Merge sorted results", "Master theorem recurrence"],
    time: "O(n log n)", space: "O(n)",
    template: `void mergeSort(int[] a, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort(a, l, m); mergeSort(a, m + 1, r);
    merge(a, l, m, r);
}`,
    mistakes: ["Missing base condition (StackOverflow)", "Creating arrays on each recursive call"],
    problems: [
      ["Merge Sort", "Medium", "Array", "sort-an-array", "merge-sort"],
      ["Quick Sort", "Medium", "Array", "sort-an-array", "quick-sort"],
      ["Maximum Subarray (D&C)", "Medium", "Array", "maximum-subarray", "kadanes-algorithm-1587115620"],
      ["Search a 2D Matrix II", "Medium", "Matrix", "search-a-2d-matrix-ii", "search-in-a-matrix1937"],
      ["Kth Largest Element (QuickSelect)", "Medium", "Array", "kth-largest-element-in-an-array", "k-largest-elements4207"],
      ["Merge k Sorted Lists", "Hard", "Linked List", "merge-k-sorted-lists", "merge-k-sorted-linked-lists"],
      ["Pow(x, n)", "Medium", "Math", "powx-n", "power-of-numbers-1587115620"],
      ["Count of Smaller Numbers After Self", "Hard", "Array", "count-of-smaller-numbers-after-self", "count-smaller-elements2214"],
      ["Reverse Pairs", "Hard", "Array", "reverse-pairs", "inversion-of-array-1587115620"],
      ["Different Ways to Add Parentheses", "Medium", "String", "different-ways-to-add-parentheses", "bracket-number4028"]
    ]
  },
  {
    id: "recursion", name: "Recursion",
    desc: "Expresses a solution in terms of smaller instances of itself with a verified base case.",
    why: "Follows mathematical induction: valid base cases plus sound step transition guarantee correctness.",
    when: "Tree traversals, nested structure flattening, Tower of Hanoi.",
    clues: ["Base case + recursive case", "Tree traversal", "Self-similar subproblem"],
    time: "O(2ⁿ) naive / O(n) memoized", space: "O(n) call stack",
    template: `int solve(int n) {
    if (n <= 1) return n;
    return solve(n - 1) + solve(n - 2);
}`,
    mistakes: ["Missing base case", "Redundant recursive branches without memoization"],
    problems: [
      ["Fibonacci Number", "Easy", "Math", "fibonacci-number", "nth-fibonacci-number1359"],
      ["Reverse Linked List", "Easy", "Linked List", "reverse-linked-list", "reverse-a-linked-list"],
      ["Maximum Depth of Binary Tree", "Easy", "Tree", "maximum-depth-of-binary-tree", "height-of-binary-tree"],
      ["Invert Binary Tree", "Easy", "Tree", "invert-binary-tree", "mirror-tree"],
      ["Merge Two Sorted Lists", "Easy", "Linked List", "merge-two-sorted-lists", "merge-two-sorted-linked-lists"],
      ["Pow(x, n)", "Medium", "Math", "powx-n", "power-of-numbers-1587115620"],
      ["Tower of Hanoi", "Medium", "Recursion", "tower-of-hanoi", "tower-of-hanoi-1587115621"],
      ["Swap Nodes in Pairs", "Medium", "Linked List", "swap-nodes-in-pairs", "pairwise-swap-elements-of-a-linked-list-by-swapping-data"],
      ["Flatten Nested List Iterator", "Medium", "Recursion", "flatten-nested-list-iterator", "flattening-a-linked-list"],
      ["Parse Lisp Expression", "Hard", "Recursion", "parse-lisp-expression", "expression-tree"]
    ]
  },
  {
    id: "bfs", name: "Breadth-First Search (BFS)",
    desc: "Explores graph or tree nodes level-by-level using a FIFO queue, guaranteeing shortest paths in unweighted structures.",
    why: "Enqueuing adjacent neighbors level by level guarantees processing distance d before distance d + 1.",
    when: "Shortest paths in unweighted graphs/grids, tree level order traversal.",
    clues: ["Shortest path / minimum steps", "Level order traversal", "Nearest neighbor"],
    time: "O(V + E)", space: "O(V)",
    template: `Queue<TreeNode> q = new ArrayDeque<>();
q.offer(root);
while (!q.isEmpty()) {
    int sz = q.size();
    for (int i = 0; i < sz; i++) {
        TreeNode curr = q.poll();
        if (curr.left != null) q.offer(curr.left);
        if (curr.right != null) q.offer(curr.right);
    }
}`,
    mistakes: ["Marking visited on pop instead of push (redundant enqueuing)", "Missing size loop for level tracking"],
    problems: [
      ["Binary Tree Level Order Traversal", "Medium", "Tree", "binary-tree-level-order-traversal", "level-order-traversal"],
      ["Word Ladder", "Hard", "BFS", "word-ladder", "word-ladder"],
      ["Open the Lock", "Medium", "BFS", "open-the-lock", "minimum-rotations-to-unlock-a-circular-lock"],
      ["Shortest Path in Binary Matrix", "Medium", "Grid", "shortest-path-in-binary-matrix", "shortest-source-to-destination-path3544"],
      ["Minimum Depth of Binary Tree", "Easy", "Tree", "minimum-depth-of-binary-tree", "minimum-depth-of-a-binary-tree"],
      ["Rotting Oranges", "Medium", "Grid", "rotting-oranges", "rotten-oranges2536"],
      ["Clone Graph", "Medium", "Graph", "clone-graph", "clone-graph"],
      ["Binary Tree Zigzag Level Order Traversal", "Medium", "Tree", "binary-tree-zigzag-level-order-traversal", "zigzag-tree-traversal"],
      ["Snakes and Ladders", "Medium", "BFS", "snakes-and-ladders", "snake-and-ladder-problem4816"],
      ["Bus Routes", "Hard", "Graph", "bus-routes", "bus-routes"]
    ]
  },
  {
    id: "dfs", name: "Depth-First Search (DFS)",
    desc: "Traverses down a single branch as deeply as possible before backtracking using recursion or a stack.",
    why: "Explores all reachable nodes and cycles with memory proportional to maximum depth rather than width.",
    when: "Cycle detection, connected components, flood fill, path checking.",
    clues: ["Connected islands", "Explore all paths", "Tree pre/in/post order", "Cycle detection"],
    time: "O(V + E)", space: "O(V) recursion",
    template: `void dfs(int u, boolean[] visited) {
    visited[u] = true;
    for (int v : adj.get(u)) {
        if (!visited[v]) dfs(v, visited);
    }
}`,
    mistakes: ["Index boundary errors in grid DFS", "Infinite recursion on unvisited cycles"],
    problems: [
      ["Number of Islands", "Medium", "Grid", "number-of-islands", "find-the-number-of-islands"],
      ["Max Area of Island", "Medium", "Grid", "max-area-of-island", "length-of-largest-region-of-1s-1587115620"],
      ["Surrounded Regions", "Medium", "Grid", "surrounded-regions", "replace-os-with-xs0052"],
      ["Pacific Atlantic Water Flow", "Medium", "Grid", "pacific-atlantic-water-flow", "pacific-atlantic-water-flow"],
      ["Path Sum", "Easy", "Tree", "path-sum", "root-to-leaf-path-sum"],
      ["Path Sum II", "Medium", "Tree", "path-sum-ii", "paths-from-root-with-a-specified-sum"],
      ["Lowest Common Ancestor of a Binary Tree", "Medium", "Tree", "lowest-common-ancestor-of-a-binary-tree", "lowest-common-ancestor-in-a-binary-tree"],
      ["All Paths From Source to Target", "Medium", "Graph", "all-paths-from-source-to-target", "possible-paths-between-2-vertices-1587115620"],
      ["Course Schedule", "Medium", "Graph", "course-schedule", "course-schedule"],
      ["Validate Binary Search Tree", "Medium", "Tree", "validate-binary-search-tree", "check-for-bst"]
    ]
  },
  {
    id: "multi-source-bfs", name: "Multi-Source BFS",
    desc: "Enqueues all source points simultaneously at t=0 to compute shortest distances in parallel waves.",
    why: "Starting simultaneously guarantees the first wave front touching a node is the globally shortest distance.",
    when: "Rotting oranges, 01 matrix distance, shortest distance from multiple starts.",
    clues: ["Rotting oranges spreading", "Distance to nearest 0 in matrix", "Multiple origins expanding"],
    time: "O(R * C)", space: "O(R * C)",
    template: `Queue<int[]> q = new ArrayDeque<>();
for (int i = 0; i < m; i++)
    for (int j = 0; j < n; j++)
        if (grid[i][j] == 2) q.offer(new int[]{i, j});
// BFS expands level by level`,
    mistakes: ["Running single-source BFS multiple times (TLE)", "Failing to mark visited on queue push"],
    problems: [
      ["Rotting Oranges", "Medium", "Grid", "rotting-oranges", "rotten-oranges2536"],
      ["01 Matrix", "Medium", "Grid", "01-matrix", "distance-of-nearest-cell-having-1-1587115620"],
      ["As Far from Land as Possible", "Medium", "Grid", "as-far-from-land-as-possible", "distance-of-nearest-cell-having-1-1587115620"],
      ["Shortest Path to Get Food", "Medium", "Grid", "shortest-path-to-get-food", "shortest-source-to-destination-path3544"],
      ["Map of Highest Peak", "Medium", "Grid", "map-of-highest-peak", "map-of-highest-peak"],
      ["Walls and Gates", "Medium", "Grid", "walls-and-gates", "distance-of-nearest-cell-having-1-1587115620"],
      ["Pacific Atlantic Water Flow", "Medium", "Grid", "pacific-atlantic-water-flow", "pacific-atlantic-water-flow"],
      ["Shortest Bridge", "Medium", "Grid", "shortest-bridge", "shortest-bridge"],
      ["Escape the Spreading Fire", "Hard", "Grid", "escape-the-spreading-fire", "escape-the-fire"],
      ["Surrounded Regions", "Medium", "Grid", "surrounded-regions", "replace-os-with-xs0052"]
    ]
  },
  {
    id: "topological-sort", name: "Topological Sort",
    desc: "Orders vertices in a DAG such that for every directed edge u -> v, u appears before v using in-degree BFS (Kahn's).",
    why: "Repeatedly removing nodes with 0 dependencies resolves prerequisites monotonically.",
    when: "Course prerequisites, task dependency ordering, compilation build steps.",
    clues: ["Course prerequisites", "Build system order", "Directed acyclic graph dependencies"],
    time: "O(V + E)", space: "O(V + E)",
    template: `int[] inDegree = new int[n];
Queue<Integer> q = new ArrayDeque<>();
for (int i = 0; i < n; i++) if (inDegree[i] == 0) q.offer(i);
while (!q.isEmpty()) {
    int u = q.poll();
    for (int v : adj.get(u)) if (--inDegree[v] == 0) q.offer(v);
}`,
    mistakes: ["Not detecting cycles when processed count != V", "Reversing directed edge arrows"],
    problems: [
      ["Course Schedule", "Medium", "Graph", "course-schedule", "course-schedule"],
      ["Course Schedule II", "Medium", "Graph", "course-schedule-ii", "course-schedule-ii"],
      ["Alien Dictionary", "Hard", "Graph", "alien-dictionary", "alien-dictionary"],
      ["Minimum Height Trees", "Medium", "Graph", "minimum-height-trees", "minimum-height-trees"],
      ["Sequence Reconstruction", "Medium", "Graph", "sequence-reconstruction", "topological-sort"],
      ["Find Eventual Safe States", "Medium", "Graph", "find-eventual-safe-states", "eventual-safe-states"],
      ["All Ancestors in DAG", "Medium", "Graph", "all-ancestors-of-a-node-in-a-directed-acyclic-graph", "ancestors-in-dag"],
      ["Longest Increasing Path in a Matrix", "Hard", "Graph", "longest-increasing-path-in-a-matrix", "longest-increasing-path-in-a-matrix"],
      ["Parallel Courses", "Medium", "Graph", "parallel-courses", "minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph"],
      ["Sort Items by Groups", "Hard", "Graph", "sort-items-by-groups-respecting-dependencies", "topological-sort"]
    ]
  }
];
