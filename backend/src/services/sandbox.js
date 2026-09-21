import fs from "fs/promises";
import path from "path";
import os from "os";
import crypto from "crypto";
import { execFile } from "child_process";
import util from "util";

const execFileAsync = util.promisify(execFile);

// Dangerous patterns that violate sandboxing rules
const FORBIDDEN_PATTERNS = [
  /Runtime\.getRuntime\(\)/i,
  /ProcessBuilder/i,
  /System\.exit/i,
  /java\.lang\.reflect/i,
  /java\.net\./i,
  /java\.io\.File\b/i,
  /java\.io\.FileOutputStream/i,
  /java\.io\.FileInputStream/i,
  /java\.io\.RandomAccessFile/i,
  /java\.nio\.file\./i,
  /ClassLoader/i,
  /sun\.misc\.Unsafe/i,
  /System\.loadLibrary/i,
  /System\.load\(/i,
  /Thread\.sleep/i,
  /ForkJoinPool/i
];

export function validateCodeSafety(code) {
  if (!code || typeof code !== "string") {
    return { safe: false, error: "Empty or invalid code provided." };
  }

  for (const pattern of FORBIDDEN_PATTERNS) {
    if (pattern.test(code)) {
      return {
        safe: false,
        error: `Security Sandbox Violation: Usage of restricted API or pattern matching '${pattern.toString()}' is forbidden for security reasons.`
      };
    }
  }

  return { safe: true };
}

/**
 * Executes user Java code in an isolated directory with resource bounds.
 */
export async function runJavaSandbox({ code, testCases = [], problemMeta = {} }) {
  const safety = validateCodeSafety(code);
  if (!safety.safe) {
    return {
      status: "SECURITY_VIOLATION",
      error: safety.error,
      passedCount: 0,
      totalCount: testCases.length,
      testResults: []
    };
  }

  const runId = crypto.randomUUID();
  const sandboxDir = path.join(os.tmpdir(), "dsa_sandbox_" + runId);

  try {
    await fs.mkdir(sandboxDir, { recursive: true });

    // Prepare Solution.java
    // Check if user code declares a class or just the method
    let fullUserCode = code.trim();
    if (!fullUserCode.includes("class Solution")) {
      fullUserCode = `import java.util.*;\n\npublic class Solution {\n${fullUserCode}\n}`;
    } else {
      // Ensure it imports standard Java packages
      fullUserCode = `import java.util.*;\nimport java.math.*;\n\n${fullUserCode}`;
    }

    await fs.writeFile(path.join(sandboxDir, "Solution.java"), fullUserCode, "utf8");

    // Generate dynamic TestRunner
    const harnessCode = generateHarnessCode(testCases, problemMeta);
    await fs.writeFile(path.join(sandboxDir, "TestRunner.java"), harnessCode, "utf8");

    // Step 1: Compile with javac
    try {
      await execFileAsync("javac", ["-encoding", "UTF-8", "Solution.java", "TestRunner.java"], {
        cwd: sandboxDir,
        timeout: 6000,
        maxBuffer: 128 * 1024
      });
    } catch (compileErr) {
      const cleanError = (compileErr.stderr || compileErr.stdout || compileErr.message)
        .replace(new RegExp(sandboxDir.replace(/\\/g, "\\\\"), "g"), "")
        .trim();
      return {
        status: "COMPILATION_ERROR",
        error: cleanError,
        passedCount: 0,
        totalCount: testCases.length,
        testResults: []
      };
    }

    // Step 2: Run with java and strict resource constraints
    // Memory limit: 128MB, Execution timeout: 4000ms, Serial GC
    const startTime = Date.now();
    let runStdout = "";
    let runStderr = "";

    try {
      const { stdout, stderr } = await execFileAsync(
        "java",
        [
          "-Xmx128m",
          "-Xms32m",
          "-XX:+UseSerialGC",
          "-Dfile.encoding=UTF-8",
          "TestRunner"
        ],
        {
          cwd: sandboxDir,
          timeout: 4000,
          maxBuffer: 256 * 1024
        }
      );
      runStdout = stdout;
      runStderr = stderr;
    } catch (execErr) {
      const totalElapsed = Date.now() - startTime;
      if (execErr.killed || execErr.signal === "SIGTERM" || execErr.code === "ETIMEDOUT" || totalElapsed >= 4000) {
        return {
          status: "TIME_LIMIT_EXCEEDED",
          error: "Time Limit Exceeded (execution exceeded 4000ms). Check for infinite loops or high polynomial complexity.",
          executionTimeMs: 4000,
          passedCount: 0,
          totalCount: testCases.length,
          testResults: []
        };
      }

      const errText = (execErr.stderr || execErr.stdout || execErr.message).trim();
      if (errText.includes("OutOfMemoryError")) {
        return {
          status: "MEMORY_LIMIT_EXCEEDED",
          error: "Memory Limit Exceeded (limit 128MB). Avoid excessive allocations or large recursion stacks.",
          executionTimeMs: totalElapsed,
          passedCount: 0,
          totalCount: testCases.length,
          testResults: []
        };
      }

      return {
        status: "RUNTIME_ERROR",
        error: errText.replace(new RegExp(sandboxDir.replace(/\\/g, "\\\\"), "g"), ""),
        executionTimeMs: totalElapsed,
        passedCount: 0,
        totalCount: testCases.length,
        testResults: []
      };
    }

    // Step 3: Parse execution JSON output
    try {
      const jsonStart = runStdout.indexOf("===JSON_START===");
      const jsonEnd = runStdout.indexOf("===JSON_END===");
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const rawJson = runStdout.substring(jsonStart + 16, jsonEnd).trim();
        const parsed = JSON.parse(rawJson);
        return {
          status: parsed.allPassed ? "ACCEPTED" : "WRONG_ANSWER",
          passedCount: parsed.passedCount,
          totalCount: parsed.totalCount,
          executionTimeMs: parsed.maxTimeMs || (Date.now() - startTime),
          memoryUsedKB: parsed.memoryUsedKB || 0,
          testResults: parsed.testResults || [],
          stdout: runStdout.substring(0, jsonStart).trim()
        };
      }
      return {
        status: "OUTPUT_FORMAT_ERROR",
        error: "Runner did not produce standard evaluation markers. Raw output: " + runStdout.slice(0, 500),
        passedCount: 0,
        totalCount: testCases.length,
        testResults: []
      };
    } catch (parseErr) {
      return {
        status: "PARSING_ERROR",
        error: "Failed to parse test execution output: " + parseErr.message,
        passedCount: 0,
        totalCount: testCases.length,
        testResults: []
      };
    }

  } finally {
    // Ephemeral sandbox cleanup
    try {
      await fs.rm(sandboxDir, { recursive: true, force: true });
    } catch (_) {}
  }
}

