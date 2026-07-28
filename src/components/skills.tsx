"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">02 / Skills</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          Tools of the trade
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skills).map(([category, list]) => (
            <motion.div
              key={category}
              variants={item}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-mono text-[13px] text-muted">// {category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-[13px] text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
