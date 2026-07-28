"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stats = [
  { value: "5+", label: "client & personal projects shipped" },
  { value: "50%", label: "avg. UX improvement across builds" },
  { value: "2", label: "roles: developer & project lead" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border bg-surface px-6 py-24 sm:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            01 / About
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            From coursework to production
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            I&rsquo;m an IT undergraduate in Computing and Software Engineering,
            currently reading for a B.Sc. at Cardiff Metropolitan University.
            Alongside my studies I&rsquo;ve worked as a full-stack developer,
            leading a small team through Agile sprints to deliver live client
            websites, and I build personal projects exploring SaaS products and
            AI-powered tooling in my own time.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-accent sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="overflow-hidden rounded-xl border border-border bg-background shadow-sm"
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-tab-bar px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EE6A5F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
            <span className="ml-3 font-mono text-[11px] text-muted">
              about.ts
            </span>
          </div>
          <pre className="whitespace-pre-wrap break-words p-5 font-mono text-[12.5px] leading-relaxed sm:p-6 sm:text-[13px]">
            <code>
              <span className="text-[color:var(--accent-2)]">const</span>{" "}
              <span className="text-foreground">developer</span> = {"{"}
              {"\n"}
              {"  "}name:{" "}
              <span className="text-accent">&quot;Ahnaf Thowfeek&quot;</span>,
              {"\n"}
              {"  "}role:{" "}
              <span className="text-accent">
                &quot;Full Stack Developer&quot;
              </span>
              ,{"\n"}
              {"  "}location:{" "}
              <span className="text-accent">
                &quot;Colombo, Sri Lanka&quot;
              </span>
              ,{"\n"}
              {"  "}languages: [
              <span className="text-accent">&quot;English&quot;</span>,{" "}
              <span className="text-accent">&quot;Tamil&quot;</span>,{" "}
              <span className="text-accent">&quot;Sinhala&quot;</span>],{"\n"}
              {"  "}stack: [
              <span className="text-accent">&quot;JavaScript&quot;</span>,{" "}
              <span className="text-accent">&quot;TypeScript&quot;</span>,{" "}
              <span className="text-accent">&quot;React&quot;</span>,{" "}
              <span className="text-accent">&quot;Next.js&quot;</span>,{" "}
              <span className="text-accent">&quot;Node.js&quot;</span>,{" "}
              <span className="text-accent">&quot;Express&quot;</span>,{" "}
              <span className="text-accent">&quot;Python&quot;</span>],{"\n"}
              {"  "}focus: [
              <span className="text-accent">&quot;SaaS products&quot;</span>,{" "}
              <span className="text-accent">&quot;AI-powered apps&quot;</span>,{" "}
              <span className="text-accent">&quot;e-commerce&quot;</span>,{" "}
              <span className="text-accent">&quot;booking systems&quot;</span>,{" "}
              <span className="text-accent">
                &quot;travel &amp; tourism&quot;
              </span>
              ],{"\n"}
              {"  "}currentlyLearning: <span className="text-accent">true</span>
              ,{"\n"}
              {"}"};
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