/**
 * Builds TestRunner.java based on problem method signature and test cases.
 */
function generateHarnessCode(testCases, meta = {}) {
  const methodName = meta.methodName || "solve";
  const returnType = meta.returnType || "String";
  const paramTypes = meta.paramTypes || ["String"];

  // Prepare encoded test cases in JSON format for the Java test runner
  const sanitizedTests = testCases.map((tc, idx) => ({
    id: idx + 1,
    input: tc.input,
    expected: tc.expected,
    isHidden: !!tc.isHidden
  }));

  const jsonStr = JSON.stringify(sanitizedTests).replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  return `
import java.util.*;

public class TestRunner {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int passed = 0;
        int total = ${sanitizedTests.length};
        long maxTimeNanos = 0;
        long beforeMem = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
        
        List<String> resultJsons = new ArrayList<>();
        boolean allPassed = true;

        ${generateTestInvocations(sanitizedTests, meta)}

        long afterMem = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
        long memUsedKB = Math.max(0, (afterMem - beforeMem) / 1024);
        double maxTimeMs = maxTimeNanos / 1_000_000.0;

        StringBuilder sb = new StringBuilder();
        sb.append("===JSON_START===\\n");
        sb.append("{\\n");
        sb.append("  \\"allPassed\\": ").append(allPassed).append(",\\n");
        sb.append("  \\"passedCount\\": ").append(passed).append(",\\n");
        sb.append("  \\"totalCount\\": ").append(total).append(",\\n");
        sb.append("  \\"maxTimeMs\\": ").append(String.format(Locale.US, "%.2f", maxTimeMs)).append(",\\n");
        sb.append("  \\"memoryUsedKB\\": ").append(memUsedKB).append(",\\n");
        sb.append("  \\"testResults\\": [");
        for (int i = 0; i < resultJsons.size(); i++) {
            sb.append(resultJsons.get(i));
            if (i < resultJsons.size() - 1) sb.append(",");
        }
        sb.append("]\\n");
        sb.append("}\\n");
        sb.append("===JSON_END===");

        System.out.println(sb.toString());
    }

    private static String formatVal(Object obj) {
        if (obj == null) return "null";
        if (obj instanceof int[]) return Arrays.toString((int[]) obj);
        if (obj instanceof long[]) return Arrays.toString((long[]) obj);
        if (obj instanceof double[]) return Arrays.toString((double[]) obj);
        if (obj instanceof boolean[]) return Arrays.toString((boolean[]) obj);
        if (obj instanceof char[]) return Arrays.toString((char[]) obj);
        if (obj instanceof String[]) return Arrays.toString((String[]) obj);
        if (obj instanceof Object[]) return Arrays.deepToString((Object[]) obj);
        return String.valueOf(obj);
    }

    private static boolean areEqual(Object a, Object b) {
        if (a == null && b == null) return true;
        if (a == null || b == null) return false;
        if (a instanceof int[] && b instanceof int[]) {
            return Arrays.equals((int[]) a, (int[]) b);
        }
        if (a instanceof String[] && b instanceof String[]) {
            return Arrays.equals((String[]) a, (String[]) b);
        }
        if (a instanceof boolean[] && b instanceof boolean[]) {
            return Arrays.equals((boolean[]) a, (boolean[]) b);
        }
        if (a instanceof List && b instanceof List) {
            return a.equals(b);
        }
        return String.valueOf(a).trim().equals(String.valueOf(b).trim());
    }

    private static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\\\", "\\\\\\\\")
                .replace("\\"", "\\\\\\"")
                .replace("\\n", "\\\\n")
                .replace("\\r", "\\\\r")
                .replace("\\t", "\\\\t");
    }
}
`;
}

