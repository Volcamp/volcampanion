# Volcampanion

Companion PWA for the [Volcamp](https://www.volcamp.io) conference — browse the
programme, speakers, and keep your favourite talks. **V2 is backend-free.**

## How it works

There is no server and no database. The conference content lives in the public
Jekyll repo [`Volcamp/volcamp.github.io`](https://github.com/Volcamp/volcamp.github.io)
(`_talks/*.md`, `_speakers/*.md`, `_config.yml`, agenda breaks, speaker photos).
A build-time script parses it into a single JSON bundle plus optimized avatars,
both committed to the repo; the app fetches the bundle at runtime.

```
Volcamp Jekyll content ──(generate-data.js)──▶ public/data/volcamp-2026.json
                                            └──▶ public/img/speakers/*.webp
                                                        │
                                              PWA fetches on each open
                                              (network-first, cached offline)
```

- **Favourites** are stored in the browser's `localStorage` — no account needed.
- **Feedback / notes** deep-link out to the conference's OpenFeedback page per talk.
- **Sync** happens on every app open (network-first, cached fallback). To pick up
  new conference content, re-run `npm run generate-data` and redeploy — the
  refreshed `volcamp-2026.json` (and avatars) ship with the build.

## Stack

React 19 · TypeScript · Vite · `vite-plugin-pwa` (Workbox) · React Router.

## Develop

```bash
cd frontend
npm install
npm run generate-data   # refresh public/data/volcamp-2026.json from GitHub
npm run dev             # http://localhost:5173
```

## Build & preview

```bash
cd frontend
npm run build           # type-checks + builds + generates the service worker
npm run preview
```

Deploy `frontend/dist/` to any static host. Configure the host to serve
`index.html` for unknown routes (SPA fallback).

## Roll to a new edition

1. Update `EDITION_YEAR`/output filename in `frontend/scripts/generate-data.js`.
2. Update `DATA_URL` in `frontend/src/data/config.ts`.
3. Re-run `npm run generate-data`.
