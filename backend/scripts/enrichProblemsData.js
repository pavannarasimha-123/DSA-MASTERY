import fs from "fs";
import path from "path";
import { PROBLEMS_DATA } from "../src/data/problemsData.js";

// Add Two Sum II - Input Array Is Sorted and other top problems with exact descriptions and target parameters
const NEW_PROBLEMS = [
  {
    id: "two-sum-ii-input-array-is-sorted",
    slug: "two-sum-ii-input-array-is-sorted",
    title: "Two Sum II - Input Array Is Sorted",
    difficulty: "Medium",
    topic: "Arrays & Two Pointers",
    dataStructures: ["Array"],
    patterns: ["Two Pointers", "Binary Search"],
    companies: ["Amazon", "Google", "Apple", "Microsoft", "Meta"],
    leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    gfgUrl: "https://www.geeksforgeeks.org/problems/pair-in-an-array-with-given-sum/1",
    description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space O(1).`,
    constraints: [
      "2 <= numbers.length <= 3 * 10^4",
      "-1000 <= numbers[i] <= 1000",
      "numbers is sorted in non-decreasing order.",
      "-1000 <= target <= 1000",
      "The tests are generated such that there is exactly one solution."
    ],
    examples: [
      {
        input: "numbers = [2, 7, 11, 15], target = 9",
        output: "[1, 2]",
        explanation: "The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]."
      },
      {
        input: "numbers = [2, 3, 4], target = 6",
        output: "[1, 3]",
        explanation: "The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3]."
      },
      {
        input: "numbers = [-1, 0], target = -1",
        output: "[1, 2]",
        explanation: "The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2]."
      }
    ],
    methodMeta: {
      methodName: "twoSum",
      returnType: "int[]",
      paramTypes: ["int[]", "int"]
    },
    starterCode: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Apply Two Pointers technique on sorted array
        
        return new int[]{};
    }
}`,
    solution: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[]{};
    }
}`,
    hints: [
      "Hint 1: The array is already sorted in non-decreasing order. How can we take advantage of this monotonicity?",
      "Hint 2: Initialize two pointers: left = 0 and right = numbers.length - 1. Calculate sum = numbers[left] + numbers[right].",
      "Hint 3: If sum == target, return [left + 1, right + 1] (note 1-based indexing). If sum < target, increment left. If sum > target, decrement right."
    ],
    approaches: [
      {
        name: "Approach 1: Brute Force (Nested Loops)",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        explanation: "Check all pairs numbers[i] and numbers[j] using two nested loops. While O(1) space, this fails with Time Limit Exceeded for n up to 30,000.",
        code: `public int[] twoSum(int[] numbers, int target) {
    int n = numbers.length;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (numbers[i] + numbers[j] == target) {
                return new int[]{i + 1, j + 1};
            }
        }
    }
    return new int[]{};
}`
      },
      {
        name: "Approach 2: Binary Search for Complement",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        explanation: "For each element numbers[i], use binary search on numbers[i+1..n-1] to find (target - numbers[i]).",
        code: `public int[] twoSum(int[] numbers, int target) {
    for (int i = 0; i < numbers.length; i++) {
        int complement = target - numbers[i];
        int low = i + 1, high = numbers.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (numbers[mid] == complement) return new int[]{i + 1, mid + 1};
            else if (numbers[mid] < complement) low = mid + 1;
            else high = mid - 1;
        }
    }
    return new int[]{};
}`
      },
      {
        name: "Approach 3: Optimal Two Pointers (In-Place O(1) Space)",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        whyBetter: "Capitalizes on sorted monotonicity to prune the search space in a single linear pass with zero memory overhead.",
        explanation: "Start pointers at opposite ends. Since the array is sorted, incrementing left increases the sum, and decrementing right decreases the sum.",
        code: `public int[] twoSum(int[] numbers, int target) {
    int left = 0, right = numbers.length - 1;
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            return new int[]{left + 1, right + 1};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return new int[]{};
}`
      }
    ],
    stepByStep: [
      { step: 1, title: "Understand", text: "Find two elements that add up to target in a 1-indexed sorted array. Return 1-based indices." },
      { step: 2, title: "Pattern", text: "Two Pointers on sorted array moving inwards." },
      { step: 3, title: "Pointers", text: "left = 0, right = numbers.length - 1." },
      { step: 4, title: "Invariant", text: "If sum < target, left++. If sum > target, right--. If sum == target, found!" }
    ],
    testCases: [
      {
        input: [[2, 7, 11, 15], 9],
        expected: [1, 2],
        isHidden: false
      },
      {
        input: [[2, 3, 4], 6],
        expected: [1, 3],
        isHidden: false
      },
      {
        input: [[-1, 0], -1],
        expected: [1, 2],
        isHidden: false
      },
      {
        input: [[1, 2, 3, 4, 4, 9, 56, 90], 8],
        expected: [4, 5],
        isHidden: true
      }
    ]
  },
  {
    id: "container-with-most-water",
    slug: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Arrays & Two Pointers",
    dataStructures: ["Array"],
    patterns: ["Two Pointers", "Greedy Algorithms"],
    companies: ["Google", "Amazon", "Apple", "Meta", "Bloomberg"],
    leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
    gfgUrl: "https://www.geeksforgeeks.org/problems/container-with-most-water--170647/1",
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.`,
    constraints: [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation: "The vertical lines are at indices 1 and 8 with heights 8 and 7. The width is 8 - 1 = 7. Water = 7 * min(8, 7) = 49."
      },
      {
        input: "height = [1,1]",
        output: "1",
        explanation: "Width is 1, min height is 1. Water = 1."
      }
    ],
    methodMeta: {
      methodName: "maxArea",
      returnType: "int",
      paramTypes: ["int[]"]
    },
    starterCode: `class Solution {
    public int maxArea(int[] height) {
        // Two Pointers moving inward based on shorter height
        
        return 0;
    }
}`,
    solution: `class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        int left = 0, right = height.length - 1;
        while (left < right) {
            int h = Math.min(height[left], height[right]);
            max = Math.max(max, h * (right - left));
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}`,
    hints: [
      "Hint 1: The area is constrained by the shorter of the two lines: area = min(height[left], height[right]) * (right - left).",
      "Hint 2: Start with the widest possible container: left = 0, right = height.length - 1.",
      "Hint 3: Moving the taller line inward can never increase the area (width decreases and height is bounded by the shorter line). Therefore, always move the pointer pointing to the shorter line!"
    ],
    approaches: [
      {
        name: "Approach 1: Brute Force",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        explanation: "Check all possible pairs (i, j) and calculate area = (j - i) * min(height[i], height[j]).",
        code: `public int maxArea(int[] height) {
    int max = 0;
    for (int i = 0; i < height.length; i++) {
        for (int j = i + 1; j < height.length; j++) {
            max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
        }
    }
    return max;
}`
      },
      {
        name: "Approach 2: Two Pointers (Optimal)",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        whyBetter: "Prunes unnecessary pairs greedily by always advancing the bottleneck (shorter line), reducing O(n²) to a single O(n) pass.",
        explanation: "Pointers start at boundaries. Calculate area, then increment left if height[left] < height[right] else decrement right.",
        code: `public int maxArea(int[] height) {
    int max = 0, left = 0, right = height.length - 1;
    while (left < right) {
        int h = Math.min(height[left], height[right]);
        max = Math.max(max, h * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return max;
}`
      }
    ],
    stepByStep: [
      { step: 1, title: "Understand", text: "Find maximum rectangle area between any two bars where width = j - i and height = min(h[i], h[j])." },
      { step: 2, title: "Pointers", text: "Initialize left = 0, right = n - 1." },
      { step: 3, title: "Greedy Choice", text: "Advance whichever pointer is shorter, because keeping the shorter line cannot yield a larger area with smaller width." }
    ],
    testCases: [
      {
        input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
        expected: 49,
        isHidden: false
      },
      {
        input: [[1, 1]],
        expected: 1,
        isHidden: false
      },
      {
        input: [[4, 3, 2, 1, 4]],
        expected: 16,
        isHidden: true
      }
    ]
  },
  {
    id: "3sum",
    slug: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    topic: "Arrays & Two Pointers",
    dataStructures: ["Array"],
    patterns: ["Two Pointers", "Sorting"],
    companies: ["Meta", "Amazon", "Microsoft", "Apple", "Google"],
    leetcodeUrl: "https://leetcode.com/problems/3sum/",
    gfgUrl: "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1",
    description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.`,
    constraints: [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. Distinct triplets are [-1,0,1] and [-1,-1,2]."
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "The only possible triplet does not sum up to 0."
      }
    ],
    methodMeta: {
      methodName: "threeSum",
      returnType: "List<List<Integer>>",
      paramTypes: ["int[]"]
    },
    starterCode: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Sort array and use Two Pointers for each fixed element
        
        return new ArrayList<>();
    }
}`,
    solution: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}`,
    hints: [
      "Hint 1: Sorting the array first allows us to skip duplicate triplets easily and use Two Pointers in O(n) for each fixed element.",
      "Hint 2: Iterate i from 0 to n-3. If i > 0 and nums[i] == nums[i-1], continue to avoid duplicate triplets.",
      "Hint 3: For each fixed nums[i], set target = -nums[i]. Run Two Pointers with left = i+1 and right = n-1."
    ],
    approaches: [
      {
        name: "Approach 1: Brute Force with Set",
        timeComplexity: "O(n³)",
        spaceComplexity: "O(n)",
        explanation: "Check all triplets with 3 nested loops and store sorted triplets in a HashSet to remove duplicates.",
        code: `public List<List<Integer>> threeSum(int[] nums) {
    Set<List<Integer>> set = new HashSet<>();
    int n = nums.length;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            for (int k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                    Collections.sort(triplet);
                    set.add(triplet);
                }
            }
        }
    }
    return new ArrayList<>(set);
}`
      },
      {
        name: "Approach 2: Sort + Two Pointers (Optimal)",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)*",
        whyBetter: "Reduces runtime from cubic O(n³) to quadratic O(n²) while avoiding heavy HashSet duplicate hashing.",
        explanation: "Sort array in O(n log n). For each fixed nums[i], run Two Pointers from i+1 to n-1. Skip duplicates with while loops.",
        code: `public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int l = i + 1, r = nums.length - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                while (l < r && nums[l] == nums[l + 1]) l++;
                while (l < r && nums[r] == nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}`
      }
    ],
    stepByStep: [
      { step: 1, title: "Sort", text: "Sort nums so elements are in ascending order." },
      { step: 2, title: "Outer Loop", text: "Fix nums[i], skip if nums[i] == nums[i-1]." },
      { step: 3, title: "Two Pointers", text: "Find pair summing to -nums[i] using left and right pointers." }
    ],
    testCases: [
      {
        input: [[-1, 0, 1, 2, -1, -4]],
        expected: [[-1, -1, 2], [-1, 0, 1]],
        isHidden: false
      },
      {
        input: [[0, 1, 1]],
        expected: [],
        isHidden: false
      },
      {
        input: [[0, 0, 0]],
        expected: [[0, 0, 0]],
        isHidden: false
      }
    ]
  },
  {
    id: "trapping-rain-water",
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "Arrays & Two Pointers",
    dataStructures: ["Array"],
    patterns: ["Two Pointers", "Monotonic Stack", "Dynamic Programming (1D)"],
    companies: ["Amazon", "Google", "Goldman Sachs", "Meta", "Bloomberg"],
    leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/",
    gfgUrl: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    constraints: [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map traps 6 units of rain water."
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
        explanation: "The elevation map traps 9 units of rain water."
      }
    ],
    methodMeta: {
      methodName: "trap",
      returnType: "int",
      paramTypes: ["int[]"]
    },
    starterCode: `class Solution {
    public int trap(int[] height) {
        // Two Pointers tracking leftMax and rightMax
        
        return 0;
    }
}`,
    solution: `class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0, total = 0;
        while (left < right) {
            if (height[left] <= height[right]) {
                if (height[left] >= leftMax) leftMax = height[left];
                else total += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right];
                else total += rightMax - height[right];
                right--;
            }
        }
        return total;
    }
}`,
    hints: [
      "Hint 1: At any index i, the water trapped is min(maxLeft, maxRight) - height[i].",
      "Hint 2: We can precompute prefix max and suffix max in O(n) space.",
      "Hint 3: Even better: use Two Pointers. If height[left] <= height[right], water trapped at left depends only on leftMax because we know rightMax >= height[right] >= height[left]!"
    ],
    approaches: [
      {
        name: "Approach 1: Prefix & Suffix Arrays (DP)",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        explanation: "Precompute leftMax[i] and rightMax[i] arrays, then compute water at each bar.",
        code: `public int trap(int[] height) {
    int n = height.length;
    if (n == 0) return 0;
    int[] leftMax = new int[n], rightMax = new int[n];
    leftMax[0] = height[0];
    for (int i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    rightMax[n - 1] = height[n - 1];
    for (int i = n - 2; i >= 0; i--) rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    int water = 0;
    for (int i = 0; i < n; i++) water += Math.min(leftMax[i], rightMax[i]) - height[i];
    return water;
}`
      },
      {
        name: "Approach 2: Two Pointers (Optimal O(1) Space)",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        whyBetter: "Eliminates O(n) prefix/suffix memory arrays by maintaining running leftMax and rightMax variables.",
        explanation: "Iterate pointers inward. If height[left] <= height[right], evaluate water at left using leftMax; otherwise at right using rightMax.",
        code: `public int trap(int[] height) {
    int l = 0, r = height.length - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] >= leftMax) leftMax = height[l];
            else water += leftMax - height[l];
            l++;
        } else {
            if (height[r] >= rightMax) rightMax = height[r];
            else water += rightMax - height[r];
            r--;
        }
    }
    return water;
}`
      }
    ],
    stepByStep: [
      { step: 1, title: "Water Formula", text: "water[i] = max(0, min(maxLeft, maxRight) - h[i])." },
      { step: 2, title: "Two Pointers", text: "Maintain left and right pointers moving inward." },
      { step: 3, title: "Update Max", text: "Update leftMax or rightMax and add trapped water." }
    ],
    testCases: [
      {
        input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
        expected: 6,
        isHidden: false
      },
      {
        input: [[4, 2, 0, 3, 2, 5]],
        expected: 9,
        isHidden: false
      }
    ]
  },
  {
    id: "binary-search",
    slug: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    topic: "Searching & Binary Search",
    dataStructures: ["Array"],
    patterns: ["Binary Search"],
    companies: ["Google", "Amazon", "Microsoft", "Apple"],
    leetcodeUrl: "https://leetcode.com/problems/binary-search/",
    gfgUrl: "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1",
    description: `Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.`,
    constraints: [
      "1 <= nums.length <= 10^4",
      "-10^4 < nums[i], target < 10^4",
      "All the integers in nums are unique.",
      "nums is sorted in ascending order."
    ],
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4."
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "2 does not exist in nums so return -1."
      }
    ],
    methodMeta: {
      methodName: "search",
      returnType: "int",
      paramTypes: ["int[]", "int"]
    },
    starterCode: `class Solution {
    public int search(int[] nums, int target) {
        // Implement O(log n) Binary Search
        
        return -1;
    }
}`,
    solution: `class Solution {
    public int search(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}`,
    hints: [
      "Hint 1: Use low = 0 and high = nums.length - 1.",
      "Hint 2: Calculate mid = low + (high - low) / 2 to avoid integer overflow.",
      "Hint 3: If nums[mid] == target, return mid. If nums[mid] < target, low = mid + 1. If nums[mid] > target, high = mid - 1."
    ],
    approaches: [
      {
        name: "Approach 1: Linear Search",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        explanation: "Iterate from index 0 to n-1 comparing nums[i] == target.",
        code: `public int search(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] == target) return i;
    }
    return -1;
}`
      },
      {
        name: "Approach 2: Binary Search (Optimal)",
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
        whyBetter: "Divides search space in half at each iteration, completing in at most log2(10000) ≈ 14 iterations.",
        explanation: "Maintain low and high pointers. Halve the search interval on each comparison.",
        code: `public int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
      }
    ],
    stepByStep: [
      { step: 1, title: "Initialize", text: "low = 0, high = n - 1." },
      { step: 2, title: "Midpoint", text: "mid = low + (high - low) / 2." },
      { step: 3, title: "Branch", text: "If nums[mid] == target, return mid. If less, low = mid + 1; if more, high = mid - 1." }
    ],
    testCases: [
      {
        input: [[-1, 0, 3, 5, 9, 12], 9],
        expected: 4,
        isHidden: false
      },
      {
        input: [[-1, 0, 3, 5, 9, 12], 2],
        expected: -1,
        isHidden: false
      },
      {
        input: [[5], 5],
        expected: 0,
        isHidden: false
      }
    ]
  }
];

// Merge into PROBLEMS_DATA
const existingSlugs = new Set(PROBLEMS_DATA.map(p => p.slug));
for (const np of NEW_PROBLEMS) {
  if (!existingSlugs.has(np.slug)) {
    PROBLEMS_DATA.push(np);
  } else {
    const idx = PROBLEMS_DATA.findIndex(p => p.slug === np.slug);
    if (idx !== -1) PROBLEMS_DATA[idx] = np;
  }
}

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, "../src/data/problemsData.js");
fs.writeFileSync(targetPath, "export const PROBLEMS_DATA = " + JSON.stringify(PROBLEMS_DATA, null, 2) + ";\n", "utf8");
console.log("Successfully enriched problemsData.js with authentic problems!");
