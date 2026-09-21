# DSA Mastery – Java Platform

A clean, modern, minimal, and high-performance web platform built to master Data Structures & Algorithms in Java. Follows strict minimalist design principles: light/white theme with 1–2 crisp accent colors, rectangular buttons with subtle rounded corners, clean typography (Inter), spacious layout without decorative clutter, and no excessive gradients or animations.

## Core Capabilities

1. **Complete 30 Algorithmic Patterns Library**:
   - Every pattern contains What is it, Why it works, When to use, Recognition clues, Java templates, and Common interview mistakes.
   - **Top 10 Verified Problems per Pattern (300+ total problems)** with verified LeetCode and GeeksforGeeks links, difficulty ratings, time/space expectations, and related questions.
2. **Secure Java Code Execution**:
   - Multi-stage sandboxing architecture:
     - Pre-execution AST & Token filter (blocking `Runtime.getRuntime()`, `ProcessBuilder`, `System.exit`, `java.lang.reflect`, `java.net.*`, `java.io.File`, etc.).
     - Ephemeral isolated execution sandbox per run.
     - Hard memory limits (`-Xmx128m -Xms32m`), 4-second timeout, and 256KB buffer caps.
     - Automatically measures nano-second runtime and peak heap memory.
3. **Automated Static Code Analysis**:
   - Nested loop detection ($O(n^2)$, $O(n^3)$)
   - Recursive call tree analysis ($O(2^n)$)
   - Integer overflow risks in midpoint calculation (suggests `low + (high - low) / 2`)
   - String concatenation overhead (`+=` inside loops)
   - Quadratic membership searches (`ArrayList.contains()`)
4. **Java Collection Recommendation Engine**:
   - Automatically inspects collection usage in student code and suggests optimal alternatives (e.g. `HashSet` instead of `ArrayList.contains()`, `ArrayDeque` instead of `Stack`, `PriorityQueue` for Top-K).
5. **Interactive Algorithm & Complexity Visualizers**:
   - Binary Search range halving visualizer with Low, Mid, and High pointer tracking.
   - Stack (LIFO) visualizer using ArrayDeque.
   - Bubble Sort pass-by-pass visualizer.
   - Big-O Visualizer with dynamic N-slider and asymptotic definition guides.
6. **Pattern Recognition Advisor**:
   - "Which pattern should I use?" natural language keyword & constraint analyzer.
7. **Java Collections Master Matrix**:
   - Operational complexity table (Add, Remove, Search, Access, Ordering, Duplicates, Nulls) with detailed explanations of amortized and boundary footnotes (* and **).
8. **Interview Mode & Daily Practice Sets**:
   - Timed 30-minute mock interviews and curated 4-problem daily sets.

---

## Running the Application

### 1. Backend

```bash
cd backend
npm install
npm start
```
Runs on `http://localhost:5000` with seeded in-memory fallback store and secure Java runner.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173` with proxy pointing to `http://localhost:5000`.
