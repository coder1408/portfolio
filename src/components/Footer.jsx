import { Mail, Linkedin, Github, ArrowUpRight, Heart, Download } from 'lucide-react'
import { socials, profile } from '../data/content'
import { accent } from '../lib/accents'
import Reveal from './Reveal'

const icons = { Mail, Linkedin, Github }
const Icon = ({ name, ...props }) => {
  const C = icons[name] ?? Mail
  return <C {...props} />
}

export default function Footer() {
  return (
    <footer id="connect" className="cv-auto scroll-mt-24 px-5 pb-10 pt-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-ink/10 bg-ink p-8 text-cream sm:p-14">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-butter">Connect</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-mint via-sky to-lilac bg-clip-text text-transparent">
            worth remembering.
          </span>
        </h2>

        {/* primary actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-2 rounded-full bg-butter px-6 py-3 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint"
          >
            <Mail className="h-4 w-4" />
            Start a conversation
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/60 hover:bg-cream/10"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Download résumé
          </a>
        </div>

        {/* Oversized social buttons — dramatic pastel fill + ink text on hover */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {socials.map((s, i) => {
            const a = accent(s.accent)
            return (
              <Reveal key={s.label} delay={i * 40}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className={`group relative flex items-center justify-between overflow-hidden rounded-3xl border border-cream/15 bg-cream/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:${a.fill} hover:text-ink`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <Icon name={s.icon} className="h-6 w-6" />
                      <span className="font-display text-xl font-bold">{s.label}</span>
                    </div>
                    <p className="mt-2 text-sm text-cream/55 transition-colors duration-300 group-hover:text-ink/70">
                      {s.handle}
                    </p>
                  </div>
                  <ArrowUpRight className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row sm:items-center">
          <p>{profile.location}</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-terracotta text-terracotta" /> by {profile.name} · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
