"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-14 rounded-full bg-surface-2" aria-hidden />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="group relative flex h-8 w-14 items-center rounded-full border border-border bg-surface-2 px-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-background shadow-sm transition-transform duration-300 ease-out"
        style={{ transform: isDark ? "translateX(24px)" : "translateX(0)" }}
      >
        {isDark ? <Moon size={13} strokeWidth={2.5} /> : <Sun size={13} strokeWidth={2.5} />}
      </span>
    </button>
  );
}
