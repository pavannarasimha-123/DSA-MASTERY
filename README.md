# 🚀 DSA Mastery – Java Platform

A clean, minimal, high-performance web platform for mastering **Data Structures & Algorithms in Java**. Light theme, crisp accent colors, Inter typography, and a distraction-free layout.

🔗 **Live Demo:** [dsa-masteryy.onrender.com](https://dsa-masteryy.onrender.com/)
📦 **Repository:** [github.com/pavannarasimha-123/DSA-MASTERY](https://github.com/pavannarasimha-123/DSA-MASTERY)

> ⏳ Hosted on Render's free tier, so the first load after inactivity may take 30-60 seconds while the server wakes up.

---

## ✨ Core Capabilities

### 1. 30 Algorithmic Patterns Library
- Each pattern covers: what it is, why it works, when to use it, recognition clues, Java templates, and common interview mistakes.
- **Top 10 problems per pattern (300+ total)** with LeetCode and GeeksforGeeks links, difficulty ratings, expected time/space complexity, and related questions.

### 2. Secure Java Code Execution
- **Pre-execution AST and token filter** blocking `Runtime.getRuntime()`, `ProcessBuilder`, `System.exit`, `java.lang.reflect`, `java.net.*`, `java.io.File`, and more.
- **Ephemeral isolated sandbox** for every run.
- **Hard limits:** `-Xmx128m -Xms32m`, 4-second timeout, 256 KB output buffer cap.
- Reports nanosecond runtime and peak heap memory.

### 3. Automated Static Code Analysis
- Nested loop detection (O(n²), O(n³))
- Recursive call tree analysis (O(2ⁿ))
- Integer overflow risk in midpoint calculation (suggests `low + (high - low) / 2`)
- String concatenation overhead (`+=` inside loops)
- Quadratic membership searches (`ArrayList.contains()`)

### 4. Java Collection Recommendation Engine
Inspects collection usage in your code and suggests better alternatives:
- `HashSet` instead of `ArrayList.contains()`
- `ArrayDeque` instead of `Stack`
- `PriorityQueue` for Top-K problems

### 5. Interactive Visualizers
- **Binary Search:** range halving with Low, Mid, High pointers
- **Stack (LIFO):** built on `ArrayDeque`
- **Bubble Sort:** pass-by-pass animation
- **Big-O:** dynamic N-slider with asymptotic definitions

### 6. Pattern Recognition Advisor
A "Which pattern should I use?" tool that analyzes a problem description and its constraints.

### 7. Java Collections Master Matrix
Complexity table (Add, Remove, Search, Access, Ordering, Duplicates, Nulls) with footnotes on amortized and boundary cases.

### 8. Interview Mode and Daily Practice
- Timed 30-minute mock interviews
- Curated daily sets of 4 problems

---

## 🛠️ Tech Stack

| Layer      | Technology                      |
| ---------- | ------------------------------- |
| Frontend   | React, Vite                     |
| Backend    | Node.js, Express                |
| Execution  | Sandboxed Java runner (JDK)     |
| Storage    | In-memory seeded fallback store |
| Deployment | Render                          |

## 📁 Project Structure

```
DSA-MASTERY/
├── backend/     # API, Java runner, analysis engine
├── frontend/    # UI, visualizers, pattern library
└── README.md
```

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and JDK 17+ installed.

### 1. Clone
```bash
git clone https://github.com/pavannarasimha-123/DSA-MASTERY.git
cd DSA-MASTERY
```

### 2. Start the backend
```bash
cd backend
npm install
npm start
```
Runs on `http://localhost:5000` with a seeded in-memory store and the secure Java runner.

### 3. Start the frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173` and proxies API calls to `http://localhost:5000`.

## ☁️ Deployment

Deployed on **Render**. Set the required environment variables in the Render dashboard and use:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`

## 🔮 Future Improvements

- Persistent database and user progress tracking
- Container-based execution (Docker) for stronger isolation
- More visualizers (graphs, DP tables, trees)
- Leaderboards and streaks

## 👤 Author

**Pavan Narasimha**
GitHub: [@pavannarasimha-123](https://github.com/pavannarasimha-123)

---

⭐ If you found this useful, consider starring the repo.
