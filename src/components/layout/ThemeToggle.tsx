"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl border border-amber-200/50 dark:border-slate-800 bg-amber-50/50 dark:bg-slate-800/50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="relative p-2 rounded-xl border border-amber-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9137]"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[#FFCC4D] animate-pulse-slow" />
      ) : (
        <Sun className="w-4 h-4 text-[#FF9137]" />
      )}
    </button>
  );
};
