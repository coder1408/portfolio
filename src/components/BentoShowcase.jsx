import {
  Boxes, ShieldCheck, Brain, Bird, Crosshair, GaugeCircle, Bot, Wallet,
  ArrowUpRight, Layers, Award, Globe, BadgeCheck, Github, Lock,
} from 'lucide-react'
import { skills, projects, certifications, languages } from '../data/content'
import { accent } from '../lib/accents'
import Reveal from './Reveal'

// Resolve string icon names from content.js → actual lucide components.
const icons = { Boxes, ShieldCheck, Brain, Bird, Crosshair, GaugeCircle, Bot, Wallet }
const Icon = ({ name, ...props }) => {
  const C = icons[name] ?? Layers
  return <C {...props} />
}

const spanFor = (size) =>
  size === 'feature'
    ? 'sm:col-span-2 sm:row-span-2'
    : size === 'wide'
      ? 'sm:col-span-2'
      : ''

function ProjectCard({ p }) {
  const a = accent(p.accent)
  const feature = p.size === 'feature'
  const linked = Boolean(p.link)

  // Clickable repo card -> <a> (opens new tab); proprietary work -> plain <div>.
  const Wrapper = linked ? 'a' : 'div'
  const wrapperProps = linked ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream/70 p-6 backdrop-blur transition-all duration-300 ${
        linked ? `hover:-translate-y-1 hover:border-ink/20 hover:${a.glow}` : ''
      } ${feature ? 'justify-between' : 'justify-start'}`}
    >
      {/* soft accent wash in the corner */}
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${a.soft} blur-2xl transition-opacity duration-300 group-hover:opacity-80`} />

      <div className="relative flex items-start justify-between">
        <div className={`grid place-items-center rounded-2xl ${a.fill} ${feature ? 'h-14 w-14' : 'h-11 w-11'} text-obsidian/80`}>
          <Icon name={p.icon} className={feature ? 'h-7 w-7' : 'h-5 w-5'} />
        </div>
        <span className="rounded-full border border-ink/10 bg-cream/80 px-3 py-1 text-xs font-semibold text-ink/60">
          {p.tag}
        </span>
      </div>

      <div className="relative mt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-display font-bold leading-tight tracking-tight ${feature ? 'text-3xl' : 'text-xl'}`}>
            {p.title}
          </h3>
          {linked && (
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
          )}
        </div>
        <p className={`mt-2 text-ink/65 ${feature ? 'text-base max-w-md' : 'text-sm'}`}>{p.blurb}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.stack.map((t) => (
            <span key={t} className="rounded-lg bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/70">
              {t}
            </span>
          ))}
        </div>

        {/* footer affordance: "View code" for repos, a quiet marker for proprietary work */}
        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold">
          {linked ? (
            <span className="inline-flex items-center gap-1.5 text-ink/55 transition-colors group-hover:text-ink">
              <Github className="h-3.5 w-3.5" />
              View code
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-ink/35">
              <Lock className="h-3.5 w-3.5" />
              Proprietary work
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

function SkillsCard() {
  return (
    <div className="flex h-full flex-col justify-center rounded-3xl border border-ink/10 bg-obsidian p-6 text-chalk dark:border-chalk/10 dark:bg-white/[0.04]">
      <div className="flex items-center gap-2 text-chalk/60">
        <Layers className="h-4 w-4" />
        <span className="text-sm font-semibold uppercase tracking-widest">Toolkit</span>
      </div>
      <div className="mt-5 space-y-4">
        {skills.map((grp) => (
          <div key={grp.group} className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span className="w-28 shrink-0 font-display text-sm font-bold text-butter">{grp.group}</span>
            <div className="flex flex-wrap gap-2">
              {grp.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-chalk/15 bg-chalk/5 px-3 py-1 text-sm text-chalk/85 transition-colors duration-200 hover:border-chalk/40 hover:bg-chalk/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// "Beyond the code" — certifications + spoken languages.
function BeyondCard() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream/70 p-6 backdrop-blur">
      <div className="flex items-center gap-2 text-ink/50">
        <Award className="h-4 w-4 text-terracotta" />
        <span className="text-sm font-semibold uppercase tracking-widest">Beyond the code</span>
      </div>

      <div className="mt-5 grid flex-1 gap-6 sm:grid-cols-2">
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-1.5 font-display text-sm font-bold text-ink/70">
            <BadgeCheck className="h-4 w-4 text-mint" />
            Certifications
          </div>
          <ul className="mt-3 space-y-2 text-sm text-ink/65">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2 leading-snug">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <div className="flex items-center gap-1.5 font-display text-sm font-bold text-ink/70">
            <Globe className="h-4 w-4 text-sky" />
            Languages
          </div>
          <div className="mt-3 space-y-2">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center justify-between rounded-xl bg-ink/[0.04] px-3 py-1.5 text-sm">
                <span className="font-medium text-ink/80">{l.name}</span>
                <span className="text-xs text-ink/45">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BentoShowcase() {
  const feature = projects.find((p) => p.size === 'feature')
  const rest = projects.filter((p) => p.size !== 'feature')

  // Build an ordered list so we can stagger reveals + carry grid spans
  // on the Reveal wrapper (so col/row-span still apply to the grid item).
  const cells = [
    feature && { key: feature.title, span: 'sm:col-span-2', node: <ProjectCard p={feature} /> },
    { key: 'toolkit', span: 'sm:col-span-2', node: <SkillsCard /> },
    ...rest.map((p) => ({ key: p.title, span: spanFor(p.size), node: <ProjectCard p={p} /> })),
    { key: 'beyond', span: 'sm:col-span-2', node: <BeyondCard /> },
  ].filter(Boolean)

  return (
    <section id="work" className="cv-auto mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-terracotta">Selected Work</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Things I&apos;ve built.
          </h2>
        </div>
        <p className="max-w-xs text-sm text-ink/55">
          Research prototypes and production ML systems — from broadcast video to medical imaging. Each card is its own little world.
        </p>
      </Reveal>

      {/* Asymmetric bento grid — each cell reveals on scroll with a stagger */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:auto-rows-[minmax(13.5rem,auto)] sm:grid-cols-4">
        {cells.map((c, i) => (
          <Reveal key={c.key} delay={i * 30} className={c.span}>
            {c.node}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
