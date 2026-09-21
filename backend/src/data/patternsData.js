// 30 Core DSA Patterns with 10 Top Verified Problems Each (Total: 300 Problems)
export const PATTERNS_DATA = [
  {
    "id": "two-pointers",
    "slug": "two-pointers",
    "name": "Two Pointers",
    "description": "Uses two references moving towards each other or in unison to prune the search space from O(n²) to O(n).",
    "whyItWorks": "Monotonicity in sorted data provides directional certainty for pointer increments.",
    "whenToUse": "Finding pairs/triplets in sorted arrays, checking palindromes, partitioning.",
    "recognitionClues": [
      "Sorted array",
      "Target sum pair",
      "Palindrome",
      "In-place partition"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int left = 0, right = nums.length - 1;\nwhile (left < right) {\n    int sum = nums[left] + nums[right];\n    if (sum == target) return new int[]{left, right};\n    else if (sum < target) left++;\n    else right--;\n}",
    "javaTemplate": "int left = 0, right = nums.length - 1;\nwhile (left < right) {\n    int sum = nums[left] + nums[right];\n    if (sum == target) return new int[]{left, right};\n    else if (sum < target) left++;\n    else right--;\n}",
    "commonMistakes": [
      "Forgetting to sort",
      "Duplicate triplets",
      "Bounds errors"
    ],
    "top10Problems": [
      {
        "id": "two-pointers-1",
        "name": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Two Sum II - Input Array Is Sorted utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/pair-in-an-array-with-given-sum/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "3Sum",
          "Container With Most Water"
        ]
      },
      {
        "id": "two-pointers-2",
        "name": "3Sum",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master 3Sum utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/3sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Container With Most Water",
          "Valid Palindrome"
        ]
      },
      {
        "id": "two-pointers-3",
        "name": "Container With Most Water",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Container With Most Water utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/container-with-most-water-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Valid Palindrome",
          "Remove Duplicates from Sorted Array"
        ]
      },
      {
        "id": "two-pointers-4",
        "name": "Valid Palindrome",
        "difficulty": "Easy",
        "dataStructure": "String",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Valid Palindrome utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/string-palindrome2731/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Remove Duplicates from Sorted Array",
          "Move Zeroes"
        ]
      },
      {
        "id": "two-pointers-5",
        "name": "Remove Duplicates from Sorted Array",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Remove Duplicates from Sorted Array utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Move Zeroes",
          "Trapping Rain Water"
        ]
      },
      {
        "id": "two-pointers-6",
        "name": "Move Zeroes",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Move Zeroes utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/move-zeroes/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0449/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Trapping Rain Water",
          "Squares of a Sorted Array"
        ]
      },
      {
        "id": "two-pointers-7",
        "name": "Trapping Rain Water",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Trapping Rain Water utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Squares of a Sorted Array",
          "Sort Colors"
        ]
      },
      {
        "id": "two-pointers-8",
        "name": "Squares of a Sorted Array",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Squares of a Sorted Array utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/squares-of-a-sorted-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/sort-an-array-of-elements-after-squaring/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Sort Colors",
          "4Sum"
        ]
      },
      {
        "id": "two-pointers-9",
        "name": "Sort Colors",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master Sort Colors utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sort-colors/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "4Sum",
          "Two Sum II - Input Array Is Sorted"
        ]
      },
      {
        "id": "two-pointers-10",
        "name": "4Sum",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Two Pointers",
        "shortDescription": "Practice and master 4Sum utilizing the core Two Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/4sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Two Sum II - Input Array Is Sorted",
          "3Sum"
        ]
      }
    ]
  },
  {
    "id": "sliding-window",
    "slug": "sliding-window",
    "name": "Sliding Window",
    "description": "Maintains a contiguous window that expands and contracts to compute subarray statistics in O(n).",
    "whyItWorks": "Adjacent windows differ only by leaving and entering elements, enabling O(1) state updates.",
    "whenToUse": "Contiguous subarrays/substrings matching size, distinct counts, or sum requirements.",
    "recognitionClues": [
      "Contiguous subarray/substring",
      "Longest substring without repeating",
      "Window of size k"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(k)",
    "generalTemplate": "int left = 0, maxLen = 0;\nMap<Character, Integer> map = new HashMap<>();\nfor (int right = 0; right < s.length(); right++) {\n    char c = s.charAt(right);\n    map.put(c, map.getOrDefault(c, 0) + 1);\n    while (map.get(c) > 1) {\n        char lc = s.charAt(left++);\n        map.put(lc, map.get(lc) - 1);\n    }\n    maxLen = Math.max(maxLen, right - left + 1);\n}",
    "javaTemplate": "int left = 0, maxLen = 0;\nMap<Character, Integer> map = new HashMap<>();\nfor (int right = 0; right < s.length(); right++) {\n    char c = s.charAt(right);\n    map.put(c, map.getOrDefault(c, 0) + 1);\n    while (map.get(c) > 1) {\n        char lc = s.charAt(left++);\n        map.put(lc, map.get(lc) - 1);\n    }\n    maxLen = Math.max(maxLen, right - left + 1);\n}",
    "commonMistakes": [
      "Using for non-contiguous subsequences",
      "Shrinking with if instead of while"
    ],
    "top10Problems": [
      {
        "id": "sliding-window-1",
        "name": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "dataStructure": "String",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Longest Substring Without Repeating Characters utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/length-of-the-longest-substring3036/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Minimum Window Substring",
          "Find All Anagrams in a String"
        ]
      },
      {
        "id": "sliding-window-2",
        "name": "Minimum Window Substring",
        "difficulty": "Hard",
        "dataStructure": "String",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Minimum Window Substring utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Find All Anagrams in a String",
          "Longest Repeating Character Replacement"
        ]
      },
      {
        "id": "sliding-window-3",
        "name": "Find All Anagrams in a String",
        "difficulty": "Medium",
        "dataStructure": "String",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Find All Anagrams in a String utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Longest Repeating Character Replacement",
          "Max Consecutive Ones III"
        ]
      },
      {
        "id": "sliding-window-4",
        "name": "Longest Repeating Character Replacement",
        "difficulty": "Medium",
        "dataStructure": "String",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Longest Repeating Character Replacement utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-repeating-character-replacement/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Max Consecutive Ones III",
          "Permutation in String"
        ]
      },
      {
        "id": "sliding-window-5",
        "name": "Max Consecutive Ones III",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Max Consecutive Ones III utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/max-consecutive-ones-iii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Permutation in String",
          "Fruit Into Baskets"
        ]
      },
      {
        "id": "sliding-window-6",
        "name": "Permutation in String",
        "difficulty": "Medium",
        "dataStructure": "String",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Permutation in String utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/check-if-string-is-rotated-by-two-places-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Fruit Into Baskets",
          "Minimum Size Subarray Sum"
        ]
      },
      {
        "id": "sliding-window-7",
        "name": "Fruit Into Baskets",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Fruit Into Baskets utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/fruit-into-baskets/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/fruit-into-baskets-1663137462/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Minimum Size Subarray Sum",
          "Sliding Window Maximum"
        ]
      },
      {
        "id": "sliding-window-8",
        "name": "Minimum Size Subarray Sum",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Minimum Size Subarray Sum utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Sliding Window Maximum",
          "Subarray Product Less Than K"
        ]
      },
      {
        "id": "sliding-window-9",
        "name": "Sliding Window Maximum",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Sliding Window Maximum utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Subarray Product Less Than K",
          "Longest Substring Without Repeating Characters"
        ]
      },
      {
        "id": "sliding-window-10",
        "name": "Subarray Product Less Than K",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Sliding Window",
        "shortDescription": "Practice and master Subarray Product Less Than K utilizing the core Sliding Window pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-the-subarrays-having-product-less-than-k1708/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Longest Substring Without Repeating Characters",
          "Minimum Window Substring"
        ]
      }
    ]
  },
  {
    "id": "prefix-sum",
    "slug": "prefix-sum",
    "name": "Prefix Sum",
    "description": "Precomputes cumulative totals so any subarray sum nums[L..R] is answered in O(1) as prefix[R+1] - prefix[L].",
    "whyItWorks": "Addition is associative and invertible, making range sums constant time differences.",
    "whenToUse": "Static range sum queries, counting subarrays summing to k.",
    "recognitionClues": [
      "Range sum query",
      "Subarray sum equals k",
      "Continuous subarray sum"
    ],
    "timeComplexity": "O(n) precompute, O(1) query",
    "spaceComplexity": "O(n)",
    "generalTemplate": "int[] prefix = new int[n + 1];\nfor (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];",
    "javaTemplate": "int[] prefix = new int[n + 1];\nfor (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];",
    "commonMistakes": [
      "Off-by-one array sizing",
      "Integer overflow on big sums"
    ],
    "top10Problems": [
      {
        "id": "prefix-sum-1",
        "name": "Range Sum Query - Immutable",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Range Sum Query - Immutable utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/range-sum-query-immutable/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/range-sum-queries-without-updates/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Subarray Sum Equals K",
          "Continuous Subarray Sum"
        ]
      },
      {
        "id": "prefix-sum-2",
        "name": "Subarray Sum Equals K",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Subarray Sum Equals K utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subarrays-with-sum-k/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Continuous Subarray Sum",
          "Contiguous Array"
        ]
      },
      {
        "id": "prefix-sum-3",
        "name": "Continuous Subarray Sum",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Continuous Subarray Sum utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/continuous-subarray-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Contiguous Array",
          "Find Pivot Index"
        ]
      },
      {
        "id": "prefix-sum-4",
        "name": "Contiguous Array",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Contiguous Array utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/contiguous-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/largest-subarray-of-0s-and-1s/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Find Pivot Index",
          "Product of Array Except Self"
        ]
      },
      {
        "id": "prefix-sum-5",
        "name": "Find Pivot Index",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Find Pivot Index utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-pivot-index/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Product of Array Except Self",
          "Range Sum Query 2D - Immutable"
        ]
      },
      {
        "id": "prefix-sum-6",
        "name": "Product of Array Except Self",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Product of Array Except Self utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/product-array-puzzle4525/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Range Sum Query 2D - Immutable",
          "Subarray Sums Divisible by K"
        ]
      },
      {
        "id": "prefix-sum-7",
        "name": "Range Sum Query 2D - Immutable",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Range Sum Query 2D - Immutable utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/matrix-block-sum/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Subarray Sums Divisible by K",
          "Matrix Block Sum"
        ]
      },
      {
        "id": "prefix-sum-8",
        "name": "Subarray Sums Divisible by K",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Subarray Sums Divisible by K utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/sub-array-sum-divisible-by-k2617/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Matrix Block Sum",
          "Maximum Size Subarray Sum Equals k"
        ]
      },
      {
        "id": "prefix-sum-9",
        "name": "Matrix Block Sum",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Matrix Block Sum utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/matrix-block-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/matrix-block-sum/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Maximum Size Subarray Sum Equals k",
          "Range Sum Query - Immutable"
        ]
      },
      {
        "id": "prefix-sum-10",
        "name": "Maximum Size Subarray Sum Equals k",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Prefix Sum",
        "shortDescription": "Practice and master Maximum Size Subarray Sum Equals k utilizing the core Prefix Sum pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1",
        "expectedTime": "O(n) precompute, O(1) query",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Range Sum Query - Immutable",
          "Subarray Sum Equals K"
        ]
      }
    ]
  },
  {
    "id": "difference-array",
    "slug": "difference-array",
    "name": "Difference Array",
    "description": "Executes multiple interval updates in O(1) time each, accumulating changes with a prefix sweep.",
    "whyItWorks": "Incrementing index L and decrementing index R+1 confines addition strictly to range [L, R] after prefix summation.",
    "whenToUse": "Multiple range updates on an array with query at the end.",
    "recognitionClues": [
      "Range addition",
      "Corporate flight bookings",
      "Car pooling"
    ],
    "timeComplexity": "O(1) update, O(n) sweep",
    "spaceComplexity": "O(n)",
    "generalTemplate": "diff[l] += val; diff[r + 1] -= val;\n// then prefix accumulate",
    "javaTemplate": "diff[l] += val; diff[r + 1] -= val;\n// then prefix accumulate",
    "commonMistakes": [
      "Index bounds overflow on R + 1",
      "Accumulating prematurely"
    ],
    "top10Problems": [
      {
        "id": "difference-array-1",
        "name": "Corporate Flight Bookings",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Corporate Flight Bookings utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/corporate-flight-bookings/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/range-addition/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Range Addition",
          "Car Pooling"
        ]
      },
      {
        "id": "difference-array-2",
        "name": "Range Addition",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Range Addition utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/range-addition/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/difference-array-range-update-query/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Car Pooling",
          "Shifting Letters II"
        ]
      },
      {
        "id": "difference-array-3",
        "name": "Car Pooling",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Car Pooling utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/car-pooling/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/bus-conductor/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Shifting Letters II",
          "Meeting Rooms II"
        ]
      },
      {
        "id": "difference-array-4",
        "name": "Shifting Letters II",
        "difficulty": "Medium",
        "dataStructure": "String",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Shifting Letters II utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/shifting-letters-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/shifting-letters/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Meeting Rooms II",
          "Minimum Number of Increments on Subarrays to Form Target"
        ]
      },
      {
        "id": "difference-array-5",
        "name": "Meeting Rooms II",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Meeting Rooms II utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Minimum Number of Increments on Subarrays to Form Target",
          "Check If All the Integers in a Range Are Covered"
        ]
      },
      {
        "id": "difference-array-6",
        "name": "Minimum Number of Increments on Subarrays to Form Target",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Minimum Number of Increments on Subarrays to Form Target utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-the-number-of-operations-to-make-the-array-elements-equal/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Check If All the Integers in a Range Are Covered",
          "Describe the Painting"
        ]
      },
      {
        "id": "difference-array-7",
        "name": "Check If All the Integers in a Range Are Covered",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Check If All the Integers in a Range Are Covered utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/interval-coverage/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Describe the Painting",
          "Maximum Points You Can Obtain from Cards"
        ]
      },
      {
        "id": "difference-array-8",
        "name": "Describe the Painting",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Describe the Painting utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/describe-the-painting/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/line-sweep/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Maximum Points You Can Obtain from Cards",
          "My Calendar III"
        ]
      },
      {
        "id": "difference-array-9",
        "name": "Maximum Points You Can Obtain from Cards",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master Maximum Points You Can Obtain from Cards utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximize-toy-count/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "My Calendar III",
          "Corporate Flight Bookings"
        ]
      },
      {
        "id": "difference-array-10",
        "name": "My Calendar III",
        "difficulty": "Hard",
        "dataStructure": "Tree",
        "pattern": "Difference Array",
        "shortDescription": "Practice and master My Calendar III utilizing the core Difference Array pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/my-calendar-iii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/meeting-rooms/1",
        "expectedTime": "O(1) update, O(n) sweep",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Corporate Flight Bookings",
          "Range Addition"
        ]
      }
    ]
  },
  {
    "id": "fast-and-slow-pointers",
    "slug": "fast-and-slow-pointers",
    "name": "Fast and Slow Pointers",
    "description": "Advances two pointers at different speeds (1x vs 2x) to find cycles or midpoints in O(1) space.",
    "whyItWorks": "In a cycle of length L, the relative distance between pointers shrinks by 1 every step modulo L (Floyd's algorithm).",
    "whenToUse": "Linked list cycle detection, finding middle element, circular arrays.",
    "recognitionClues": [
      "Cycle in linked list",
      "Middle of linked list",
      "Find duplicate without extra memory"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "ListNode slow = head, fast = head;\nwhile (fast != null && fast.next != null) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow == fast) return true;\n}",
    "javaTemplate": "ListNode slow = head, fast = head;\nwhile (fast != null && fast.next != null) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow == fast) return true;\n}",
    "commonMistakes": [
      "NullPointer on fast.next.next",
      "Failing on 1-node lists"
    ],
    "top10Problems": [
      {
        "id": "fast-and-slow-pointers-1",
        "name": "Linked List Cycle",
        "difficulty": "Easy",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Linked List Cycle utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Linked List Cycle II",
          "Middle of the Linked List"
        ]
      },
      {
        "id": "fast-and-slow-pointers-2",
        "name": "Linked List Cycle II",
        "difficulty": "Medium",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Linked List Cycle II utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-the-first-node-of-loop-in-linked-list--170645/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Middle of the Linked List",
          "Happy Number"
        ]
      },
      {
        "id": "fast-and-slow-pointers-3",
        "name": "Middle of the Linked List",
        "difficulty": "Easy",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Middle of the Linked List utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/middle-of-the-linked-list/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Happy Number",
          "Find the Duplicate Number"
        ]
      },
      {
        "id": "fast-and-slow-pointers-4",
        "name": "Happy Number",
        "difficulty": "Easy",
        "dataStructure": "Math",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Happy Number utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/happy-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/happy-number/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Find the Duplicate Number",
          "Palindrome Linked List"
        ]
      },
      {
        "id": "fast-and-slow-pointers-5",
        "name": "Find the Duplicate Number",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Find the Duplicate Number utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Palindrome Linked List",
          "Reorder List"
        ]
      },
      {
        "id": "fast-and-slow-pointers-6",
        "name": "Palindrome Linked List",
        "difficulty": "Easy",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Palindrome Linked List utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-linked-list/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Reorder List",
          "Circular Array Loop"
        ]
      },
      {
        "id": "fast-and-slow-pointers-7",
        "name": "Reorder List",
        "difficulty": "Medium",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Reorder List utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/reorder-list/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/reorder-list/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Circular Array Loop",
          "Delete the Middle Node of a Linked List"
        ]
      },
      {
        "id": "fast-and-slow-pointers-8",
        "name": "Circular Array Loop",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Circular Array Loop utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/circular-array-loop/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Delete the Middle Node of a Linked List",
          "Maximum Twin Sum of a Linked List"
        ]
      },
      {
        "id": "fast-and-slow-pointers-9",
        "name": "Delete the Middle Node of a Linked List",
        "difficulty": "Medium",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Delete the Middle Node of a Linked List utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Twin Sum of a Linked List",
          "Linked List Cycle"
        ]
      },
      {
        "id": "fast-and-slow-pointers-10",
        "name": "Maximum Twin Sum of a Linked List",
        "difficulty": "Medium",
        "dataStructure": "Linked List",
        "pattern": "Fast and Slow Pointers",
        "shortDescription": "Practice and master Maximum Twin Sum of a Linked List utilizing the core Fast and Slow Pointers pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/pair-wise-swap-elements-of-a-linked-list-by-swapping-data/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Linked List Cycle",
          "Linked List Cycle II"
        ]
      }
    ]
  },
  {
    "id": "binary-search",
    "slug": "binary-search",
    "name": "Binary Search",
    "description": "Halves the candidate search space on each step by comparing target with median element.",
    "whyItWorks": "Order monotonicity allows discarding half of candidates unconditionally.",
    "whenToUse": "Sorted arrays, rotated arrays, peak finding, 2D sorted matrices.",
    "recognitionClues": [
      "Sorted array input",
      "Search in O(log n)",
      "Rotated sorted array"
    ],
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int low = 0, high = nums.length - 1;\nwhile (low <= high) {\n    int mid = low + (high - low) / 2;\n    if (nums[mid] == target) return mid;\n    else if (nums[mid] < target) low = mid + 1;\n    else high = mid - 1;\n}",
    "javaTemplate": "int low = 0, high = nums.length - 1;\nwhile (low <= high) {\n    int mid = low + (high - low) / 2;\n    if (nums[mid] == target) return mid;\n    else if (nums[mid] < target) low = mid + 1;\n    else high = mid - 1;\n}",
    "commonMistakes": [
      "Using (low+high)/2 (overflow)",
      "Infinite loop with wrong conditions"
    ],
    "top10Problems": [
      {
        "id": "binary-search-1",
        "name": "Binary Search",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Binary Search utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/binary-search/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Search in Rotated Sorted Array",
          "Find First and Last Position in Sorted Array"
        ]
      },
      {
        "id": "binary-search-2",
        "name": "Search in Rotated Sorted Array",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Search in Rotated Sorted Array utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Find First and Last Position in Sorted Array",
          "Find Minimum in Rotated Sorted Array"
        ]
      },
      {
        "id": "binary-search-3",
        "name": "Find First and Last Position in Sorted Array",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Find First and Last Position in Sorted Array utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Find Minimum in Rotated Sorted Array",
          "Find Peak Element"
        ]
      },
      {
        "id": "binary-search-4",
        "name": "Find Minimum in Rotated Sorted Array",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Find Minimum in Rotated Sorted Array utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Find Peak Element",
          "Search Insert Position"
        ]
      },
      {
        "id": "binary-search-5",
        "name": "Find Peak Element",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Find Peak Element utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-peak-element/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/peak-element/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Search Insert Position",
          "Search a 2D Matrix"
        ]
      },
      {
        "id": "binary-search-6",
        "name": "Search Insert Position",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Search Insert Position utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/search-insert-position/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Search a 2D Matrix",
          "Search a 2D Matrix II"
        ]
      },
      {
        "id": "binary-search-7",
        "name": "Search a 2D Matrix",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Search a 2D Matrix utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Search a 2D Matrix II",
          "First Bad Version"
        ]
      },
      {
        "id": "binary-search-8",
        "name": "Search a 2D Matrix II",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Search a 2D Matrix II utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-in-a-matrix1937/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "First Bad Version",
          "Single Element in a Sorted Array"
        ]
      },
      {
        "id": "binary-search-9",
        "name": "First Bad Version",
        "difficulty": "Easy",
        "dataStructure": "Interactive",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master First Bad Version utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/first-bad-version/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-the-first-bad-version/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Single Element in a Sorted Array",
          "Binary Search"
        ]
      },
      {
        "id": "binary-search-10",
        "name": "Single Element in a Sorted Array",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search",
        "shortDescription": "Practice and master Single Element in a Sorted Array utilizing the core Binary Search pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Binary Search",
          "Search in Rotated Sorted Array"
        ]
      }
    ]
  },
  {
    "id": "binary-search-on-answer",
    "slug": "binary-search-on-answer",
    "name": "Binary Search on Answer",
    "description": "Binary searches over the monotonic numerical answer range with a feasibility check function.",
    "whyItWorks": "If a capacity X is feasible, every value > X is also feasible, allowing logarithmic range halving.",
    "whenToUse": "Minimizing maximum allocation, maximizing minimum distance.",
    "recognitionClues": [
      "Minimize maximum",
      "Maximize minimum",
      "Koko eating bananas",
      "Ship within D days"
    ],
    "timeComplexity": "O(n log(range))",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int low = minAns, high = maxAns, ans = high;\nwhile (low <= high) {\n    int mid = low + (high - low) / 2;\n    if (isValid(mid)) { ans = mid; high = mid - 1; }\n    else { low = mid + 1; }\n}",
    "javaTemplate": "int low = minAns, high = maxAns, ans = high;\nwhile (low <= high) {\n    int mid = low + (high - low) / 2;\n    if (isValid(mid)) { ans = mid; high = mid - 1; }\n    else { low = mid + 1; }\n}",
    "commonMistakes": [
      "Wrong upper bound for high",
      "Integer overflow in feasibility sum"
    ],
    "top10Problems": [
      {
        "id": "binary-search-on-answer-1",
        "name": "Koko Eating Bananas",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Koko Eating Bananas utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/koko-eating-bananas/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/koko-eating-bananas/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Capacity To Ship Packages Within D Days",
          "Split Array Largest Sum"
        ]
      },
      {
        "id": "binary-search-on-answer-2",
        "name": "Capacity To Ship Packages Within D Days",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Capacity To Ship Packages Within D Days utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/capacity-to-ship-packages-within-d-days/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Split Array Largest Sum",
          "Allocate Minimum Number of Pages"
        ]
      },
      {
        "id": "binary-search-on-answer-3",
        "name": "Split Array Largest Sum",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Split Array Largest Sum utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/split-array-largest-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Allocate Minimum Number of Pages",
          "Aggressive Cows"
        ]
      },
      {
        "id": "binary-search-on-answer-4",
        "name": "Allocate Minimum Number of Pages",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Allocate Minimum Number of Pages utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/split-array-largest-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Aggressive Cows",
          "Magnetic Force Between Two Balls"
        ]
      },
      {
        "id": "binary-search-on-answer-5",
        "name": "Aggressive Cows",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Aggressive Cows utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/magnetic-force-between-two-balls/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/aggressive-cows/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Magnetic Force Between Two Balls",
          "Find the Smallest Divisor Given a Threshold"
        ]
      },
      {
        "id": "binary-search-on-answer-6",
        "name": "Magnetic Force Between Two Balls",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Magnetic Force Between Two Balls utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/magnetic-force-between-two-balls/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/aggressive-cows/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Find the Smallest Divisor Given a Threshold",
          "Minimum Speed to Arrive on Time"
        ]
      },
      {
        "id": "binary-search-on-answer-7",
        "name": "Find the Smallest Divisor Given a Threshold",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Find the Smallest Divisor Given a Threshold utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/smallest-divisor/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Minimum Speed to Arrive on Time",
          "Minimum Days to Make m Bouquets"
        ]
      },
      {
        "id": "binary-search-on-answer-8",
        "name": "Minimum Speed to Arrive on Time",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Minimum Speed to Arrive on Time utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-speed-to-arrive-on-time/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Minimum Days to Make m Bouquets",
          "Painter's Partition Problem"
        ]
      },
      {
        "id": "binary-search-on-answer-9",
        "name": "Minimum Days to Make m Bouquets",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Minimum Days to Make m Bouquets utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-days-to-make-m-bouquets/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Painter's Partition Problem",
          "Koko Eating Bananas"
        ]
      },
      {
        "id": "binary-search-on-answer-10",
        "name": "Painter's Partition Problem",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Binary Search on Answer",
        "shortDescription": "Practice and master Painter's Partition Problem utilizing the core Binary Search on Answer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/split-array-largest-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1",
        "expectedTime": "O(n log(range))",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Koko Eating Bananas",
          "Capacity To Ship Packages Within D Days"
        ]
      }
    ]
  },
  {
    "id": "hashing-frequency-map",
    "slug": "hashing-frequency-map",
    "name": "Hashing / Frequency Map",
    "description": "Stores keys and frequencies in hash buckets for expected O(1) lookups and complement checks.",
    "whyItWorks": "Hash mapping bypasses comparison sorting, exchanging O(n) memory for constant time queries.",
    "whenToUse": "Complement searching, frequency tracking, grouping anagrams, finding unique items.",
    "recognitionClues": [
      "Two Sum complement",
      "Count frequencies",
      "Group anagrams",
      "Check duplicate"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "generalTemplate": "Map<Integer, Integer> map = new HashMap<>();\nfor (int i = 0; i < nums.length; i++) {\n    int complement = target - nums[i];\n    if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n    map.put(nums[i], i);\n}",
    "javaTemplate": "Map<Integer, Integer> map = new HashMap<>();\nfor (int i = 0; i < nums.length; i++) {\n    int complement = target - nums[i];\n    if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n    map.put(nums[i], i);\n}",
    "commonMistakes": [
      "Using ArrayList.contains instead of HashSet",
      "Modifying keys in-place"
    ],
    "top10Problems": [
      {
        "id": "hashing-frequency-map-1",
        "name": "Two Sum",
        "difficulty": "Easy",
        "dataStructure": "HashMap",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Two Sum utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/two-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/key-pair5556/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Group Anagrams",
          "Contains Duplicate"
        ]
      },
      {
        "id": "hashing-frequency-map-2",
        "name": "Group Anagrams",
        "difficulty": "Medium",
        "dataStructure": "HashMap",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Group Anagrams utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/print-anagrams-together/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Contains Duplicate",
          "Valid Anagram"
        ]
      },
      {
        "id": "hashing-frequency-map-3",
        "name": "Contains Duplicate",
        "difficulty": "Easy",
        "dataStructure": "HashSet",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Contains Duplicate utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Valid Anagram",
          "First Unique Character in a String"
        ]
      },
      {
        "id": "hashing-frequency-map-4",
        "name": "Valid Anagram",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Valid Anagram utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/anagram-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "First Unique Character in a String",
          "Intersection of Two Arrays II"
        ]
      },
      {
        "id": "hashing-frequency-map-5",
        "name": "First Unique Character in a String",
        "difficulty": "Easy",
        "dataStructure": "String",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master First Unique Character in a String utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/first-unique-character-in-a-string/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/non-repeating-character-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Intersection of Two Arrays II",
          "Longest Consecutive Sequence"
        ]
      },
      {
        "id": "hashing-frequency-map-6",
        "name": "Intersection of Two Arrays II",
        "difficulty": "Easy",
        "dataStructure": "HashMap",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Intersection of Two Arrays II utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Longest Consecutive Sequence",
          "Subarray Sum Equals K"
        ]
      },
      {
        "id": "hashing-frequency-map-7",
        "name": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "dataStructure": "HashSet",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Longest Consecutive Sequence utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Subarray Sum Equals K",
          "Top K Frequent Elements"
        ]
      },
      {
        "id": "hashing-frequency-map-8",
        "name": "Subarray Sum Equals K",
        "difficulty": "Medium",
        "dataStructure": "HashMap",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Subarray Sum Equals K utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subarrays-with-sum-k/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Top K Frequent Elements",
          "Sort Characters By Frequency"
        ]
      },
      {
        "id": "hashing-frequency-map-9",
        "name": "Top K Frequent Elements",
        "difficulty": "Medium",
        "dataStructure": "HashMap",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Top K Frequent Elements utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Sort Characters By Frequency",
          "Two Sum"
        ]
      },
      {
        "id": "hashing-frequency-map-10",
        "name": "Sort Characters By Frequency",
        "difficulty": "Medium",
        "dataStructure": "HashMap",
        "pattern": "Hashing / Frequency Map",
        "shortDescription": "Practice and master Sort Characters By Frequency utilizing the core Hashing / Frequency Map pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Two Sum",
          "Group Anagrams"
        ]
      }
    ]
  },
  {
    "id": "monotonic-stack",
    "slug": "monotonic-stack",
    "name": "Monotonic Stack",
    "description": "Maintains elements in strictly increasing or decreasing order on a stack to find next greater/smaller elements in O(n).",
    "whyItWorks": "Each element is pushed once and popped at most once; popping identifies the immediate dominating element.",
    "whenToUse": "Next greater element, daily temperatures, largest rectangle under histogram.",
    "recognitionClues": [
      "Next greater element",
      "Next smaller element",
      "Daily temperatures",
      "Histogram largest area"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "generalTemplate": "Deque<Integer> stack = new ArrayDeque<>();\nfor (int i = 0; i < nums.length; i++) {\n    while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {\n        res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n}",
    "javaTemplate": "Deque<Integer> stack = new ArrayDeque<>();\nfor (int i = 0; i < nums.length; i++) {\n    while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {\n        res[stack.pop()] = nums[i];\n    }\n    stack.push(i);\n}",
    "commonMistakes": [
      "Pushing values instead of indices",
      "Using legacy java.util.Stack"
    ],
    "top10Problems": [
      {
        "id": "monotonic-stack-1",
        "name": "Next Greater Element I",
        "difficulty": "Easy",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Next Greater Element I utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Daily Temperatures",
          "Next Greater Element II"
        ]
      },
      {
        "id": "monotonic-stack-2",
        "name": "Daily Temperatures",
        "difficulty": "Medium",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Daily Temperatures utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Next Greater Element II",
          "Largest Rectangle in Histogram"
        ]
      },
      {
        "id": "monotonic-stack-3",
        "name": "Next Greater Element II",
        "difficulty": "Medium",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Next Greater Element II utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/next-greater-element-circular/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Largest Rectangle in Histogram",
          "Online Stock Span"
        ]
      },
      {
        "id": "monotonic-stack-4",
        "name": "Largest Rectangle in Histogram",
        "difficulty": "Hard",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Largest Rectangle in Histogram utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Online Stock Span",
          "Maximal Rectangle"
        ]
      },
      {
        "id": "monotonic-stack-5",
        "name": "Online Stock Span",
        "difficulty": "Medium",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Online Stock Span utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/online-stock-span/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Maximal Rectangle",
          "Remove K Digits"
        ]
      },
      {
        "id": "monotonic-stack-6",
        "name": "Maximal Rectangle",
        "difficulty": "Hard",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Maximal Rectangle utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximal-rectangle/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/max-rectangle/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Remove K Digits",
          "Trapping Rain Water"
        ]
      },
      {
        "id": "monotonic-stack-7",
        "name": "Remove K Digits",
        "difficulty": "Medium",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Remove K Digits utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/remove-k-digits/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/remove-k-digits/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Trapping Rain Water",
          "Sum of Subarray Minimums"
        ]
      },
      {
        "id": "monotonic-stack-8",
        "name": "Trapping Rain Water",
        "difficulty": "Hard",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Trapping Rain Water utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Sum of Subarray Minimums",
          "132 Pattern"
        ]
      },
      {
        "id": "monotonic-stack-9",
        "name": "Sum of Subarray Minimums",
        "difficulty": "Medium",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master Sum of Subarray Minimums utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sum-of-subarray-minimums/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/sum-of-subarray-ranges/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "132 Pattern",
          "Next Greater Element I"
        ]
      },
      {
        "id": "monotonic-stack-10",
        "name": "132 Pattern",
        "difficulty": "Medium",
        "dataStructure": "Stack",
        "pattern": "Monotonic Stack",
        "shortDescription": "Practice and master 132 Pattern utilizing the core Monotonic Stack pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/132-pattern/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/132-pattern/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Next Greater Element I",
          "Daily Temperatures"
        ]
      }
    ]
  },
  {
    "id": "monotonic-queue",
    "slug": "monotonic-queue",
    "name": "Monotonic Queue",
    "description": "Maintains elements in monotonic order inside a double-ended queue (Deque) with pop operations from both ends to query running min/max in O(1) amortized.",
    "whyItWorks": "Discarding smaller obsolete candidates from the back maintains the maximum at the front.",
    "whenToUse": "Sliding window maximum, shortest subarray with sum >= k.",
    "recognitionClues": [
      "Sliding window maximum",
      "Running max of size k",
      "Shortest subarray sum >= k"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(k)",
    "generalTemplate": "Deque<Integer> dq = new ArrayDeque<>();\nfor (int i = 0; i < n; i++) {\n    if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) dq.pollFirst();\n    while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();\n    dq.offerLast(i);\n}",
    "javaTemplate": "Deque<Integer> dq = new ArrayDeque<>();\nfor (int i = 0; i < n; i++) {\n    if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) dq.pollFirst();\n    while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();\n    dq.offerLast(i);\n}",
    "commonMistakes": [
      "Not removing stale items from front",
      "Popping from wrong end"
    ],
    "top10Problems": [
      {
        "id": "monotonic-queue-1",
        "name": "Sliding Window Maximum",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Sliding Window Maximum utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Shortest Subarray with Sum at Least K",
          "Constrained Subsequence Sum"
        ]
      },
      {
        "id": "monotonic-queue-2",
        "name": "Shortest Subarray with Sum at Least K",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Shortest Subarray with Sum at Least K utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Constrained Subsequence Sum",
          "Jump Game VI"
        ]
      },
      {
        "id": "monotonic-queue-3",
        "name": "Constrained Subsequence Sum",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Constrained Subsequence Sum utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/constrained-subsequence-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-sum-subsequence/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Jump Game VI",
          "Longest Continuous Subarray With Limit"
        ]
      },
      {
        "id": "monotonic-queue-4",
        "name": "Jump Game VI",
        "difficulty": "Medium",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Jump Game VI utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/jump-game-vi/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Longest Continuous Subarray With Limit",
          "Max Value of Equation"
        ]
      },
      {
        "id": "monotonic-queue-5",
        "name": "Longest Continuous Subarray With Limit",
        "difficulty": "Medium",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Longest Continuous Subarray With Limit utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-sub-array-with-diff/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Max Value of Equation",
          "Delivering Boxes from Storage to Ports"
        ]
      },
      {
        "id": "monotonic-queue-6",
        "name": "Max Value of Equation",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Max Value of Equation utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/max-value-of-equation/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/max-equation/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Delivering Boxes from Storage to Ports",
          "Design Front Middle Back Queue"
        ]
      },
      {
        "id": "monotonic-queue-7",
        "name": "Delivering Boxes from Storage to Ports",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Delivering Boxes from Storage to Ports utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/delivering-boxes/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Design Front Middle Back Queue",
          "Continuous Subarrays"
        ]
      },
      {
        "id": "monotonic-queue-8",
        "name": "Design Front Middle Back Queue",
        "difficulty": "Medium",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Design Front Middle Back Queue utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/design-front-middle-back-queue/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/deque-implementations/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Continuous Subarrays",
          "Maximum Number of Robots Within Budget"
        ]
      },
      {
        "id": "monotonic-queue-9",
        "name": "Continuous Subarrays",
        "difficulty": "Medium",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Continuous Subarrays utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/continuous-subarrays/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/continuous-subarrays/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Maximum Number of Robots Within Budget",
          "Sliding Window Maximum"
        ]
      },
      {
        "id": "monotonic-queue-10",
        "name": "Maximum Number of Robots Within Budget",
        "difficulty": "Hard",
        "dataStructure": "Deque",
        "pattern": "Monotonic Queue",
        "shortDescription": "Practice and master Maximum Number of Robots Within Budget utilizing the core Monotonic Queue pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-number-of-robots-within-budget/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/budget-robots/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Sliding Window Maximum",
          "Shortest Subarray with Sum at Least K"
        ]
      }
    ]
  },
  {
    "id": "heap-top-k",
    "slug": "heap-top-k",
    "name": "Heap / Top K",
    "description": "Uses a min-heap or max-heap bounded to size K to track extreme elements in O(n log k) time and O(k) space.",
    "whyItWorks": "A Min-Heap of size K stores the K largest elements seen so far; root points directly to the K-th largest element.",
    "whenToUse": "Top K frequent elements, Kth largest/smallest, merging K sorted streams.",
    "recognitionClues": [
      "Kth largest / smallest",
      "Top K frequent",
      "Running median",
      "Merge K sorted lists"
    ],
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(k)",
    "generalTemplate": "PriorityQueue<Integer> minHeap = new PriorityQueue<>();\nfor (int num : nums) {\n    minHeap.offer(num);\n    if (minHeap.size() > k) minHeap.poll();\n}\nreturn minHeap.peek();",
    "javaTemplate": "PriorityQueue<Integer> minHeap = new PriorityQueue<>();\nfor (int num : nums) {\n    minHeap.offer(num);\n    if (minHeap.size() > k) minHeap.poll();\n}\nreturn minHeap.peek();",
    "commonMistakes": [
      "Using Max-Heap when Min-Heap is needed",
      "Omitting Collections.reverseOrder()"
    ],
    "top10Problems": [
      {
        "id": "heap-top-k-1",
        "name": "Kth Largest Element in an Array",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Kth Largest Element in an Array utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/k-largest-elements4207/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Top K Frequent Elements",
          "Find Median from Data Stream"
        ]
      },
      {
        "id": "heap-top-k-2",
        "name": "Top K Frequent Elements",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Top K Frequent Elements utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Find Median from Data Stream",
          "Merge k Sorted Lists"
        ]
      },
      {
        "id": "heap-top-k-3",
        "name": "Find Median from Data Stream",
        "difficulty": "Hard",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Find Median from Data Stream utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Merge k Sorted Lists",
          "K Closest Points to Origin"
        ]
      },
      {
        "id": "heap-top-k-4",
        "name": "Merge k Sorted Lists",
        "difficulty": "Hard",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Merge k Sorted Lists utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "K Closest Points to Origin",
          "Reorganize String"
        ]
      },
      {
        "id": "heap-top-k-5",
        "name": "K Closest Points to Origin",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master K Closest Points to Origin utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/k-closest-point-to-origin/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Reorganize String",
          "Task Scheduler"
        ]
      },
      {
        "id": "heap-top-k-6",
        "name": "Reorganize String",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Reorganize String utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/reorganize-string/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Task Scheduler",
          "Kth Smallest Element in a Sorted Matrix"
        ]
      },
      {
        "id": "heap-top-k-7",
        "name": "Task Scheduler",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Task Scheduler utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/task-scheduler/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/task-scheduler/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Kth Smallest Element in a Sorted Matrix",
          "Smallest Range Covering Elements from K Lists"
        ]
      },
      {
        "id": "heap-top-k-8",
        "name": "Kth Smallest Element in a Sorted Matrix",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Kth Smallest Element in a Sorted Matrix utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/kth-element-in-matrix/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Smallest Range Covering Elements from K Lists",
          "Sort Characters By Frequency"
        ]
      },
      {
        "id": "heap-top-k-9",
        "name": "Smallest Range Covering Elements from K Lists",
        "difficulty": "Hard",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Smallest Range Covering Elements from K Lists utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Sort Characters By Frequency",
          "Kth Largest Element in an Array"
        ]
      },
      {
        "id": "heap-top-k-10",
        "name": "Sort Characters By Frequency",
        "difficulty": "Medium",
        "dataStructure": "Heap",
        "pattern": "Heap / Top K",
        "shortDescription": "Practice and master Sort Characters By Frequency utilizing the core Heap / Top K pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sort-characters-by-frequency/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/1",
        "expectedTime": "O(n log k)",
        "expectedSpace": "O(k)",
        "relatedProblems": [
          "Kth Largest Element in an Array",
          "Top K Frequent Elements"
        ]
      }
    ]
  },
  {
    "id": "merge-intervals",
    "slug": "merge-intervals",
    "name": "Merge Intervals",
    "description": "Sorts intervals by start coordinate and merges overlapping ranges into unified disjoint segments.",
    "whyItWorks": "Sorting guarantees that any overlapping candidate appears sequentially right after the current interval.",
    "whenToUse": "Meeting rooms, calendar conflicts, range consolidation.",
    "recognitionClues": [
      "Overlapping intervals",
      "Meeting schedule",
      "Merge ranges",
      "Insert interval"
    ],
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "generalTemplate": "Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\nList<int[]> merged = new ArrayList<>();\nfor (int[] inv : intervals) {\n    if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < inv[0]) merged.add(inv);\n    else merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], inv[1]);\n}",
    "javaTemplate": "Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\nList<int[]> merged = new ArrayList<>();\nfor (int[] inv : intervals) {\n    if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < inv[0]) merged.add(inv);\n    else merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], inv[1]);\n}",
    "commonMistakes": [
      "Using a[0] - b[0] (integer overflow)",
      "Forgetting Math.max for interval end"
    ],
    "top10Problems": [
      {
        "id": "merge-intervals-1",
        "name": "Merge Intervals",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Merge Intervals utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Insert Interval",
          "Non-overlapping Intervals"
        ]
      },
      {
        "id": "merge-intervals-2",
        "name": "Insert Interval",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Insert Interval utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/insert-interval/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/insert-interval-1666736233/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Non-overlapping Intervals",
          "Minimum Number of Arrows to Burst Balloons"
        ]
      },
      {
        "id": "merge-intervals-3",
        "name": "Non-overlapping Intervals",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Non-overlapping Intervals utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/non-overlapping-intervals/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Minimum Number of Arrows to Burst Balloons",
          "Meeting Rooms"
        ]
      },
      {
        "id": "merge-intervals-4",
        "name": "Minimum Number of Arrows to Burst Balloons",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Minimum Number of Arrows to Burst Balloons utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Meeting Rooms",
          "Meeting Rooms II"
        ]
      },
      {
        "id": "merge-intervals-5",
        "name": "Meeting Rooms",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Meeting Rooms utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/attend-all-meetings/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Meeting Rooms II",
          "Interval List Intersections"
        ]
      },
      {
        "id": "merge-intervals-6",
        "name": "Meeting Rooms II",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Meeting Rooms II utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Interval List Intersections",
          "Car Pooling"
        ]
      },
      {
        "id": "merge-intervals-7",
        "name": "Interval List Intersections",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Interval List Intersections utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/interval-list-intersections/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/interval-list-intersections/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Car Pooling",
          "Employee Free Time"
        ]
      },
      {
        "id": "merge-intervals-8",
        "name": "Car Pooling",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Car Pooling utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/car-pooling/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/bus-conductor/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Employee Free Time",
          "Teemo Attacking"
        ]
      },
      {
        "id": "merge-intervals-9",
        "name": "Employee Free Time",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Employee Free Time utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/employee-free-time/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/employee-free-time/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Teemo Attacking",
          "Merge Intervals"
        ]
      },
      {
        "id": "merge-intervals-10",
        "name": "Teemo Attacking",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Merge Intervals",
        "shortDescription": "Practice and master Teemo Attacking utilizing the core Merge Intervals pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/teemo-attacking/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/teemo-attacking/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Merge Intervals",
          "Insert Interval"
        ]
      }
    ]
  },
  {
    "id": "greedy",
    "slug": "greedy",
    "name": "Greedy Algorithms",
    "description": "Chooses the locally optimal decision at each step with mathematical assurance of reaching global optimum.",
    "whyItWorks": "Greedy choice property proves that local choices never eliminate the global optimum.",
    "whenToUse": "Activity selection, jump game, interval scheduling, fractional knapsack.",
    "recognitionClues": [
      "Maximize profit at each step",
      "Jump Game reachability",
      "Gas Station circular trip"
    ],
    "timeComplexity": "O(n) or O(n log n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int maxReach = 0;\nfor (int i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n}\nreturn true;",
    "javaTemplate": "int maxReach = 0;\nfor (int i = 0; i < nums.length; i++) {\n    if (i > maxReach) return false;\n    maxReach = Math.max(maxReach, i + nums[i]);\n}\nreturn true;",
    "commonMistakes": [
      "Applying when decisions invalidate future alternatives (requires DP)",
      "Incorrect sort comparator"
    ],
    "top10Problems": [
      {
        "id": "greedy-1",
        "name": "Jump Game",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Jump Game utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/jump-game/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/jump-game/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Jump Game II",
          "Gas Station"
        ]
      },
      {
        "id": "greedy-2",
        "name": "Jump Game II",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Jump Game II utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/jump-game-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Gas Station",
          "Assign Cookies"
        ]
      },
      {
        "id": "greedy-3",
        "name": "Gas Station",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Gas Station utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/gas-station/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Assign Cookies",
          "Candy"
        ]
      },
      {
        "id": "greedy-4",
        "name": "Assign Cookies",
        "difficulty": "Easy",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Assign Cookies utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/assign-cookies/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Candy",
          "Lemonade Change"
        ]
      },
      {
        "id": "greedy-5",
        "name": "Candy",
        "difficulty": "Hard",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Candy utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/candy/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/candy/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Lemonade Change",
          "Minimum Platforms"
        ]
      },
      {
        "id": "greedy-6",
        "name": "Lemonade Change",
        "difficulty": "Easy",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Lemonade Change utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/lemonade-change/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/lemonade-change/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Minimum Platforms",
          "Fractional Knapsack"
        ]
      },
      {
        "id": "greedy-7",
        "name": "Minimum Platforms",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Minimum Platforms utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Fractional Knapsack",
          "Job Sequencing Problem"
        ]
      },
      {
        "id": "greedy-8",
        "name": "Fractional Knapsack",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Fractional Knapsack utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-units-on-a-truck/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Job Sequencing Problem",
          "Task Scheduler"
        ]
      },
      {
        "id": "greedy-9",
        "name": "Job Sequencing Problem",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Job Sequencing Problem utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Task Scheduler",
          "Jump Game"
        ]
      },
      {
        "id": "greedy-10",
        "name": "Task Scheduler",
        "difficulty": "Medium",
        "dataStructure": "Greedy",
        "pattern": "Greedy Algorithms",
        "shortDescription": "Practice and master Task Scheduler utilizing the core Greedy Algorithms pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/task-scheduler/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/task-scheduler/1",
        "expectedTime": "O(n) or O(n log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Jump Game",
          "Jump Game II"
        ]
      }
    ]
  },
  {
    "id": "backtracking",
    "slug": "backtracking",
    "name": "Backtracking",
    "description": "Builds candidates incrementally and abandons (backtracks) as soon as constraints are violated.",
    "whyItWorks": "Prunes entire combinatorial subtrees early (choose -> explore -> undo).",
    "whenToUse": "Subsets, permutations, combinations, Sudoku solver, N-Queens, word search in grid.",
    "recognitionClues": [
      "Find all combinations",
      "N-Queens",
      "Sudoku solver",
      "Generate permutations"
    ],
    "timeComplexity": "O(k^n)",
    "spaceComplexity": "O(n) call stack",
    "generalTemplate": "void backtrack(List<List<Integer>> res, List<Integer> curr, int[] nums, int start) {\n    res.add(new ArrayList<>(curr));\n    for (int i = start; i < nums.length; i++) {\n        curr.add(nums[i]);\n        backtrack(res, curr, nums, i + 1);\n        curr.remove(curr.size() - 1);\n    }\n}",
    "javaTemplate": "void backtrack(List<List<Integer>> res, List<Integer> curr, int[] nums, int start) {\n    res.add(new ArrayList<>(curr));\n    for (int i = start; i < nums.length; i++) {\n        curr.add(nums[i]);\n        backtrack(res, curr, nums, i + 1);\n        curr.remove(curr.size() - 1);\n    }\n}",
    "commonMistakes": [
      "Forgetting to make a new ArrayList<>(curr) copy",
      "Forgetting to undo the choice"
    ],
    "top10Problems": [
      {
        "id": "backtracking-1",
        "name": "Subsets",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Subsets utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subsets/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subsets-1613027340/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Subsets II",
          "Permutations"
        ]
      },
      {
        "id": "backtracking-2",
        "name": "Subsets II",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Subsets II utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subsets-ii/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Permutations",
          "Combination Sum"
        ]
      },
      {
        "id": "backtracking-3",
        "name": "Permutations",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Permutations utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/permutations/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string1158/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Combination Sum",
          "Combination Sum II"
        ]
      },
      {
        "id": "backtracking-4",
        "name": "Combination Sum",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Combination Sum utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/combination-sum-1587115620/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Combination Sum II",
          "N-Queens"
        ]
      },
      {
        "id": "backtracking-5",
        "name": "Combination Sum II",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Combination Sum II utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/combination-sum-ii/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "N-Queens",
          "Sudoku Solver"
        ]
      },
      {
        "id": "backtracking-6",
        "name": "N-Queens",
        "difficulty": "Hard",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master N-Queens utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Sudoku Solver",
          "Word Search"
        ]
      },
      {
        "id": "backtracking-7",
        "name": "Sudoku Solver",
        "difficulty": "Hard",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Sudoku Solver utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sudoku-solver/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Word Search",
          "Palindrome Partitioning"
        ]
      },
      {
        "id": "backtracking-8",
        "name": "Word Search",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Word Search utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/word-search/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-search/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Palindrome Partitioning",
          "Letter Combinations of a Phone Number"
        ]
      },
      {
        "id": "backtracking-9",
        "name": "Palindrome Partitioning",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Palindrome Partitioning utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Letter Combinations of a Phone Number",
          "Subsets"
        ]
      },
      {
        "id": "backtracking-10",
        "name": "Letter Combinations of a Phone Number",
        "difficulty": "Medium",
        "dataStructure": "Backtracking",
        "pattern": "Backtracking",
        "shortDescription": "Practice and master Letter Combinations of a Phone Number utilizing the core Backtracking pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1",
        "expectedTime": "O(k^n)",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Subsets",
          "Subsets II"
        ]
      }
    ]
  },
  {
    "id": "divide-and-conquer",
    "slug": "divide-and-conquer",
    "name": "Divide and Conquer",
    "description": "Splits a problem into independent subproblems, recursively solves them, and merges results in O(n log n).",
    "whyItWorks": "Balanced division reduces recursive depth to O(log n), beating quadratic brute force.",
    "whenToUse": "Merge sort, quicksort, closest pair of points, fast exponentiation.",
    "recognitionClues": [
      "Split into balanced halves",
      "Merge sorted results",
      "Master theorem recurrence"
    ],
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "generalTemplate": "void mergeSort(int[] a, int l, int r) {\n    if (l >= r) return;\n    int m = l + (r - l) / 2;\n    mergeSort(a, l, m); mergeSort(a, m + 1, r);\n    merge(a, l, m, r);\n}",
    "javaTemplate": "void mergeSort(int[] a, int l, int r) {\n    if (l >= r) return;\n    int m = l + (r - l) / 2;\n    mergeSort(a, l, m); mergeSort(a, m + 1, r);\n    merge(a, l, m, r);\n}",
    "commonMistakes": [
      "Missing base condition (StackOverflow)",
      "Creating arrays on each recursive call"
    ],
    "top10Problems": [
      {
        "id": "divide-and-conquer-1",
        "name": "Merge Sort",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Merge Sort utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/merge-sort/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Quick Sort",
          "Maximum Subarray (D&C)"
        ]
      },
      {
        "id": "divide-and-conquer-2",
        "name": "Quick Sort",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Quick Sort utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sort-an-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/quick-sort/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Maximum Subarray (D&C)",
          "Search a 2D Matrix II"
        ]
      },
      {
        "id": "divide-and-conquer-3",
        "name": "Maximum Subarray (D&C)",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Maximum Subarray (D&C) utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Search a 2D Matrix II",
          "Kth Largest Element (QuickSelect)"
        ]
      },
      {
        "id": "divide-and-conquer-4",
        "name": "Search a 2D Matrix II",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Search a 2D Matrix II utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-in-a-matrix1937/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Kth Largest Element (QuickSelect)",
          "Merge k Sorted Lists"
        ]
      },
      {
        "id": "divide-and-conquer-5",
        "name": "Kth Largest Element (QuickSelect)",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Kth Largest Element (QuickSelect) utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/k-largest-elements4207/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Merge k Sorted Lists",
          "Pow(x, n)"
        ]
      },
      {
        "id": "divide-and-conquer-6",
        "name": "Merge k Sorted Lists",
        "difficulty": "Hard",
        "dataStructure": "Linked List",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Merge k Sorted Lists utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Pow(x, n)",
          "Count of Smaller Numbers After Self"
        ]
      },
      {
        "id": "divide-and-conquer-7",
        "name": "Pow(x, n)",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Pow(x, n) utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/powx-n/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Count of Smaller Numbers After Self",
          "Reverse Pairs"
        ]
      },
      {
        "id": "divide-and-conquer-8",
        "name": "Count of Smaller Numbers After Self",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Count of Smaller Numbers After Self utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-smaller-elements2214/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Reverse Pairs",
          "Different Ways to Add Parentheses"
        ]
      },
      {
        "id": "divide-and-conquer-9",
        "name": "Reverse Pairs",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Reverse Pairs utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-pairs/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Different Ways to Add Parentheses",
          "Merge Sort"
        ]
      },
      {
        "id": "divide-and-conquer-10",
        "name": "Different Ways to Add Parentheses",
        "difficulty": "Medium",
        "dataStructure": "String",
        "pattern": "Divide and Conquer",
        "shortDescription": "Practice and master Different Ways to Add Parentheses utilizing the core Divide and Conquer pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/different-ways-to-add-parentheses/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/bracket-number4028/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Merge Sort",
          "Quick Sort"
        ]
      }
    ]
  },
  {
    "id": "recursion",
    "slug": "recursion",
    "name": "Recursion",
    "description": "Expresses a solution in terms of smaller instances of itself with a verified base case.",
    "whyItWorks": "Follows mathematical induction: valid base cases plus sound step transition guarantee correctness.",
    "whenToUse": "Tree traversals, nested structure flattening, Tower of Hanoi.",
    "recognitionClues": [
      "Base case + recursive case",
      "Tree traversal",
      "Self-similar subproblem"
    ],
    "timeComplexity": "O(2ⁿ) naive / O(n) memoized",
    "spaceComplexity": "O(n) call stack",
    "generalTemplate": "int solve(int n) {\n    if (n <= 1) return n;\n    return solve(n - 1) + solve(n - 2);\n}",
    "javaTemplate": "int solve(int n) {\n    if (n <= 1) return n;\n    return solve(n - 1) + solve(n - 2);\n}",
    "commonMistakes": [
      "Missing base case",
      "Redundant recursive branches without memoization"
    ],
    "top10Problems": [
      {
        "id": "recursion-1",
        "name": "Fibonacci Number",
        "difficulty": "Easy",
        "dataStructure": "Math",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Fibonacci Number utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/fibonacci-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1359/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Reverse Linked List",
          "Maximum Depth of Binary Tree"
        ]
      },
      {
        "id": "recursion-2",
        "name": "Reverse Linked List",
        "difficulty": "Easy",
        "dataStructure": "Linked List",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Reverse Linked List utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Maximum Depth of Binary Tree",
          "Invert Binary Tree"
        ]
      },
      {
        "id": "recursion-3",
        "name": "Maximum Depth of Binary Tree",
        "difficulty": "Easy",
        "dataStructure": "Tree",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Maximum Depth of Binary Tree utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Invert Binary Tree",
          "Merge Two Sorted Lists"
        ]
      },
      {
        "id": "recursion-4",
        "name": "Invert Binary Tree",
        "difficulty": "Easy",
        "dataStructure": "Tree",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Invert Binary Tree utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/mirror-tree/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Merge Two Sorted Lists",
          "Pow(x, n)"
        ]
      },
      {
        "id": "recursion-5",
        "name": "Merge Two Sorted Lists",
        "difficulty": "Easy",
        "dataStructure": "Linked List",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Merge Two Sorted Lists utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Pow(x, n)",
          "Tower of Hanoi"
        ]
      },
      {
        "id": "recursion-6",
        "name": "Pow(x, n)",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Pow(x, n) utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/powx-n/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Tower of Hanoi",
          "Swap Nodes in Pairs"
        ]
      },
      {
        "id": "recursion-7",
        "name": "Tower of Hanoi",
        "difficulty": "Medium",
        "dataStructure": "Recursion",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Tower of Hanoi utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/tower-of-hanoi/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Swap Nodes in Pairs",
          "Flatten Nested List Iterator"
        ]
      },
      {
        "id": "recursion-8",
        "name": "Swap Nodes in Pairs",
        "difficulty": "Medium",
        "dataStructure": "Linked List",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Swap Nodes in Pairs utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/pairwise-swap-elements-of-a-linked-list-by-swapping-data/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Flatten Nested List Iterator",
          "Parse Lisp Expression"
        ]
      },
      {
        "id": "recursion-9",
        "name": "Flatten Nested List Iterator",
        "difficulty": "Medium",
        "dataStructure": "Recursion",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Flatten Nested List Iterator utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/flatten-nested-list-iterator/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Parse Lisp Expression",
          "Fibonacci Number"
        ]
      },
      {
        "id": "recursion-10",
        "name": "Parse Lisp Expression",
        "difficulty": "Hard",
        "dataStructure": "Recursion",
        "pattern": "Recursion",
        "shortDescription": "Practice and master Parse Lisp Expression utilizing the core Recursion pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/parse-lisp-expression/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/expression-tree/1",
        "expectedTime": "O(2ⁿ) naive / O(n) memoized",
        "expectedSpace": "O(n) call stack",
        "relatedProblems": [
          "Fibonacci Number",
          "Reverse Linked List"
        ]
      }
    ]
  },
  {
    "id": "bfs",
    "slug": "bfs",
    "name": "Breadth-First Search (BFS)",
    "description": "Explores graph or tree nodes level-by-level using a FIFO queue, guaranteeing shortest paths in unweighted structures.",
    "whyItWorks": "Enqueuing adjacent neighbors level by level guarantees processing distance d before distance d + 1.",
    "whenToUse": "Shortest paths in unweighted graphs/grids, tree level order traversal.",
    "recognitionClues": [
      "Shortest path / minimum steps",
      "Level order traversal",
      "Nearest neighbor"
    ],
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V)",
    "generalTemplate": "Queue<TreeNode> q = new ArrayDeque<>();\nq.offer(root);\nwhile (!q.isEmpty()) {\n    int sz = q.size();\n    for (int i = 0; i < sz; i++) {\n        TreeNode curr = q.poll();\n        if (curr.left != null) q.offer(curr.left);\n        if (curr.right != null) q.offer(curr.right);\n    }\n}",
    "javaTemplate": "Queue<TreeNode> q = new ArrayDeque<>();\nq.offer(root);\nwhile (!q.isEmpty()) {\n    int sz = q.size();\n    for (int i = 0; i < sz; i++) {\n        TreeNode curr = q.poll();\n        if (curr.left != null) q.offer(curr.left);\n        if (curr.right != null) q.offer(curr.right);\n    }\n}",
    "commonMistakes": [
      "Marking visited on pop instead of push (redundant enqueuing)",
      "Missing size loop for level tracking"
    ],
    "top10Problems": [
      {
        "id": "bfs-1",
        "name": "Binary Tree Level Order Traversal",
        "difficulty": "Medium",
        "dataStructure": "Tree",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Binary Tree Level Order Traversal utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/level-order-traversal/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Word Ladder",
          "Open the Lock"
        ]
      },
      {
        "id": "bfs-2",
        "name": "Word Ladder",
        "difficulty": "Hard",
        "dataStructure": "BFS",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Word Ladder utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/word-ladder/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-ladder/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Open the Lock",
          "Shortest Path in Binary Matrix"
        ]
      },
      {
        "id": "bfs-3",
        "name": "Open the Lock",
        "difficulty": "Medium",
        "dataStructure": "BFS",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Open the Lock utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/open-the-lock/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-rotations-to-unlock-a-circular-lock/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Shortest Path in Binary Matrix",
          "Minimum Depth of Binary Tree"
        ]
      },
      {
        "id": "bfs-4",
        "name": "Shortest Path in Binary Matrix",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Shortest Path in Binary Matrix utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/shortest-source-to-destination-path3544/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Minimum Depth of Binary Tree",
          "Rotting Oranges"
        ]
      },
      {
        "id": "bfs-5",
        "name": "Minimum Depth of Binary Tree",
        "difficulty": "Easy",
        "dataStructure": "Tree",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Minimum Depth of Binary Tree utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-depth-of-a-binary-tree/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Rotting Oranges",
          "Clone Graph"
        ]
      },
      {
        "id": "bfs-6",
        "name": "Rotting Oranges",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Rotting Oranges utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Clone Graph",
          "Binary Tree Zigzag Level Order Traversal"
        ]
      },
      {
        "id": "bfs-7",
        "name": "Clone Graph",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Clone Graph utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/clone-graph/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/clone-graph/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Binary Tree Zigzag Level Order Traversal",
          "Snakes and Ladders"
        ]
      },
      {
        "id": "bfs-8",
        "name": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Medium",
        "dataStructure": "Tree",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Binary Tree Zigzag Level Order Traversal utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Snakes and Ladders",
          "Bus Routes"
        ]
      },
      {
        "id": "bfs-9",
        "name": "Snakes and Ladders",
        "difficulty": "Medium",
        "dataStructure": "BFS",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Snakes and Ladders utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/snakes-and-ladders/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/snake-and-ladder-problem4816/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Bus Routes",
          "Binary Tree Level Order Traversal"
        ]
      },
      {
        "id": "bfs-10",
        "name": "Bus Routes",
        "difficulty": "Hard",
        "dataStructure": "Graph",
        "pattern": "Breadth-First Search (BFS)",
        "shortDescription": "Practice and master Bus Routes utilizing the core Breadth-First Search (BFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/bus-routes/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/bus-routes/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V)",
        "relatedProblems": [
          "Binary Tree Level Order Traversal",
          "Word Ladder"
        ]
      }
    ]
  },
  {
    "id": "dfs",
    "slug": "dfs",
    "name": "Depth-First Search (DFS)",
    "description": "Traverses down a single branch as deeply as possible before backtracking using recursion or a stack.",
    "whyItWorks": "Explores all reachable nodes and cycles with memory proportional to maximum depth rather than width.",
    "whenToUse": "Cycle detection, connected components, flood fill, path checking.",
    "recognitionClues": [
      "Connected islands",
      "Explore all paths",
      "Tree pre/in/post order",
      "Cycle detection"
    ],
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V) recursion",
    "generalTemplate": "void dfs(int u, boolean[] visited) {\n    visited[u] = true;\n    for (int v : adj.get(u)) {\n        if (!visited[v]) dfs(v, visited);\n    }\n}",
    "javaTemplate": "void dfs(int u, boolean[] visited) {\n    visited[u] = true;\n    for (int v : adj.get(u)) {\n        if (!visited[v]) dfs(v, visited);\n    }\n}",
    "commonMistakes": [
      "Index boundary errors in grid DFS",
      "Infinite recursion on unvisited cycles"
    ],
    "top10Problems": [
      {
        "id": "dfs-1",
        "name": "Number of Islands",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Number of Islands utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Max Area of Island",
          "Surrounded Regions"
        ]
      },
      {
        "id": "dfs-2",
        "name": "Max Area of Island",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Max Area of Island utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/max-area-of-island/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/length-of-largest-region-of-1s-1587115620/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Surrounded Regions",
          "Pacific Atlantic Water Flow"
        ]
      },
      {
        "id": "dfs-3",
        "name": "Surrounded Regions",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Surrounded Regions utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Pacific Atlantic Water Flow",
          "Path Sum"
        ]
      },
      {
        "id": "dfs-4",
        "name": "Pacific Atlantic Water Flow",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Pacific Atlantic Water Flow utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/pacific-atlantic-water-flow/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Path Sum",
          "Path Sum II"
        ]
      },
      {
        "id": "dfs-5",
        "name": "Path Sum",
        "difficulty": "Easy",
        "dataStructure": "Tree",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Path Sum utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/root-to-leaf-path-sum/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Path Sum II",
          "Lowest Common Ancestor of a Binary Tree"
        ]
      },
      {
        "id": "dfs-6",
        "name": "Path Sum II",
        "difficulty": "Medium",
        "dataStructure": "Tree",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Path Sum II utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/path-sum-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/paths-from-root-with-a-specified-sum/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Lowest Common Ancestor of a Binary Tree",
          "All Paths From Source to Target"
        ]
      },
      {
        "id": "dfs-7",
        "name": "Lowest Common Ancestor of a Binary Tree",
        "difficulty": "Medium",
        "dataStructure": "Tree",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Lowest Common Ancestor of a Binary Tree utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "All Paths From Source to Target",
          "Course Schedule"
        ]
      },
      {
        "id": "dfs-8",
        "name": "All Paths From Source to Target",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master All Paths From Source to Target utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/all-paths-from-source-to-target/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/possible-paths-between-2-vertices-1587115620/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Course Schedule",
          "Validate Binary Search Tree"
        ]
      },
      {
        "id": "dfs-9",
        "name": "Course Schedule",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Course Schedule utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/course-schedule/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Validate Binary Search Tree",
          "Number of Islands"
        ]
      },
      {
        "id": "dfs-10",
        "name": "Validate Binary Search Tree",
        "difficulty": "Medium",
        "dataStructure": "Tree",
        "pattern": "Depth-First Search (DFS)",
        "shortDescription": "Practice and master Validate Binary Search Tree utilizing the core Depth-First Search (DFS) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/check-for-bst/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V) recursion",
        "relatedProblems": [
          "Number of Islands",
          "Max Area of Island"
        ]
      }
    ]
  },
  {
    "id": "multi-source-bfs",
    "slug": "multi-source-bfs",
    "name": "Multi-Source BFS",
    "description": "Enqueues all source points simultaneously at t=0 to compute shortest distances in parallel waves.",
    "whyItWorks": "Starting simultaneously guarantees the first wave front touching a node is the globally shortest distance.",
    "whenToUse": "Rotting oranges, 01 matrix distance, shortest distance from multiple starts.",
    "recognitionClues": [
      "Rotting oranges spreading",
      "Distance to nearest 0 in matrix",
      "Multiple origins expanding"
    ],
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(R * C)",
    "generalTemplate": "Queue<int[]> q = new ArrayDeque<>();\nfor (int i = 0; i < m; i++)\n    for (int j = 0; j < n; j++)\n        if (grid[i][j] == 2) q.offer(new int[]{i, j});\n// BFS expands level by level",
    "javaTemplate": "Queue<int[]> q = new ArrayDeque<>();\nfor (int i = 0; i < m; i++)\n    for (int j = 0; j < n; j++)\n        if (grid[i][j] == 2) q.offer(new int[]{i, j});\n// BFS expands level by level",
    "commonMistakes": [
      "Running single-source BFS multiple times (TLE)",
      "Failing to mark visited on queue push"
    ],
    "top10Problems": [
      {
        "id": "multi-source-bfs-1",
        "name": "Rotting Oranges",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Rotting Oranges utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "01 Matrix",
          "As Far from Land as Possible"
        ]
      },
      {
        "id": "multi-source-bfs-2",
        "name": "01 Matrix",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master 01 Matrix utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/01-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "As Far from Land as Possible",
          "Shortest Path to Get Food"
        ]
      },
      {
        "id": "multi-source-bfs-3",
        "name": "As Far from Land as Possible",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master As Far from Land as Possible utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/as-far-from-land-as-possible/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Shortest Path to Get Food",
          "Map of Highest Peak"
        ]
      },
      {
        "id": "multi-source-bfs-4",
        "name": "Shortest Path to Get Food",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Shortest Path to Get Food utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-path-to-get-food/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/shortest-source-to-destination-path3544/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Map of Highest Peak",
          "Walls and Gates"
        ]
      },
      {
        "id": "multi-source-bfs-5",
        "name": "Map of Highest Peak",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Map of Highest Peak utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/map-of-highest-peak/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/map-of-highest-peak/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Walls and Gates",
          "Pacific Atlantic Water Flow"
        ]
      },
      {
        "id": "multi-source-bfs-6",
        "name": "Walls and Gates",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Walls and Gates utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/walls-and-gates/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Pacific Atlantic Water Flow",
          "Shortest Bridge"
        ]
      },
      {
        "id": "multi-source-bfs-7",
        "name": "Pacific Atlantic Water Flow",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Pacific Atlantic Water Flow utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/pacific-atlantic-water-flow/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Shortest Bridge",
          "Escape the Spreading Fire"
        ]
      },
      {
        "id": "multi-source-bfs-8",
        "name": "Shortest Bridge",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Shortest Bridge utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-bridge/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/shortest-bridge/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Escape the Spreading Fire",
          "Surrounded Regions"
        ]
      },
      {
        "id": "multi-source-bfs-9",
        "name": "Escape the Spreading Fire",
        "difficulty": "Hard",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Escape the Spreading Fire utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/escape-the-spreading-fire/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/escape-the-fire/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Surrounded Regions",
          "Rotting Oranges"
        ]
      },
      {
        "id": "multi-source-bfs-10",
        "name": "Surrounded Regions",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Multi-Source BFS",
        "shortDescription": "Practice and master Surrounded Regions utilizing the core Multi-Source BFS pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1",
        "expectedTime": "O(R * C)",
        "expectedSpace": "O(R * C)",
        "relatedProblems": [
          "Rotting Oranges",
          "01 Matrix"
        ]
      }
    ]
  },
  {
    "id": "topological-sort",
    "slug": "topological-sort",
    "name": "Topological Sort",
    "description": "Orders vertices in a DAG such that for every directed edge u -> v, u appears before v using in-degree BFS (Kahn's).",
    "whyItWorks": "Repeatedly removing nodes with 0 dependencies resolves prerequisites monotonically.",
    "whenToUse": "Course prerequisites, task dependency ordering, compilation build steps.",
    "recognitionClues": [
      "Course prerequisites",
      "Build system order",
      "Directed acyclic graph dependencies"
    ],
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "generalTemplate": "int[] inDegree = new int[n];\nQueue<Integer> q = new ArrayDeque<>();\nfor (int i = 0; i < n; i++) if (inDegree[i] == 0) q.offer(i);\nwhile (!q.isEmpty()) {\n    int u = q.poll();\n    for (int v : adj.get(u)) if (--inDegree[v] == 0) q.offer(v);\n}",
    "javaTemplate": "int[] inDegree = new int[n];\nQueue<Integer> q = new ArrayDeque<>();\nfor (int i = 0; i < n; i++) if (inDegree[i] == 0) q.offer(i);\nwhile (!q.isEmpty()) {\n    int u = q.poll();\n    for (int v : adj.get(u)) if (--inDegree[v] == 0) q.offer(v);\n}",
    "commonMistakes": [
      "Not detecting cycles when processed count != V",
      "Reversing directed edge arrows"
    ],
    "top10Problems": [
      {
        "id": "topological-sort-1",
        "name": "Course Schedule",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Course Schedule utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/course-schedule/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Course Schedule II",
          "Alien Dictionary"
        ]
      },
      {
        "id": "topological-sort-2",
        "name": "Course Schedule II",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Course Schedule II utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/course-schedule-ii/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Alien Dictionary",
          "Minimum Height Trees"
        ]
      },
      {
        "id": "topological-sort-3",
        "name": "Alien Dictionary",
        "difficulty": "Hard",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Alien Dictionary utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Minimum Height Trees",
          "Sequence Reconstruction"
        ]
      },
      {
        "id": "topological-sort-4",
        "name": "Minimum Height Trees",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Minimum Height Trees utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-height-trees/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-height-trees/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Sequence Reconstruction",
          "Find Eventual Safe States"
        ]
      },
      {
        "id": "topological-sort-5",
        "name": "Sequence Reconstruction",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Sequence Reconstruction utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sequence-reconstruction/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/topological-sort/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Find Eventual Safe States",
          "All Ancestors in DAG"
        ]
      },
      {
        "id": "topological-sort-6",
        "name": "Find Eventual Safe States",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Find Eventual Safe States utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-eventual-safe-states/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/eventual-safe-states/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "All Ancestors in DAG",
          "Longest Increasing Path in a Matrix"
        ]
      },
      {
        "id": "topological-sort-7",
        "name": "All Ancestors in DAG",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master All Ancestors in DAG utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/ancestors-in-dag/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Longest Increasing Path in a Matrix",
          "Parallel Courses"
        ]
      },
      {
        "id": "topological-sort-8",
        "name": "Longest Increasing Path in a Matrix",
        "difficulty": "Hard",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Longest Increasing Path in a Matrix utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-increasing-path-in-a-matrix/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Parallel Courses",
          "Sort Items by Groups"
        ]
      },
      {
        "id": "topological-sort-9",
        "name": "Parallel Courses",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Parallel Courses utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/parallel-courses/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Sort Items by Groups",
          "Course Schedule"
        ]
      },
      {
        "id": "topological-sort-10",
        "name": "Sort Items by Groups",
        "difficulty": "Hard",
        "dataStructure": "Graph",
        "pattern": "Topological Sort",
        "shortDescription": "Practice and master Sort Items by Groups utilizing the core Topological Sort pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/topological-sort/1",
        "expectedTime": "O(V + E)",
        "expectedSpace": "O(V + E)",
        "relatedProblems": [
          "Course Schedule",
          "Course Schedule II"
        ]
      }
    ]
  },
  {
    "id": "union-find",
    "slug": "union-find",
    "name": "Union Find / Disjoint Set Union",
    "description": "Tracks partitioning of elements into disjoint equivalence sets with near-constant O(α(n)) find and union.",
    "whyItWorks": "Path compression flattens tree depth during lookups while union-by-rank minimizes tree height.",
    "whenToUse": "Connected components, Kruskal's MST, cycle detection in undirected graphs, accounts merge.",
    "recognitionClues": [
      "Connected components",
      "Redundant connection",
      "Accounts merge",
      "Dynamic graph connectivity"
    ],
    "timeComplexity": "O(α(n)) ≈ O(1)",
    "spaceComplexity": "O(n)",
    "generalTemplate": "class DSU {\n    int[] parent, rank;\n    DSU(int n) {\n        parent = new int[n]; rank = new int[n];\n        for (int i = 0; i < n; i++) parent[i] = i;\n    }\n    int find(int i) { return parent[i] == i ? i : (parent[i] = find(parent[i])); }\n    boolean union(int i, int j) {\n        int rI = find(i), rJ = find(j);\n        if (rI == rJ) return false;\n        if (rank[rI] < rank[rJ]) parent[rI] = rJ;\n        else if (rank[rI] > rank[rJ]) parent[rJ] = rI;\n        else { parent[rJ] = rI; rank[rI]++; }\n        return true;\n    }\n}",
    "javaTemplate": "class DSU {\n    int[] parent, rank;\n    DSU(int n) {\n        parent = new int[n]; rank = new int[n];\n        for (int i = 0; i < n; i++) parent[i] = i;\n    }\n    int find(int i) { return parent[i] == i ? i : (parent[i] = find(parent[i])); }\n    boolean union(int i, int j) {\n        int rI = find(i), rJ = find(j);\n        if (rI == rJ) return false;\n        if (rank[rI] < rank[rJ]) parent[rI] = rJ;\n        else if (rank[rI] > rank[rJ]) parent[rJ] = rI;\n        else { parent[rJ] = rI; rank[rI]++; }\n        return true;\n    }\n}",
    "commonMistakes": [
      "Omitting path compression",
      "Calling union on elements instead of roots"
    ],
    "top10Problems": [
      {
        "id": "union-find-1",
        "name": "Number of Provinces",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Number of Provinces utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-provinces/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/number-of-provinces/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Redundant Connection",
          "Accounts Merge"
        ]
      },
      {
        "id": "union-find-2",
        "name": "Redundant Connection",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Redundant Connection utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/redundant-connection/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/redundant-connection/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Accounts Merge",
          "Number of Operations to Make Network Connected"
        ]
      },
      {
        "id": "union-find-3",
        "name": "Accounts Merge",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Accounts Merge utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/accounts-merge/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/merging-details/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Number of Operations to Make Network Connected",
          "Graph Valid Tree"
        ]
      },
      {
        "id": "union-find-4",
        "name": "Number of Operations to Make Network Connected",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Number of Operations to Make Network Connected utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/connecting-the-graph/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Graph Valid Tree",
          "Satisfiability of Equality Equations"
        ]
      },
      {
        "id": "union-find-5",
        "name": "Graph Valid Tree",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Graph Valid Tree utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/graph-valid-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/is-it-a-tree/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Satisfiability of Equality Equations",
          "Min Cost to Connect All Points"
        ]
      },
      {
        "id": "union-find-6",
        "name": "Satisfiability of Equality Equations",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Satisfiability of Equality Equations utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/satisfiability-of-equality-equations/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/satisfiability-of-equality-equations/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Min Cost to Connect All Points",
          "Surrounded Regions (DSU)"
        ]
      },
      {
        "id": "union-find-7",
        "name": "Min Cost to Connect All Points",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Min Cost to Connect All Points utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Surrounded Regions (DSU)",
          "Smallest String With Swaps"
        ]
      },
      {
        "id": "union-find-8",
        "name": "Surrounded Regions (DSU)",
        "difficulty": "Medium",
        "dataStructure": "Grid",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Surrounded Regions (DSU) utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Smallest String With Swaps",
          "Making A Large Island"
        ]
      },
      {
        "id": "union-find-9",
        "name": "Smallest String With Swaps",
        "difficulty": "Medium",
        "dataStructure": "Graph",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Smallest String With Swaps utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-string-with-swaps/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/smallest-string-with-swaps/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Making A Large Island",
          "Number of Provinces"
        ]
      },
      {
        "id": "union-find-10",
        "name": "Making A Large Island",
        "difficulty": "Hard",
        "dataStructure": "Grid",
        "pattern": "Union Find / Disjoint Set Union",
        "shortDescription": "Practice and master Making A Large Island utilizing the core Union Find / Disjoint Set Union pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/making-a-large-island/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/making-a-large-island/1",
        "expectedTime": "O(α(n)) ≈ O(1)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Number of Provinces",
          "Redundant Connection"
        ]
      }
    ]
  },
  {
    "id": "trie",
    "slug": "trie",
    "name": "Trie (Prefix Tree)",
    "description": "A tree structure where nodes represent characters, allowing prefix matching and search in O(L) time.",
    "whyItWorks": "Common string prefixes share path nodes, enabling linear lookup independent of dictionary size.",
    "whenToUse": "Autocomplete, spell-checking, prefix queries, bitwise XOR trie.",
    "recognitionClues": [
      "Prefix matching",
      "Autocomplete dictionary",
      "Maximum XOR pair"
    ],
    "timeComplexity": "O(L) per word",
    "spaceComplexity": "O(Total Characters)",
    "generalTemplate": "class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEnd = false;\n}",
    "javaTemplate": "class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEnd = false;\n}",
    "commonMistakes": [
      "Assuming fixed 26 letters when unicode appears",
      "Forgetting isEnd on complete words"
    ],
    "top10Problems": [
      {
        "id": "trie-1",
        "name": "Implement Trie (Prefix Tree)",
        "difficulty": "Medium",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Implement Trie (Prefix Tree) utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Design Add and Search Words Data Structure",
          "Word Search II"
        ]
      },
      {
        "id": "trie-2",
        "name": "Design Add and Search Words Data Structure",
        "difficulty": "Medium",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Design Add and Search Words Data Structure utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-boggle4143/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Word Search II",
          "Maximum XOR of Two Numbers in an Array"
        ]
      },
      {
        "id": "trie-3",
        "name": "Word Search II",
        "difficulty": "Hard",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Word Search II utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-boggle-ii/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Maximum XOR of Two Numbers in an Array",
          "Replace Words"
        ]
      },
      {
        "id": "trie-4",
        "name": "Maximum XOR of Two Numbers in an Array",
        "difficulty": "Medium",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Maximum XOR of Two Numbers in an Array utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-xor-of-two-numbers-in-an-array/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Replace Words",
          "Longest Word in Dictionary"
        ]
      },
      {
        "id": "trie-5",
        "name": "Replace Words",
        "difficulty": "Medium",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Replace Words utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/replace-words/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/replace-words/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Longest Word in Dictionary",
          "Map Sum Pairs"
        ]
      },
      {
        "id": "trie-6",
        "name": "Longest Word in Dictionary",
        "difficulty": "Medium",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Longest Word in Dictionary utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-word-in-dictionary/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-the-longest-string--170647/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Map Sum Pairs",
          "Index Pairs of a String"
        ]
      },
      {
        "id": "trie-7",
        "name": "Map Sum Pairs",
        "difficulty": "Medium",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Map Sum Pairs utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/map-sum-pairs/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Index Pairs of a String",
          "Palindrome Pairs"
        ]
      },
      {
        "id": "trie-8",
        "name": "Index Pairs of a String",
        "difficulty": "Easy",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Index Pairs of a String utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/index-pairs-of-a-string/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm--141631/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Palindrome Pairs",
          "Concatenated Words"
        ]
      },
      {
        "id": "trie-9",
        "name": "Palindrome Pairs",
        "difficulty": "Hard",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Palindrome Pairs utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/palindrome-pairs/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/palindrome-pairs/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Concatenated Words",
          "Implement Trie (Prefix Tree)"
        ]
      },
      {
        "id": "trie-10",
        "name": "Concatenated Words",
        "difficulty": "Hard",
        "dataStructure": "Trie",
        "pattern": "Trie (Prefix Tree)",
        "shortDescription": "Practice and master Concatenated Words utilizing the core Trie (Prefix Tree) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/concatenated-words/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-break-part-23249/1",
        "expectedTime": "O(L) per word",
        "expectedSpace": "O(Total Characters)",
        "relatedProblems": [
          "Implement Trie (Prefix Tree)",
          "Design Add and Search Words Data Structure"
        ]
      }
    ]
  },
  {
    "id": "dynamic-programming-1d",
    "slug": "dynamic-programming-1d",
    "name": "Dynamic Programming (1D)",
    "description": "Solves sequential state problems where dp[i] depends on a bounded set of previous states.",
    "whyItWorks": "Caches subproblem solutions, converting exponential recursive trees to linear O(n).",
    "whenToUse": "Climbing stairs, house robber, coin change, LIS, decode ways.",
    "recognitionClues": [
      "Maximum profit at step i",
      "Count ways to reach target",
      "dp[i] = opt(dp[i-1], dp[i-2])"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1) or O(n)",
    "generalTemplate": "int prev2 = 1, prev1 = 1;\nfor (int i = 2; i <= n; i++) {\n    int curr = prev1 + prev2;\n    prev2 = prev1; prev1 = curr;\n}",
    "javaTemplate": "int prev2 = 1, prev1 = 1;\nfor (int i = 2; i <= n; i++) {\n    int curr = prev1 + prev2;\n    prev2 = prev1; prev1 = curr;\n}",
    "commonMistakes": [
      "Using O(n) array when only last two variables needed",
      "Base case index errors"
    ],
    "top10Problems": [
      {
        "id": "dynamic-programming-1d-1",
        "name": "Climbing Stairs",
        "difficulty": "Easy",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Climbing Stairs utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "House Robber",
          "House Robber II"
        ]
      },
      {
        "id": "dynamic-programming-1d-2",
        "name": "House Robber",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master House Robber utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/house-robber/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "House Robber II",
          "Coin Change"
        ]
      },
      {
        "id": "dynamic-programming-1d-3",
        "name": "House Robber II",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master House Robber II utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/house-robber-ii/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Coin Change",
          "Longest Increasing Subsequence"
        ]
      },
      {
        "id": "dynamic-programming-1d-4",
        "name": "Coin Change",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Coin Change utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/coin-change/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/coin-change2448/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Longest Increasing Subsequence",
          "Word Break"
        ]
      },
      {
        "id": "dynamic-programming-1d-5",
        "name": "Longest Increasing Subsequence",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Longest Increasing Subsequence utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Word Break",
          "Decode Ways"
        ]
      },
      {
        "id": "dynamic-programming-1d-6",
        "name": "Word Break",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Word Break utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/word-break/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-break1352/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Decode Ways",
          "Maximum Subarray"
        ]
      },
      {
        "id": "dynamic-programming-1d-7",
        "name": "Decode Ways",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Decode Ways utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/decode-ways/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/total-decoding-messages1235/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Maximum Subarray",
          "Maximum Product Subarray"
        ]
      },
      {
        "id": "dynamic-programming-1d-8",
        "name": "Maximum Subarray",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Maximum Subarray utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Maximum Product Subarray",
          "Partition Equal Subset Sum"
        ]
      },
      {
        "id": "dynamic-programming-1d-9",
        "name": "Maximum Product Subarray",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Maximum Product Subarray utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Partition Equal Subset Sum",
          "Climbing Stairs"
        ]
      },
      {
        "id": "dynamic-programming-1d-10",
        "name": "Partition Equal Subset Sum",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (1D)",
        "shortDescription": "Practice and master Partition Equal Subset Sum utilizing the core Dynamic Programming (1D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1) or O(n)",
        "relatedProblems": [
          "Climbing Stairs",
          "House Robber"
        ]
      }
    ]
  },
  {
    "id": "dynamic-programming-2d",
    "slug": "dynamic-programming-2d",
    "name": "Dynamic Programming (2D)",
    "description": "Computes solutions across two interdependent state dimensions (string indices, grid cells) using dp[i][j].",
    "whyItWorks": "Evaluating state dependencies in row-major order guarantees preceding states are precalculated.",
    "whenToUse": "LCS, edit distance, 0/1 knapsack, unique paths in grid.",
    "recognitionClues": [
      "Two string comparison",
      "Grid minimum cost path",
      "0/1 Knapsack capacity"
    ],
    "timeComplexity": "O(m * n)",
    "spaceComplexity": "O(n) rolling",
    "generalTemplate": "int[][] dp = new int[m + 1][n + 1];\nfor (int i = 1; i <= m; i++) {\n    for (int j = 1; j <= n; j++) {\n        if (s1.charAt(i - 1) == s2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n}",
    "javaTemplate": "int[][] dp = new int[m + 1][n + 1];\nfor (int i = 1; i <= m; i++) {\n    for (int j = 1; j <= n; j++) {\n        if (s1.charAt(i - 1) == s2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n    }\n}",
    "commonMistakes": [
      "1-based DP indexing vs 0-based string mismatch",
      "Not rolling rows for space savings"
    ],
    "top10Problems": [
      {
        "id": "dynamic-programming-2d-1",
        "name": "Longest Common Subsequence",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Longest Common Subsequence utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Edit Distance",
          "Unique Paths"
        ]
      },
      {
        "id": "dynamic-programming-2d-2",
        "name": "Edit Distance",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Edit Distance utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Unique Paths",
          "Unique Paths II"
        ]
      },
      {
        "id": "dynamic-programming-2d-3",
        "name": "Unique Paths",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Unique Paths utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/number-of-unique-paths5339/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Unique Paths II",
          "Minimum Path Sum"
        ]
      },
      {
        "id": "dynamic-programming-2d-4",
        "name": "Unique Paths II",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Unique Paths II utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/unique-paths-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/special-matrix4201/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Minimum Path Sum",
          "0/1 Knapsack Problem"
        ]
      },
      {
        "id": "dynamic-programming-2d-5",
        "name": "Minimum Path Sum",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Minimum Path Sum utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-path-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-cost-path3833/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "0/1 Knapsack Problem",
          "Target Sum"
        ]
      },
      {
        "id": "dynamic-programming-2d-6",
        "name": "0/1 Knapsack Problem",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master 0/1 Knapsack Problem utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Target Sum",
          "Coin Change II"
        ]
      },
      {
        "id": "dynamic-programming-2d-7",
        "name": "Target Sum",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Target Sum utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/target-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/target-sum-1626326450/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Coin Change II",
          "Interleaving String"
        ]
      },
      {
        "id": "dynamic-programming-2d-8",
        "name": "Coin Change II",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Coin Change II utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/coin-change-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/coin-change2448/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Interleaving String",
          "Maximal Square"
        ]
      },
      {
        "id": "dynamic-programming-2d-9",
        "name": "Interleaving String",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Interleaving String utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/interleaving-string/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/interleaved-strings/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Maximal Square",
          "Longest Common Subsequence"
        ]
      },
      {
        "id": "dynamic-programming-2d-10",
        "name": "Maximal Square",
        "difficulty": "Medium",
        "dataStructure": "DP",
        "pattern": "Dynamic Programming (2D)",
        "shortDescription": "Practice and master Maximal Square utilizing the core Dynamic Programming (2D) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximal-square/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-size-square-sub-matrix-with-all-1s0301/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(n) rolling",
        "relatedProblems": [
          "Longest Common Subsequence",
          "Edit Distance"
        ]
      }
    ]
  },
  {
    "id": "bit-manipulation",
    "slug": "bit-manipulation",
    "name": "Bit Manipulation",
    "description": "Performs bitwise boolean algebra directly on binary integer representations in single-cycle O(1) time.",
    "whyItWorks": "Bit operations execute natively on processor ALUs; XOR identity cancels duplicates instantly.",
    "whenToUse": "Single number finding, power of two verification, counting set bits.",
    "recognitionClues": [
      "Numbers appear twice except one",
      "Check power of two",
      "Count set bits"
    ],
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int count = 0;\nwhile (n != 0) {\n    n &= (n - 1); // clears lowest set bit\n    count++;\n}",
    "javaTemplate": "int count = 0;\nwhile (n != 0) {\n    n &= (n - 1); // clears lowest set bit\n    count++;\n}",
    "commonMistakes": [
      "Bitwise operator precedence bugs",
      "Negative number bit shifts"
    ],
    "top10Problems": [
      {
        "id": "bit-manipulation-1",
        "name": "Single Number",
        "difficulty": "Easy",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Single Number utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/single-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/single-number1014/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Single Number II",
          "Number of 1 Bits"
        ]
      },
      {
        "id": "bit-manipulation-2",
        "name": "Single Number II",
        "difficulty": "Medium",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Single Number II utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/single-number-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/find-element-occuring-once-when-all-other-are-present-thrice/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Number of 1 Bits",
          "Counting Bits"
        ]
      },
      {
        "id": "bit-manipulation-3",
        "name": "Number of 1 Bits",
        "difficulty": "Easy",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Number of 1 Bits utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/set-bits0143/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Counting Bits",
          "Reverse Bits"
        ]
      },
      {
        "id": "bit-manipulation-4",
        "name": "Counting Bits",
        "difficulty": "Easy",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Counting Bits utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/counting-bits/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Reverse Bits",
          "Missing Number"
        ]
      },
      {
        "id": "bit-manipulation-5",
        "name": "Reverse Bits",
        "difficulty": "Easy",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Reverse Bits utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-bits/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/reverse-bits3556/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Missing Number",
          "Power of Two"
        ]
      },
      {
        "id": "bit-manipulation-6",
        "name": "Missing Number",
        "difficulty": "Easy",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Missing Number utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/missing-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Power of Two",
          "Bitwise AND of Numbers Range"
        ]
      },
      {
        "id": "bit-manipulation-7",
        "name": "Power of Two",
        "difficulty": "Easy",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Power of Two utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/power-of-two/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Bitwise AND of Numbers Range",
          "Subsets (Bit Manipulation)"
        ]
      },
      {
        "id": "bit-manipulation-8",
        "name": "Bitwise AND of Numbers Range",
        "difficulty": "Medium",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Bitwise AND of Numbers Range utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/bitwise-and-of-the-array/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Subsets (Bit Manipulation)",
          "Sum of Two Integers"
        ]
      },
      {
        "id": "bit-manipulation-9",
        "name": "Subsets (Bit Manipulation)",
        "difficulty": "Medium",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Subsets (Bit Manipulation) utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/subsets/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subsets-1613027340/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Sum of Two Integers",
          "Single Number"
        ]
      },
      {
        "id": "bit-manipulation-10",
        "name": "Sum of Two Integers",
        "difficulty": "Medium",
        "dataStructure": "Bit",
        "pattern": "Bit Manipulation",
        "shortDescription": "Practice and master Sum of Two Integers utilizing the core Bit Manipulation pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/sum-of-two-integers/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/addition-without-arithmetic-operators/1",
        "expectedTime": "O(1)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Single Number",
          "Single Number II"
        ]
      }
    ]
  },
  {
    "id": "bitmasking",
    "slug": "bitmasking",
    "name": "Bitmasking (Subset State DP)",
    "description": "Uses an integer bitmask to represent presence/absence of N elements (N <= 20) during state transitions.",
    "whyItWorks": "Integer bits compactly store 2^N state flags, allowing bitwise transitions (mask | (1 << i)).",
    "whenToUse": "Traveling Salesperson, small matching sets, partition into K subsets.",
    "recognitionClues": [
      "N <= 16 to 20",
      "Choose subset of elements",
      "Permutation states with memory"
    ],
    "timeComplexity": "O(n * 2ⁿ)",
    "spaceComplexity": "O(2ⁿ)",
    "generalTemplate": "int total = 1 << n;\nint[] dp = new int[total];\nfor (int mask = 0; mask < total; mask++) {\n    for (int i = 0; i < n; i++) {\n        if ((mask & (1 << i)) == 0) {\n            dp[mask | (1 << i)] = Math.min(dp[mask | (1 << i)], dp[mask] + cost[i]);\n        }\n    }\n}",
    "javaTemplate": "int total = 1 << n;\nint[] dp = new int[total];\nfor (int mask = 0; mask < total; mask++) {\n    for (int i = 0; i < n; i++) {\n        if ((mask & (1 << i)) == 0) {\n            dp[mask | (1 << i)] = Math.min(dp[mask | (1 << i)], dp[mask] + cost[i]);\n        }\n    }\n}",
    "commonMistakes": [
      "Using when N > 25 (OutOfMemory)",
      "Shift precedence errors"
    ],
    "top10Problems": [
      {
        "id": "bitmasking-1",
        "name": "Partition to K Equal Sum Subsets",
        "difficulty": "Medium",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Partition to K Equal Sum Subsets utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Matchsticks to Square",
          "Shortest Path Visiting All Nodes"
        ]
      },
      {
        "id": "bitmasking-2",
        "name": "Matchsticks to Square",
        "difficulty": "Medium",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Matchsticks to Square utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/matchsticks-to-square/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/matchsticks-to-square/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Shortest Path Visiting All Nodes",
          "Find the Shortest Superstring"
        ]
      },
      {
        "id": "bitmasking-3",
        "name": "Shortest Path Visiting All Nodes",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Shortest Path Visiting All Nodes utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/traveling-salesman-problem/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Find the Shortest Superstring",
          "Smallest Sufficient Team"
        ]
      },
      {
        "id": "bitmasking-4",
        "name": "Find the Shortest Superstring",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Find the Shortest Superstring utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-shortest-superstring/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/shortest-common-supersequence0322/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Smallest Sufficient Team",
          "Maximum Students Taking Exam"
        ]
      },
      {
        "id": "bitmasking-5",
        "name": "Smallest Sufficient Team",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Smallest Sufficient Team utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/smallest-sufficient-team/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/smallest-sufficient-team/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Maximum Students Taking Exam",
          "Distribute Repeating Integers"
        ]
      },
      {
        "id": "bitmasking-6",
        "name": "Maximum Students Taking Exam",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Maximum Students Taking Exam utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-students-taking-exam/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-students/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Distribute Repeating Integers",
          "Can I Win"
        ]
      },
      {
        "id": "bitmasking-7",
        "name": "Distribute Repeating Integers",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Distribute Repeating Integers utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/distribute-repeating-integers/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/distribute-integers/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Can I Win",
          "Stickers to Spell Word"
        ]
      },
      {
        "id": "bitmasking-8",
        "name": "Can I Win",
        "difficulty": "Medium",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Can I Win utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/can-i-win/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/can-i-win/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Stickers to Spell Word",
          "Number of Ways to Wear Different Hats"
        ]
      },
      {
        "id": "bitmasking-9",
        "name": "Stickers to Spell Word",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Stickers to Spell Word utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/stickers-to-spell-word/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/stickers-to-spell-word/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Number of Ways to Wear Different Hats",
          "Partition to K Equal Sum Subsets"
        ]
      },
      {
        "id": "bitmasking-10",
        "name": "Number of Ways to Wear Different Hats",
        "difficulty": "Hard",
        "dataStructure": "Bitmask",
        "pattern": "Bitmasking (Subset State DP)",
        "shortDescription": "Practice and master Number of Ways to Wear Different Hats utilizing the core Bitmasking (Subset State DP) pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/assign-hats/1",
        "expectedTime": "O(n * 2ⁿ)",
        "expectedSpace": "O(2ⁿ)",
        "relatedProblems": [
          "Partition to K Equal Sum Subsets",
          "Matchsticks to Square"
        ]
      }
    ]
  },
  {
    "id": "matrix-traversal",
    "slug": "matrix-traversal",
    "name": "Matrix Traversal",
    "description": "Traverses 2D arrays using directional arrays (dx/dy), boundary peeling, and state markings.",
    "whyItWorks": "Direction vectors unify 4-directional transitions cleanly into a single compact loop.",
    "whenToUse": "Spiral matrix, rotating image, matrix zeroes, word search grid.",
    "recognitionClues": [
      "2D grid input",
      "Spiral traversal",
      "Rotate matrix 90 degrees"
    ],
    "timeComplexity": "O(m * n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int top = 0, bottom = m - 1, left = 0, right = n - 1;\nwhile (top <= bottom && left <= right) {\n    for (int i = left; i <= right; i++) res.add(matrix[top][i]);\n    top++;\n    // continue spiral\n}",
    "javaTemplate": "int top = 0, bottom = m - 1, left = 0, right = n - 1;\nwhile (top <= bottom && left <= right) {\n    for (int i = left; i <= right; i++) res.add(matrix[top][i]);\n    top++;\n    // continue spiral\n}",
    "commonMistakes": [
      "Index boundary overflow",
      "Row and column variable mixups"
    ],
    "top10Problems": [
      {
        "id": "matrix-traversal-1",
        "name": "Spiral Matrix",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Spiral Matrix utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Spiral Matrix II",
          "Rotate Image"
        ]
      },
      {
        "id": "matrix-traversal-2",
        "name": "Spiral Matrix II",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Spiral Matrix II utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/spiral-matrix-ii/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Rotate Image",
          "Set Matrix Zeroes"
        ]
      },
      {
        "id": "matrix-traversal-3",
        "name": "Rotate Image",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Rotate Image utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/rotate-image/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Set Matrix Zeroes",
          "Word Search"
        ]
      },
      {
        "id": "matrix-traversal-4",
        "name": "Set Matrix Zeroes",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Set Matrix Zeroes utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/set-matrix-zeroes/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Word Search",
          "Game of Life"
        ]
      },
      {
        "id": "matrix-traversal-5",
        "name": "Word Search",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Word Search utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/word-search/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/word-search/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Game of Life",
          "Diagonal Traverse"
        ]
      },
      {
        "id": "matrix-traversal-6",
        "name": "Game of Life",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Game of Life utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/game-of-life/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/game-of-life/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Diagonal Traverse",
          "Valid Sudoku"
        ]
      },
      {
        "id": "matrix-traversal-7",
        "name": "Diagonal Traverse",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Diagonal Traverse utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/diagonal-traverse/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/print-diagonally4331/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Valid Sudoku",
          "Search a 2D Matrix"
        ]
      },
      {
        "id": "matrix-traversal-8",
        "name": "Valid Sudoku",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Valid Sudoku utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/valid-sudoku/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/is-sudoku-valid4820/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Search a 2D Matrix",
          "Transpose Matrix"
        ]
      },
      {
        "id": "matrix-traversal-9",
        "name": "Search a 2D Matrix",
        "difficulty": "Medium",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Search a 2D Matrix utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Transpose Matrix",
          "Spiral Matrix"
        ]
      },
      {
        "id": "matrix-traversal-10",
        "name": "Transpose Matrix",
        "difficulty": "Easy",
        "dataStructure": "Matrix",
        "pattern": "Matrix Traversal",
        "shortDescription": "Practice and master Transpose Matrix utilizing the core Matrix Traversal pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/transpose-matrix/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/transpose-of-matrix-1587115621/1",
        "expectedTime": "O(m * n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Spiral Matrix",
          "Spiral Matrix II"
        ]
      }
    ]
  },
  {
    "id": "kadanes-algorithm",
    "slug": "kadanes-algorithm",
    "name": "Kadane's Algorithm",
    "description": "Finds the maximum contiguous subarray sum in O(n) time and O(1) space by dynamic prefix restarts.",
    "whyItWorks": "A negative prefix sum only decreases subsequent sums, so resetting to zero is always optimal.",
    "whenToUse": "Maximum subarray sum, maximum circular subarray sum.",
    "recognitionClues": [
      "Maximum subarray sum",
      "Contiguous subarray with highest sum",
      "Kadane"
    ],
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "int maxSoFar = nums[0], currMax = nums[0];\nfor (int i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n}\nreturn maxSoFar;",
    "javaTemplate": "int maxSoFar = nums[0], currMax = nums[0];\nfor (int i = 1; i < nums.length; i++) {\n    currMax = Math.max(nums[i], currMax + nums[i]);\n    maxSoFar = Math.max(maxSoFar, currMax);\n}\nreturn maxSoFar;",
    "commonMistakes": [
      "Initializing to 0 instead of nums[0] (fails on all-negative inputs)"
    ],
    "top10Problems": [
      {
        "id": "kadanes-algorithm-1",
        "name": "Maximum Subarray",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Maximum Subarray utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Sum Circular Subarray",
          "Maximum Product Subarray"
        ]
      },
      {
        "id": "kadanes-algorithm-2",
        "name": "Maximum Sum Circular Subarray",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Maximum Sum Circular Subarray utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/max-circular-subarray-sum-1587115620/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Product Subarray",
          "Maximum Absolute Sum of Subarray"
        ]
      },
      {
        "id": "kadanes-algorithm-3",
        "name": "Maximum Product Subarray",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Maximum Product Subarray utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Absolute Sum of Subarray",
          "Best Time to Buy and Sell Stock"
        ]
      },
      {
        "id": "kadanes-algorithm-4",
        "name": "Maximum Absolute Sum of Subarray",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Maximum Absolute Sum of Subarray utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-absolute-sum/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Best Time to Buy and Sell Stock",
          "K-Concatenation Maximum Sum"
        ]
      },
      {
        "id": "kadanes-algorithm-5",
        "name": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Best Time to Buy and Sell Stock utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/stock-buy-and-sell2615/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "K-Concatenation Maximum Sum",
          "Largest Sum Subarray Size >= K"
        ]
      },
      {
        "id": "kadanes-algorithm-6",
        "name": "K-Concatenation Maximum Sum",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master K-Concatenation Maximum Sum utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/k-concatenation-maximum-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/k-concatenation/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Largest Sum Subarray Size >= K",
          "Maximum Subarray Sum with One Deletion"
        ]
      },
      {
        "id": "kadanes-algorithm-7",
        "name": "Largest Sum Subarray Size >= K",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Largest Sum Subarray Size >= K utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/largest-sum-subarray-of-size-at-least-k3121/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Subarray Sum with One Deletion",
          "Continuous Subarray Sum"
        ]
      },
      {
        "id": "kadanes-algorithm-8",
        "name": "Maximum Subarray Sum with One Deletion",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Maximum Subarray Sum with One Deletion utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/max-sum-subarray-with-deletion/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Continuous Subarray Sum",
          "Maximum Score of Spliced Array"
        ]
      },
      {
        "id": "kadanes-algorithm-9",
        "name": "Continuous Subarray Sum",
        "difficulty": "Medium",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Continuous Subarray Sum utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/continuous-subarray-sum/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Score of Spliced Array",
          "Maximum Subarray"
        ]
      },
      {
        "id": "kadanes-algorithm-10",
        "name": "Maximum Score of Spliced Array",
        "difficulty": "Hard",
        "dataStructure": "Array",
        "pattern": "Kadane's Algorithm",
        "shortDescription": "Practice and master Maximum Score of Spliced Array utilizing the core Kadane's Algorithm pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-score-of-spliced-array/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-spliced-array/1",
        "expectedTime": "O(n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Maximum Subarray",
          "Maximum Sum Circular Subarray"
        ]
      }
    ]
  },
  {
    "id": "sweep-line",
    "slug": "sweep-line",
    "name": "Sweep Line",
    "description": "Processes geometric or interval events along an ordered timeline, tracking active state transitions in O(n log n).",
    "whyItWorks": "Sorting endpoints discretizes continuous time into discrete critical transition timestamps.",
    "whenToUse": "The skyline problem, meeting rooms, overlapping rectangles.",
    "recognitionClues": [
      "Active overlapping intervals",
      "Skyline outline",
      "Max simultaneous meetings"
    ],
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "generalTemplate": "List<int[]> events = new ArrayList<>();\nfor (int[] inv : intervals) {\n    events.add(new int[]{inv[0], 1});\n    events.add(new int[]{inv[1], -1});\n}\nevents.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);",
    "javaTemplate": "List<int[]> events = new ArrayList<>();\nfor (int[] inv : intervals) {\n    events.add(new int[]{inv[0], 1});\n    events.add(new int[]{inv[1], -1});\n}\nevents.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);",
    "commonMistakes": [
      "Tie-breaking errors when start and end overlap at exact same x"
    ],
    "top10Problems": [
      {
        "id": "sweep-line-1",
        "name": "The Skyline Problem",
        "difficulty": "Hard",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master The Skyline Problem utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/the-skyline-problem/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/the-skyline-problem/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Meeting Rooms II",
          "Rectangle Area II"
        ]
      },
      {
        "id": "sweep-line-2",
        "name": "Meeting Rooms II",
        "difficulty": "Medium",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Meeting Rooms II utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Rectangle Area II",
          "Car Pooling (Line Sweep)"
        ]
      },
      {
        "id": "sweep-line-3",
        "name": "Rectangle Area II",
        "difficulty": "Hard",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Rectangle Area II utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/rectangle-area-ii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/total-area-of-two-overlapping-rectangles/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Car Pooling (Line Sweep)",
          "Describe the Painting"
        ]
      },
      {
        "id": "sweep-line-4",
        "name": "Car Pooling (Line Sweep)",
        "difficulty": "Medium",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Car Pooling (Line Sweep) utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/car-pooling/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/bus-conductor/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Describe the Painting",
          "My Calendar III"
        ]
      },
      {
        "id": "sweep-line-5",
        "name": "Describe the Painting",
        "difficulty": "Medium",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Describe the Painting utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/describe-the-painting/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/line-sweep/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "My Calendar III",
          "Minimum Interval to Include Each Query"
        ]
      },
      {
        "id": "sweep-line-6",
        "name": "My Calendar III",
        "difficulty": "Hard",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master My Calendar III utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/my-calendar-iii/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/meeting-rooms/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Minimum Interval to Include Each Query",
          "Number of Flowers in Full Bloom"
        ]
      },
      {
        "id": "sweep-line-7",
        "name": "Minimum Interval to Include Each Query",
        "difficulty": "Hard",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Minimum Interval to Include Each Query utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/minimum-interval/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Number of Flowers in Full Bloom",
          "Employee Free Time"
        ]
      },
      {
        "id": "sweep-line-8",
        "name": "Number of Flowers in Full Bloom",
        "difficulty": "Hard",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Number of Flowers in Full Bloom utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-flowers-in-full-bloom/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/flowers-in-bloom/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Employee Free Time",
          "Maximum Events That Can Be Attended"
        ]
      },
      {
        "id": "sweep-line-9",
        "name": "Employee Free Time",
        "difficulty": "Hard",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Employee Free Time utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/employee-free-time/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/employee-free-time/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "Maximum Events That Can Be Attended",
          "The Skyline Problem"
        ]
      },
      {
        "id": "sweep-line-10",
        "name": "Maximum Events That Can Be Attended",
        "difficulty": "Medium",
        "dataStructure": "Sweep",
        "pattern": "Sweep Line",
        "shortDescription": "Practice and master Maximum Events That Can Be Attended utilizing the core Sweep Line pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/maximum-number-of-events-that-can-be-attended/1",
        "expectedTime": "O(n log n)",
        "expectedSpace": "O(n)",
        "relatedProblems": [
          "The Skyline Problem",
          "Meeting Rooms II"
        ]
      }
    ]
  },
  {
    "id": "fast-exponentiation",
    "slug": "fast-exponentiation",
    "name": "Fast Exponentiation / Math",
    "description": "Computes x^n or matrix^n in logarithmic O(log n) time by squaring the base on even powers and multiplying on odd.",
    "whyItWorks": "Since x^n = (x²)^(n/2) for even n, each squaring step halves the remaining power.",
    "whenToUse": "Pow(x, n), modular exponentiation, N-th Fibonacci via matrix exponentiation.",
    "recognitionClues": [
      "Compute x^n",
      "Large exponent n up to 10^18",
      "Matrix exponentiation"
    ],
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "generalTemplate": "long N = n;\nif (N < 0) { x = 1 / x; N = -N; }\ndouble ans = 1.0;\nwhile (N > 0) {\n    if (N % 2 == 1) ans *= x;\n    x *= x;\n    N /= 2;\n}",
    "javaTemplate": "long N = n;\nif (N < 0) { x = 1 / x; N = -N; }\ndouble ans = 1.0;\nwhile (N > 0) {\n    if (N % 2 == 1) ans *= x;\n    x *= x;\n    N /= 2;\n}",
    "commonMistakes": [
      "Overflow on negating Integer.MIN_VALUE in Java",
      "Modulo missing on intermediate multiplication"
    ],
    "top10Problems": [
      {
        "id": "fast-exponentiation-1",
        "name": "Pow(x, n)",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Pow(x, n) utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/powx-n/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Super Pow",
          "Count Good Numbers"
        ]
      },
      {
        "id": "fast-exponentiation-2",
        "name": "Super Pow",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Super Pow utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/super-pow/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Count Good Numbers",
          "Fibonacci Number (Matrix Exp)"
        ]
      },
      {
        "id": "fast-exponentiation-3",
        "name": "Count Good Numbers",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Count Good Numbers utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/count-good-numbers/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/count-good-numbers/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Fibonacci Number (Matrix Exp)",
          "Modular Exponentiation"
        ]
      },
      {
        "id": "fast-exponentiation-4",
        "name": "Fibonacci Number (Matrix Exp)",
        "difficulty": "Easy",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Fibonacci Number (Matrix Exp) utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/fibonacci-number/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1359/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Modular Exponentiation",
          "Power of Three"
        ]
      },
      {
        "id": "fast-exponentiation-5",
        "name": "Modular Exponentiation",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Modular Exponentiation utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/powx-n/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Power of Three",
          "Power of Four"
        ]
      },
      {
        "id": "fast-exponentiation-6",
        "name": "Power of Three",
        "difficulty": "Easy",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Power of Three utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/power-of-three/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/power-of-3/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Power of Four",
          "Check If Number is Powers of Three"
        ]
      },
      {
        "id": "fast-exponentiation-7",
        "name": "Power of Four",
        "difficulty": "Easy",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Power of Four utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/power-of-four/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/power-of-four/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Check If Number is Powers of Three",
          "Prime Arrangements"
        ]
      },
      {
        "id": "fast-exponentiation-8",
        "name": "Check If Number is Powers of Three",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Check If Number is Powers of Three utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/powers-of-3/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Prime Arrangements",
          "Knight Dialer (Matrix Exp)"
        ]
      },
      {
        "id": "fast-exponentiation-9",
        "name": "Prime Arrangements",
        "difficulty": "Easy",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Prime Arrangements utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/prime-arrangements/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/prime-arrangements/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Knight Dialer (Matrix Exp)",
          "Pow(x, n)"
        ]
      },
      {
        "id": "fast-exponentiation-10",
        "name": "Knight Dialer (Matrix Exp)",
        "difficulty": "Medium",
        "dataStructure": "Math",
        "pattern": "Fast Exponentiation / Math",
        "shortDescription": "Practice and master Knight Dialer (Matrix Exp) utilizing the core Fast Exponentiation / Math pattern.",
        "leetcodeUrl": "https://leetcode.com/problems/knight-dialer/",
        "gfgUrl": "https://www.geeksforgeeks.org/problems/knight-dialer/1",
        "expectedTime": "O(log n)",
        "expectedSpace": "O(1)",
        "relatedProblems": [
          "Pow(x, n)",
          "Super Pow"
        ]
      }
    ]
  }
];
