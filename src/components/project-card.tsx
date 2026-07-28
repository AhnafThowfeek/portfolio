"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import type { Project } from "@/lib/data";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div variants={item} className="group h-full">
      <Wrapper
        {...wrapperProps}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
      >
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-border bg-tab-bar px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EE6A5F]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
          <span className="ml-3 flex min-w-0 flex-1 items-center gap-1.5 truncate rounded bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
            <Globe size={11} className="shrink-0" />
            <span className="truncate">{project.domain ?? `${project.slug}.local`}</span>
          </span>
        </div>

        {/* preview surface */}
        <div
          className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, transparent 65%), var(--surface-2)`,
          }}
        >
          <span
            className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight opacity-90 transition-transform duration-300 group-hover:scale-105"
            style={{ color: project.accent }}
          >
            {project.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </span>
          {project.url && (
            <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              <ArrowUpRight size={14} />
            </span>
          )}
        </div>

        {/* content */}
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
            {project.tagline}
          </p>
          <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
