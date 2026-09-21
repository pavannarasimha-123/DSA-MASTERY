/**
 * Static code analyzer for Java DSA submissions.
 * Analyzes time complexity, space complexity, anti-patterns, and code structure.
 */
export function analyzeJavaCode(code) {
  if (!code || typeof code !== "string") {
    return {
      estimatedTimeComplexity: "Unknown",
      estimatedSpaceComplexity: "Unknown",
      observations: [],
      warnings: [],
      score: 50
    };
  }

  const observations = [];
  const warnings = [];
  let estimatedTime = "O(1)";
  let estimatedSpace = "O(1)";
  let score = 90;

  // 1. Check for Integer Overflow in midpoint calculations
  const midpointRegex = /\((\w+)\s*\+\s*(\w+)\)\s*\/\s*2/g;
  if (midpointRegex.test(code)) {
    warnings.push({
      type: "INTEGER_OVERFLOW_RISK",
      severity: "medium",
      message: "Potential Integer Overflow: Using '(low + high) / 2' can overflow when 'low + high > Integer.MAX_VALUE'. Prefer 'low + (high - low) / 2'."
    });
    score -= 10;
  }

  // 2. Check for String concatenation in loops (O(n^2) allocations)
  const loopStringConcat = /(?:for|while)\s*\([^)]*\)\s*\{[^}]*\b\w+\s*\+=\s*[^;]+;/s;
  if (loopStringConcat.test(code) && !code.includes("StringBuilder")) {
    warnings.push({
      type: "INEFFICIENT_STRING_CONCAT",
      severity: "high",
      message: "String concatenation '+=' inside loops creates new String objects on every iteration resulting in O(n²) string copy overhead. Use 'StringBuilder' instead."
    });
    score -= 15;
  }

  // 3. Check for ArrayList.contains() inside a loop
  const listContainsInsideLoop = /(?:for|while)\s*\([^)]*\)\s*\{[^}]*\b(\w+)\.contains\(/s;
  if (listContainsInsideLoop.test(code) && (code.includes("List<") || code.includes("ArrayList<"))) {
    warnings.push({
      type: "QUADRATIC_SEARCH_IN_LOOP",
      severity: "high",
      message: "Calling 'list.contains()' inside a loop causes O(n) search per iteration, leading to O(n²) overall time. Use a 'HashSet' for O(1) average lookup."
    });
    score -= 20;
  }

  // 4. Nested Loops & Time Complexity Estimation
  const loopCountMatches = code.match(/\b(for|while)\b/g);
  const totalLoops = loopCountMatches ? loopCountMatches.length : 0;

  // Check 3 nested loops
  const tripleNested = /\b(for|while)\s*\([^)]*\)\s*\{[^{}]*\b(for|while)\s*\([^)]*\)\s*\{[^{}]*\b(for|while)\s*\(/;
  // Check 2 nested loops
  const doubleNested = /\b(for|while)\s*\([^)]*\)\s*\{[^{}]*\b(for|while)\s*\(/;
  // Check Binary search pattern
  const isBinarySearch = /\bwhile\s*\(\s*\w+\s*<=\s*\w+\s*\)/.test(code) &&
    (code.includes("/ 2") || code.includes(">>> 1") || code.includes(">> 1"));
  // Check Sort usage
  const usesSorting = /\b(Arrays\.sort|Collections\.sort)\b/.test(code);
  // Check Recursion
  const methodNameMatch = code.match(/public\s+[\w<>[\]]+\s+(\w+)\s*\(/);
  const methodName = methodNameMatch ? methodNameMatch[1] : null;
  const isRecursive = methodName && new RegExp(`\\b${methodName}\\s*\\(`).test(code.slice(code.indexOf(methodName) + methodName.length));

  if (tripleNested.test(code)) {
    estimatedTime = "O(n³)";
    observations.push("Detected 3 nested loops over the data set, indicating cubic O(n³) runtime.");
    score -= 25;
  } else if (doubleNested.test(code)) {
    estimatedTime = "O(n²)";
    observations.push("Detected nested loops over elements, resulting in quadratic O(n²) time complexity.");
    score -= 15;
  } else if (usesSorting && totalLoops > 0) {
    estimatedTime = "O(n log n)";
    observations.push("Employs sorting (O(n log n)) followed by linear traversal (O(n)). Overall time dominated by O(n log n).");
  } else if (usesSorting) {
    estimatedTime = "O(n log n)";
    observations.push("Applies comparison-based sorting (Dual-Pivot Quicksort / TimSort), operating in O(n log n) time.");
  } else if (isBinarySearch) {
    estimatedTime = "O(log n)";
    observations.push("Recognized binary search pattern with iterative space halving, operating in logarithmic O(log n) time.");
  } else if (isRecursive) {
    const hasMemo = /memo|dp\[|cache/i.test(code);
    if (hasMemo) {
      estimatedTime = "O(n)";
      observations.push("Recursion with memoization detected; overlapping subproblems are cached, reducing exponential tree to O(n) states.");
    } else {
      estimatedTime = "O(2ⁿ)";
      warnings.push({
        type: "EXPONENTIAL_RECURSION",
        severity: "medium",
        message: "Recursive branching without memoization detected. Risk of exponential O(2ⁿ) call tree."
      });
      score -= 20;
    }
  } else if (totalLoops === 1) {
    estimatedTime = "O(n)";
    observations.push("Single linear traversal over input elements yielding optimal O(n) time.");
  } else if (totalLoops > 1) {
    estimatedTime = "O(n)";
    observations.push("Multiple sequential passes over elements, resulting in O(k · n) = O(n) linear complexity.");
  } else {
    estimatedTime = "O(1)";
    observations.push("No iterative loops or recursive invocations detected; constant O(1) runtime.");
  }

  // 5. Space Complexity Estimation
  const uses2DArray = /\b\w+\[\]\[\]\b|\bnew\s+\w+\[[^\]]+\]\[[^\]]+\]/.test(code);
  const usesMap = /\b(HashMap|TreeMap|LinkedHashMap|Map<)\b/.test(code);
  const usesSet = /\b(HashSet|TreeSet|LinkedHashSet|Set<)\b/.test(code);
  const usesList = /\b(ArrayList|LinkedList|List<)\b/.test(code);
  const usesQueue = /\b(PriorityQueue|ArrayDeque|Queue<|Deque<)\b/.test(code);

  if (uses2DArray) {
    estimatedSpace = "O(n · m) or O(n²)";
    observations.push("Allocates a 2D matrix or grid for state/memoization.");
  } else if (usesMap || usesSet || usesList || usesQueue) {
    estimatedSpace = "O(n)";
    observations.push("Allocates dynamic auxiliary data structures proportional to the input size.");
  } else if (isRecursive) {
    estimatedSpace = "O(n) call stack";
    observations.push("Auxiliary space dominated by recursion call stack frames.");
  } else {
    estimatedSpace = "O(1)";
    observations.push("Only constant scalar variables maintained; auxiliary space is O(1).");
  }

  return {
    estimatedTimeComplexity: estimatedTime,
    estimatedSpaceComplexity: estimatedSpace,
    observations,
    warnings,
    score: Math.max(10, Math.min(100, score))
  };
}
