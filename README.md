# Ahnaf Thowfeek — Portfolio

A Next.js (App Router) portfolio with a light/dark theme toggle and
scroll-triggered animations, built from your CV.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)
- next-themes (dark / light mode, persisted, no flash on load)
- lucide-react (icons)

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Replace the placeholder photo

Your headshot is currently a generated placeholder at:

```
public/images/profile-placeholder.svg
```

Swap it for a real photo:

1. Add your photo to `public/images/` (e.g. `profile.jpg`).
2. In `src/components/hero.tsx`, change the `src` on the `<Image>` tag
   from `/images/profile-placeholder.svg` to `/images/profile.jpg`.

## About the project screenshots

This build could not fetch live screenshots of your five client sites
(dynamicacelanka.com, theminimall.lk, nilaveliislands.com,
themrntravels.com, ramayanaheritage.com) because the sandbox used to
generate this project only has network access to package registries,
not arbitrary websites. Each project card instead shows a styled
browser-window mockup with the real domain in the address bar, and
links straight through to the live site.

To drop in real screenshots instead:

1. Save a screenshot of each site's homepage into `public/images/projects/`
   (e.g. `dynamic-ace-lanka.png`).
2. In `src/components/project-card.tsx`, replace the initials block
   inside the "preview surface" `<div>` with a Next.js `<Image>` tag
   pointing at that file.

## Editing content

All copy — projects, skills, experience, education, certifications —
lives in one place: `src/lib/data.ts`. Edit that file to update the
site without touching any component.

## Deploy

The easiest option is [Vercel](https://vercel.com/new): push this
folder to a GitHub repo and import it, or run `npx vercel` from this
directory.
