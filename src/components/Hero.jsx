import { ArrowRight, Mail, Linkedin, MapPin, Circle } from 'lucide-react'
import { profile } from '../data/content'

// Split hero: oversized headline (left) + floating avatar card (right).
// Load-in is staggered via inline animationDelay on .reveal elements.
export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ── Left: copy ── */}
        <div>
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream/60 px-4 py-1.5 text-sm font-medium backdrop-blur"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role}
          </div>

          <h1 className="reveal mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl" style={{ animationDelay: '0.15s' }}>
            <span className="block">{profile.headline[0]}</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-terracotta via-lilac to-sky bg-clip-text text-transparent">
                {profile.headline[1]}
              </span>
              <span className="absolute -bottom-1 left-0 z-0 h-3 w-full -rotate-1 bg-butter/70" />
            </span>
            <span className="block">{profile.headline[2]}</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink/70" style={{ animationDelay: '0.25s' }}>
            {profile.blurb}
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '0.35s' }}>
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-cream transition-all duration-300 hover:bg-terracotta hover:shadow-[0_16px_36px_-14px_rgba(232,146,124,0.9)]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 px-6 py-3 font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:bg-mint"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-cream/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="reveal mt-7 flex items-center gap-2 text-sm text-ink/50" style={{ animationDelay: '0.45s' }}>
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>
        </div>

        {/* ── Right: floating avatar card ── */}
        <div className="reveal relative mx-auto w-full max-w-md" style={{ animationDelay: '0.3s' }}>
          {/* decorative ring */}
          <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[2.5rem] border-2 border-dashed border-ink/15" />

          <div className="animate-float rounded-[2.25rem] border border-ink/10 bg-cream/70 p-5 shadow-[0_30px_70px_-30px_rgba(36,31,27,0.5)] backdrop-blur">
            {/* avatar */}
            <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-lilac via-blush to-butter">
              <img
                src="/ishan.jpg"
                alt={profile.name}
                className="h-full w-full scale-125 object-cover"
                style={{ objectPosition: '44% 18%' }}
              />
              {/* subtle pastel wash to tie the photo into the palette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-lilac/30 via-transparent to-butter/20 mix-blend-soft-light" />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-cream">
              <div>
                <p className="font-display text-base font-bold leading-none">{profile.name}</p>
                <p className="mt-1 text-xs text-cream/60">{profile.availability}</p>
              </div>
              <Circle className="h-3 w-3 animate-pulse fill-mint text-mint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