function generateTestInvocations(tests, meta) {
  const methodName = meta.methodName || "twoSum";

  return tests.map((t, idx) => {
    const isHidden = !!t.isHidden;
    const inputArgCode = formatInputsToJavaArgs(t.input, meta.paramTypes);
    const expectedJava = formatExpectedToJava(t.expected, meta.returnType);

    return `
        try {
            long t0 = System.nanoTime();
            Object actual = solution.${methodName}(${inputArgCode});
            long duration = System.nanoTime() - t0;
            if (duration > maxTimeNanos) maxTimeNanos = duration;

            Object expected = ${expectedJava};
            boolean isCorrect = areEqual(actual, expected);
            if (isCorrect) {
                passed++;
            } else {
                allPassed = false;
            }

            String resJson = "{\\"id\\":" + ${idx + 1} + 
              ", \\"passed\\":" + isCorrect + 
              ", \\"isHidden\\":" + ${isHidden} + 
              ", \\"executionMs\\":" + String.format(Locale.US, "%.3f", duration / 1000000.0) +
              ", \\"input\\":\\"" + escapeJson("${escapeForLiteral(JSON.stringify(t.input))}") + "\\"" +
              ", \\"expected\\":\\"" + escapeJson(formatVal(expected)) + "\\"" +
              ", \\"actual\\":\\"" + escapeJson(formatVal(actual)) + "\\"" +
              "}";
            resultJsons.add(resJson);
        } catch (Exception ex) {
            allPassed = false;
            String resJson = "{\\"id\\":" + ${idx + 1} + 
              ", \\"passed\\":false" + 
              ", \\"isHidden\\":" + ${isHidden} + 
              ", \\"error\\":\\"" + escapeJson(ex.getClass().getSimpleName() + ": " + ex.getMessage()) + "\\"" +
              ", \\"input\\":\\"" + escapeJson("${escapeForLiteral(JSON.stringify(t.input))}") + "\\"" +
              ", \\"expected\\":\\"" + escapeJson("${escapeForLiteral(JSON.stringify(t.expected))}") + "\\"" +
              ", \\"actual\\":\\"Exception thrown\\"" +
              "}";
            resultJsons.add(resJson);
        }
    `;
  }).join("\n");
}

function escapeForLiteral(s) {
  if (!s) return "";
  return s.replace(/"/g, '\\"');
}

function formatInputsToJavaArgs(input, paramTypes = []) {
  if (Array.isArray(input)) {
    return input.map((val, i) => convertValueToJava(val, paramTypes[i])).join(", ");
  }
  return convertValueToJava(input, paramTypes[0]);
}

function formatExpectedToJava(expected, returnType = "int") {
  return convertValueToJava(expected, returnType);
}

function convertValueToJava(val, javaType = "int") {
  if (val === null || val === undefined) return "null";

  if (javaType === "int[]" || Array.isArray(val) && (javaType.includes("int[]") || !javaType)) {
    return `new int[]{${Array.isArray(val) ? val.join(", ") : ""}}`;
  }
  if (javaType === "String[]" || Array.isArray(val) && javaType.includes("String[]")) {
    return `new String[]{${val.map(s => `"${s}"`).join(", ")}}`;
  }
  if (javaType === "String") {
    return `"${String(val)}"`;
  }
  if (javaType === "boolean") {
    return String(val);
  }
  if (javaType === "double" || javaType === "float") {
    return `${val}d`;
  }
  if (javaType === "long") {
    return `${val}L`;
  }
  if (javaType === "List<Integer>" && Array.isArray(val)) {
    return `Arrays.asList(${val.join(", ")})`;
  }
  if (javaType === "int") {
    return String(val);
  }

  // Fallback
  if (typeof val === "string") return `"${val}"`;
  if (typeof val === "number") return String(val);
  if (typeof val === "boolean") return String(val);
  if (Array.isArray(val)) return `new int[]{${val.join(", ")}}`;

  return `"${String(val)}"`;
}
