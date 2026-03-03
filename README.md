# Portfolio (Next.js)

A personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Overview

This project renders a single-page portfolio with these sections:
- Header/navigation
- Hero
- About
- Projects
- Skills
- Contact
- Footer

Most page content is centralized in `src/lib/data.ts`, making it easy to customize text, links, project cards, and skills.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Lucide icons
- shadcn/ui component set (in `components/ui`)

## Project Structure (high level)

- `src/app` – App Router entry files (`layout.tsx`, `page.tsx`, global app styles)
- `src/components` – Portfolio section components
- `src/components/ui/glare-card.tsx` – Custom interactive glare effect card
- `src/lib` – Content data and shared utility helper(s)
- `public` – Static assets and images
- `components/ui` – shadcn/ui-style reusable UI primitives
- `hooks`, `lib` (root) – shared hooks/utilities used by UI primitives

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Run development server

```bash
pnpm dev
```

Open `http://localhost:3000`.

### 3) Build and run production

```bash
pnpm build
pnpm start
```

## Scripts

Defined in `package.json`:

- `pnpm dev` – Run Next.js dev server
- `pnpm build` – Production build
- `pnpm start` – Start built app
- `pnpm lint` – Run ESLint

## Configuration Notes

- `next.config.mjs` currently has:
  - `typescript.ignoreBuildErrors: true`
  - `images.unoptimized: true`
- `components.json` is configured for shadcn/ui aliases and Tailwind integration.
- `tsconfig.json` uses path alias `@/* -> ./src/*`.

## Content Customization

Edit `src/lib/data.ts` to update:
- Name, role, description, social links, and email
- About paragraphs
- Project list and tags
- Skills and categories

## Styling

- Main app styling is in `src/app/globals.css`.
- A second stylesheet exists at `styles/globals.css`; it appears to be an alternate/older global theme file and is not imported by the current App Router layout.

## Important Note

`next-env.d.ts` includes an import of `./.next/dev/types/routes.d.ts`, and `next.config.mjs` ignores TypeScript build errors. This can hide type issues in CI/build outputs, so consider tightening these settings for production-hardening.
