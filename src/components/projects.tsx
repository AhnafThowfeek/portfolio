"use client";

import { motion } from "framer-motion";
import { liveProjects, buildProjects } from "@/lib/data";
import { ProjectCard } from "./project-card";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function Projects() {
  return (
    <section id="work" className="border-b border-border bg-surface px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">03 / Work</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          Live client sites
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Websites currently in production, built and maintained during my
          time at Innenta Solutions — click through to see them running.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {liveProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <div className="mt-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            04 / Builds
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Personal &amp; academic projects
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Independent builds exploring different stacks — React, Angular,
            Java, and PHP — each solving a concrete, real-world problem.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {buildProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
