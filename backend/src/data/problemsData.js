export const PROBLEMS_DATA = [
  {
    "id": "two-sum",
    "slug": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "dataStructures": [
      "Array",
      "HashMap"
    ],
    "patterns": [
      "Hashing / Frequency Map",
      "Two Pointers"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/two-sum/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/key-pair5556/1",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    "examples": [
      {
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3, 2, 4], target = 6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] == 2 + 4 == 6, return [1, 2]."
      },
      {
        "input": "nums = [3, 3], target = 6",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] == 3 + 3 == 6, return [0, 1]."
      }
    ],
    "methodMeta": {
      "methodName": "twoSum",
      "returnType": "int[]",
      "paramTypes": [
        "int[]",
        "int"
      ]
    },
    "starterCode": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n        return new int[]{};\n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[]{map.get(complement), i};\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}",
    "hints": [
      "Hint 1: Can you think of a way to check if the complement (target - nums[i]) already exists in the array?",
      "Hint 2: A linear search for the complement in the array results in O(n²). What data structure provides O(1) average lookup time?",
      "Hint 3: Use a HashMap where each key is the number and value is its index. In a single pass, check if (target - nums[i]) is already in the map before inserting nums[i]."
    ],
    "approaches": [
      {
        "name": "Brute Force",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "explanation": "Iterate through every pair (i, j) with nested loops and check if nums[i] + nums[j] == target.",
        "code": "public int[] twoSum(int[] nums, int target) {\n    for (int i = 0; i < nums.length; i++) {\n        for (int j = i + 1; j < nums.length; j++) {\n            if (nums[i] + nums[j] == target) {\n                return new int[]{i, j};\n            }\n        }\n    }\n    return new int[]{};\n}"
      },
      {
        "name": "Two Pointers (Sort First)",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(n)",
        "explanation": "Store original indices in a helper array of pairs, sort by value, and use two pointers (left at 0, right at n-1).",
        "code": "public int[] twoSum(int[] nums, int target) {\n    int[][] pairs = new int[nums.length][2];\n    for (int i = 0; i < nums.length; i++) {\n        pairs[i] = new int[]{nums[i], i};\n    }\n    Arrays.sort(pairs, (a, b) -> Integer.compare(a[0], b[0]));\n    int l = 0, r = nums.length - 1;\n    while (l < r) {\n        int sum = pairs[l][0] + pairs[r][0];\n        if (sum == target) return new int[]{pairs[l][1], pairs[r][1]};\n        else if (sum < target) l++;\n        else r--;\n    }\n    return new int[]{};\n}"
      },
      {
        "name": "Optimal (One-Pass HashMap)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "explanation": "As we iterate through the array, we check if the complement (target - nums[i]) is already in our HashMap. If found, we return immediately. Otherwise, record nums[i] -> index in map.",
        "whyBetter": "Approach 3 achieves optimal linear O(n) runtime by trading O(n) space. Unlike the brute force approach which performs repeated O(n) scans for each element, the HashMap achieves average O(1) membership lookups.",
        "code": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[]{map.get(complement), i};\n        }\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Understand the Problem",
        "text": "Find 2 distinct indices in nums whose sum equals target."
      },
      {
        "step": 2,
        "title": "Identify Input / Output",
        "text": "Input: int[] nums, int target. Output: int[] of 2 indices."
      },
      {
        "step": 3,
        "title": "Analyze Constraints",
        "text": "n up to 10^4. O(n²) will execute ~10^8 operations (borderline TLE). We need O(n) or O(n log n)."
      },
      {
        "step": 4,
        "title": "Brute Force Idea",
        "text": "Check every pair with two nested loops. Time: O(n²), Space: O(1)."
      },
      {
        "step": 5,
        "title": "Identify Bottleneck",
        "text": "Repeated linear scan to find whether target - nums[i] exists in the remainder of the array."
      },
      {
        "step": 6,
        "title": "Recognize Pattern",
        "text": "Hashing / Complement Lookup pattern converts O(n) search to O(1) average hash lookup."
      },
      {
        "step": 7,
        "title": "Optimize",
        "text": "Store visited numbers in a HashMap mapping value to index."
      },
      {
        "step": 8,
        "title": "Implement",
        "text": "Single pass: check map for complement, if absent put nums[i] -> i."
      },
      {
        "step": 9,
        "title": "Test Edge Cases",
        "text": "Negative numbers, duplicate values summing to target (e.g. [3, 3] target 6), first/last element pairs."
      },
      {
        "step": 10,
        "title": "Analyze Complexity",
        "text": "Time: O(n) where n is nums.length. Space: O(n) to store up to n elements in map."
      }
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            7,
            11,
            15
          ],
          9
        ],
        "expected": [
          0,
          1
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            3,
            2,
            4
          ],
          6
        ],
        "expected": [
          1,
          2
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            3,
            3
          ],
          6
        ],
        "expected": [
          0,
          1
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            -1,
            -2,
            -3,
            -4,
            -5
          ],
          -8
        ],
        "expected": [
          2,
          4
        ],
        "isHidden": true
      },
      {
        "input": [
          [
            1000000,
            500,
            -1000000
          ],
          -500000
        ],
        "expected": [],
        "isHidden": true
      }
    ]
  },
  {
    "id": "valid-palindrome",
    "slug": "valid-palindrome",
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "topic": "Strings & Two Pointers",
    "dataStructures": [
      "String"
    ],
    "patterns": [
      "Two Pointers"
    ],
    "companies": [
      "Meta",
      "Microsoft",
      "Amazon",
      "Apple",
      "Spotify"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/string-palindrome2731/1",
    "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      },
      {
        "input": "s = \" \"",
        "output": "true",
        "explanation": "s is an empty string \"\" after removing non-alphanumeric characters, which is a palindrome."
      }
    ],
    "methodMeta": {
      "methodName": "isPalindrome",
      "returnType": "boolean",
      "paramTypes": [
        "String"
      ]
    },
    "starterCode": "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your solution here\n        \n        return false;\n    }\n}",
    "solution": "class Solution {\n    public boolean isPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        while (left < right) {\n            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {\n                left++;\n            }\n            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {\n                right--;\n            }\n            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n                return false;\n            }\n            left++;\n            right--;\n        }\n        return true;\n    }\n}",
    "hints": [
      "Hint 1: Consider how two pointers can start from the left and right ends of the string.",
      "Hint 2: Use Character.isLetterOrDigit() to skip punctuation and whitespace without creating a brand-new filtered string in memory.",
      "Hint 3: Compare characters in lowercase with Character.toLowerCase(). If they ever mismatch, return false immediately."
    ],
    "approaches": [
      {
        "name": "Filter and Reverse",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "explanation": "Create a new StringBuilder containing only alphanumeric characters in lowercase, reverse it, and check equality.",
        "code": "public boolean isPalindrome(String s) {\n    StringBuilder sb = new StringBuilder();\n    for (char c : s.toCharArray()) {\n        if (Character.isLetterOrDigit(c)) sb.append(Character.toLowerCase(c));\n    }\n    String filtered = sb.toString();\n    return filtered.equals(sb.reverse().toString());\n}"
      },
      {
        "name": "Optimal (In-Place Two Pointers)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "explanation": "Use two pointers starting from ends of string, skip non-alphanumeric characters on the fly, and compare characters.",
        "whyBetter": "Avoids allocating a new StringBuilder or reversing strings, operating in strict O(1) auxiliary memory and terminating early upon the first mismatch.",
        "code": "public boolean isPalindrome(String s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n        while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n        while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n        if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n        l++; r--;\n    }\n    return true;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Understand the Problem",
        "text": "Check if characters read the same forwards and backwards, ignoring casing and symbols."
      },
      {
        "step": 2,
        "title": "Identify Input / Output",
        "text": "Input: String s. Output: boolean."
      },
      {
        "step": 3,
        "title": "Constraints",
        "text": "Length up to 2 * 10^5. Must run in O(n) time."
      },
      {
        "step": 4,
        "title": "Pattern Recognition",
        "text": "Two Pointers starting at 0 and n-1 converging inwards."
      },
      {
        "step": 5,
        "title": "Optimize Memory",
        "text": "Do not create new strings. Use Character.isLetterOrDigit directly on original string."
      },
      {
        "step": 6,
        "title": "Analyze Complexity",
        "text": "Time: O(n) single pass. Space: O(1) constant pointers."
      }
    ],
    "testCases": [
      {
        "input": "A man, a plan, a canal: Panama",
        "expected": true,
        "isHidden": false
      },
      {
        "input": "race a car",
        "expected": false,
        "isHidden": false
      },
      {
        "input": " ",
        "expected": true,
        "isHidden": false
      },
      {
        "input": "0P",
        "expected": false,
        "isHidden": true
      },
      {
        "input": "ab_a",
        "expected": true,
        "isHidden": true
      }
    ]
  },
  {
    "id": "maximum-subarray",
    "slug": "maximum-subarray",
    "title": "Maximum Subarray (Kadane's)",
    "difficulty": "Medium",
    "topic": "Dynamic Programming / Arrays",
    "dataStructures": [
      "Array"
    ],
    "patterns": [
      "Kadane's Algorithm",
      "Dynamic Programming (1D)"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Apple",
      "LinkedIn"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "The subarray [1] has the largest sum 1."
      },
      {
        "input": "nums = [5,4,-1,7,8]",
        "output": "23",
        "explanation": "The subarray [5,4,-1,7,8] has the largest sum 23."
      }
    ],
    "methodMeta": {
      "methodName": "maxSubArray",
      "returnType": "int",
      "paramTypes": [
        "int[]"
      ]
    },
    "starterCode": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your solution here\n        \n        return 0;\n    }\n}",
    "solution": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSoFar = nums[0];\n        int currentMax = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currentMax = Math.max(nums[i], currentMax + nums[i]);\n            maxSoFar = Math.max(maxSoFar, currentMax);\n        }\n        return maxSoFar;\n    }\n}",
    "hints": [
      "Hint 1: If the running sum of a prefix becomes negative, can it ever help increase the sum of any future subarray?",
      "Hint 2: At each element nums[i], you have two choices: extend the current subarray sum (currentMax + nums[i]) or start a fresh subarray at nums[i].",
      "Hint 3: Maintain maxSoFar initialized to nums[0] to correctly handle arrays with all negative numbers."
    ],
    "approaches": [
      {
        "name": "Brute Force",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "explanation": "Compute sum of every possible subarray nums[i..j] with nested loops.",
        "code": "public int maxSubArray(int[] nums) {\n    int max = Integer.MIN_VALUE;\n    for (int i = 0; i < nums.length; i++) {\n        int sum = 0;\n        for (int j = i; j < nums.length; j++) {\n            sum += nums[j];\n            max = Math.max(max, sum);\n        }\n    }\n    return max;\n}"
      },
      {
        "name": "Optimal (Kadane's Algorithm)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "explanation": "Dynamic programming with space optimization: currentMax = Math.max(nums[i], currentMax + nums[i]); maxSoFar = Math.max(maxSoFar, currentMax).",
        "whyBetter": "Reduces runtime from quadratic O(n²) to single-pass linear O(n) using constant memory.",
        "code": "public int maxSubArray(int[] nums) {\n    int maxSoFar = nums[0], currentMax = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        currentMax = Math.max(nums[i], currentMax + nums[i]);\n        maxSoFar = Math.max(maxSoFar, currentMax);\n    }\n    return maxSoFar;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Understand Problem",
        "text": "Find largest contiguous sum in integer array with negative and positive values."
      },
      {
        "step": 2,
        "title": "Identify Bottleneck",
        "text": "O(n²) calculates overlapping subarray sums repeatedly."
      },
      {
        "step": 3,
        "title": "Key Insight",
        "text": "If current sum becomes negative, starting fresh at nums[i] is strictly superior."
      },
      {
        "step": 4,
        "title": "State Transition",
        "text": "dp[i] = max(nums[i], dp[i-1] + nums[i])."
      },
      {
        "step": 5,
        "title": "Space Optimization",
        "text": "Only need scalar variable currentMax instead of full array."
      }
    ],
    "testCases": [
      {
        "input": [
          -2,
          1,
          -3,
          4,
          -1,
          2,
          1,
          -5,
          4
        ],
        "expected": 6,
        "isHidden": false
      },
      {
        "input": [
          1
        ],
        "expected": 1,
        "isHidden": false
      },
      {
        "input": [
          5,
          4,
          -1,
          7,
          8
        ],
        "expected": 23,
        "isHidden": false
      },
      {
        "input": [
          -5,
          -2,
          -8,
          -1,
          -4
        ],
        "expected": -1,
        "isHidden": true
      },
      {
        "input": [
          -1
        ],
        "expected": -1,
        "isHidden": true
      }
    ]
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "slug": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "topic": "Strings & Sliding Window",
    "dataStructures": [
      "String",
      "HashMap"
    ],
    "patterns": [
      "Sliding Window",
      "Hashing / Frequency Map"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Meta",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/length-of-the-longest-substring3036/1",
    "description": "Given a string `s`, find the length of the longest substring without duplicate characters.\n\nA substring is a contiguous sequence of characters within a string.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1."
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "The answer is \"wke\", with the length of 3. Notice that \"pwke\" is a subsequence and not a substring."
      }
    ],
    "methodMeta": {
      "methodName": "lengthOfLongestSubstring",
      "returnType": "int",
      "paramTypes": [
        "String"
      ]
    },
    "starterCode": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n        return 0;\n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> lastSeen = new HashMap<>();\n        int maxLen = 0, left = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (lastSeen.containsKey(c)) {\n                left = Math.max(left, lastSeen.get(c) + 1);\n            }\n            lastSeen.put(c, right);\n            maxLen = Math.max(maxLen, right - left + 1);\n        }\n        return maxLen;\n    }\n}",
    "hints": [
      "Hint 1: Can you use a sliding window [left, right] to keep track of a substring without repeating characters?",
      "Hint 2: When you see a duplicate character at 'right', you don't need to shrink 'left' one step at a time if you record the last seen index in a HashMap.",
      "Hint 3: Update left = Math.max(left, lastSeenIndex + 1) to ensure 'left' never moves backward."
    ],
    "approaches": [
      {
        "name": "Sliding Window with Set",
        "timeComplexity": "O(2n) = O(n)",
        "spaceComplexity": "O(min(n, m))",
        "explanation": "Expand right and add to HashSet. When duplicate found, shrink left one step at a time until duplicate is removed.",
        "code": "public int lengthOfLongestSubstring(String s) {\n    Set<Character> set = new HashSet<>();\n    int left = 0, maxLen = 0;\n    for (int right = 0; right < s.length(); right++) {\n        while (set.contains(s.charAt(right))) {\n            set.remove(s.charAt(left++));\n        }\n        set.add(s.charAt(right));\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}"
      },
      {
        "name": "Optimal (Jump-Forward HashMap)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(min(n, m))",
        "explanation": "Store character -> last seen index. When duplicate seen, jump left directly to lastSeen + 1 in a single step.",
        "whyBetter": "Eliminates step-by-step left pointer decrements, guaranteeing each character is visited exactly once.",
        "code": "public int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    int left = 0, maxLen = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (map.containsKey(c)) {\n            left = Math.max(left, map.get(c) + 1);\n        }\n        map.put(c, right);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Understand",
        "text": "Find longest substring (contiguous) containing unique characters."
      },
      {
        "step": 2,
        "title": "Recognize Pattern",
        "text": "Sliding Window with dynamic boundaries."
      },
      {
        "step": 3,
        "title": "Window State",
        "text": "Window [left, right] always maintains non-repeating characters."
      },
      {
        "step": 4,
        "title": "Avoid Backward Jump",
        "text": "Use Math.max(left, map.get(c) + 1) because map may contain characters before left."
      },
      {
        "step": 5,
        "title": "Complexity",
        "text": "Time: O(n). Space: O(min(m, n)) where m is charset size."
      }
    ],
    "testCases": [
      {
        "input": "abcabcbb",
        "expected": 3,
        "isHidden": false
      },
      {
        "input": "bbbbb",
        "expected": 1,
        "isHidden": false
      },
      {
        "input": "pwwkew",
        "expected": 3,
        "isHidden": false
      },
      {
        "input": "",
        "expected": 0,
        "isHidden": true
      },
      {
        "input": "abba",
        "expected": 2,
        "isHidden": true
      }
    ]
  },
  {
    "id": "two-sum-ii-input-array-is-sorted",
    "slug": "two-sum-ii-input-array-is-sorted",
    "title": "Two Sum II - Input Array Is Sorted",
    "difficulty": "Medium",
    "topic": "Arrays & Two Pointers",
    "dataStructures": [
      "Array"
    ],
    "patterns": [
      "Two Pointers",
      "Binary Search"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Apple",
      "Microsoft",
      "Meta"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/pair-in-an-array-with-given-sum/1",
    "description": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.\n\nReturn the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.\n\nThe tests are generated such that there is exactly one solution. You may not use the same element twice.\n\nYour solution must use only constant extra space O(1).",
    "constraints": [
      "2 <= numbers.length <= 3 * 10^4",
      "-1000 <= numbers[i] <= 1000",
      "numbers is sorted in non-decreasing order.",
      "-1000 <= target <= 1000",
      "The tests are generated such that there is exactly one solution."
    ],
    "examples": [
      {
        "input": "numbers = [2, 7, 11, 15], target = 9",
        "output": "[1, 2]",
        "explanation": "The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]."
      },
      {
        "input": "numbers = [2, 3, 4], target = 6",
        "output": "[1, 3]",
        "explanation": "The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3]."
      },
      {
        "input": "numbers = [-1, 0], target = -1",
        "output": "[1, 2]",
        "explanation": "The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2]."
      }
    ],
    "methodMeta": {
      "methodName": "twoSum",
      "returnType": "int[]",
      "paramTypes": [
        "int[]",
        "int"
      ]
    },
    "starterCode": "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        // Apply Two Pointers technique on sorted array\n        \n        return new int[]{};\n    }\n}",
    "solution": "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int left = 0, right = numbers.length - 1;\n        while (left < right) {\n            int sum = numbers[left] + numbers[right];\n            if (sum == target) {\n                return new int[]{left + 1, right + 1};\n            } else if (sum < target) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        return new int[]{};\n    }\n}",
    "hints": [
      "Hint 1: The array is already sorted in non-decreasing order. How can we take advantage of this monotonicity?",
      "Hint 2: Initialize two pointers: left = 0 and right = numbers.length - 1. Calculate sum = numbers[left] + numbers[right].",
      "Hint 3: If sum == target, return [left + 1, right + 1] (note 1-based indexing). If sum < target, increment left. If sum > target, decrement right."
    ],
    "approaches": [
      {
        "name": "Approach 1: Brute Force (Nested Loops)",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "explanation": "Check all pairs numbers[i] and numbers[j] using two nested loops. While O(1) space, this fails with Time Limit Exceeded for n up to 30,000.",
        "code": "public int[] twoSum(int[] numbers, int target) {\n    int n = numbers.length;\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            if (numbers[i] + numbers[j] == target) {\n                return new int[]{i + 1, j + 1};\n            }\n        }\n    }\n    return new int[]{};\n}"
      },
      {
        "name": "Approach 2: Binary Search for Complement",
        "timeComplexity": "O(n log n)",
        "spaceComplexity": "O(1)",
        "explanation": "For each element numbers[i], use binary search on numbers[i+1..n-1] to find (target - numbers[i]).",
        "code": "public int[] twoSum(int[] numbers, int target) {\n    for (int i = 0; i < numbers.length; i++) {\n        int complement = target - numbers[i];\n        int low = i + 1, high = numbers.length - 1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (numbers[mid] == complement) return new int[]{i + 1, mid + 1};\n            else if (numbers[mid] < complement) low = mid + 1;\n            else high = mid - 1;\n        }\n    }\n    return new int[]{};\n}"
      },
      {
        "name": "Approach 3: Optimal Two Pointers (In-Place O(1) Space)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "whyBetter": "Capitalizes on sorted monotonicity to prune the search space in a single linear pass with zero memory overhead.",
        "explanation": "Start pointers at opposite ends. Since the array is sorted, incrementing left increases the sum, and decrementing right decreases the sum.",
        "code": "public int[] twoSum(int[] numbers, int target) {\n    int left = 0, right = numbers.length - 1;\n    while (left < right) {\n        int sum = numbers[left] + numbers[right];\n        if (sum == target) {\n            return new int[]{left + 1, right + 1};\n        } else if (sum < target) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    return new int[]{};\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Understand",
        "text": "Find two elements that add up to target in a 1-indexed sorted array. Return 1-based indices."
      },
      {
        "step": 2,
        "title": "Pattern",
        "text": "Two Pointers on sorted array moving inwards."
      },
      {
        "step": 3,
        "title": "Pointers",
        "text": "left = 0, right = numbers.length - 1."
      },
      {
        "step": 4,
        "title": "Invariant",
        "text": "If sum < target, left++. If sum > target, right--. If sum == target, found!"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            7,
            11,
            15
          ],
          9
        ],
        "expected": [
          1,
          2
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            2,
            3,
            4
          ],
          6
        ],
        "expected": [
          1,
          3
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            -1,
            0
          ],
          -1
        ],
        "expected": [
          1,
          2
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            4,
            9,
            56,
            90
          ],
          8
        ],
        "expected": [
          4,
          5
        ],
        "isHidden": true
      }
    ]
  },
  {
    "id": "container-with-most-water",
    "slug": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "topic": "Arrays & Two Pointers",
    "dataStructures": [
      "Array"
    ],
    "patterns": [
      "Two Pointers",
      "Greedy Algorithms"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Apple",
      "Meta",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/container-with-most-water--170647/1",
    "description": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.\n\nNotice that you may not slant the container.",
    "constraints": [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "The vertical lines are at indices 1 and 8 with heights 8 and 7. The width is 8 - 1 = 7. Water = 7 * min(8, 7) = 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1",
        "explanation": "Width is 1, min height is 1. Water = 1."
      }
    ],
    "methodMeta": {
      "methodName": "maxArea",
      "returnType": "int",
      "paramTypes": [
        "int[]"
      ]
    },
    "starterCode": "class Solution {\n    public int maxArea(int[] height) {\n        // Two Pointers moving inward based on shorter height\n        \n        return 0;\n    }\n}",
    "solution": "class Solution {\n    public int maxArea(int[] height) {\n        int max = 0;\n        int left = 0, right = height.length - 1;\n        while (left < right) {\n            int h = Math.min(height[left], height[right]);\n            max = Math.max(max, h * (right - left));\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        return max;\n    }\n}",
    "hints": [
      "Hint 1: The area is constrained by the shorter of the two lines: area = min(height[left], height[right]) * (right - left).",
      "Hint 2: Start with the widest possible container: left = 0, right = height.length - 1.",
      "Hint 3: Moving the taller line inward can never increase the area (width decreases and height is bounded by the shorter line). Therefore, always move the pointer pointing to the shorter line!"
    ],
    "approaches": [
      {
        "name": "Approach 1: Brute Force",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "explanation": "Check all possible pairs (i, j) and calculate area = (j - i) * min(height[i], height[j]).",
        "code": "public int maxArea(int[] height) {\n    int max = 0;\n    for (int i = 0; i < height.length; i++) {\n        for (int j = i + 1; j < height.length; j++) {\n            max = Math.max(max, (j - i) * Math.min(height[i], height[j]));\n        }\n    }\n    return max;\n}"
      },
      {
        "name": "Approach 2: Two Pointers (Optimal)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "whyBetter": "Prunes unnecessary pairs greedily by always advancing the bottleneck (shorter line), reducing O(n²) to a single O(n) pass.",
        "explanation": "Pointers start at boundaries. Calculate area, then increment left if height[left] < height[right] else decrement right.",
        "code": "public int maxArea(int[] height) {\n    int max = 0, left = 0, right = height.length - 1;\n    while (left < right) {\n        int h = Math.min(height[left], height[right]);\n        max = Math.max(max, h * (right - left));\n        if (height[left] < height[right]) left++;\n        else right--;\n    }\n    return max;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Understand",
        "text": "Find maximum rectangle area between any two bars where width = j - i and height = min(h[i], h[j])."
      },
      {
        "step": 2,
        "title": "Pointers",
        "text": "Initialize left = 0, right = n - 1."
      },
      {
        "step": 3,
        "title": "Greedy Choice",
        "text": "Advance whichever pointer is shorter, because keeping the shorter line cannot yield a larger area with smaller width."
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        ],
        "expected": 49,
        "isHidden": false
      },
      {
        "input": [
          [
            1,
            1
          ]
        ],
        "expected": 1,
        "isHidden": false
      },
      {
        "input": [
          [
            4,
            3,
            2,
            1,
            4
          ]
        ],
        "expected": 16,
        "isHidden": true
      }
    ]
  },
  {
    "id": "3sum",
    "slug": "3sum",
    "title": "3Sum",
    "difficulty": "Medium",
    "topic": "Arrays & Two Pointers",
    "dataStructures": [
      "Array"
    ],
    "patterns": [
      "Two Pointers",
      "Sorting"
    ],
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft",
      "Apple",
      "Google"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/3sum/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1",
    "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n\nNotice that the solution set must not contain duplicate triplets.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. Distinct triplets are [-1,0,1] and [-1,-1,2]."
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "explanation": "The only possible triplet does not sum up to 0."
      }
    ],
    "methodMeta": {
      "methodName": "threeSum",
      "returnType": "List<List<Integer>>",
      "paramTypes": [
        "int[]"
      ]
    },
    "starterCode": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Sort array and use Two Pointers for each fixed element\n        \n        return new ArrayList<>();\n    }\n}",
    "solution": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++;\n                    r--;\n                } else if (sum < 0) {\n                    l++;\n                } else {\n                    r--;\n                }\n            }\n        }\n        return res;\n    }\n}",
    "hints": [
      "Hint 1: Sorting the array first allows us to skip duplicate triplets easily and use Two Pointers in O(n) for each fixed element.",
      "Hint 2: Iterate i from 0 to n-3. If i > 0 and nums[i] == nums[i-1], continue to avoid duplicate triplets.",
      "Hint 3: For each fixed nums[i], set target = -nums[i]. Run Two Pointers with left = i+1 and right = n-1."
    ],
    "approaches": [
      {
        "name": "Approach 1: Brute Force with Set",
        "timeComplexity": "O(n³)",
        "spaceComplexity": "O(n)",
        "explanation": "Check all triplets with 3 nested loops and store sorted triplets in a HashSet to remove duplicates.",
        "code": "public List<List<Integer>> threeSum(int[] nums) {\n    Set<List<Integer>> set = new HashSet<>();\n    int n = nums.length;\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            for (int k = j + 1; k < n; k++) {\n                if (nums[i] + nums[j] + nums[k] == 0) {\n                    List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);\n                    Collections.sort(triplet);\n                    set.add(triplet);\n                }\n            }\n        }\n    }\n    return new ArrayList<>(set);\n}"
      },
      {
        "name": "Approach 2: Sort + Two Pointers (Optimal)",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)*",
        "whyBetter": "Reduces runtime from cubic O(n³) to quadratic O(n²) while avoiding heavy HashSet duplicate hashing.",
        "explanation": "Sort array in O(n log n). For each fixed nums[i], run Two Pointers from i+1 to n-1. Skip duplicates with while loops.",
        "code": "public List<List<Integer>> threeSum(int[] nums) {\n    Arrays.sort(nums);\n    List<List<Integer>> res = new ArrayList<>();\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] == nums[i - 1]) continue;\n        int l = i + 1, r = nums.length - 1;\n        while (l < r) {\n            int sum = nums[i] + nums[l] + nums[r];\n            if (sum == 0) {\n                res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                while (l < r && nums[l] == nums[l + 1]) l++;\n                while (l < r && nums[r] == nums[r - 1]) r--;\n                l++; r--;\n            } else if (sum < 0) l++;\n            else r--;\n        }\n    }\n    return res;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Sort",
        "text": "Sort nums so elements are in ascending order."
      },
      {
        "step": 2,
        "title": "Outer Loop",
        "text": "Fix nums[i], skip if nums[i] == nums[i-1]."
      },
      {
        "step": 3,
        "title": "Two Pointers",
        "text": "Find pair summing to -nums[i] using left and right pointers."
      }
    ],
    "testCases": [
      {
        "input": [
          [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        ],
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ],
        "isHidden": false
      },
      {
        "input": [
          [
            0,
            1,
            1
          ]
        ],
        "expected": [],
        "isHidden": false
      },
      {
        "input": [
          [
            0,
            0,
            0
          ]
        ],
        "expected": [
          [
            0,
            0,
            0
          ]
        ],
        "isHidden": false
      }
    ]
  },
  {
    "id": "trapping-rain-water",
    "slug": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "topic": "Arrays & Two Pointers",
    "dataStructures": [
      "Array"
    ],
    "patterns": [
      "Two Pointers",
      "Monotonic Stack",
      "Dynamic Programming (1D)"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Goldman Sachs",
      "Meta",
      "Bloomberg"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "constraints": [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The elevation map traps 6 units of rain water."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "explanation": "The elevation map traps 9 units of rain water."
      }
    ],
    "methodMeta": {
      "methodName": "trap",
      "returnType": "int",
      "paramTypes": [
        "int[]"
      ]
    },
    "starterCode": "class Solution {\n    public int trap(int[] height) {\n        // Two Pointers tracking leftMax and rightMax\n        \n        return 0;\n    }\n}",
    "solution": "class Solution {\n    public int trap(int[] height) {\n        int left = 0, right = height.length - 1;\n        int leftMax = 0, rightMax = 0, total = 0;\n        while (left < right) {\n            if (height[left] <= height[right]) {\n                if (height[left] >= leftMax) leftMax = height[left];\n                else total += leftMax - height[left];\n                left++;\n            } else {\n                if (height[right] >= rightMax) rightMax = height[right];\n                else total += rightMax - height[right];\n                right--;\n            }\n        }\n        return total;\n    }\n}",
    "hints": [
      "Hint 1: At any index i, the water trapped is min(maxLeft, maxRight) - height[i].",
      "Hint 2: We can precompute prefix max and suffix max in O(n) space.",
      "Hint 3: Even better: use Two Pointers. If height[left] <= height[right], water trapped at left depends only on leftMax because we know rightMax >= height[right] >= height[left]!"
    ],
    "approaches": [
      {
        "name": "Approach 1: Prefix & Suffix Arrays (DP)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "explanation": "Precompute leftMax[i] and rightMax[i] arrays, then compute water at each bar.",
        "code": "public int trap(int[] height) {\n    int n = height.length;\n    if (n == 0) return 0;\n    int[] leftMax = new int[n], rightMax = new int[n];\n    leftMax[0] = height[0];\n    for (int i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i - 1], height[i]);\n    rightMax[n - 1] = height[n - 1];\n    for (int i = n - 2; i >= 0; i--) rightMax[i] = Math.max(rightMax[i + 1], height[i]);\n    int water = 0;\n    for (int i = 0; i < n; i++) water += Math.min(leftMax[i], rightMax[i]) - height[i];\n    return water;\n}"
      },
      {
        "name": "Approach 2: Two Pointers (Optimal O(1) Space)",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "whyBetter": "Eliminates O(n) prefix/suffix memory arrays by maintaining running leftMax and rightMax variables.",
        "explanation": "Iterate pointers inward. If height[left] <= height[right], evaluate water at left using leftMax; otherwise at right using rightMax.",
        "code": "public int trap(int[] height) {\n    int l = 0, r = height.length - 1;\n    int leftMax = 0, rightMax = 0, water = 0;\n    while (l < r) {\n        if (height[l] <= height[r]) {\n            if (height[l] >= leftMax) leftMax = height[l];\n            else water += leftMax - height[l];\n            l++;\n        } else {\n            if (height[r] >= rightMax) rightMax = height[r];\n            else water += rightMax - height[r];\n            r--;\n        }\n    }\n    return water;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Water Formula",
        "text": "water[i] = max(0, min(maxLeft, maxRight) - h[i])."
      },
      {
        "step": 2,
        "title": "Two Pointers",
        "text": "Maintain left and right pointers moving inward."
      },
      {
        "step": 3,
        "title": "Update Max",
        "text": "Update leftMax or rightMax and add trapped water."
      }
    ],
    "testCases": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            1,
            0,
            1,
            3,
            2,
            1,
            2,
            1
          ]
        ],
        "expected": 6,
        "isHidden": false
      },
      {
        "input": [
          [
            4,
            2,
            0,
            3,
            2,
            5
          ]
        ],
        "expected": 9,
        "isHidden": false
      }
    ]
  },
  {
    "id": "binary-search",
    "slug": "binary-search",
    "title": "Binary Search",
    "difficulty": "Easy",
    "topic": "Searching & Binary Search",
    "dataStructures": [
      "Array"
    ],
    "patterns": [
      "Binary Search"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "leetcodeUrl": "https://leetcode.com/problems/binary-search/",
    "gfgUrl": "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1",
    "description": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-10^4 < nums[i], target < 10^4",
      "All the integers in nums are unique.",
      "nums is sorted in ascending order."
    ],
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "explanation": "9 exists in nums and its index is 4."
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1",
        "explanation": "2 does not exist in nums so return -1."
      }
    ],
    "methodMeta": {
      "methodName": "search",
      "returnType": "int",
      "paramTypes": [
        "int[]",
        "int"
      ]
    },
    "starterCode": "class Solution {\n    public int search(int[] nums, int target) {\n        // Implement O(log n) Binary Search\n        \n        return -1;\n    }\n}",
    "solution": "class Solution {\n    public int search(int[] nums, int target) {\n        int low = 0, high = nums.length - 1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (nums[mid] == target) return mid;\n            else if (nums[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n}",
    "hints": [
      "Hint 1: Use low = 0 and high = nums.length - 1.",
      "Hint 2: Calculate mid = low + (high - low) / 2 to avoid integer overflow.",
      "Hint 3: If nums[mid] == target, return mid. If nums[mid] < target, low = mid + 1. If nums[mid] > target, high = mid - 1."
    ],
    "approaches": [
      {
        "name": "Approach 1: Linear Search",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "explanation": "Iterate from index 0 to n-1 comparing nums[i] == target.",
        "code": "public int search(int[] nums, int target) {\n    for (int i = 0; i < nums.length; i++) {\n        if (nums[i] == target) return i;\n    }\n    return -1;\n}"
      },
      {
        "name": "Approach 2: Binary Search (Optimal)",
        "timeComplexity": "O(log n)",
        "spaceComplexity": "O(1)",
        "whyBetter": "Divides search space in half at each iteration, completing in at most log2(10000) ≈ 14 iterations.",
        "explanation": "Maintain low and high pointers. Halve the search interval on each comparison.",
        "code": "public int search(int[] nums, int target) {\n    int low = 0, high = nums.length - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}"
      }
    ],
    "stepByStep": [
      {
        "step": 1,
        "title": "Initialize",
        "text": "low = 0, high = n - 1."
      },
      {
        "step": 2,
        "title": "Midpoint",
        "text": "mid = low + (high - low) / 2."
      },
      {
        "step": 3,
        "title": "Branch",
        "text": "If nums[mid] == target, return mid. If less, low = mid + 1; if more, high = mid - 1."
      }
    ],
    "testCases": [
      {
        "input": [
          [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          9
        ],
        "expected": 4,
        "isHidden": false
      },
      {
        "input": [
          [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          2
        ],
        "expected": -1,
        "isHidden": false
      },
      {
        "input": [
          [
            5
          ],
          5
        ],
        "expected": 0,
        "isHidden": false
      }
    ]
  }
];
