/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  // Accent classes in src/lib/accents.js are interpolated into hover:${...}
  // template strings, so the JIT scanner can't see them. Safelist them.
  safelist: [
    {
      pattern:
        /(bg|border|text)-(mint|terracotta|butter|lilac|sky|blush)(\/(25|30|40))?/,
      variants: ['hover'],
    },
    'hover:shadow-[0_18px_40px_-18px_rgba(73,197,150,0.65)]',
    'hover:shadow-[0_18px_40px_-18px_rgba(232,146,124,0.7)]',
    'hover:shadow-[0_18px_40px_-18px_rgba(252,223,122,0.8)]',
    'hover:shadow-[0_18px_40px_-18px_rgba(195,174,240,0.85)]',
    'hover:shadow-[0_18px_40px_-18px_rgba(166,214,239,0.85)]',
    'hover:shadow-[0_18px_40px_-18px_rgba(244,199,212,0.85)]',
    // accent `.text` classes (used via ${a.text} in Timeline)
    'text-emerald-800',
    'text-orange-900',
    'text-amber-900',
    'text-violet-900',
    'text-sky-900',
    'text-pink-900',
  ],
  theme: {
    extend: {
      colors: {
        // cream (surfaces) & ink (text) are CSS-variable backed so they flip
        // automatically in dark mode — every bg-cream/text-ink/border-ink, and
        // all their /opacity variants, re-theme without touching components.
        cream: 'rgb(var(--cream) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        // Non-flipping tokens for surfaces meant to stay dark in BOTH themes
        // (footer card, toolkit card, dark pills). Using ink/cream there would
        // invert them in dark mode; these keep a constant dark-on-light look.
        obsidian: '#1E1922',
        chalk: '#FBF7F0',
        mint: '#9EE6C4',
        terracotta: '#E8927C',
        butter: '#FCDF7A',
        lilac: '#C3AEF0',
        sky: '#A6D6EF',
        blush: '#F4C7D4',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-30px) translateX(14px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
    },
  },
  plugins: [],
}
