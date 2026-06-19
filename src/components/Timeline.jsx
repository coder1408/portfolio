import {
  Sparkles, Video, ShieldAlert, Telescope, GraduationCap, Dot, MapPin, ArrowDownRight,
} from 'lucide-react'
import { timeline } from '../data/content'
import { accent } from '../lib/accents'
import Reveal from './Reveal'

const icons = { Sparkles, Video, ShieldAlert, Telescope, GraduationCap }
const Icon = ({ name, ...props }) => {
  const C = icons[name] ?? Dot
  return <C {...props} />
}

export default function Timeline() {
  return (
    <section id="journey" className="cv-auto mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* ── Left: sticky intro panel — uses the side space instead of leaving it blank ── */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-lilac">The Journey</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            Where I&apos;ve been.
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink/65">
            From automating an observatory to shipping computer-vision systems for the NBA — a few years of
            chasing hard problems.
          </p>

          {/* decorative stat tiles fill the open space */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-ink/10 bg-cream/60 px-5 py-4 backdrop-blur">
              <p className="font-display text-3xl font-extrabold leading-none">{timeline.length}</p>
              <p className="mt-1 text-sm text-ink/55">milestones</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream/60 px-5 py-4 backdrop-blur">
              <p className="font-display text-3xl font-extrabold leading-none">4+</p>
              <p className="mt-1 text-sm text-ink/55">years building</p>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-cream/60 px-5 py-4 text-sm font-medium text-ink/70 backdrop-blur">
              <MapPin className="h-4 w-4 text-terracotta" />
              Pune, India
            </div>
          </div>

          <ArrowDownRight className="mt-8 hidden h-8 w-8 animate-float text-ink/30 lg:block" />
        </Reveal>

        {/* ── Right: the timeline list, full single-column spine ── */}
        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-4 top-2 -z-0 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lilac via-mint to-butter" />

          <div className="space-y-6">
            {timeline.map((item, i) => {
              const a = accent(item.accent)
              return (
                <Reveal key={item.role + item.period} delay={i * 40} className="relative flex items-start gap-5 pl-0">
                  {/* accent dot on the spine */}
                  <span
                    className={`relative z-10 mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full ${a.fill} ring-4 ring-cream`}
                  >
                    <Icon name={item.icon} className="h-4 w-4 text-obsidian/80" />
                  </span>

                  {/* card */}
                  <div className={`flex-1 rounded-3xl border border-ink/10 bg-cream/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:${a.glow}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-bold tracking-tight">{item.role}</h3>
                        <p className="text-sm font-medium text-ink/55">{item.org}</p>
                      </div>
                      <span className={`inline-block rounded-full ${a.soft} px-3 py-1 text-xs font-bold ${a.text} dark:bg-white/10 dark:text-chalk`}>
                        {item.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm text-ink/65">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2 leading-snug">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
