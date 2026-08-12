# AGENTS.md

Overview of this project for developers and AI agents.

## Project Overview

A single-page marketing landing site for a Shenzhen law firm (廣東金橋百信深圳律師事務所) offering
Mainland China inheritance legal services to Hong Kong residents. Built with TanStack Start and
deployed on Netlify. Designed as a Google Ads landing page: fast-loading, mobile-first, and focused
on driving consultation form submissions and WhatsApp/phone contacts.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   └── consult-form.html   # Static hidden-form skeleton so Netlify detects the "consultation" form at build time
├── src
│   ├── routes
│   │   ├── __root.tsx       # Root layout: HTML shell, page title/meta
│   │   └── index.tsx        # The entire landing page (hero, about, advantages, services, form, contact)
│   ├── router.tsx           # TanStack Router setup
│   └── styles.css           # Tailwind entry point
├── netlify.toml
└── vite.config.ts
```

## Key Concepts

### Single-page layout

All landing page content lives in `src/routes/index.tsx` as small section components
(`Hero`, `About`, `Advantages`, `Services`, `ConsultForm`, `Contact`, `Footer`). There is no routing
between pages — everything is anchor-linked sections on `/`.

### Bilingual content (Traditional / Simplified Chinese)

Copy is defined once as a `content` object keyed by `hant` (Traditional, default) and `hans`
(Simplified) in `src/routes/index.tsx`. A toggle button in the header flips a `lang` state value;
every section reads its text from `content[lang]`. When editing copy, update both language variants.

### Netlify Forms submission

The consultation form posts via `fetch` to `/consult-form.html` (not `/`) because TanStack Start's
SSR handler would otherwise intercept a POST to `/` before Netlify's form-processing middleware sees
it. `public/consult-form.html` is a hidden static form that mirrors the React form's fields so
Netlify's build-time scanner registers the `consultation` form. If new fields are added to the React
form, add matching fields to `public/consult-form.html` too.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory |

## Development Commands

```bash
pnpm dev      # Start dev server
pnpm build    # Production build
```

## Conventions

- Tailwind utility classes only, no separate CSS files per component.
- Color palette: dark navy `#0a1a35` / `#0d2143` background, gold `#e8c76b` accent, white text —
  matches the "premium Hong Kong law firm" brief. Keep new sections within this palette.
- Contact numbers (`WHATSAPP_NUMBER`, `PHONE_NUMBER`) are placeholder constants at the top of
  `src/routes/index.tsx` — replace with the firm's real numbers before going live.
