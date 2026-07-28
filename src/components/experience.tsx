"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-background px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">05 / Path</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience &amp; education
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h3 className="font-mono text-sm text-muted">// experience</h3>
            <div className="mt-5 space-y-8">
              {experience.map((role) => (
                <div key={role.role} className="relative border-l border-border pl-6">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="font-mono text-xs text-muted">{role.period}</p>
                  <h4 className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
                    {role.role}
                  </h4>
                  <p className="text-sm text-accent">
                    {role.org} · {role.location}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h3 className="font-mono text-sm text-muted">// education</h3>
            <div className="mt-5 space-y-6">
              {education.map((ed) => (
                <div key={ed.school} className="relative border-l border-border pl-6">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[color:var(--accent-2)]" />
                  <p className="font-mono text-xs text-muted">{ed.period}</p>
                  <h4 className="mt-1 font-[family-name:var(--font-display)] text-base font-semibold">
                    {ed.school}
                  </h4>
                  <p className="text-sm text-muted">{ed.credential}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-mono text-sm text-muted">// certifications</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="font-mono text-[11px] text-muted">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
