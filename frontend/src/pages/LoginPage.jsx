import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArrowRight, CheckCircle2, Lock, Mail, User as UserIcon, Sparkles } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        if (!name.trim()) {
          setError("Please enter your name.");
          setLoading(false);
          return;
        }
        await register(name, email, password);
      } else {
        await login(email, password);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDemoLogin() {
    setLoading(true);
    setError("");
    try {
      await login("student@dsamastery.com", "password123");
      navigate("/dashboard");
    } catch (err) {
      setError("Demo login failed: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      {/* Header */}
      <div className="text-center space-y-1.5">
        <div className="w-10 h-10 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
          J
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          {isRegister ? "Create Fresh Account" : "Sign In to DSA Mastery"}
        </h1>
        <p className="text-xs text-slate-500">
          {isRegister
            ? "Every new user gets a completely fresh dashboard, streak, and progress tracker."
            : "Welcome back. Continue your Java interview preparation."}
        </p>
      </div>

      {/* Auth Card */}
      <div className="border border-slate-200 rounded p-6 bg-white space-y-5 shadow-sm">
        {/* Toggle Mode */}
        <div className="flex border border-slate-200 rounded p-1 bg-slate-50 text-xs">
          <button
            type="button"
            onClick={() => { setIsRegister(false); setError(""); }}
            className={`flex-1 py-1.5 rounded transition-colors font-medium ${
              !isRegister ? "bg-white text-slate-900 shadow-sm font-semibold" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setIsRegister(true); setError(""); }}
            className={`flex-1 py-1.5 rounded transition-colors font-medium ${
              isRegister ? "bg-white text-slate-900 shadow-sm font-semibold" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Create New Account
          </button>
        </div>

        {error && (
          <div className="p-3 rounded bg-rose-50 border border-rose-200 text-rose-800 text-xs leading-normal">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {isRegister && (
            <div className="space-y-1">
              <label className="block font-semibold text-slate-700">Full Name</label>
              <div className="relative">
                <UserIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Maya Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-slate-500"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="block font-semibold text-slate-700">Email Address</label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-slate-500"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block font-semibold text-slate-700">Password</label>
            <div className="relative">
              <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-slate-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50 text-xs shadow-sm"
          >
            {loading ? "Processing..." : isRegister ? "Create Fresh Account" : "Sign In"}
          </button>
        </form>

        {/* Demo Account Access Option */}
        <div className="pt-3 border-t border-slate-100 text-center space-y-2">
          <span className="text-[11px] text-slate-400">Or explore with sample progress</span>
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full py-2 rounded border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-medium transition-colors bg-slate-50"
          >
            Explore as Demo Account (Alex)
          </button>
        </div>
      </div>
    </div>
  );
}
