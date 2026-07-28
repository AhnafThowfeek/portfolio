"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { RotatingWord } from "./rotating-word";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background px-6 pb-20 pt-16 sm:px-10 sm:pt-24"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for freelance &amp; junior roles
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ahnaf Thowfeek builds
            <RotatingWord />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Full-stack developer and IT undergraduate in Colombo, Sri Lanka. I
            ship production websites for real clients — storefronts, scheduling
            systems, and tourism sites — with React, Node.js, and a close eye on
            UX.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View live work
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-1.5 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-1.5 font-mono text-xs text-muted"
          >
            <MapPin size={13} />
            Colombo, Sri Lanka
          </motion.div>
        </div>

        <motion.div variants={item} className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-tab-bar px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EE6A5F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
            </div>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/profile.png"
                alt="Placeholder photo of Ahnaf Thowfeek"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
