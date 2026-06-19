// Atmospheric background: a faint cream→lavender mesh + slowly floating
// pastel blobs. Sits behind everything (-z-10). The page-wide grain overlay
// lives in index.css (.grain::before) so it stays above content.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient mesh — softened in dark mode so it reads as a faint aurora
          over the plum-ink base rather than bright pastel washes */}
      <div
        className="absolute inset-0 dark:opacity-40"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 0%, rgba(195,174,240,0.35) 0%, transparent 60%),' +
            'radial-gradient(50% 50% at 100% 10%, rgba(166,214,239,0.30) 0%, transparent 55%),' +
            'radial-gradient(45% 45% at 80% 100%, rgba(158,230,196,0.30) 0%, transparent 60%),' +
            'radial-gradient(50% 50% at 0% 90%, rgba(252,223,122,0.28) 0%, transparent 60%)',
        }}
      />

      {/* starfield — only visible in dark mode (opacity handled in index.css) */}
      <div className="starfield" />

      {/* floating pastel blobs — promoted to their own compositor layers so the
          forever-running animation doesn't repaint the rest of the page */}
      <div className="absolute -left-24 top-24 h-72 w-72 animate-float-slow rounded-full bg-lilac/45 blur-3xl [will-change:transform] [transform:translateZ(0)]" />
      <div className="absolute right-[-6rem] top-1/3 h-80 w-80 animate-float rounded-full bg-mint/40 blur-3xl [will-change:transform] [transform:translateZ(0)]" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-10 left-1/3 h-64 w-64 animate-float-slow rounded-full bg-blush/45 blur-3xl [will-change:transform] [transform:translateZ(0)]" style={{ animationDelay: '3s' }} />
    </div>
  )
}
