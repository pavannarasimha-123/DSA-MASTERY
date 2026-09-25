export const DATA_STRUCTURES = [
  {
    "id": "arrays",
    "slug": "arrays",
    "name": "Arrays & Dynamic Arrays (ArrayList)",
    "category": "Linear Data Structures",
    "theory": "An array is a contiguous memory allocation storing homogeneous elements. Because memory addresses are sequential, any element can be accessed in O(1) time using base address arithmetic:\nAddress(i) = BaseAddress + (i * SizeOfElement).\n\nStatic Arrays vs Dynamic Arrays (ArrayList):\n- Static Array (int[] arr = new int[10]): Fixed size upon allocation. Stored contiguously on the heap/stack. Bounds cannot change.\n- Dynamic Array (ArrayList<E>): Resizable array backed by an internal Object[] buffer. When the buffer fills up, it allocates a new buffer of size (capacity * 1.5 in Java) and copies all elements over using System.arraycopy in O(n) time, yielding O(1) amortized insertion.",
    "detailedDescription": "Arrays are the most fundamental building block in Computer Science. In physical RAM, elements are placed side-by-side in adjacent memory words. This physical arrangement allows CPU hardware prefetchers to load entire cache lines (typically 64 bytes) into L1/L2 caches simultaneously, giving arrays the highest cache locality and lowest latency of any data structure.\n\nDynamic arrays solve the fixed-size limitation by automatically doubling or growing their internal capacity when full. Although a resize takes O(n) to copy elements into a newly allocated block, resizing happens exponentially less often as the array grows. By amortized aggregate analysis, inserting N items takes O(N) total work, meaning each individual append costs only O(1) amortized time.",
    "howItWorks": "1. Memory Layout:\n- When you declare 'int[] arr = new int[5]', the JVM runtime requests a contiguous block of 20 bytes (plus 12-16 bytes of array object header).\n- Accessing 'arr[3]' does NOT require traversing elements; the CPU executes a single indexed memory load instruction: 'BaseAddress + 3 * 4 bytes'.\n\n2. Resizing Mechanism in Java ArrayList:\n- Default initial capacity is 10.\n- When 'size == capacity', 'grow(minCapacity)' computes: 'newCapacity = oldCapacity + (oldCapacity >> 1)' (a 1.5x increase).\n- 'Arrays.copyOf(elementData, newCapacity)' invokes native 'System.arraycopy()' to blast memory bytes into the new array.\n- The old array is dereferenced and collected by the garbage collector.\n\n3. Hardware Cache Behavior:\n- Iterating sequentially through an array accesses consecutive cache lines, yielding near 100% L1 cache hits.\n- In contrast, linked structures suffer pointer chasing cache misses (often 200+ CPU clock cycles per node dereference).",
    "operationsTable": [
      {
        "operation": "Access by Index",
        "complexity": "O(1)",
        "note": "Direct pointer arithmetic (Base + i * size)"
      },
      {
        "operation": "Search (Unsorted)",
        "complexity": "O(n)",
        "note": "Linear scan through elements"
      },
      {
        "operation": "Search (Sorted)",
        "complexity": "O(log n)",
        "note": "Binary search on sorted indices"
      },
      {
        "operation": "Insert at Beginning",
        "complexity": "O(n)",
        "note": "Must shift all existing elements right by 1"
      },
      {
        "operation": "Insert at End",
        "complexity": "O(1)*",
        "note": "Amortized constant time; O(n) during resize"
      },
      {
        "operation": "Insert at Index i",
        "complexity": "O(n)",
        "note": "Shifts (size - i) elements right"
      },
      {
        "operation": "Delete from Beginning",
        "complexity": "O(n)",
        "note": "Shifts all remaining elements left by 1"
      },
      {
        "operation": "Delete from End",
        "complexity": "O(1)",
        "note": "Immediate decrement of size pointer"
      }
    ],
    "methodsList": [
      {
        "name": "get(int index)",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the element at the specified position. Throws IndexOutOfBoundsException if index is negative or >= size.",
        "example": "int val = list.get(2);"
      },
      {
        "name": "set(int index, E element)",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Replaces the element at the specified position with the specified element, returning the previous value.",
        "example": "int prev = list.set(0, 99);"
      },
      {
        "name": "add(E element)",
        "returnType": "boolean",
        "timeComplexity": "O(1)*",
        "spaceComplexity": "O(1)",
        "description": "Appends the element to the end. Amortized O(1); triggers O(n) reallocation when capacity is reached.",
        "example": "list.add(42);"
      },
      {
        "name": "add(int index, E element)",
        "returnType": "void",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "description": "Inserts the element at index, shifting all subsequent elements right by one position.",
        "example": "list.add(0, 10); // Insert at head"
      },
      {
        "name": "remove(int index)",
        "returnType": "E",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "description": "Removes the element at index and shifts subsequent elements left by one. Returns removed element.",
        "example": "int removed = list.remove(3);"
      },
      {
        "name": "remove(Object o)",
        "returnType": "boolean",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "description": "Finds the first occurrence of the element via equals() and removes it.",
        "example": "list.remove(Integer.valueOf(42));"
      },
      {
        "name": "contains(Object o)",
        "returnType": "boolean",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "description": "Performs linear search to verify if the element is present. For O(1) lookups, use HashSet instead.",
        "example": "boolean found = list.contains(25);"
      },
      {
        "name": "size()",
        "returnType": "int",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the number of active elements in the array list.",
        "example": "int len = list.size();"
      },
      {
        "name": "isEmpty()",
        "returnType": "boolean",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns true if size == 0, false otherwise.",
        "example": "if (!list.isEmpty()) { ... }"
      },
      {
        "name": "clear()",
        "returnType": "void",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "description": "Nulls out internal references so garbage collector can reclaim memory, and resets size to 0.",
        "example": "list.clear();"
      },
      {
        "name": "Arrays.sort(arr)",
        "returnType": "void",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(log n)",
        "description": "Sorts primitive arrays using Dual-Pivot Quicksort. For object arrays, uses adaptive TimSort.",
        "example": "Arrays.sort(arr);"
      },
      {
        "name": "Arrays.binarySearch(arr, key)",
        "returnType": "int",
        "timeComplexity": "O(log n)",
        "spaceComplexity": "O(1)",
        "description": "Searches sorted array for key. Returns index if found; otherwise (-(insertion point) - 1).",
        "example": "int idx = Arrays.binarySearch(sortedArr, 23);"
      }
    ],
    "visualWorkflow": {
      "title": "How Dynamic Array Resizing & Shifting Works",
      "description": "Visual walkthrough of contiguous slot indexing, right-shifting during insertion, and 1.5x buffer reallocation.",
      "steps": [
        {
          "stage": "Contiguous Memory & Indexing",
          "explanation": "Memory is allocated in contiguous blocks. Accessing index 2 evaluates BaseAddress + 2 * sizeof(int) instantly.",
          "visualState": [
            {
              "idx": 0,
              "val": 12,
              "label": "Base"
            },
            {
              "idx": 1,
              "val": 24,
              "label": "Base+4B"
            },
            {
              "idx": 2,
              "val": 36,
              "label": "Target (O(1))"
            },
            {
              "idx": 3,
              "val": 48,
              "label": "Base+12B"
            }
          ]
        },
        {
          "stage": "Insertion at Index 1 (Element Shifting)",
          "explanation": "To insert value 99 at index 1, elements at index 1..3 must shift right by one slot to vacate index 1.",
          "visualState": [
            {
              "idx": 0,
              "val": 12,
              "label": "Kept"
            },
            {
              "idx": 1,
              "val": 99,
              "label": "New (99)",
              "highlight": "inserted"
            },
            {
              "idx": 2,
              "val": 24,
              "label": "Shifted →",
              "highlight": "shifted"
            },
            {
              "idx": 3,
              "val": 36,
              "label": "Shifted →",
              "highlight": "shifted"
            },
            {
              "idx": 4,
              "val": 48,
              "label": "Shifted →",
              "highlight": "shifted"
            }
          ]
        },
        {
          "stage": "Buffer Reallocation (Capacity Doubling)",
          "explanation": "When array reaches capacity limit (4/4), a new block of size 6 (1.5x) is allocated and copied over.",
          "visualState": [
            {
              "idx": 0,
              "val": 12,
              "label": "Copied"
            },
            {
              "idx": 1,
              "val": 99,
              "label": "Copied"
            },
            {
              "idx": 2,
              "val": 24,
              "label": "Copied"
            },
            {
              "idx": 3,
              "val": 36,
              "label": "Copied"
            },
            {
              "idx": 4,
              "val": 48,
              "label": "Copied"
            },
            {
              "idx": 5,
              "val": null,
              "label": "Free Slot"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "int[] arr = new int[n]; // Fast, cache-friendly, zero boxing overhead, fixed length.",
      "dynamic": "ArrayList<Integer> list = new ArrayList<>(); // Resizable, stores boxed Objects, supports Collections API.",
      "whenToUse": "Use primitive int[] for competitive programming and performance-critical loops. Use ArrayList when collection size changes dynamically or Collections utility methods are required."
    },
    "commonPatterns": [
      "Two Pointers",
      "Sliding Window",
      "Prefix Sum",
      "Kadane's Algorithm"
    ],
    "topProblems": [
      "Two Sum",
      "Container With Most Water",
      "Trapping Rain Water",
      "3Sum"
    ]
  },
  {
    "id": "strings",
    "slug": "strings",
    "name": "Strings & StringBuilder",
    "category": "Linear Data Structures",
    "theory": "In Java, String is an immutable class backed by a byte array (Java 9+ compact strings for Latin-1, or char array UTF-16). Immutability ensures thread-safety, security in network/database connections, and allows string caching in the String Constant Pool.\n\nStringBuilder vs StringBuffer:\n- String: Immutable. Concatenation ('s += char') creates a brand new String and copies all characters, turning loops into O(n²) disasters.\n- StringBuilder: Mutable char buffer. Resizes exponentially and appends characters in O(1) amortized time. Not thread-safe (high speed).\n- StringBuffer: Mutable char buffer with synchronized methods. Thread-safe but introduces unnecessary lock overhead.",
    "detailedDescription": "Understanding String memory architecture is crucial for technical interviews. In Java, string literals (like \"abc\") are stored in the String Constant Pool inside heap memory. If another variable assigns \"abc\", it points to the exact same memory address.\n\nHowever, because String is immutable, modifying a string requires creating a brand new String object. In an interview, executing 'String s = \"\"; for(int i=0; i<n; i++) s += arr[i];' allocates n intermediate objects, copying 1 + 2 + 3 + ... + n = O(n²) characters. This is the #1 cause of Time Limit Exceeded (TLE) on string problems. StringBuilder solves this by maintaining a mutable array buffer that doubles in size only when exhausted.",
    "howItWorks": "1. Internal Representation:\n- Prior to Java 9: 'private final char[] value;' (2 bytes per character).\n- Java 9+ Compact Strings: 'private final byte[] value;' with a 'coder' flag (0 for LATIN1 (1 byte/char), 1 for UTF16 (2 bytes/char)). This cuts heap memory usage by 50% for English text!\n\n2. String Constant Pool:\n- String s1 = \"hello\"; String s2 = \"hello\"; (s1 == s2 is true because both point to the pool instance).\n- String s3 = new String(\"hello\"); (s3 == s1 is false because 'new' explicitly forces heap allocation outside pool).\n- Calling 's3.intern()' moves reference to pool instance.\n\n3. StringBuilder Internal Buffer:\n- Has an internal 'char[] value' and an 'int count'.\n- 'append(char c)' places character at 'value[count++]' in O(1) time.\n- If 'count == value.length', it doubles capacity: '(value.length << 1) + 2'.",
    "operationsTable": [
      {
        "operation": "Access char at index",
        "complexity": "O(1)",
        "note": "s.charAt(i) returns byte/char directly"
      },
      {
        "operation": "Substring",
        "complexity": "O(k)",
        "note": "Copies k characters into newly allocated String"
      },
      {
        "operation": "String Concatenation in Loop (+)",
        "complexity": "O(n²)",
        "note": "Anti-pattern! Reallocates and copies every iteration"
      },
      {
        "operation": "StringBuilder.append()",
        "complexity": "O(1)*",
        "note": "Amortized append to internal character buffer"
      },
      {
        "operation": "String.indexOf()",
        "complexity": "O(n * m)",
        "note": "Naive substring search; O(n) with KMP/Rabin-Karp"
      },
      {
        "operation": "String.equals()",
        "complexity": "O(n)",
        "note": "Compares lengths first, then byte-by-byte"
      }
    ],
    "methodsList": [
      {
        "name": "charAt(int index)",
        "returnType": "char",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the char value at the specified index. Bounds: 0 to length() - 1.",
        "example": "char c = s.charAt(0);"
      },
      {
        "name": "length()",
        "returnType": "int",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the number of characters in this string.",
        "example": "int len = s.length();"
      },
      {
        "name": "substring(int beginIndex, int endIndex)",
        "returnType": "String",
        "timeComplexity": "O(k)",
        "spaceComplexity": "O(k)",
        "description": "Returns substring from beginIndex inclusive to endIndex exclusive. Copies k = (end - begin) characters.",
        "example": "String sub = s.substring(2, 5);"
      },
      {
        "name": "toCharArray()",
        "returnType": "char[]",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "description": "Converts string to a newly allocated char array for two-pointer or in-place manipulations.",
        "example": "char[] chars = s.toCharArray();"
      },
      {
        "name": "indexOf(String str)",
        "returnType": "int",
        "timeComplexity": "O(n * m)",
        "spaceComplexity": "O(1)",
        "description": "Returns the index of the first occurrence of the specified substring, or -1 if not found.",
        "example": "int idx = s.indexOf(\"target\");"
      },
      {
        "name": "contains(CharSequence s)",
        "returnType": "boolean",
        "timeComplexity": "O(n * m)",
        "spaceComplexity": "O(1)",
        "description": "Returns true if and only if this string contains the specified sequence of char values.",
        "example": "boolean has = s.contains(\"abc\");"
      },
      {
        "name": "split(String regex)",
        "returnType": "String[]",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "description": "Splits this string around matches of the given regular expression.",
        "example": "String[] words = s.split(\"\\\\s+\");"
      },
      {
        "name": "StringBuilder.append(String str)",
        "returnType": "StringBuilder",
        "timeComplexity": "O(k)*",
        "spaceComplexity": "O(k)",
        "description": "Appends the string into the mutable internal buffer in amortized time.",
        "example": "sb.append(\"abc\").append(123);"
      },
      {
        "name": "StringBuilder.reverse()",
        "returnType": "StringBuilder",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "description": "Reverses the character sequence in-place inside the buffer.",
        "example": "String rev = sb.reverse().toString();"
      },
      {
        "name": "StringBuilder.toString()",
        "returnType": "String",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "description": "Creates and returns an immutable String containing the characters in this buffer.",
        "example": "String result = sb.toString();"
      }
    ],
    "visualWorkflow": {
      "title": "Immutable String Copies vs Mutable StringBuilder Buffer",
      "description": "Visual comparison between loop concatenation creating garbage vs StringBuilder in-place buffer growth.",
      "steps": [
        {
          "stage": "String '+' in Loop (Anti-Pattern)",
          "explanation": "Each 's += c' allocates a brand new String object, copying all existing characters and discarding previous instance.",
          "visualState": [
            {
              "idx": 1,
              "val": "\"a\"",
              "label": "Alloc #1 (1 byte)"
            },
            {
              "idx": 2,
              "val": "\"ab\"",
              "label": "Alloc #2 (2 bytes)"
            },
            {
              "idx": 3,
              "val": "\"abc\"",
              "label": "Alloc #3 (3 bytes)"
            },
            {
              "idx": 4,
              "val": "Total",
              "label": "O(n²) Memory Waste"
            }
          ]
        },
        {
          "stage": "StringBuilder Internal Buffer",
          "explanation": "StringBuilder allocates an initial 16-character array buffer. Appending simply places chars at buffer[count++].",
          "visualState": [
            {
              "idx": 0,
              "val": "'a'",
              "label": "buffer[0]"
            },
            {
              "idx": 1,
              "val": "'b'",
              "label": "buffer[1]"
            },
            {
              "idx": 2,
              "val": "'c'",
              "label": "buffer[2]"
            },
            {
              "idx": 3,
              "val": "null",
              "label": "Unused buffer slot"
            },
            {
              "idx": 4,
              "val": "Total",
              "label": "O(n) Linear Time"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "String s = \"hello\"; // Immutable, pooled in String Constant Pool.",
      "dynamic": "StringBuilder sb = new StringBuilder(); // Mutable buffer, use inside loops.",
      "whenToUse": "Always use StringBuilder when building or appending strings in loops to prevent quadratic O(n²) memory copying overhead."
    },
    "commonPatterns": [
      "Sliding Window",
      "Two Pointers",
      "Frequency Counting",
      "KMP / Rolling Hash"
    ],
    "topProblems": [
      "Valid Palindrome",
      "Longest Substring Without Repeating Characters",
      "Minimum Window Substring"
    ]
  },
  {
    "id": "linked-list",
    "slug": "linked-list",
    "name": "Linked List (Singly & Doubly)",
    "category": "Linear Data Structures",
    "theory": "A Linked List is a linear collection of data nodes whose order is not governed by physical memory placement. Instead, each node consists of data and a reference pointer to the successor node (Singly Linked List) and predecessor node (Doubly Linked List).\n\nKey Variations:\n1. Singly Linked List: Each node contains 'val' and 'next'. Traversal is strictly unidirectional.\n2. Doubly Linked List: Each node contains 'val', 'next', and 'prev'. Allows bidirectional traversal and O(1) removal given a node pointer.\n3. Circular Linked List: Tail node's 'next' points back to the Head node, forming a loop. Useful for round-robin scheduling.",
    "detailedDescription": "Unlike arrays, linked lists do not require a contiguous memory block. Nodes are allocated anywhere in heap memory and linked via memory addresses. This provides instant O(1) insertions and deletions at known pointers without shifting elements.\n\nThe trade-off is that linked lists lack random access: finding the k-th element requires starting at the head and walking k pointers in O(k) time. Additionally, each node carries memory overhead for reference pointers (8 bytes per reference on 64-bit JVMs with compressed OOPs disabled, or 4 bytes with compressed OOPs), and non-contiguous memory allocations degrade CPU cache prefetching performance.",
    "howItWorks": "1. Node Architecture:\n- Singly: class ListNode { int val; ListNode next; }\n- Node memory: 16-byte object header + 4-byte int val + 4-8 byte reference pointer + padding = 24-32 bytes per integer node (compared to 4 bytes in int[]).\n\n2. Insertion at Head (O(1)):\n- 'newNode.next = head;'\n- 'head = newNode;'\n- Zero elements shifted!\n\n3. In-Place Reversal:\n- Maintain three pointers: 'prev = null', 'curr = head', 'next = null'.\n- While curr != null:\n  next = curr.next;\n  curr.next = prev;\n  prev = curr;\n  curr = next;\n- 'head = prev' (returns new head in O(n) time, O(1) extra space).\n\n4. Fast & Slow Pointers (Floyd's Cycle Finding):\n- Slow moves 1 step ('slow = slow.next'), Fast moves 2 steps ('fast = fast.next.next').\n- If a cycle exists, Fast must overlap Slow within the loop in O(n) time.",
    "operationsTable": [
      {
        "operation": "Insert at Head",
        "complexity": "O(1)",
        "note": "newHead.next = head; head = newHead"
      },
      {
        "operation": "Insert at Tail (with tail ref)",
        "complexity": "O(1)",
        "note": "tail.next = newNode; tail = newNode"
      },
      {
        "operation": "Delete Head",
        "complexity": "O(1)",
        "note": "head = head.next"
      },
      {
        "operation": "Delete Node (given prev node)",
        "complexity": "O(1)",
        "note": "prev.next = prev.next.next"
      },
      {
        "operation": "Search by Value",
        "complexity": "O(n)",
        "note": "Must traverse node pointers sequentially"
      },
      {
        "operation": "Access by Index i",
        "complexity": "O(n)",
        "note": "Must traverse i nodes from head"
      }
    ],
    "methodsList": [
      {
        "name": "addFirst(E e)",
        "returnType": "void",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Inserts the specified element at the beginning of this list.",
        "example": "linkedList.addFirst(10);"
      },
      {
        "name": "addLast(E e)",
        "returnType": "void",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Appends the specified element to the end of this list.",
        "example": "linkedList.addLast(50);"
      },
      {
        "name": "getFirst()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the first element in this list without removing it. Throws NoSuchElementException if empty.",
        "example": "int first = linkedList.getFirst();"
      },
      {
        "name": "getLast()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the last element in this list without removing it.",
        "example": "int last = linkedList.getLast();"
      },
      {
        "name": "removeFirst()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Removes and returns the first element from this list.",
        "example": "int head = linkedList.removeFirst();"
      },
      {
        "name": "removeLast()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Removes and returns the last element from this list.",
        "example": "int tail = linkedList.removeLast();"
      },
      {
        "name": "peek()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves, but does not remove, the head of this list (returns null if empty).",
        "example": "Integer top = linkedList.peek();"
      },
      {
        "name": "poll()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves and removes the head of this list (returns null if empty).",
        "example": "Integer item = linkedList.poll();"
      }
    ],
    "visualWorkflow": {
      "title": "Node Pointer Connections & Traversal",
      "description": "Visual depiction of node references, pointer linking, and in-place reversing.",
      "steps": [
        {
          "stage": "Singly Linked List Nodes",
          "explanation": "Each node holds a data value and a 64-bit reference address pointing to the next node in heap memory.",
          "visualState": [
            {
              "idx": 0,
              "val": "[Data: 10 | next] →",
              "label": "Head"
            },
            {
              "idx": 1,
              "val": "[Data: 20 | next] →",
              "label": "Node 1"
            },
            {
              "idx": 2,
              "val": "[Data: 30 | next] → null",
              "label": "Tail"
            }
          ]
        },
        {
          "stage": "O(1) Insertion at Head",
          "explanation": "Create new node with next pointing to current head, then update head pointer. Zero elements shifted!",
          "visualState": [
            {
              "idx": 0,
              "val": "[Data: 5 | next] →",
              "label": "New Head (O(1))",
              "highlight": "inserted"
            },
            {
              "idx": 1,
              "val": "[Data: 10 | next] →",
              "label": "Old Head"
            },
            {
              "idx": 2,
              "val": "[Data: 20 | next] →",
              "label": "Node 1"
            },
            {
              "idx": 3,
              "val": "[Data: 30 | next] → null",
              "label": "Tail"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "class ListNode { int val; ListNode next; ListNode(int x) { val = x; } }",
      "dynamic": "LinkedList<Integer> list = new LinkedList<>(); // Doubly linked list in java.util",
      "whenToUse": "Use custom ListNode when implementing DSA algorithms. Use java.util.LinkedList when implementing queue/deque operations, though ArrayDeque is often faster due to CPU caching."
    },
    "commonPatterns": [
      "Fast and Slow Pointers",
      "Dummy Head Node",
      "In-Place Reversal",
      "Merge Technique"
    ],
    "topProblems": [
      "Reverse Linked List",
      "Linked List Cycle",
      "Middle of Linked List",
      "Merge Two Sorted Lists"
    ]
  },
  {
    "id": "stack",
    "slug": "stack",
    "name": "Stack",
    "category": "Abstract Data Types",
    "theory": "A Stack is a Last-In, First-Out (LIFO) abstract data structure where additions (push) and removals (pop) occur strictly at the top.\n\nWhy ArrayDeque over legacy java.util.Stack in Java:\n- java.util.Stack extends java.util.Vector. Every method ('push', 'pop', 'peek') is synchronized with object locks. In single-threaded algorithmic problems, acquiring and releasing locks adds severe latency.\n- Deque<Integer> stack = new ArrayDeque<>() is unsynchronized, backed by a contiguous resizable circular array, and has zero locking overhead.",
    "detailedDescription": "Stacks model hierarchical nesting, function call frames, backtracking, and expression evaluation. Whenever an algorithm needs to process nested parentheses, undo previous operations, or find the next greater/smaller element in an array, a Stack is the ideal tool.\n\nThe Monotonic Stack pattern is one of the most tested patterns in FAANG interviews. By maintaining elements in strictly increasing or decreasing order inside the stack, we can find the Nearest Greater Element (NGE) for all array elements in O(n) total time instead of O(n²).",
    "howItWorks": "1. Internal Implementation (ArrayDeque):\n- Stores elements in 'Object[] elements' with 'int head' and 'int tail' index pointers.\n- 'push(E e)' calls 'addFirst(e)': decrements head modulo capacity and places element.\n- 'pop()' calls 'removeFirst()': reads head, sets slot to null, increments head.\n- Never needs node allocations; resizing doubles array capacity.\n\n2. Function Call Stack Simulation:\n- Recursion in software uses the runtime call stack. Any recursive algorithm (DFS, Fibonacci, Tree Traversals) can be converted to an iterative solution using an explicit Stack.\n\n3. Monotonic Stack Invariant:\n- To find Next Greater Element: iterate right-to-left. Pop all stack elements <= current element. The top of the stack is now the next greater element! Push current element. Total runtime: O(n) because each item enters and leaves the stack at most once.",
    "operationsTable": [
      {
        "operation": "Push",
        "complexity": "O(1)*",
        "note": "Add element to top of stack"
      },
      {
        "operation": "Pop",
        "complexity": "O(1)",
        "note": "Remove and return top element"
      },
      {
        "operation": "Peek",
        "complexity": "O(1)",
        "note": "Inspect top element without removing"
      },
      {
        "operation": "Search",
        "complexity": "O(n)",
        "note": "Requires popping elements"
      },
      {
        "operation": "isEmpty",
        "complexity": "O(1)",
        "note": "Checks if size == 0"
      }
    ],
    "methodsList": [
      {
        "name": "push(E e)",
        "returnType": "void",
        "timeComplexity": "O(1)*",
        "spaceComplexity": "O(1)",
        "description": "Pushes element onto the top of the stack. (In Deque: equivalent to addFirst(e)).",
        "example": "stack.push(10);"
      },
      {
        "name": "pop()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Removes and returns top element. Throws NoSuchElementException if empty.",
        "example": "int top = stack.pop();"
      },
      {
        "name": "peek()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns top element without removing. Returns null if empty (or throws exception in legacy Stack).",
        "example": "int top = stack.peek();"
      },
      {
        "name": "isEmpty()",
        "returnType": "boolean",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns true if stack contains no elements.",
        "example": "while (!stack.isEmpty()) { ... }"
      },
      {
        "name": "size()",
        "returnType": "int",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns number of active elements in stack.",
        "example": "int count = stack.size();"
      }
    ],
    "visualWorkflow": {
      "title": "LIFO (Last-In, First-Out) Stack Execution",
      "description": "Visual depiction of push and pop operations maintaining top pointer.",
      "steps": [
        {
          "stage": "Pushing Elements Onto Stack",
          "explanation": "Elements are placed on top. Pushing 10, then 20, then 30 places 30 at the top.",
          "visualState": [
            {
              "idx": 2,
              "val": 30,
              "label": "Top (Most Recent)",
              "highlight": "inserted"
            },
            {
              "idx": 1,
              "val": 20,
              "label": "Middle"
            },
            {
              "idx": 0,
              "val": 10,
              "label": "Bottom"
            }
          ]
        },
        {
          "stage": "Popping Top Element",
          "explanation": "Calling pop() removes the most recently added item (30). 20 becomes the new top.",
          "visualState": [
            {
              "idx": 1,
              "val": 20,
              "label": "New Top (O(1))",
              "highlight": "shifted"
            },
            {
              "idx": 0,
              "val": 10,
              "label": "Bottom"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "Deque<Integer> stack = new ArrayDeque<>(); // Recommended modern Java practice",
      "dynamic": "Stack<Integer> stack = new Stack<>(); // Legacy class extending Vector (AVOID)",
      "whenToUse": "Use ArrayDeque for all stack requirements. Never use java.util.Stack in modern Java interviews."
    },
    "commonPatterns": [
      "Monotonic Stack",
      "Expression Parsing",
      "Parentheses Matching",
      "DFS Call Simulation"
    ],
    "topProblems": [
      "Valid Parentheses",
      "Daily Temperatures",
      "Largest Rectangle in Histogram",
      "Min Stack"
    ]
  },
  {
    "id": "queue",
    "slug": "queue",
    "name": "Queue & Deque",
    "category": "Abstract Data Types",
    "theory": "A Queue is a First-In, First-Out (FIFO) structure where items enter at the rear (enqueue/offer) and exit from the front (dequeue/poll).\nA Deque (Double-Ended Queue) allows insertions and deletions at both ends in O(1) time.\n\nCircular Queue Optimization:\nIn a fixed-size array queue, repeated dequeues leave unused empty cells at the front. A Circular Queue wraps the index around using modulo arithmetic: 'tail = (tail + 1) % capacity', enabling continuous reuse of empty slots without element shifting.",
    "detailedDescription": "Queues are foundational for Breadth-First Search (BFS), task scheduling, sliding window maximums, and buffer pipelining.\n\nIn Java, the Queue interface has two families of methods:\n1. Throws Exception on failure: add(e), remove(), element()\n2. Returns Special Value (null or false) on failure: offer(e), poll(), peek()\nFor competitive programming and algorithmic interviews, ALWAYS prefer 'offer()', 'poll()', and 'peek()' because they never throw unhandled runtime exceptions on empty or full boundaries.",
    "howItWorks": "1. ArrayDeque Circular Ring Buffer:\n- Allocates an array of size power-of-two (e.g. 16).\n- Two pointers: 'head' points to front, 'tail' points to next free rear slot.\n- Bitwise wrapping: '(head - 1) & (elements.length - 1)' wraps around instantly without expensive division modulo instructions!\n\n2. Monotonic Deque Pattern:\n- Used in 'Sliding Window Maximum' in O(n) time.\n- The deque stores indices of elements in decreasing order of values.\n- As the window slides, remove indices that have fallen out of the window from the front, and remove smaller elements from the rear. Front of deque always holds the max element!",
    "operationsTable": [
      {
        "operation": "Enqueue / offer",
        "complexity": "O(1)*",
        "note": "Add to tail of queue"
      },
      {
        "operation": "Dequeue / poll",
        "complexity": "O(1)",
        "note": "Remove from head of queue"
      },
      {
        "operation": "Peek",
        "complexity": "O(1)",
        "note": "Inspect head element without removing"
      },
      {
        "operation": "offerFirst / offerLast",
        "complexity": "O(1)*",
        "note": "Insert at either end in Deque"
      },
      {
        "operation": "pollFirst / pollLast",
        "complexity": "O(1)",
        "note": "Remove from either end in Deque"
      }
    ],
    "methodsList": [
      {
        "name": "offer(E e)",
        "returnType": "boolean",
        "timeComplexity": "O(1)*",
        "spaceComplexity": "O(1)",
        "description": "Inserts element at the tail of the queue. Returns true if successful, false if capacity full.",
        "example": "queue.offer(100);"
      },
      {
        "name": "poll()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves and removes the head of this queue, or returns null if this queue is empty.",
        "example": "Integer val = queue.poll();"
      },
      {
        "name": "peek()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.",
        "example": "Integer head = queue.peek();"
      },
      {
        "name": "offerFirst(E e)",
        "returnType": "boolean",
        "timeComplexity": "O(1)*",
        "spaceComplexity": "O(1)",
        "description": "Inserts element at the front of the Deque.",
        "example": "deque.offerFirst(5);"
      },
      {
        "name": "pollLast()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves and removes the last element of this Deque, or returns null if empty.",
        "example": "Integer last = deque.pollLast();"
      }
    ],
    "visualWorkflow": {
      "title": "FIFO (First-In, First-Out) Queue Processing",
      "description": "Items enter at rear (offer) and leave at front (poll).",
      "steps": [
        {
          "stage": "Enqueue (offer) at Rear",
          "explanation": "Elements arrive at the back. 10 entered first, followed by 20, then 30.",
          "visualState": [
            {
              "idx": 0,
              "val": 10,
              "label": "Front (Leaves Next)"
            },
            {
              "idx": 1,
              "val": 20,
              "label": "Middle"
            },
            {
              "idx": 2,
              "val": 30,
              "label": "Rear (Just Arrived)",
              "highlight": "inserted"
            }
          ]
        },
        {
          "stage": "Dequeue (poll) from Front",
          "explanation": "Calling poll() removes 10 from the front. 20 becomes the new front.",
          "visualState": [
            {
              "idx": 0,
              "val": 20,
              "label": "New Front (O(1))",
              "highlight": "shifted"
            },
            {
              "idx": 1,
              "val": 30,
              "label": "Rear"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "Queue<Integer> q = new ArrayDeque<>(); // Standard FIFO queue",
      "dynamic": "Deque<Integer> dq = new ArrayDeque<>(); // Double-ended queue",
      "whenToUse": "Use ArrayDeque for BFS traversals and sliding window buffers. Use PriorityQueue when elements must be ordered by priority rather than arrival time."
    },
    "commonPatterns": [
      "Breadth-First Search (BFS)",
      "Sliding Window Maximum",
      "Monotonic Queue"
    ],
    "topProblems": [
      "Sliding Window Maximum",
      "Implement Queue using Stacks",
      "Rotting Oranges"
    ]
  },
  {
    "id": "hash-table",
    "slug": "hash-table",
    "name": "Hash Table (HashMap & HashSet)",
    "category": "Associative Data Structures",
    "theory": "A Hash Table maps keys to values for average O(1) lookups, insertions, and deletions. It transforms keys into array indices using a hash function:\nIndex = hash(key) & (n - 1).\n\nCollision Resolution in Java HashMap:\nWhen two different keys produce the same bucket index, a collision occurs.\n- Java 7: Separate chaining using Singly Linked Lists (worst-case O(n) if all keys collide).\n- Java 8+: Hybrid separate chaining. If a bucket's linked list length reaches TREEIFY_THRESHOLD (8 items) and table capacity >= 64, the linked list converts into a Red-Black Tree (TreeNode), reducing worst-case lookups from O(n) to O(log n)!",
    "detailedDescription": "Hash Tables are the single most frequently used data structure in coding interviews. They power Two Sum, frequency counting, caching (LRU Cache), memoization in Dynamic Programming, and graph visited sets.\n\nA HashMap has two tuning parameters:\n1. Initial Capacity: Number of buckets (default 16).\n2. Load Factor: Threshold ratio (size / capacity) that triggers resizing (default 0.75). When size exceeds 16 * 0.75 = 12 items, the bucket array doubles to 32 and rehashes all elements.",
    "howItWorks": "1. Key Hashing:\n- Java calls 'key.hashCode()'.\n- Perturbation function: 'int h = key.hashCode(); return (h ^ (h >>> 16));' (spreads higher bits down to prevent clustering).\n- Bucket index: 'i = (table.length - 1) & hash' (fast bitwise AND equivalent to modulo when table.length is a power of 2).\n\n2. equals() and hashCode() Contract:\n- If 'a.equals(b) == true', then 'a.hashCode() == b.hashCode()' MUST be true!\n- If you override equals(), you MUST override hashCode(). Otherwise, the same logical key will land in different bucket indices, causing get() to return null.\n\n3. Treeification (Java 8+):\n- If a bucket contains >= 8 nodes and total capacity >= 64, nodes are transformed into Red-Black Tree nodes (O(log n) search).\n- If tree shrinks to <= 6 nodes during deletions, it converts back to a linked list (untreeify).",
    "operationsTable": [
      {
        "operation": "Insert (put)",
        "complexity": "O(1) avg / O(log n) worst",
        "note": "Amortized O(1); treeified buckets take O(log n)"
      },
      {
        "operation": "Lookup (get)",
        "complexity": "O(1) avg / O(log n) worst",
        "note": "Computes hash index and checks key.equals()"
      },
      {
        "operation": "Delete (remove)",
        "complexity": "O(1) avg / O(log n) worst",
        "note": "Unlinks node from bucket chain/tree"
      },
      {
        "operation": "containsKey",
        "complexity": "O(1) avg",
        "note": "Verifies key presence"
      },
      {
        "operation": "Resize (Rehash)",
        "complexity": "O(n)",
        "note": "Allocates double capacity and redistributes entries"
      }
    ],
    "methodsList": [
      {
        "name": "put(K key, V value)",
        "returnType": "V",
        "timeComplexity": "O(1)*",
        "spaceComplexity": "O(1)",
        "description": "Associates specified value with specified key. Returns previous value or null.",
        "example": "map.put(\"apple\", 5);"
      },
      {
        "name": "get(Object key)",
        "returnType": "V",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the value mapped to the key, or null if key does not exist.",
        "example": "Integer count = map.get(\"apple\");"
      },
      {
        "name": "getOrDefault(Object key, V defaultValue)",
        "returnType": "V",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns mapped value if present, else defaultValue. Crucial for frequency counting!",
        "example": "map.put(num, map.getOrDefault(num, 0) + 1);"
      },
      {
        "name": "containsKey(Object key)",
        "returnType": "boolean",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns true if map contains a mapping for specified key.",
        "example": "if (map.containsKey(target - num)) { ... }"
      },
      {
        "name": "keySet()",
        "returnType": "Set<K>",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns a Set view of the keys contained in this map.",
        "example": "for (String key : map.keySet()) { ... }"
      },
      {
        "name": "entrySet()",
        "returnType": "Set<Map.Entry<K,V>>",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns key-value pairs. Iterating over entrySet() is much faster than keySet() + get()!",
        "example": "for (Map.Entry<String, Integer> e : map.entrySet()) { ... }"
      }
    ],
    "visualWorkflow": {
      "title": "Hash Function, Buckets, and Separate Chaining",
      "description": "Visual depiction of key hashing, bucket indexing, and collision linked lists.",
      "steps": [
        {
          "stage": "Hash & Bucket Index Calculation",
          "explanation": "Key 'apple' has hash 96354. Index = 96354 & (16 - 1) = 2. It lands in Bucket #2.",
          "visualState": [
            {
              "idx": 0,
              "val": "Bucket 0: null",
              "label": "Empty"
            },
            {
              "idx": 1,
              "val": "Bucket 1: null",
              "label": "Empty"
            },
            {
              "idx": 2,
              "val": "Bucket 2: [apple → 5]",
              "label": "Placed in Bucket 2",
              "highlight": "inserted"
            },
            {
              "idx": 3,
              "val": "Bucket 3: null",
              "label": "Empty"
            }
          ]
        },
        {
          "stage": "Collision Resolution (Separate Chaining)",
          "explanation": "Key 'banana' also evaluates to Bucket #2. It is chained to the end of the bucket's node list.",
          "visualState": [
            {
              "idx": 0,
              "val": "Bucket 0: null",
              "label": "Empty"
            },
            {
              "idx": 1,
              "val": "Bucket 1: null",
              "label": "Empty"
            },
            {
              "idx": 2,
              "val": "[apple → 5] → [banana → 9]",
              "label": "Chained Collision",
              "highlight": "shifted"
            },
            {
              "idx": 3,
              "val": "Bucket 3: null",
              "label": "Empty"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "HashMap<K, V> map = new HashMap<>(); // Unordered, fast O(1) lookups.",
      "dynamic": "TreeMap<K, V> treeMap = new TreeMap<>(); // Sorted by keys in O(log n) time.",
      "whenToUse": "Use HashMap for general O(1) key-value caching and lookups. Use LinkedHashMap when insertion order matters (e.g. LRU cache). Use TreeMap when keys must be ordered."
    },
    "commonPatterns": [
      "Frequency Counting",
      "Two Sum Hash Lookups",
      "LRU Caching",
      "Subarray Sum Equals K"
    ],
    "topProblems": [
      "Two Sum",
      "Group Anagrams",
      "LRU Cache",
      "Subarray Sum Equals K"
    ]
  },
  {
    "id": "trees",
    "slug": "trees",
    "name": "Trees & Binary Search Trees (BST)",
    "category": "Hierarchical Data Structures",
    "theory": "A Tree is an acyclic connected hierarchical graph where every node has exactly one parent (except the root, which has none). A Binary Tree restricts each node to at most two children: 'left' and 'right'.\n\nBinary Search Tree (BST) Invariant:\nFor any node X:\n- All values in left subtree < X.val\n- All values in right subtree > X.val\nAn Inorder Traversal (Left, Root, Right) of a BST ALWAYS visits nodes in strictly sorted ascending order!",
    "detailedDescription": "Trees are the fundamental data structure for hierarchical data: file directory systems, DOM trees in browsers, database indexing (B-Trees / B+ Trees), and expression parsing.\n\nBalanced vs Degenerate Trees:\n- If a BST is balanced (AVL Tree or Red-Black Tree), search, insertion, and deletion take O(log n) time because each comparison halves the remaining search space.\n- If elements are inserted in sorted order (1, 2, 3, 4, 5) without rebalancing, the BST degenerates into a linear linked list with O(n) height and O(n) search time!",
    "howItWorks": "1. Tree Node Structure:\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\n2. The 4 Fundamental Traversals:\n- Inorder (Left, Node, Right): Visits BST in sorted order.\n- Preorder (Node, Left, Right): Clones/serializes tree hierarchy.\n- Postorder (Left, Right, Node): Deletes tree / evaluates bottom-up heights.\n- Level Order (BFS): Visits nodes level by level using an ArrayDeque queue.\n\n3. Height & Balance:\n- Height = 1 + max(height(left), height(right)).\n- Balanced condition: |height(left) - height(right)| <= 1 for every node.",
    "operationsTable": [
      {
        "operation": "Search (Balanced BST)",
        "complexity": "O(log n)",
        "note": "Halves search space at each branch"
      },
      {
        "operation": "Search (Degenerate BST)",
        "complexity": "O(n)",
        "note": "Degenerates into a linear linked list"
      },
      {
        "operation": "Insert / Delete (Balanced)",
        "complexity": "O(log n)",
        "note": "Maintains BST property via tree rotations"
      },
      {
        "operation": "Traversals (In/Pre/Post/Level)",
        "complexity": "O(n)",
        "note": "Visits every node exactly once"
      },
      {
        "operation": "Lowest Common Ancestor (LCA)",
        "complexity": "O(h)",
        "note": "h is tree height (O(log n) balanced)"
      }
    ],
    "methodsList": [
      {
        "name": "search(TreeNode root, int val)",
        "returnType": "TreeNode",
        "timeComplexity": "O(log n)",
        "spaceComplexity": "O(h)",
        "description": "Recursively moves left if val < root.val, right if val > root.val.",
        "example": "TreeNode node = search(root, 25);"
      },
      {
        "name": "insert(TreeNode root, int val)",
        "returnType": "TreeNode",
        "timeComplexity": "O(log n)",
        "spaceComplexity": "O(h)",
        "description": "Traverses to vacant leaf position preserving BST invariant and attaches new node.",
        "example": "root = insert(root, 30);"
      },
      {
        "name": "inorderTraversal(TreeNode root)",
        "returnType": "List<Integer>",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(h)",
        "description": "Returns elements in ascending sorted order for a BST.",
        "example": "List<Integer> sorted = inorder(root);"
      },
      {
        "name": "maxDepth(TreeNode root)",
        "returnType": "int",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(h)",
        "description": "Computes tree height: 1 + Math.max(maxDepth(root.left), maxDepth(root.right)).",
        "example": "int depth = maxDepth(root);"
      }
    ],
    "visualWorkflow": {
      "title": "Binary Search Tree Left-Right Decision Branching",
      "description": "Visual walkthrough of BST search comparison deciding left or right half.",
      "steps": [
        {
          "stage": "Root Node Inspection",
          "explanation": "Searching for value 15. Root is 20. Since 15 < 20, we discard the entire right subtree and branch left.",
          "visualState": [
            {
              "idx": 0,
              "val": "Root (20)",
              "label": "15 < 20 → Go Left",
              "highlight": "inserted"
            },
            {
              "idx": 1,
              "val": "Right Subtree (30, 40)",
              "label": "Discarded"
            }
          ]
        },
        {
          "stage": "Child Node Match",
          "explanation": "Left child is 10. Since 15 > 10, we branch right to find node 15 in O(log n) total steps.",
          "visualState": [
            {
              "idx": 0,
              "val": "Left Child (10)",
              "label": "15 > 10 → Go Right"
            },
            {
              "idx": 1,
              "val": "Node (15)",
              "label": "Found Target!",
              "highlight": "shifted"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } }",
      "dynamic": "TreeSet<Integer> set = new TreeSet<>(); // Backed by Red-Black Tree",
      "whenToUse": "Use custom TreeNode for tree problems. Use TreeSet/TreeMap when dynamic elements must be maintained in sorted order with range queries."
    },
    "commonPatterns": [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Tree Recursion",
      "Lowest Common Ancestor"
    ],
    "topProblems": [
      "Maximum Depth of Binary Tree",
      "Validate Binary Search Tree",
      "Lowest Common Ancestor",
      "Invert Binary Tree"
    ]
  },
  {
    "id": "heaps",
    "slug": "heaps",
    "name": "Heaps / Priority Queues",
    "category": "Tree-based Data Structures",
    "theory": "A Binary Heap is a complete binary tree implemented inside a compact contiguous array where every parent node satisfies the heap property:\n- Min-Heap: parent.val <= children.val (The root is ALWAYS the minimum element).\n- Max-Heap: parent.val >= children.val (The root is ALWAYS the maximum element).\n\nArray Indexing Arithmetic (0-indexed):\nFor node at index i:\n- Left child = 2 * i + 1\n- Right child = 2 * i + 2\n- Parent = (i - 1) / 2\nZero node pointers are stored! The entire tree hierarchy is encoded purely through array index math.",
    "detailedDescription": "Heaps provide the ultimate solution for priority scheduling, top-K selection, and Dijkstra's shortest path algorithm.\n\nWhy not use a sorted array?\n- In a sorted array, finding the min is O(1), but inserting takes O(n) due to shifting elements.\n- In a Min-Heap, finding the min is O(1), and inserting takes only O(log n) time via bubble-up!\n\nThe Top-K Invariant (Interview Trick):\n- To find the K largest elements: maintain a MIN-HEAP of size K. If heap size > K, poll(). The top of the heap is the K-th largest element!\n- To find the K smallest elements: maintain a MAX-HEAP of size K.",
    "howItWorks": "1. Insertion (offer) & Bubble-Up:\n- Append new element to the end of the array (maintains complete binary tree shape).\n- While index > 0 and array[index] < array[parent]: swap with parent.\n- Runs in O(log n) time (at most tree height swaps).\n\n2. Extract Min (poll) & Sift-Down:\n- Save root value (index 0).\n- Move last element of the array into index 0 and decrement size.\n- While left child < size: swap with the smaller of left or right child if smaller than current.\n- Runs in O(log n) time.\n\n3. Bottom-Up Heapify (O(n)):\n- Building a heap from an unsorted array by sifting down from index (n/2 - 1) down to 0 takes mathematical O(n) time, NOT O(n log n)!",
    "operationsTable": [
      {
        "operation": "Peek Min/Max",
        "complexity": "O(1)",
        "note": "Direct access to array[0]"
      },
      {
        "operation": "Insert (offer)",
        "complexity": "O(log n)",
        "note": "Appends to end and bubbles up"
      },
      {
        "operation": "Extract Min/Max (poll)",
        "complexity": "O(log n)",
        "note": "Replaces root with last leaf and sifts down"
      },
      {
        "operation": "Build Heap (Heapify)",
        "complexity": "O(n)",
        "note": "Bottom-up sift-down across n/2 non-leaf nodes"
      },
      {
        "operation": "Remove Arbitrary Object",
        "complexity": "O(n)",
        "note": "Linear scan to find object, then O(log n) sift"
      }
    ],
    "methodsList": [
      {
        "name": "offer(E e)",
        "returnType": "boolean",
        "timeComplexity": "O(log n)",
        "spaceComplexity": "O(1)",
        "description": "Inserts the specified element into this priority queue. Bubbles up to preserve heap invariant.",
        "example": "pq.offer(42);"
      },
      {
        "name": "poll()",
        "returnType": "E",
        "timeComplexity": "O(log n)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves and removes the root minimum (or maximum) element of this queue. Sifts down in O(log n).",
        "example": "int min = pq.poll();"
      },
      {
        "name": "peek()",
        "returnType": "E",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Retrieves, but does not remove, the root minimum element (array[0]), or returns null if empty.",
        "example": "int min = pq.peek();"
      },
      {
        "name": "size()",
        "returnType": "int",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Returns the number of elements in the priority queue.",
        "example": "int k = pq.size();"
      },
      {
        "name": "PriorityQueue<>(Collections.reverseOrder())",
        "returnType": "Constructor",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "description": "Instantiates a Max-Heap instead of the default Min-Heap.",
        "example": "PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());"
      }
    ],
    "visualWorkflow": {
      "title": "Binary Min-Heap Array Indexing & Bubble-Up",
      "description": "Complete binary tree mapping into array indices: parent = (i-1)/2, left = 2i+1, right = 2i+2.",
      "steps": [
        {
          "stage": "Array as Complete Tree",
          "explanation": "Index 0 is root (10). Index 1 (20) and 2 (30) are children. No pointers needed!",
          "visualState": [
            {
              "idx": 0,
              "val": 10,
              "label": "Root: Min"
            },
            {
              "idx": 1,
              "val": 20,
              "label": "Left Child (2*0+1)"
            },
            {
              "idx": 2,
              "val": 30,
              "label": "Right Child (2*0+2)"
            }
          ]
        },
        {
          "stage": "Bubble-Up After Inserting Value 5",
          "explanation": "5 is appended at index 3. Since 5 < parent(20), they swap. Then 5 < root(10), so they swap again. 5 is new root!",
          "visualState": [
            {
              "idx": 0,
              "val": 5,
              "label": "New Root Min",
              "highlight": "inserted"
            },
            {
              "idx": 1,
              "val": 10,
              "label": "Swapped Parent"
            },
            {
              "idx": 2,
              "val": 30,
              "label": "Right Child"
            },
            {
              "idx": 3,
              "val": 20,
              "label": "Swapped Down",
              "highlight": "shifted"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // Default Min-Heap",
      "dynamic": "PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder()); // Max-Heap",
      "whenToUse": "Use Min-Heap of size K to find the K largest elements. Use Max-Heap of size K to find the K smallest elements."
    },
    "commonPatterns": [
      "Top K Elements",
      "Two Heaps (Running Median)",
      "Merge K Sorted Lists",
      "Dijkstra Algorithm"
    ],
    "topProblems": [
      "Kth Largest Element in an Array",
      "Top K Frequent Elements",
      "Find Median from Data Stream",
      "Merge k Sorted Lists"
    ]
  },
  {
    "id": "graphs",
    "slug": "graphs",
    "name": "Graphs",
    "category": "Non-Linear Data Structures",
    "theory": "A Graph G = (V, E) is a network of vertices V and edges E connecting pairs of vertices. Edges can be directed (digraphs) or undirected, weighted or unweighted, cyclic or acyclic (DAG).\n\nRepresentation Trade-offs:\n1. Adjacency List (List<List<Integer>> adj):\n- Memory: O(V + E).\n- Finding neighbors: O(degree(v)).\n- Checking if edge (u, v) exists: O(degree(u)).\n- Best for sparse graphs (E << V²), which constitutes 99% of interview problems!\n\n2. Adjacency Matrix (int[][] matrix):\n- Memory: O(V²).\n- Checking if edge (u, v) exists: O(1).\n- Best for dense graphs (E ≈ V²) or when V <= 200.",
    "detailedDescription": "Graphs model road networks, social connections, dependency build systems, and state machines.\n\nKey Graph Algorithms:\n- BFS: Uses a Queue to explore layer-by-layer. Finds the SHORTEST path in unweighted graphs in O(V + E) time.\n- DFS: Uses recursion or a Stack to explore as deep as possible before backtracking. Used for cycle detection, component counting, and topological sorting.\n- Topological Sort (Kahn's Algorithm): Finds linear ordering of vertices in a Directed Acyclic Graph (DAG) using in-degrees and a queue.\n- Dijkstra's Algorithm: Uses a Min-Heap PriorityQueue to find shortest paths with non-negative edge weights in O((V + E) log V).",
    "howItWorks": "1. Standard Adjacency List Construction in Java:\nList<List<Integer>> adj = new ArrayList<>();\nfor (int i = 0; i < n; i++) adj.add(new ArrayList<>());\nfor (int[] edge : edges) {\n    adj.get(edge[0]).add(edge[1]);\n    adj.get(edge[1]).add(edge[0]); // if undirected\n}\n\n2. Cycle Detection in Undirected Graph:\n- In BFS/DFS, maintain 'boolean[] visited'. If neighbor is visited and neighbor != parent, a cycle exists!\n\n3. Cycle Detection in Directed Graph:\n- Maintain 3 states: 0 = unvisited, 1 = visiting (in current recursion stack), 2 = completely visited.\n- If a DFS lands on a node with state == 1, a back-edge cycle is detected!",
    "operationsTable": [
      {
        "operation": "BFS / DFS Traversal",
        "complexity": "O(V + E)",
        "note": "Visits every vertex and edge once"
      },
      {
        "operation": "Dijkstra (Shortest Path)",
        "complexity": "O((V + E) log V)",
        "note": "Greedy choice using Min-Heap"
      },
      {
        "operation": "Topological Sort (Kahn's)",
        "complexity": "O(V + E)",
        "note": "Requires DAG (Directed Acyclic Graph)"
      },
      {
        "operation": "Bellman-Ford",
        "complexity": "O(V * E)",
        "note": "Supports negative edge weights; detects negative cycles"
      },
      {
        "operation": "Floyd-Warshall",
        "complexity": "O(V³)",
        "note": "All-Pairs Shortest Path 2D/3D dynamic programming"
      }
    ],
    "methodsList": [
      {
        "name": "bfs(int start, List<List<Integer>> adj)",
        "returnType": "void",
        "timeComplexity": "O(V + E)",
        "spaceComplexity": "O(V)",
        "description": "Uses a Queue and boolean[] visited to explore all nodes level-by-level.",
        "example": "bfs(0, adj);"
      },
      {
        "name": "dfs(int node, List<List<Integer>> adj, boolean[] visited)",
        "returnType": "void",
        "timeComplexity": "O(V + E)",
        "spaceComplexity": "O(V)",
        "description": "Explores recursively down paths before backtracking.",
        "example": "dfs(0, adj, visited);"
      },
      {
        "name": "topologicalSort(int n, List<List<Integer>> adj)",
        "returnType": "int[]",
        "timeComplexity": "O(V + E)",
        "spaceComplexity": "O(V)",
        "description": "Kahn's algorithm using in-degree array and queue. Returns valid ordering or empty if cycle exists.",
        "example": "int[] order = topologicalSort(numCourses, adj);"
      }
    ],
    "visualWorkflow": {
      "title": "Adjacency List vs Adjacency Matrix Representation",
      "description": "Visual comparison between compact dynamic neighbor lists and dense 2D lookup tables.",
      "steps": [
        {
          "stage": "Adjacency List (Sparse Graph - O(V + E))",
          "explanation": "Node 0 points to neighbors [1, 2]. Node 1 points to [2]. Uses minimal heap memory.",
          "visualState": [
            {
              "idx": 0,
              "val": "0 → [1, 2]",
              "label": "Node 0 Neighbors"
            },
            {
              "idx": 1,
              "val": "1 → [2]",
              "label": "Node 1 Neighbors"
            },
            {
              "idx": 2,
              "val": "2 → []",
              "label": "Node 2 Neighbors"
            }
          ]
        },
        {
          "stage": "BFS Level-by-Level Expansion",
          "explanation": "Queue starts with [0]. Dequeue 0, enqueue neighbors 1 and 2. Level 1 complete in O(V+E).",
          "visualState": [
            {
              "idx": 0,
              "val": "Node 0 (Visited)",
              "label": "Level 0"
            },
            {
              "idx": 1,
              "val": "Node 1 (Queue)",
              "label": "Level 1",
              "highlight": "inserted"
            },
            {
              "idx": 2,
              "val": "Node 2 (Queue)",
              "label": "Level 1",
              "highlight": "inserted"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "List<List<Integer>> adj = new ArrayList<>(); // Standard Adjacency List",
      "dynamic": "Map<Integer, List<Edge>> graph = new HashMap<>(); // For non-integer node labels",
      "whenToUse": "Always prefer Adjacency List over Adjacency Matrix unless V is very small (V <= 200) and edge density is near 100%."
    },
    "commonPatterns": [
      "Grid BFS/DFS",
      "Multi-Source BFS",
      "Topological Sort (Kahn's)",
      "Union-Find",
      "Shortest Path"
    ],
    "topProblems": [
      "Number of Islands",
      "Course Schedule",
      "Rotting Oranges",
      "Network Delay Time"
    ]
  },
  {
    "id": "sorting",
    "slug": "sorting",
    "name": "Sorting Algorithms",
    "category": "Fundamental Algorithms",
    "theory": "Sorting rearranges an input collection into non-decreasing order. Comparison-based sorting algorithms have a proven theoretical lower bound of Ω(n log n). Non-comparison integer sorting algorithms (Counting Sort, Radix Sort) achieve O(n + k) by bypassing pairwise comparisons.\n\nCritical Sorting Properties:\n1. Stability: Equal elements preserve their relative order in the output. Vital when sorting by multiple columns (e.g., sort by First Name, then stable-sort by Last Name).\n2. In-Place: Requires O(1) auxiliary memory beyond the input array (or O(log n) recursion call stack).",
    "detailedDescription": "In Java, 'Arrays.sort()' is dual-architectured:\n- Primitive arrays (int[], double[], etc.): Uses Dual-Pivot Quicksort. It is in-place, highly cache-efficient, but UNSTABLE.\n- Object arrays (Integer[], String[], custom classes): Uses TimSort (hybrid Merge Sort and Insertion Sort). It is guaranteed STABLE and runs in O(n) on partially sorted inputs.",
    "howItWorks": "1. Merge Sort (O(n log n) Guaranteed, Stable):\n- Divide array into two halves at mid.\n- Recursively sort left and right halves.\n- Merge sorted halves in O(n) using an auxiliary buffer.\n- Requires O(n) extra space.\n\n2. Quick Sort (O(n log n) Avg, O(n²) Worst, In-Place):\n- Choose a pivot element (Lomuto or Hoare partition).\n- Rearrange elements such that all elements < pivot are placed left, and > pivot right.\n- Recursively sort subarrays.\n- Average recursion depth: O(log n).\n\n3. Counting Sort (O(n + k) Non-Comparison):\n- Computes frequency array of size k = (max - min + 1).\n- Accumulates prefix sums to find exact placement indices.\n- Reconstructs sorted array in strictly linear time.",
    "operationsTable": [
      {
        "operation": "Merge Sort",
        "complexity": "O(n log n)",
        "note": "Stable, O(n) extra memory"
      },
      {
        "operation": "Quick Sort",
        "complexity": "O(n log n) avg / O(n²) worst",
        "note": "In-place, unstable, fast cache performance"
      },
      {
        "operation": "Heap Sort",
        "complexity": "O(n log n)",
        "note": "In-place (O(1) space), unstable"
      },
      {
        "operation": "Counting Sort",
        "complexity": "O(n + k)",
        "note": "Non-comparison, stable, integer ranges"
      },
      {
        "operation": "Insertion Sort",
        "complexity": "O(n) best / O(n²) worst",
        "note": "Stable, in-place, optimal for n <= 32"
      }
    ],
    "methodsList": [
      {
        "name": "Arrays.sort(int[] a)",
        "returnType": "void",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(log n)",
        "description": "Dual-Pivot Quicksort for primitives. Very fast, unstable.",
        "example": "Arrays.sort(arr);"
      },
      {
        "name": "Arrays.sort(T[] a, Comparator<? super T> c)",
        "returnType": "void",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(n)",
        "description": "TimSort for objects. Stable, adaptive, honors custom comparator.",
        "example": "Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));"
      },
      {
        "name": "Collections.sort(List<T> list)",
        "returnType": "void",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(n)",
        "description": "Dumps list to array, sorts using TimSort, and writes back to list.",
        "example": "Collections.sort(list);"
      }
    ],
    "visualWorkflow": {
      "title": "Merge Sort Divide & Conquer vs Quick Sort Partitioning",
      "description": "Visual decomposition of subarray splitting and pivot boundary segregation.",
      "steps": [
        {
          "stage": "Quick Sort Lomuto Partition",
          "explanation": "Pivot = 25. Pointers scan array; items smaller than 25 are swapped to the left side.",
          "visualState": [
            {
              "idx": 0,
              "val": 12,
              "label": "< Pivot"
            },
            {
              "idx": 1,
              "val": 18,
              "label": "< Pivot"
            },
            {
              "idx": 2,
              "val": 25,
              "label": "Pivot Placed",
              "highlight": "inserted"
            },
            {
              "idx": 3,
              "val": 40,
              "label": "> Pivot"
            },
            {
              "idx": 4,
              "val": 32,
              "label": "> Pivot"
            }
          ]
        }
      ]
    },
    "javaComparison": {
      "primitive": "Arrays.sort(primitiveArray); // Uses Dual-Pivot Quicksort (O(n log n), in-place, unstable)",
      "dynamic": "Arrays.sort(objectArray); // Uses TimSort (O(n log n), adaptive, stable)",
      "whenToUse": "Use primitive arrays when stability is irrelevant for speed. Use Object arrays or Collections.sort() when stability matters."
    },
    "commonPatterns": [
      "Divide and Conquer",
      "Quickselect for Kth element",
      "Custom Comparator sorting"
    ],
    "topProblems": [
      "Sort Colors (Dutch National Flag)",
      "Merge Intervals",
      "Largest Number"
    ]
  }
];
