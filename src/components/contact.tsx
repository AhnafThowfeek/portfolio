"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const links = [
  {
    label: "mtmahnaf21@gmail.com",
    href: "mailto:mtmahnaf21@gmail.com",
    icon: Mail,
  },
  {
    label: "+94 77 327 3247",
    href: "tel:+94773273247",
    icon: Phone,
  },
  {
    label: "linkedin.com/in/ahnaf-thowfeek",
    href: "https://linkedin.com/in/ahnaf-thowfeek",
    icon: LinkedinIcon,
  },
  {
    label: "github.com/AhnafThowfeek",
    href: "https://github.com/AhnafThowfeek",
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-surface px-6 py-24 sm:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">06 / Contact</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&rsquo;s build something live.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Open to freelance projects and junior full-stack roles. Based in
          Colombo, working with teams anywhere.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 text-left transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={17} className="shrink-0 text-accent" />
              <span className="truncate font-mono text-sm">{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
