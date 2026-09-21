import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, Flame, LogOut, User as UserIcon } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Roadmap", path: "/roadmap" },
    { label: "Data Structures", path: "/data-structures" },
    { label: "Patterns (30)", path: "/patterns" },
    { label: "Java Collections", path: "/java-collections" },
    { label: "Problems", path: "/problems" },
    { label: "Pattern Advisor", path: "/pattern-advisor" },
    { label: "Visualizers", path: "/visualizers" },
    { label: "Big-O", path: "/complexity-visualizer" },
    { label: "Dashboard", path: "/dashboard" }
  ];

  const isActive = (p) => location.pathname === p || (p !== "/" && location.pathname.startsWith(p));

  function handleSignOut() {
    logout();
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-base">
                J
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900 tracking-tight text-base leading-tight">
                  DSA Mastery
                </span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Java Edition
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-slate-100 text-slate-900 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: User & Auth */}
          <div className="hidden sm:flex items-center space-x-3">
            {user ? (
              <>
                {user.streak > 0 && (
                  <div className="flex items-center space-x-1 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded text-amber-800 text-xs font-medium">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    <span>{user.streak}d Streak</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
                  <span className="text-xs font-semibold text-slate-800">{user.name}</span>
                  <button
                    onClick={handleSignOut}
                    title="Sign Out"
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="px-3.5 py-1.5 text-xs font-medium rounded bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded ${
                isActive(link.path)
                  ? "bg-slate-100 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            {user ? (
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs font-semibold text-slate-800">{user.name}</span>
                <button onClick={handleSignOut} className="text-xs text-rose-600 font-medium">
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-3 py-2 text-xs font-medium rounded bg-slate-900 text-white"
              >
                Sign In / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
