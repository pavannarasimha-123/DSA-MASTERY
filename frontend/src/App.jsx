import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import DataStructures from "./pages/DataStructures";
import DataStructureDetail from "./pages/DataStructureDetail";
import PatternLibrary from "./pages/PatternLibrary";
import PatternDetail from "./pages/PatternDetail";
import ProblemList from "./pages/ProblemList";
import ProblemDetail from "./pages/ProblemDetail";
import JavaCollections from "./pages/JavaCollections";
import PatternAdvisor from "./pages/PatternAdvisor";
import Visualizers from "./pages/Visualizers";
import ComplexityVisualizer from "./pages/ComplexityVisualizer";
import DailyPractice from "./pages/DailyPractice";
import InterviewMode from "./pages/InterviewMode";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white text-slate-800">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/data-structures" element={<DataStructures />} />
              <Route path="/data-structures/:slug" element={<DataStructureDetail />} />
              <Route path="/patterns" element={<PatternLibrary />} />
              <Route path="/patterns/:slug" element={<PatternDetail />} />
              <Route path="/problems" element={<ProblemList />} />
              <Route path="/problems/:slug" element={<ProblemDetail />} />
              <Route path="/java-collections" element={<JavaCollections />} />
              <Route path="/pattern-advisor" element={<PatternAdvisor />} />
              <Route path="/visualizers" element={<Visualizers />} />
              <Route path="/complexity-visualizer" element={<ComplexityVisualizer />} />
              <Route path="/daily-practice" element={<DailyPractice />} />
              <Route path="/interview-mode" element={<InterviewMode />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
