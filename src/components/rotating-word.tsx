"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const words = [
  "full-stack web apps.",
  "React & Next.js interfaces.",
  "SaaS products.",
  "AI-powered apps.",
  "e-commerce platforms.",
  "booking systems.",
  "scalable Node.js APIs.",
];

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="block text-accent">{words[0]}</span>;
  }

  return (
    <span className="relative block h-[1.15em] overflow-hidden text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
