import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    try {
      const res = await API.get("/user/profile");
      setUser(res.data.user);
    } catch (err) {
      console.error("Failed to load user profile:", err);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("dsa_auth_token", res.data.token);
    setUser(res.data.user);
    return res.data;
  }

  async function register(name, email, password) {
    const res = await API.post("/auth/register", { name, email, password });
    localStorage.setItem("dsa_auth_token", res.data.token);
    setUser(res.data.user);
    return res.data;
  }

  function logout() {
    localStorage.removeItem("dsa_auth_token");
    fetchUserProfile();
  }

  async function markProblemSolved(slug, patternSlug) {
    try {
      const res = await API.post("/user/progress", { problemSlug: slug, patternSlug });
      if (res.data?.user) {
        setUser(res.data.user);
      }
    } catch (err) {
      console.error("Failed to update progress:", err);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, markProblemSolved, reloadProfile: fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
