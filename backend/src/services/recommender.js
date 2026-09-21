/**
 * Recommends optimal Java Collections Framework classes based on user code patterns.
 */
export function recommendCollections(code) {
  if (!code || typeof code !== "string") return [];

  const recommendations = [];

  // Recommendation 1: ArrayList with .contains() -> HashSet
  if (
    (/\bArrayList\b/.test(code) || /\bList<[^>]+>\s+\w+/.test(code)) &&
    /\.contains\s*\(/.test(code)
  ) {
    recommendations.push({
      currentCollection: "ArrayList<T>",
      recommendedCollection: "HashSet<T>",
      currentComplexity: "O(n) for contains() search",
      recommendedComplexity: "O(1) average for contains()",
      improvement: "Reduces search bottlenecks from linear O(n) to constant O(1) average time.",
      why: "ArrayList requires a linear scan across all elements to verify presence. If your problem checks for membership repeatedly, HashSet leverages hash buckets to achieve O(1) expected lookup.",
      codeSnippet: "// Replace:\nList<Integer> seen = new ArrayList<>();\nif (seen.contains(x)) ...\n\n// With:\nSet<Integer> seen = new HashSet<>();\nif (seen.contains(x)) ..."
    });
  }

  // Recommendation 2: Legacy Stack class -> ArrayDeque
  if (/\bStack<[A-Za-z0-9_]+>\b/.test(code)) {
    recommendations.push({
      currentCollection: "Stack<T> (java.util.Stack)",
      recommendedCollection: "Deque<T> = new ArrayDeque<>()",
      currentComplexity: "Synchronized overhead / Vector subclassing",
      recommendedComplexity: "Unsynchronized high-performance cache-friendly ring buffer",
      improvement: "Significant throughput improvement by bypassing Vector synchronization and avoiding memory overhead.",
      why: "java.util.Stack extends Vector, making all operations (push, pop, peek) synchronized and thread-locked, causing unnecessary mutex overhead in single-threaded algorithms. ArrayDeque is not synchronized, maintains contiguous memory, and has no iterator memory allocation.",
      codeSnippet: "// Replace:\nStack<Integer> stack = new Stack<>();\n\n// With (Best Practice):\nDeque<Integer> stack = new ArrayDeque<>();\nstack.push(val);\nint top = stack.pop();"
    });
  }

  // Recommendation 3: Sorting entire array when only Top K / Kth largest is needed
  if (
    (/\bArrays\.sort\b/.test(code) || /\bCollections\.sort\b/.test(code)) &&
    /\bk\b/i.test(code) &&
    !code.includes("PriorityQueue")
  ) {
    recommendations.push({
      currentCollection: "Arrays.sort() / Full In-Memory Sort",
      recommendedCollection: "PriorityQueue<T> (Min-Heap / Max-Heap)",
      currentComplexity: "O(n log n) time + O(1) to O(n) space",
      recommendedComplexity: "O(n log k) time + O(k) space",
      improvement: "Optimizes runtime from O(n log n) down to O(n log k) and bounds memory footprint to k elements.",
      why: "When solving Top-K or Kth largest/smallest elements, sorting the entire array sorts all n elements unnecessarily. Maintaining a bounded Min-Heap of size k lets you discard smaller elements on the fly.",
      codeSnippet: "// Top K Largest Elements:\nPriorityQueue<Integer> minHeap = new PriorityQueue<>();\nfor (int num : nums) {\n    minHeap.offer(num);\n    if (minHeap.size() > k) minHeap.poll();\n}\nreturn minHeap.peek();"
    });
  }

  // Recommendation 4: Frequent front removals on ArrayList -> ArrayDeque or LinkedList
  if (
    /\bArrayList\b/.test(code) &&
    /\.remove\s*\(\s*0\s*\)/.test(code)
  ) {
    recommendations.push({
      currentCollection: "ArrayList.remove(0)",
      recommendedCollection: "ArrayDeque<T> or LinkedList<T>",
      currentComplexity: "O(n) per removal (shifts all subsequent elements)",
      recommendedComplexity: "O(1) amortized removal at head",
      improvement: "Eliminates repeated element shifting in memory.",
      why: "Removing from index 0 of an ArrayList forces System.arraycopy to shift all remaining (n-1) elements to the left, degrading algorithms from O(n) to O(n²). Deque provides O(1) pollFirst().",
      codeSnippet: "// Replace:\nList<Integer> queue = new ArrayList<>();\nqueue.remove(0); // O(n)!\n\n// With:\nDeque<Integer> queue = new ArrayDeque<>();\nqueue.pollFirst(); // O(1)!"
    });
  }

  // Recommendation 5: TreeMap when sorting isn't strictly required -> HashMap
  if (
    /\bTreeMap\b/.test(code) &&
    !/\b(floorKey|ceilingKey|firstKey|lastKey|subMap)\b/.test(code)
  ) {
    recommendations.push({
      currentCollection: "TreeMap<K, V>",
      recommendedCollection: "HashMap<K, V>",
      currentComplexity: "O(log n) per get() and put()",
      recommendedComplexity: "O(1) average per get() and put()",
      improvement: "Substantially faster key lookups and insertions unless range queries are required.",
      why: "TreeMap is backed by a Red-Black self-balancing BST and enforces strict O(log n) tree traversals and pointer rebalancing. If you do not require keys in sorted order or range queries, HashMap is faster with O(1) average time.",
      codeSnippet: "// If ordering is unnecessary:\nMap<String, Integer> map = new HashMap<>(); // O(1) vs O(log n)"
    });
  }

  return recommendations;
}
