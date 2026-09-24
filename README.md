# Ian — Personal Portfolio

A personal portfolio and resume site — frontend developer / UI-UX focus — built with:

- **React 18** + **Vite** (plain JavaScript, no TypeScript)
- **Tailwind CSS v4** (design tokens live in `src/index.css` under `@theme` — no `tailwind.config.js`)
- **React Router v6** for routing
- **shadcn/ui-style components** in `src/components/ui`
- **Framer Motion** for page transitions
- **Sonner** for toast notifications
- **Formspree** for the contact form (no backend required)

## Pages

| Route | Description |
|---|---|
| `/` | Hero, About teaser, Selected Work (top 3), Skills, What I Do, My Process, Kind Words, closing CTA |
| `/about` | Full About page — story, principles, CTA |
| `/work` | Full project catalog |
| `/work/:slug` | Individual project case study (challenge / approach / outcome, tech stack, links) |
| `/resume` | Print-friendly resume/CV — Skills, Education, Work History, with a "Download PDF" button |
| `/contact` | Contact form (via Formspree) |
| `/admin` | **Not linked in nav.** Password-gated project manager — add/edit/delete projects, stored in this browser's `localStorage` only |

`/skills` and `/process` aren't separate routes — they're sections on `/`, and the nav's Skills/Process links scroll to them via `#skills` / `#process` anchors (handled by `HashScroll`), with a scroll-position check keeping the nav's active state accurate.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/
    ui/           → shadcn-style primitives (Button, Card, Badge, Input, Select, Separator, Sonner, ...)
    layout/       → Navbar, Footer, Layout (page transitions + Outlet), SectionHeading
    sections/     → ProjectCard (work preview card, with optional real screenshot via `image`)
    Reveal.jsx    → scroll-in fade-up wrapper
    HashScroll.jsx→ smooth-scrolls to #skills / #process anchors on Home
    BackToTop.jsx → floating scroll-to-top button
    Loader.jsx    → animated name loader shown once per page load
    AdminGate.jsx → password gate wrapping the Admin page
  pages/          → Home, About, Work, ProjectDetail, Resume, Contact, Admin
  data/
    content.js    → skills, education, work history, process steps, testimonials, principles
  lib/
    projectStore.js → localStorage-backed CRUD for projects (add/update/delete/reset), used by Home/Work/ProjectDetail/Admin
    adminAuth.js     → sessionStorage-backed password gate for /admin
    toast.js         → color-coded toast helpers (added / updated / deleted)
    utils.js         → `cn()` class merger, `slugify()`
  index.css       → design tokens (colors, fonts) in the Tailwind v4 @theme block, plus print styles
```

## Content model

Projects are **not** hardcoded in `content.js` — they live in `localStorage`, managed through `/admin`, seeded from a default list on first load. Each project has:

```js
{
  slug, category, title, description,
  stack: [...],       // array of tech names
  status,             // "Live" | "In Progress" | "Completed" | "Concept"
  link,               // live demo URL, or "#" if not deployed
  repo,               // GitHub repo URL — used by the "Source code" button
  image,              // optional: real screenshot path/URL; falls back to a CSS-drawn preview if omitted
  details: { challenge, approach, outcome },
}
```

Everything else (skills, education, work history, process steps, testimonials) is still plain data in `src/data/content.js` — edit that file directly for those.

## Managing projects (`/admin`)

- Not in the nav on purpose — visit `/admin` directly.
- Password-gated (`src/lib/adminAuth.js`) — **this is a soft gate, not real security**: since the site is fully static, the password lives in the shipped JavaScript and could be found by anyone determined enough. It's meant to keep the page tidy from casual visitors, not to protect anything sensitive.
- Add / edit / delete projects, with color-coded toast confirmations (green = added, amber = updated, red = deleted).
- **Changes here only affect your own browser.** They do not appear on the live deployed site for other visitors — this is a personal drafting tool. Once a project is finished, copy its details into the seed data in `content.js` so it ships to everyone.

## Print resume

`/resume` has a "Download PDF" button that calls `window.print()`. Print-specific CSS in `src/index.css` (under `@media print`) hides the nav/footer/toasts, flattens the color palette to black-on-white, collapses the landing-page-scale section padding down to normal document spacing, and sets `0.75in` page margins — so it prints like an actual document rather than a screenshot of a webpage.

## Contact form

Wired to [Formspree](https://formspree.io) — no backend needed. The endpoint lives in `src/pages/Contact.jsx` as `FORM_ENDPOINT`; replace it with your own form's endpoint from your Formspree dashboard.

## Deployment (Vercel)

This is a single-page app using client-side routing (React Router). A direct visit or refresh on any route other than `/` (e.g. `/about`, `/work/plantsy`) needs to be rewritten to `index.html` so React Router can handle it — otherwise Vercel's server 404s, since routes like `/about` don't correspond to real files, only to strings your JavaScript checks against once it's running.

**`vercel.json`** (committed at the project root — this is safe to commit, it contains no secrets):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Making it yours

1. **Projects** — use `/admin`, then copy finished entries into `content.js`.
2. **Skills / Education / Work History / Process / Testimonials** — edit `src/data/content.js` directly.
3. **Section numbers** — the `number` prop on each `<SectionHeading>` is a placeholder; renumber by hand to match your final section order per page.
4. **Colors/fonts** — edit the `@theme` block in `src/index.css`.
5. **Photo** — replace the placeholder in `src/pages/Home.jsx` with a real `<img>`.
6. **Project screenshots** — add an `image` field to a project to show a real screenshot on its card instead of the default CSS-drawn preview.
7. **Contact form** — set your real Formspree endpoint in `src/pages/Contact.jsx`.
8. **Admin password** — change the hardcoded password in `src/lib/adminAuth.js` before using this anywhere public.

## Build for production

```bash
npm run build
```