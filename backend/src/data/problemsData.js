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
  }
];
