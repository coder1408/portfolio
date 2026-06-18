# Ishan Joshi — Portfolio

A modern, high-energy personal portfolio built in the **Bento Grid & Pastel Pop**
aesthetic: a warm cream/lavender canvas, modular bento cards in playful pastels
(mint, terracotta, buttery yellow, electric lilac), oversized display type, and
floating micro-interactions.

**Stack:** React + Vite + Tailwind CSS · icons by [`lucide-react`](https://lucide.dev) (the icon set used by shadcn/ui).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Editing content

All copy and data live in **one file**: [`src/data/content.js`](src/data/content.js).
Edit the `profile`, `stats`, `skills`, `projects`, `timeline`, and `socials`
exports — the UI updates automatically. No JSX changes needed.

- **Accent colors** per card are chosen by name (`mint`, `terracotta`, `butter`,
  `lilac`, `sky`, `blush`); the mapping lives in `src/lib/accents.js`.
- **Project card size** is set via `size`: `'feature'` (big 2×2), `'wide'`
  (2 cols), or `'standard'` (1 cell).
- **Icons** are referenced by their lucide name string (e.g. `'Boxes'`); add new
  ones to the `icons` map in the relevant component.

## Structure

```
src/
  App.jsx              assembles all sections
  index.css            Tailwind layers, fonts, grain overlay, keyframes
  data/content.js      ← edit your content here
  lib/accents.js       pastel accent → Tailwind class map
  components/
    Background.jsx      gradient mesh + floating pastel blobs
    Navbar.jsx          floating pill nav
    Hero.jsx            split hero + floating avatar card
    BentoShowcase.jsx   asymmetric bento grid (projects, stats, skills)
    Timeline.jsx        alternating milestone timeline
    Footer.jsx          oversized social buttons
```

> Profile image is a colored placeholder (initials). Drop a real image into
> `Hero.jsx` where the avatar `<div>` lives when ready.
