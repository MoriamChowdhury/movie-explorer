# 🎬 MovieExplorer

A responsive Movie Explorer built with React, Vite, and Tailwind CSS. Browse shows,
search by title, and view details in a modal — all powered by the free
[TVMaze API](https://www.tvmaze.com/api) (no API key required).

## Features

- **Home page** — navbar, hero banner with CTA, footer
- **Movie listing page** — live search-as-you-type, responsive card grid (2 / 3 / 4 columns)
- **Details modal** — backdrop image, rating, release date, genre, overview; closable via
  the ✕ button, the Close button, `Esc`, or clicking outside the modal
- Fully responsive: single column on mobile, 3–4 column grid on desktop

## Tech stack

- React 18 + React Router
- Vite (build tool / dev server)
- Tailwind CSS
- TVMaze REST API

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  api/tvmaze.js         # API calls (search, list shows, show details)
  components/            # Navbar, Footer, HeroBanner, SearchBar, MovieCard, MovieGrid, MovieModal
  pages/                 # Home.jsx, MovieListing.jsx
  App.jsx                # Route definitions
  main.jsx               # App entry point
```

## Deploying

### Vercel
1. Push this project to a public GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Leave build command (`npm run build`) and output
   directory (`dist`) as detected. Deploy.

### Netlify
1. Push this project to a public GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

## Data source

All movie/show data and poster images come live from the TVMaze API:
- `GET /search/shows?q=:query` — search by title
- `GET /shows` — all shows
- `GET /shows/:id` — single show details

No API key or `.env` setup is needed.
