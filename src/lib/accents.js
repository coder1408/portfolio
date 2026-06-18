// Maps an accent name (from content.js) to consistent Tailwind classes.
// Keeping this central means a card's fill, border, ring and dot all stay in sync.
export const accents = {
  mint: {
    fill: 'bg-mint',
    soft: 'bg-mint/30',
    border: 'border-mint',
    dot: 'bg-mint',
    text: 'text-emerald-800',
    glow: 'shadow-[0_18px_40px_-18px_rgba(73,197,150,0.65)]',
  },
  terracotta: {
    fill: 'bg-terracotta',
    soft: 'bg-terracotta/25',
    border: 'border-terracotta',
    dot: 'bg-terracotta',
    text: 'text-orange-900',
    glow: 'shadow-[0_18px_40px_-18px_rgba(232,146,124,0.7)]',
  },
  butter: {
    fill: 'bg-butter',
    soft: 'bg-butter/40',
    border: 'border-butter',
    dot: 'bg-butter',
    text: 'text-amber-900',
    glow: 'shadow-[0_18px_40px_-18px_rgba(252,223,122,0.8)]',
  },
  lilac: {
    fill: 'bg-lilac',
    soft: 'bg-lilac/30',
    border: 'border-lilac',
    dot: 'bg-lilac',
    text: 'text-violet-900',
    glow: 'shadow-[0_18px_40px_-18px_rgba(195,174,240,0.85)]',
  },
  sky: {
    fill: 'bg-sky',
    soft: 'bg-sky/30',
    border: 'border-sky',
    dot: 'bg-sky',
    text: 'text-sky-900',
    glow: 'shadow-[0_18px_40px_-18px_rgba(166,214,239,0.85)]',
  },
  blush: {
    fill: 'bg-blush',
    soft: 'bg-blush/40',
    border: 'border-blush',
    dot: 'bg-blush',
    text: 'text-pink-900',
    glow: 'shadow-[0_18px_40px_-18px_rgba(244,199,212,0.85)]',
  },
}

export const accent = (name) => accents[name] ?? accents.mint
