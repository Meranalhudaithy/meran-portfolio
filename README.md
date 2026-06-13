# Meran Terminal Portfolio

A one-page portfolio for Meran Alhudaithy built with Next.js App Router, TypeScript, and Tailwind CSS v4. The interface uses a terminal/CLI visual system with reusable panes, centralized CSS tokens, ASCII typography, scanlines, command navigation, and responsive layouts.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- CSS animations only — no animation dependency

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
```

## Main files

- `app/page.tsx` — one-page composition
- `app/globals.css` — design tokens, terminal visuals, responsive behavior
- `lib/portfolio.ts` — all editable portfolio content
- `components/TerminalFrame.tsx` — reusable terminal pane
- `components/CommandConsole.tsx` — interactive command navigation
- `public/Meran-Alhudaithy-Resume.pdf` — downloadable resume

## Customize

Update text and project content in `lib/portfolio.ts`. Add GitHub and LinkedIn links to the contact section when available.

## Deploy free on Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default Next.js settings.
4. Deploy.

A custom domain is optional; Vercel provides a free `vercel.app` URL.
