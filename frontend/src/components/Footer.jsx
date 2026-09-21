import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16 py-8 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-semibold text-slate-800">DSA Mastery – Java</span>
          <span className="ml-2">Engineered for technical interview preparation, LeetCode, and placement readiness.</span>
        </div>
        <div className="flex space-x-6">
          <Link to="/roadmap" className="hover:text-slate-900 transition-colors">Roadmap</Link>
          <Link to="/patterns" className="hover:text-slate-900 transition-colors">30 Patterns</Link>
          <Link to="/java-collections" className="hover:text-slate-900 transition-colors">Collections Table</Link>
          <Link to="/complexity-visualizer" className="hover:text-slate-900 transition-colors">Big-O</Link>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">LeetCode</a>
          <a href="https://geeksforgeeks.org" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">GeeksforGeeks</a>
        </div>
      </div>
    </footer>
  );
}
