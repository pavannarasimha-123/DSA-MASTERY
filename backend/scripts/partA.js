export const rawPartA = [
  {
    id: "two-pointers", name: "Two Pointers",
    desc: "Uses two references moving towards each other or in unison to prune the search space from O(n²) to O(n).",
    why: "Monotonicity in sorted data provides directional certainty for pointer increments.",
    when: "Finding pairs/triplets in sorted arrays, checking palindromes, partitioning.",
    clues: ["Sorted array", "Target sum pair", "Palindrome", "In-place partition"],
    time: "O(n)", space: "O(1)",
    template: `int left = 0, right = nums.length - 1;
while (left < right) {
    int sum = nums[left] + nums[right];
    if (sum == target) return new int[]{left, right};
    else if (sum < target) left++;
    else right--;
}`,
    mistakes: ["Forgetting to sort", "Duplicate triplets", "Bounds errors"],
    problems: [
      ["Two Sum II - Input Array Is Sorted", "Medium", "Array", "two-sum-ii-input-array-is-sorted", "pair-in-an-array-with-given-sum"],
      ["3Sum", "Medium", "Array", "3sum", "triplet-sum-in-array-1587115621"],
      ["Container With Most Water", "Medium", "Array", "container-with-most-water", "container-with-most-water-1587115620"],
      ["Valid Palindrome", "Easy", "String", "valid-palindrome", "string-palindrome2731"],
      ["Remove Duplicates from Sorted Array", "Easy", "Array", "remove-duplicates-from-sorted-array", "remove-duplicate-elements-from-sorted-array"],
      ["Move Zeroes", "Easy", "Array", "move-zeroes", "move-all-zeroes-to-end-of-array0449"],
      ["Trapping Rain Water", "Hard", "Array", "trapping-rain-water", "trapping-rain-water-1587115621"],
      ["Squares of a Sorted Array", "Easy", "Array", "squares-of-a-sorted-array", "sort-an-array-of-elements-after-squaring"],
      ["Sort Colors", "Medium", "Array", "sort-colors", "sort-an-array-of-0s-1s-and-2s4231"],
      ["4Sum", "Medium", "Array", "4sum", "find-all-four-sum-numbers1732"]
    ]
  },
  {
    id: "sliding-window", name: "Sliding Window",
    desc: "Maintains a contiguous window that expands and contracts to compute subarray statistics in O(n).",
    why: "Adjacent windows differ only by leaving and entering elements, enabling O(1) state updates.",
    when: "Contiguous subarrays/substrings matching size, distinct counts, or sum requirements.",
    clues: ["Contiguous subarray/substring", "Longest substring without repeating", "Window of size k"],
    time: "O(n)", space: "O(k)",
    template: `int left = 0, maxLen = 0;
Map<Character, Integer> map = new HashMap<>();
for (int right = 0; right < s.length(); right++) {
    char c = s.charAt(right);
    map.put(c, map.getOrDefault(c, 0) + 1);
    while (map.get(c) > 1) {
        char lc = s.charAt(left++);
        map.put(lc, map.get(lc) - 1);
    }
    maxLen = Math.max(maxLen, right - left + 1);
}`,
    mistakes: ["Using for non-contiguous subsequences", "Shrinking with if instead of while"],
    problems: [
      ["Longest Substring Without Repeating Characters", "Medium", "String", "longest-substring-without-repeating-characters", "length-of-the-longest-substring3036"],
      ["Minimum Window Substring", "Hard", "String", "minimum-window-substring", "smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621"],
      ["Find All Anagrams in a String", "Medium", "String", "find-all-anagrams-in-a-string", "count-occurences-of-anagrams5839"],
      ["Longest Repeating Character Replacement", "Medium", "String", "longest-repeating-character-replacement", "longest-repeating-character-replacement"],
      ["Max Consecutive Ones III", "Medium", "Array", "max-consecutive-ones-iii", "maximize-number-of-1s0905"],
      ["Permutation in String", "Medium", "String", "permutation-in-string", "check-if-string-is-rotated-by-two-places-1587115620"],
      ["Fruit Into Baskets", "Medium", "Array", "fruit-into-baskets", "fruit-into-baskets-1663137462"],
      ["Minimum Size Subarray Sum", "Medium", "Array", "minimum-size-subarray-sum", "smallest-subarray-with-sum-greater-than-x5651"],
      ["Sliding Window Maximum", "Hard", "Deque", "sliding-window-maximum", "maximum-of-all-subarrays-of-size-k3101"],
      ["Subarray Product Less Than K", "Medium", "Array", "subarray-product-less-than-k", "count-the-subarrays-having-product-less-than-k1708"]
    ]
  },
  {
    id: "prefix-sum", name: "Prefix Sum",
    desc: "Precomputes cumulative totals so any subarray sum nums[L..R] is answered in O(1) as prefix[R+1] - prefix[L].",
    why: "Addition is associative and invertible, making range sums constant time differences.",
    when: "Static range sum queries, counting subarrays summing to k.",
    clues: ["Range sum query", "Subarray sum equals k", "Continuous subarray sum"],
    time: "O(n) precompute, O(1) query", space: "O(n)",
    template: `int[] prefix = new int[n + 1];
for (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];`,
    mistakes: ["Off-by-one array sizing", "Integer overflow on big sums"],
    problems: [
      ["Range Sum Query - Immutable", "Easy", "Array", "range-sum-query-immutable", "range-sum-queries-without-updates"],
      ["Subarray Sum Equals K", "Medium", "Array", "subarray-sum-equals-k", "subarrays-with-sum-k"],
      ["Continuous Subarray Sum", "Medium", "Array", "continuous-subarray-sum", "subarray-with-given-sum-1587115621"],
      ["Contiguous Array", "Medium", "Array", "contiguous-array", "largest-subarray-of-0s-and-1s"],
      ["Find Pivot Index", "Easy", "Array", "find-pivot-index", "equilibrium-point-1587115620"],
      ["Product of Array Except Self", "Medium", "Array", "product-of-array-except-self", "product-array-puzzle4525"],
      ["Range Sum Query 2D - Immutable", "Medium", "Matrix", "range-sum-query-2d-immutable", "matrix-block-sum"],
      ["Subarray Sums Divisible by K", "Medium", "Array", "subarray-sums-divisible-by-k", "sub-array-sum-divisible-by-k2617"],
      ["Matrix Block Sum", "Medium", "Matrix", "matrix-block-sum", "matrix-block-sum"],
      ["Maximum Size Subarray Sum Equals k", "Medium", "Array", "maximum-size-subarray-sum-equals-k", "longest-sub-array-with-sum-k0809"]
    ]
  },
  {
    id: "difference-array", name: "Difference Array",
    desc: "Executes multiple interval updates in O(1) time each, accumulating changes with a prefix sweep.",
    why: "Incrementing index L and decrementing index R+1 confines addition strictly to range [L, R] after prefix summation.",
    when: "Multiple range updates on an array with query at the end.",
    clues: ["Range addition", "Corporate flight bookings", "Car pooling"],
    time: "O(1) update, O(n) sweep", space: "O(n)",
    template: `diff[l] += val; diff[r + 1] -= val;
// then prefix accumulate`,
    mistakes: ["Index bounds overflow on R + 1", "Accumulating prematurely"],
    problems: [
      ["Corporate Flight Bookings", "Medium", "Array", "corporate-flight-bookings", "range-addition"],
      ["Range Addition", "Medium", "Array", "range-addition", "difference-array-range-update-query"],
      ["Car Pooling", "Medium", "Array", "car-pooling", "bus-conductor"],
      ["Shifting Letters II", "Medium", "String", "shifting-letters-ii", "shifting-letters"],
      ["Meeting Rooms II", "Medium", "Array", "meeting-rooms-ii", "attend-all-meetings-ii"],
      ["Minimum Number of Increments on Subarrays to Form Target", "Hard", "Array", "minimum-number-of-increments-on-subarrays-to-form-a-target-array", "count-the-number-of-operations-to-make-the-array-elements-equal"],
      ["Check If All the Integers in a Range Are Covered", "Easy", "Array", "check-if-all-the-integers-in-a-range-are-covered", "interval-coverage"],
      ["Describe the Painting", "Medium", "Array", "describe-the-painting", "line-sweep"],
      ["Maximum Points You Can Obtain from Cards", "Medium", "Array", "maximum-points-you-can-obtain-from-cards", "maximize-toy-count"],
      ["My Calendar III", "Hard", "Tree", "my-calendar-iii", "meeting-rooms"]
    ]
  },
  {
    id: "fast-and-slow-pointers", name: "Fast and Slow Pointers",
    desc: "Advances two pointers at different speeds (1x vs 2x) to find cycles or midpoints in O(1) space.",
    why: "In a cycle of length L, the relative distance between pointers shrinks by 1 every step modulo L (Floyd's algorithm).",
    when: "Linked list cycle detection, finding middle element, circular arrays.",
    clues: ["Cycle in linked list", "Middle of linked list", "Find duplicate without extra memory"],
    time: "O(n)", space: "O(1)",
    template: `ListNode slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
}`,
    mistakes: ["NullPointer on fast.next.next", "Failing on 1-node lists"],
    problems: [
      ["Linked List Cycle", "Easy", "Linked List", "linked-list-cycle", "detect-loop-in-linked-list"],
      ["Linked List Cycle II", "Medium", "Linked List", "linked-list-cycle-ii", "find-the-first-node-of-loop-in-linked-list--170645"],
      ["Middle of the Linked List", "Easy", "Linked List", "middle-of-the-linked-list", "finding-middle-element-in-a-linked-list"],
      ["Happy Number", "Easy", "Math", "happy-number", "happy-number"],
      ["Find the Duplicate Number", "Medium", "Array", "find-the-duplicate-number", "find-duplicates-in-an-array"],
      ["Palindrome Linked List", "Easy", "Linked List", "palindrome-linked-list", "check-if-linked-list-is-pallindrome"],
      ["Reorder List", "Medium", "Linked List", "reorder-list", "reorder-list"],
      ["Circular Array Loop", "Medium", "Array", "circular-array-loop", "circular-tour-1587115620"],
      ["Delete the Middle Node of a Linked List", "Medium", "Linked List", "delete-the-middle-node-of-a-linked-list", "delete-middle-of-linked-list"],
      ["Maximum Twin Sum of a Linked List", "Medium", "Linked List", "maximum-twin-sum-of-a-linked-list", "pair-wise-swap-elements-of-a-linked-list-by-swapping-data"]
    ]
  },
  {
    id: "binary-search", name: "Binary Search",
    desc: "Halves the candidate search space on each step by comparing target with median element.",
    why: "Order monotonicity allows discarding half of candidates unconditionally.",
    when: "Sorted arrays, rotated arrays, peak finding, 2D sorted matrices.",
    clues: ["Sorted array input", "Search in O(log n)", "Rotated sorted array"],
    time: "O(log n)", space: "O(1)",
    template: `int low = 0, high = nums.length - 1;
while (low <= high) {
    int mid = low + (high - low) / 2;
    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
}`,
    mistakes: ["Using (low+high)/2 (overflow)", "Infinite loop with wrong conditions"],
    problems: [
      ["Binary Search", "Easy", "Array", "binary-search", "binary-search-1587115620"],
      ["Search in Rotated Sorted Array", "Medium", "Array", "search-in-rotated-sorted-array", "search-in-a-rotated-array4618"],
      ["Find First and Last Position in Sorted Array", "Medium", "Array", "find-first-and-last-position-of-element-in-sorted-array", "first-and-last-occurrences-of-x3116"],
      ["Find Minimum in Rotated Sorted Array", "Medium", "Array", "find-minimum-in-rotated-sorted-array", "minimum-element-in-a-sorted-and-rotated-array"],
      ["Find Peak Element", "Medium", "Array", "find-peak-element", "peak-element"],
      ["Search Insert Position", "Easy", "Array", "search-insert-position", "search-insert-position-of-k-in-a-sorted-array"],
      ["Search a 2D Matrix", "Medium", "Matrix", "search-a-2d-matrix", "search-in-a-matrix-1587115621"],
      ["Search a 2D Matrix II", "Medium", "Matrix", "search-a-2d-matrix-ii", "search-in-a-matrix1937"],
      ["First Bad Version", "Easy", "Interactive", "first-bad-version", "find-the-first-bad-version"],
      ["Single Element in a Sorted Array", "Medium", "Array", "single-element-in-a-sorted-array", "find-the-element-that-appears-once-in-sorted-array0624"]
    ]
  },
  {
    id: "binary-search-on-answer", name: "Binary Search on Answer",
    desc: "Binary searches over the monotonic numerical answer range with a feasibility check function.",
    why: "If a capacity X is feasible, every value > X is also feasible, allowing logarithmic range halving.",
    when: "Minimizing maximum allocation, maximizing minimum distance.",
    clues: ["Minimize maximum", "Maximize minimum", "Koko eating bananas", "Ship within D days"],
    time: "O(n log(range))", space: "O(1)",
    template: `int low = minAns, high = maxAns, ans = high;
while (low <= high) {
    int mid = low + (high - low) / 2;
    if (isValid(mid)) { ans = mid; high = mid - 1; }
    else { low = mid + 1; }
}`,
    mistakes: ["Wrong upper bound for high", "Integer overflow in feasibility sum"],
    problems: [
      ["Koko Eating Bananas", "Medium", "Array", "koko-eating-bananas", "koko-eating-bananas"],
      ["Capacity To Ship Packages Within D Days", "Medium", "Array", "capacity-to-ship-packages-within-d-days", "capacity-to-ship-packages-within-d-days"],
      ["Split Array Largest Sum", "Hard", "Array", "split-array-largest-sum", "allocate-minimum-number-of-pages0937"],
      ["Allocate Minimum Number of Pages", "Hard", "Array", "split-array-largest-sum", "allocate-minimum-number-of-pages0937"],
      ["Aggressive Cows", "Medium", "Array", "magnetic-force-between-two-balls", "aggressive-cows"],
      ["Magnetic Force Between Two Balls", "Medium", "Array", "magnetic-force-between-two-balls", "aggressive-cows"],
      ["Find the Smallest Divisor Given a Threshold", "Medium", "Array", "find-the-smallest-divisor-given-a-threshold", "smallest-divisor"],
      ["Minimum Speed to Arrive on Time", "Medium", "Array", "minimum-speed-to-arrive-on-time", "minimum-speed-to-arrive-on-time"],
      ["Minimum Days to Make m Bouquets", "Medium", "Array", "minimum-number-of-days-to-make-m-bouquets", "minimum-days-to-make-m-bouquets"],
      ["Painter's Partition Problem", "Hard", "Array", "split-array-largest-sum", "the-painters-partition-problem1535"]
    ]
  },
  {
    id: "hashing-frequency-map", name: "Hashing / Frequency Map",
    desc: "Stores keys and frequencies in hash buckets for expected O(1) lookups and complement checks.",
    why: "Hash mapping bypasses comparison sorting, exchanging O(n) memory for constant time queries.",
    when: "Complement searching, frequency tracking, grouping anagrams, finding unique items.",
    clues: ["Two Sum complement", "Count frequencies", "Group anagrams", "Check duplicate"],
    time: "O(n)", space: "O(n)",
    template: `Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) return new int[]{map.get(complement), i};
    map.put(nums[i], i);
}`,
    mistakes: ["Using ArrayList.contains instead of HashSet", "Modifying keys in-place"],
    problems: [
      ["Two Sum", "Easy", "HashMap", "two-sum", "key-pair5556"],
      ["Group Anagrams", "Medium", "HashMap", "group-anagrams", "print-anagrams-together"],
      ["Contains Duplicate", "Easy", "HashSet", "contains-duplicate", "find-duplicates-in-an-array"],
      ["Valid Anagram", "Easy", "Array", "valid-anagram", "anagram-1587115620"],
      ["First Unique Character in a String", "Easy", "String", "first-unique-character-in-a-string", "non-repeating-character-1587115620"],
      ["Intersection of Two Arrays II", "Easy", "HashMap", "intersection-of-two-arrays-ii", "intersection-of-two-arrays2404"],
      ["Longest Consecutive Sequence", "Medium", "HashSet", "longest-consecutive-sequence", "longest-consecutive-subsequence2449"],
      ["Subarray Sum Equals K", "Medium", "HashMap", "subarray-sum-equals-k", "subarrays-with-sum-k"],
      ["Top K Frequent Elements", "Medium", "HashMap", "top-k-frequent-elements", "top-k-frequent-elements-in-array"],
      ["Sort Characters By Frequency", "Medium", "HashMap", "sort-characters-by-frequency", "sorting-elements-of-an-array-by-frequency"]
    ]
  },
  {
    id: "monotonic-stack", name: "Monotonic Stack",
    desc: "Maintains elements in strictly increasing or decreasing order on a stack to find next greater/smaller elements in O(n).",
    why: "Each element is pushed once and popped at most once; popping identifies the immediate dominating element.",
    when: "Next greater element, daily temperatures, largest rectangle under histogram.",
    clues: ["Next greater element", "Next smaller element", "Daily temperatures", "Histogram largest area"],
    time: "O(n)", space: "O(n)",
    template: `Deque<Integer> stack = new ArrayDeque<>();
for (int i = 0; i < nums.length; i++) {
    while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
        res[stack.pop()] = nums[i];
    }
    stack.push(i);
}`,
    mistakes: ["Pushing values instead of indices", "Using legacy java.util.Stack"],
    problems: [
      ["Next Greater Element I", "Easy", "Stack", "next-greater-element-i", "next-larger-element-1587115620"],
      ["Daily Temperatures", "Medium", "Stack", "daily-temperatures", "next-larger-element-1587115620"],
      ["Next Greater Element II", "Medium", "Stack", "next-greater-element-ii", "next-greater-element-circular"],
      ["Largest Rectangle in Histogram", "Hard", "Stack", "largest-rectangle-in-histogram", "maximum-rectangular-area-in-a-histogram-1587115620"],
      ["Online Stock Span", "Medium", "Stack", "online-stock-span", "stock-span-problem-1587115621"],
      ["Maximal Rectangle", "Hard", "Stack", "maximal-rectangle", "max-rectangle"],
      ["Remove K Digits", "Medium", "Stack", "remove-k-digits", "remove-k-digits"],
      ["Trapping Rain Water", "Hard", "Stack", "trapping-rain-water", "trapping-rain-water-1587115621"],
      ["Sum of Subarray Minimums", "Medium", "Stack", "sum-of-subarray-minimums", "sum-of-subarray-ranges"],
      ["132 Pattern", "Medium", "Stack", "132-pattern", "132-pattern"]
    ]
  },
  {
    id: "monotonic-queue", name: "Monotonic Queue",
    desc: "Maintains elements in monotonic order inside a double-ended queue (Deque) with pop operations from both ends to query running min/max in O(1) amortized.",
    why: "Discarding smaller obsolete candidates from the back maintains the maximum at the front.",
    when: "Sliding window maximum, shortest subarray with sum >= k.",
    clues: ["Sliding window maximum", "Running max of size k", "Shortest subarray sum >= k"],
    time: "O(n)", space: "O(k)",
    template: `Deque<Integer> dq = new ArrayDeque<>();
for (int i = 0; i < n; i++) {
    if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) dq.pollFirst();
    while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();
    dq.offerLast(i);
}`,
    mistakes: ["Not removing stale items from front", "Popping from wrong end"],
    problems: [
      ["Sliding Window Maximum", "Hard", "Deque", "sliding-window-maximum", "maximum-of-all-subarrays-of-size-k3101"],
      ["Shortest Subarray with Sum at Least K", "Hard", "Deque", "shortest-subarray-with-sum-at-least-k", "smallest-subarray-with-sum-greater-than-x5651"],
      ["Constrained Subsequence Sum", "Hard", "Deque", "constrained-subsequence-sum", "maximum-sum-subsequence"],
      ["Jump Game VI", "Medium", "Deque", "jump-game-vi", "minimum-number-of-jumps-1587115620"],
      ["Longest Continuous Subarray With Limit", "Medium", "Deque", "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit", "longest-sub-array-with-diff"],
      ["Max Value of Equation", "Hard", "Deque", "max-value-of-equation", "max-equation"],
      ["Delivering Boxes from Storage to Ports", "Hard", "Deque", "delivering-boxes-from-storage-to-ports", "delivering-boxes"],
      ["Design Front Middle Back Queue", "Medium", "Deque", "design-front-middle-back-queue", "deque-implementations"],
      ["Continuous Subarrays", "Medium", "Deque", "continuous-subarrays", "continuous-subarrays"],
      ["Maximum Number of Robots Within Budget", "Hard", "Deque", "maximum-number-of-robots-within-budget", "budget-robots"]
    ]
  }
];
