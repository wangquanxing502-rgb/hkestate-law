# 港人內地遺產繼承法律服務 — Landing Page

A single-page marketing site for a Shenzhen law firm helping Hong Kong residents handle inheritance
of Mainland China property, bank deposits, and other assets. Built as a Google Ads landing page:
fast, mobile-friendly, and focused on generating consultation inquiries via a contact form and direct
WhatsApp/phone links.

Content is bilingual — Traditional Chinese by default, with a button to switch to Simplified Chinese.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, TanStack Router)
- Vite 7
- Tailwind CSS 4
- Netlify Forms (for the consultation form)
- Deployed on Netlify

## Running locally

```bash
pnpm install
pnpm dev
```

The dev server runs on port 3000 by default. Netlify Forms submissions only work once deployed
(Netlify's build-time form detection and processing don't run in local dev).

## Project structure

See [AGENTS.md](./AGENTS.md) for a full breakdown of the codebase, bilingual content structure, and
the Netlify Forms setup.
