"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

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

  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-tab-bar/95 backdrop-blur">
      {/* Desktop: horizontal editor tab bar */}
      <div className="mx-auto hidden max-w-6xl items-center gap-1 px-6 py-0 sm:flex">
        <span className="mr-2 shrink-0 select-none font-mono text-base text-muted">
          ~/ahnaf
        </span>
        <nav className="flex min-w-0 flex-1 items-center">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`group relative flex shrink-0 items-center gap-2 border-r border-border px-4 py-3 font-mono text-base transition-colors ${
                  isActive
                    ? "bg-background text-foreground"
                    : "text-muted hover:bg-background/50 hover:text-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
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

      {/* Mobile: dropdown trigger row */}
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          className="flex min-w-0 flex-1 items-center gap-2 rounded-md py-1 font-mono text-sm text-foreground"
        >
          {isOpen ? (
            <X size={16} className="shrink-0 text-muted" />
          ) : (
            <Menu size={16} className="shrink-0 text-muted" />
          )}
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="truncate">{activeTab.file}</span>
          <ChevronDown
            size={14}
            className={`ml-auto shrink-0 text-muted transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile: dropdown panel */}
      {isOpen && (
        <nav
          id="mobile-nav-menu"
          className="border-t border-border bg-tab-bar sm:hidden"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2.5 border-b border-border px-4 py-3 font-mono text-sm transition-colors last:border-b-0 ${
                  isActive
                    ? "bg-background text-foreground"
                    : "text-muted hover:bg-background/50 hover:text-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    isActive ? "bg-accent" : "bg-transparent"
                  }`}
                />
                {tab.file}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
