export const COLLECTIONS_DATA = {
  footnotes: [
    {
      symbol: "*",
      explanation: "Amortized constant time O(1). Resizing (e.g. ArrayList capacity expansion or HashMap re-hashing when load factor > 0.75) takes O(n), but occurs infrequently enough that average cost per operation is O(1). In the worst case with excessive hash collisions, HashMap/HashSet operations can degrade to O(log n) via Red-Black tree bins (TREEIFY_THRESHOLD = 8 in Java 8+)."
    },
    {
      symbol: "**",
      explanation: "O(1) strictly at the boundaries (head or tail) if references are maintained (e.g. addFirst(), addLast(), removeFirst()). Random access or removal by index requires traversing pointers from head/tail, requiring O(n) search time."
    }
  ],
  table: [
    { name: "ArrayList", add: "O(1)*", remove: "O(n)", search: "O(n)", access: "O(1)", ordered: "Yes (Index)", allowsDuplicates: true, allowsNull: true, backingStructure: "Dynamic Resizable Array" },
    { name: "LinkedList", add: "O(1)**", remove: "O(1)**", search: "O(n)", access: "O(n)", ordered: "Yes (Insertion)", allowsDuplicates: true, allowsNull: true, backingStructure: "Doubly Linked List" },
    { name: "HashSet", add: "O(1)*", remove: "O(1)*", search: "O(1)*", access: "N/A", ordered: "No", allowsDuplicates: false, allowsNull: true, backingStructure: "Hash Table (HashMap backing)" },
    { name: "LinkedHashSet", add: "O(1)*", remove: "O(1)*", search: "O(1)*", access: "N/A", ordered: "Yes (Insertion)", allowsDuplicates: false, allowsNull: true, backingStructure: "Hash Table + Doubly Linked List" },
    { name: "TreeSet", add: "O(log n)", remove: "O(log n)", search: "O(log n)", access: "N/A", ordered: "Sorted (Natural/Comparator)", allowsDuplicates: false, allowsNull: false, backingStructure: "Self-balancing Red-Black Tree" },
    { name: "HashMap", add: "O(1)*", remove: "O(1)*", search: "O(1)*", access: "O(1)* (by key)", ordered: "No", allowsDuplicates: false, allowsNull: true, backingStructure: "Array of Buckets (LinkedList/Red-Black Tree)" },
    { name: "LinkedHashMap", add: "O(1)*", remove: "O(1)*", search: "O(1)*", access: "O(1)*", ordered: "Yes (Insertion/Access order)", allowsDuplicates: false, allowsNull: true, backingStructure: "Hash Table + Doubly Linked List" },
    { name: "TreeMap", add: "O(log n)", remove: "O(log n)", search: "O(log n)", access: "O(log n)", ordered: "Sorted by Key", allowsDuplicates: false, allowsNull: false, backingStructure: "Red-Black Tree" },
    { name: "PriorityQueue", add: "O(log n)", remove: "O(log n)", search: "O(n)", access: "O(1) (peek)", ordered: "Heap Order (Min/Max root)", allowsDuplicates: true, allowsNull: false, backingStructure: "Binary Heap Array" },
    { name: "ArrayDeque", add: "O(1)*", remove: "O(1)*", search: "O(n)", access: "O(1) (ends)", ordered: "Yes (FIFO/LIFO)", allowsDuplicates: true, allowsNull: false, backingStructure: "Circular Resizable Array" }
  ],
  categories: [
    {
      type: "List",
      description: "Ordered collections with index-based access.",
      items: [
        {
          name: "ArrayList",
          syntax: "List<Integer> list = new ArrayList<>();",
          bestFor: "Frequent random reads by index, adding elements to the end.",
          avoidWhen: "Frequent insertions or deletions at index 0 (causes O(n) memory shifts).",
          exampleProblem: "Dynamic arrays, Two Pointers, sorting input arrays"
        },
        {
          name: "LinkedList",
          syntax: "List<Integer> list = new LinkedList<>();",
          bestFor: "Frequent insertions and deletions at ends without memory reallocations.",
          avoidWhen: "Random indexed access (O(n) traversal from head). High memory overhead per node.",
          exampleProblem: "LRU Cache design, Queue/Deque implementations"
        }
      ]
    },
    {
      type: "Set",
      description: "Collections containing no duplicate elements.",
      items: [
        {
          name: "HashSet",
          syntax: "Set<Integer> set = new HashSet<>();",
          bestFor: "O(1) membership testing, deduplicating elements, fast lookup.",
          avoidWhen: "Order of elements matters or sorted traversal is needed.",
          exampleProblem: "Contains Duplicate, Longest Consecutive Sequence"
        },
        {
          name: "LinkedHashSet",
          syntax: "Set<String> set = new LinkedHashSet<>();",
          bestFor: "Deduplication while preserving exact insertion order.",
          avoidWhen: "Maximum raw throughput is needed and ordering is irrelevant.",
          exampleProblem: "Tracking unique elements in discovery sequence"
        },
        {
          name: "TreeSet",
          syntax: "NavigableSet<Integer> set = new TreeSet<>();",
          bestFor: "Sorted range queries, floor(), ceiling(), higher(), lower().",
          avoidWhen: "Only exact equality checks needed (HashMap/HashSet is faster).",
          exampleProblem: "Contains Duplicate III, Sliding Window Median"
        }
      ]
    },
    {
      type: "Map",
      description: "Key-value mappings with unique keys.",
      items: [
        {
          name: "HashMap",
          syntax: "Map<String, Integer> map = new HashMap<>();",
          bestFor: "Key-value associations, frequency counting, complement lookups in O(1) average.",
          avoidWhen: "Keys need to be sorted or traversed in deterministic order.",
          exampleProblem: "Two Sum, Group Anagrams, Subarray Sum Equals K"
        },
        {
          name: "LinkedHashMap",
          syntax: "Map<Integer, Integer> lru = new LinkedHashMap<>(16, 0.75f, true);",
          bestFor: "LRU caches, maintaining insertion order or access order.",
          avoidWhen: "Raw performance is critical and order doesn't matter.",
          exampleProblem: "LRU Cache (override removeEldestEntry)"
        },
        {
          name: "TreeMap",
          syntax: "NavigableMap<Integer, String> map = new TreeMap<>();",
          bestFor: "Sorted keys, subMap queries, floorKey(), ceilingKey().",
          avoidWhen: "Unsorted key-value lookups (TreeMap has O(log n) overhead).",
          exampleProblem: "My Calendar I/II/III, Stock Price Fluctuation"
        }
      ]
    },
    {
      type: "Queue & Deque",
      description: "FIFO queues and double-ended queues for graph traversals and stack behavior.",
      items: [
        {
          name: "ArrayDeque",
          syntax: "Deque<Integer> stack = new ArrayDeque<>(); // Stack behavior\nQueue<Integer> queue = new ArrayDeque<>(); // Queue behavior",
          bestFor: "Standard stacks (push/pop) and FIFO queues. Strictly preferred over java.util.Stack.",
          avoidWhen: "Thread-safe synchronized queues needed (use ConcurrentLinkedQueue).",
          exampleProblem: "Valid Parentheses, Monotonic Stack, BFS Traversal"
        },
        {
          name: "PriorityQueue",
          syntax: "PriorityQueue<Integer> minHeap = new PriorityQueue<>();\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());",
          bestFor: "Min-heap / Max-heap, Top K frequent elements, Dijkstra shortest paths.",
          avoidWhen: "Arbitrary element removal (remove(Object) is O(n)) or sorted traversal.",
          exampleProblem: "Kth Largest Element in an Array, Merge K Sorted Lists, Task Scheduler"
        }
      ]
    }
  ]
};
