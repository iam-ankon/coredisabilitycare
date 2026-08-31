# Core Disability Care — Website

A real **multi-page** React + Vite site for Core Disability Care Pty Ltd, built to
match the structure of a reference NDIS provider site: two-tier header with a
Day Programs mega-menu, a rotating photo hero, a colourful four-block service
strip, and a suburb-by-suburb Day Program network — using real routes
(`react-router-dom`), not scroll anchors on one page.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about-us` | About Us |
| `/day-programs` | Day Programs overview + suburb directory |
| `/day-programs/:slug` | Individual Day Program hub (e.g. `/day-programs/bankstown`) |
| `/group-home-sil` | Supported Independent Living |
| `/respite` | Respite (STA) |
| `/other-services` | Support Coordination, Homecare, Community Access, Social Club |
| `/careers` | Open roles + work experience |
| `/contact` | Contact form |

Shared header, footer and closing CTA band live in `src/layout/Layout.jsx` and
wrap every page automatically via React Router's `<Outlet />`.

## Design concept

- **Palette:** sky blue (`#2E9FE0`) and hot pink (`#E91E8C`) as the two primary
  brand colours, deep navy (`#16213E`) for the header/footer/dark sections, plus
  green and orange as accents in the four-block service strip.
- **Type:** Baloo 2 (bold, rounded display headings) paired with Caveat (a
  handwritten script for section eyebrows like "Our Services") and Inter for
  body copy — all loaded from Google Fonts.
- **Brand mark:** an original "radiating dots" mark (`CoreMark` in
  `src/components/ui.jsx`), not a copy of any other provider's logo.
- **Photography:** real, free-to-use photos from Unsplash (Unsplash License —
  free for commercial use, no attribution required), referenced in
  `src/data.js`. Swap these for your own photography whenever you have it.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`) and click
through the nav — every link is a real route.

## Project structure

```
core-disability-care/
├── index.html
├── src/
│   ├── main.jsx              # entry point, wraps App in BrowserRouter
│   ├── App.jsx                # route definitions
│   ├── data.js                 # all copy, images, suburb list, services
│   ├── styles.css               # global stylesheet
│   ├── layout/Layout.jsx         # shared header + outlet + CTA band + footer
│   ├── components/
│   │   ├── Header.jsx             # two-tier nav incl. Day Programs mega-menu
│   │   ├── Footer.jsx              # suburb links, types of care, contact
│   │   └── ui.jsx                   # CoreMark, Spark, Reveal, PageHero, CtaBand
│   └── pages/                        # one file per route, listed above
└── preview/App.jsx             # single-file state-based version used only
                                  # for the chat preview artifact — not part
                                  # of the real site, safe to delete
```

Edit `src/data.js` to change services, suburbs, testimonials, FAQs, open roles,
etc. without touching layout code.

## A note on the CSS

`src/styles.css` uses `:where()` for the base link-colour reset:

```css
.cdc a { text-decoration: none; }
.cdc :where(a) { color: inherit; }
```

`:where()` carries zero CSS specificity, so any component style (button
colours, nav link colours, footer link colours) reliably wins. Without it, a
plain `.cdc a { color: inherit }` rule (specificity 0,1,1) would silently beat
single-class utilities like `.cdc-nav-link { color: white }` (specificity
0,1,0) — which is exactly what caused nav text to only appear on `:hover` in
an earlier version of this build. Keep using `:where()` here if you add more
global link resets.

## Things to swap before going live

1. **Contact details** — phone, email, address and ABN in `src/data.js` and
   `src/components/Footer.jsx` are placeholders.
2. **Contact form** (`src/pages/Contact.jsx`) — currently shows a success
   message locally. Wire it to a real backend (Formspree, Netlify Forms, your
   NDIS CRM, etc.).
3. **Day Program hub addresses** — each suburb page currently says "call for
   the exact hub address"; add real addresses in `src/pages/DayProgramDetail.jsx`
   once known.
4. **Careers list** — sample roles in `src/data.js` (`OPEN_ROLES`); connect to
   a real job board if you have one.
5. **Photography** — swap the Unsplash placeholders in `src/data.js` for real
   photos of your team, homes and participants.

## Building for production

```bash
npm run build   # outputs static files to dist/
npm run preview # serve the production build locally to check it
```

### Important: SPA fallback on your host

Because this uses real client-side routes (e.g. `/day-programs/bankstown`),
your host needs to serve `index.html` for any unknown path so React Router can
take over — otherwise a direct link or page refresh on a subpage will 404.

- **Netlify:** add a `_redirects` file in `public/` with: `/* /index.html 200`
- **Vercel:** works out of the box for Vite SPAs, or add a rewrite in `vercel.json`
- **Cloudflare Pages / GitHub Pages / other static host:** look for their
  "SPA fallback" or "single-page app" setting and point it at `index.html`
