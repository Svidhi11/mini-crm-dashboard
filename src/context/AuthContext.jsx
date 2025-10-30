import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedTheme = localStorage.getItem("theme") || "light";

    if (savedUser) setUser(JSON.parse(savedUser));
    setTheme(savedTheme);
    document.body.className = savedTheme === "dark"
      ? "theme-dark"
      : savedTheme === "night"
      ? "theme-night"
      : "theme-light";
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark"
      ? "theme-dark"
      : theme === "night"
      ? "theme-night"
      : "theme-light";
  }, [theme]);

  const login = (email, password) => {
    if (email === "admin@example.com" && password === "admin123") {
      const userData = { email, token: "mock-jwt-token-12345" };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "night" : "light"
    );
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};
