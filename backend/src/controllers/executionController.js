import { runJavaSandbox } from "../services/sandbox.js";
import { analyzeJavaCode } from "../services/analyzer.js";
import { recommendCollections } from "../services/recommender.js";
import { PROBLEMS_DATA } from "../data/problemsData.js";

export async function runCode(req, res) {
  try {
    const { code, slug, customInput } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Java code is required." });
    }

    const problem = PROBLEMS_DATA.find(p => p.slug === slug);
    const meta = problem?.methodMeta || { methodName: "solve", returnType: "int", paramTypes: ["int[]"] };

    // Prepare test cases: either custom or visible test cases
    let testsToRun = [];
    if (customInput && Array.isArray(customInput)) {
      testsToRun = [{ input: customInput, expected: null, isHidden: false }];
    } else if (problem?.testCases) {
      testsToRun = problem.testCases.filter(tc => !tc.isHidden);
    } else {
      testsToRun = [{ input: [1, 2], expected: 0, isHidden: false }];
    }

    // Step 1: Run in sandbox
    const sandboxResult = await runJavaSandbox({
      code,
      testCases: testsToRun,
      problemMeta: meta
    });

    // Step 2: Code analysis
    const analysis = analyzeJavaCode(code);

    // Step 3: Collection recommendation
    const collectionRecommendations = recommendCollections(code);

    res.json({
      ...sandboxResult,
      analysis,
      collectionRecommendations
    });
  } catch (err) {
    res.status(500).json({
      status: "EXECUTION_ERROR",
      error: "Execution server error: " + err.message
    });
  }
}

export async function submitCode(req, res) {
  try {
    const { code, slug } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Java code is required." });
    }

    const problem = PROBLEMS_DATA.find(p => p.slug === slug);
    const meta = problem?.methodMeta || { methodName: "solve", returnType: "int", paramTypes: ["int[]"] };

    // Run ALL test cases (visible + hidden)
    const allTests = problem?.testCases || [{ input: [1, 2], expected: 0, isHidden: false }];

    const sandboxResult = await runJavaSandbox({
      code,
      testCases: allTests,
      problemMeta: meta
    });

    // Code complexity and pattern analysis
    const analysis = analyzeJavaCode(code);

    // Collection recommendation
    const collectionRecommendations = recommendCollections(code);

    // Filter hidden test inputs/details for security if desired, but show pass/fail
    const sanitizedResults = (sandboxResult.testResults || []).map(r => {
      if (r.isHidden) {
        return {
          id: r.id,
          passed: r.passed,
          isHidden: true,
          executionMs: r.executionMs,
          input: "[Hidden Test Case]",
          expected: "[Hidden]",
          actual: r.passed ? "[Hidden (Passed)]" : "[Mismatch / Failed]"
        };
      }
      return r;
    });

    res.json({
      ...sandboxResult,
      testResults: sanitizedResults,
      analysis,
      collectionRecommendations,
      optimalApproach: problem?.approaches?.find(a => a.name.includes("Optimal")) || null
    });
  } catch (err) {
    res.status(500).json({
      status: "SUBMISSION_ERROR",
      error: "Submission server error: " + err.message
    });
  }
}
