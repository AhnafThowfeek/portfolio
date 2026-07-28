"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const tabs = [
  { id: "home", file: "home.tsx" },
  { id: "about", file: "about.tsx" },
  { id: "skills", file: "skills.ts" },
  { id: "work", file: "work.tsx" },
  { id: "experience", file: "experience.md" },
  { id: "contact", file: "contact.tsx" },
];

export function NavTabs() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-tab-bar/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-3 py-0 sm:px-6">
        <span className="mr-2 shrink-0 select-none font-mono text-[16px] text-muted">
          ~/ahnaf
        </span>
        <nav className="flex min-w-0 flex-1 items-center">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`group relative flex shrink-0 items-center gap-2 border-r border-border px-4 py-3 font-mono text-[16px] transition-colors ${
                  isActive
                    ? "bg-background text-foreground"
                    : "text-muted hover:bg-background/50 hover:text-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-accent"
                      : "bg-transparent group-hover:bg-border"
                  }`}
                />
                {tab.file}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-[2px] bg-accent" />
                )}
              </a>
            );
          })}
        </nav>
        <div className="ml-2 shrink-0 pl-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
