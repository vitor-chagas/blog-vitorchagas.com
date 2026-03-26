# Blog vitorchagas.com

Personal blog and portfolio built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/).

Covers programming, sports, financial markets, DeFi, and lessons learned from shipping products.

## Features

- **Blog** — Markdown-based posts with tags and date sorting
- **Projects** — Showcase with GitHub integration and status tracking (active, archived, WIP)
- **Live Market Ticker** — Real-time crypto prices via Binance WebSocket, stock indices and commodities via Yahoo Finance, and the Crypto Fear & Greed Index
- **Certifications** — Azure and Microsoft credential badges with verification links
- **CV Download** — Downloadable resume directly from the site

## Tech Stack

- Astro 6
- TailwindCSS 4 with `@tailwindcss/typography`
- TypeScript (strict mode)
- Zod for content schema validation
## Project Structure

```
src/
├── pages/           # Routes (index, blog, projects)
├── layouts/         # Base layout with nav and footer
├── components/      # TickerTape (live market data)
├── content/
│   ├── blog/        # Markdown blog posts
│   └── projects/    # Markdown project pages
└── styles/          # Global CSS and Tailwind theme
```

## Getting Started

```bash
npm install
npm run dev        # Dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Preview production build
```

### Docker

```bash
docker compose up --build   # Runs at localhost:8080
```

## License

All rights reserved.
