# Project Map (Folder & File Guide)

This document describes each folder and file in the current workspace structure.

## Root (project)

- `.gitignore` — Ignore rules for dependencies, build outputs, env files, and TypeScript/Next generated files.
- `components.json` — shadcn/ui configuration (style, aliases, Tailwind CSS entry, icon library).
- `next-env.d.ts` — Next.js TypeScript ambient definitions (auto-generated/support file).
- `next.config.mjs` — Next.js config (`ignoreBuildErrors`, unoptimized images).
- `package.json` — Project metadata, scripts (`dev`, `build`, `start`, `lint`), and dependencies.
- `pnpm-lock.yaml` — Exact pnpm lockfile for reproducible installs.
- `postcss.config.mjs` — PostCSS plugin setup using `@tailwindcss/postcss`.
- `tsconfig.json` — TypeScript compiler options and path aliases.
- `README.md` — Main project documentation.
- `about.md` — This file-level project map.

## Generated/External Folders

- `.next/` — Next.js build/dev artifacts (generated).
- `node_modules/` — Installed dependencies (generated/external).

## `components/`

### `components/ui/` (shadcn/ui-style primitives)

- `accordion.tsx` — Expand/collapse accordion UI component.
- `alert-dialog.tsx` — Modal confirmation dialog component.
- `alert.tsx` — Inline alert/status message component.
- `aspect-ratio.tsx` — Maintains element aspect ratios.
- `avatar.tsx` — Avatar/image-with-fallback component.
- `badge.tsx` — Small status/label pill component.
- `breadcrumb.tsx` — Breadcrumb navigation component.
- `button-group.tsx` — Grouped button layout/component.
- `button.tsx` — Reusable button component and variants.
- `calendar.tsx` — Calendar/date selection UI.
- `card.tsx` — Card container component.
- `carousel.tsx` — Carousel/slider container component.
- `chart.tsx` — Chart wrapper and chart style helpers.
- `checkbox.tsx` — Checkbox input component.
- `collapsible.tsx` — Expandable/collapsible region component.
- `command.tsx` — Command-palette style searchable list UI.
- `context-menu.tsx` — Right-click context menu UI.
- `dialog.tsx` — General modal dialog component.
- `drawer.tsx` — Slide-up/slide-over drawer component.
- `dropdown-menu.tsx` — Dropdown menu component.
- `empty.tsx` — Empty-state UI primitive.
- `field.tsx` — Form field layout primitive.
- `form.tsx` — Form helpers/wrappers for validation and composition.
- `hover-card.tsx` — Hover-activated preview card.
- `input-group.tsx` — Grouped input/addon wrapper component.
- `input-otp.tsx` — OTP/pin segmented input component.
- `input.tsx` — Text input component.
- `item.tsx` — Generic item/list display primitive.
- `kbd.tsx` — Keyboard key indicator component.
- `label.tsx` — Accessible form label component.
- `menubar.tsx` — Menubar navigation component.
- `navigation-menu.tsx` — Navigation menu component.
- `pagination.tsx` — Pagination controls component.
- `popover.tsx` — Popover/overlay content component.
- `progress.tsx` — Progress bar indicator.
- `radio-group.tsx` — Radio button group component.
- `resizable.tsx` — Resizable panels/split view component.
- `scroll-area.tsx` — Custom scroll area container.
- `select.tsx` — Select/dropdown input component.
- `separator.tsx` — Visual divider component.
- `sheet.tsx` — Side sheet/overlay panel component.
- `sidebar.tsx` — Sidebar layout/navigation component.
- `skeleton.tsx` — Loading skeleton placeholder component.
- `slider.tsx` — Range/slider input component.
- `sonner.tsx` — Toast integration wrapper for Sonner notifications.
- `spinner.tsx` — Loading spinner component.
- `switch.tsx` — Toggle switch component.
- `table.tsx` — Table primitives/wrappers.
- `tabs.tsx` — Tabbed interface component.
- `textarea.tsx` — Multi-line text input component.
- `toast.tsx` — Toast UI primitive definitions.
- `toaster.tsx` — Toast viewport/provider renderer.
- `toggle-group.tsx` — Group of toggles component.
- `toggle.tsx` — Single toggle button component.
- `tooltip.tsx` — Tooltip component.
- `use-mobile.tsx` — Mobile breakpoint hook (UI-local copy).
- `use-toast.ts` — Toast state hook/store (UI-local copy).

## `hooks/`

- `use-mobile.ts` — Hook to detect mobile viewport (`< 768px`).
- `use-toast.ts` — Toast state management hook and dispatcher.

## `lib/`

- `utils.ts` — Utility function `cn()` for className merging (`clsx` + `tailwind-merge`).

## `public/`

- `apple-icon.png` — Apple touch icon asset.
- `icon-dark-32x32.png` — Dark mode favicon variant.
- `icon-light-32x32.png` — Light mode favicon variant.
- `icon.svg` — SVG icon asset.
- `placeholder-logo.png` — Placeholder logo image.
- `placeholder-logo.svg` — Placeholder logo SVG.
- `placeholder-user.jpg` — Placeholder user/profile image.
- `placeholder.jpg` — Generic placeholder image.
- `placeholder.svg` — Generic placeholder SVG.

### `public/images/`

- `profile.jpg` — Hero section profile image.

## `src/`

### `src/app/`

- `globals.css` — Active global styling, theme tokens, base layer styles.
- `layout.tsx` — Root layout with fonts and metadata.
- `page.tsx` — Home page composition (Header, Hero, About, Projects, Skills, Contact, Footer).

### `src/components/`

- `about.tsx` — About section renderer using `aboutData`.
- `contact.tsx` — Contact section with email call-to-action.
- `footer.tsx` — Footer with name and current year.
- `glare-card-hero.tsx` — Hero wrapper that applies glare card effect.
- `header.tsx` — Top nav and social links.
- `hero.tsx` — Hero intro, profile image, social links, and CTA.
- `projects.tsx` — Project cards section using `projectsData`.
- `skills.tsx` — Skills grid section using `skillsData`.

#### `src/components/ui/`

- `glare-card.tsx` — Interactive pointer-driven glare/foil visual effect card.

### `src/lib/`

- `data.ts` — Main content/config source for site identity, nav links, about, projects, and skills.
- `utils.ts` — Utility `cn()` for merging Tailwind classes.

## `styles/`

- `globals.css` — Alternate/global theme stylesheet (present but not the one imported by `src/app/layout.tsx`).

---

## Notes

- The project contains both root-level shared folders (`components/ui`, `hooks`, `lib`) and `src`-scoped app folders (`src/components`, `src/lib`).
- In runtime page rendering, the primary app code path uses `src/app`, `src/components`, and `src/lib`.
