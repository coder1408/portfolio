import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'

// Floating pill nav: active-section highlight + mobile menu.
export default function Navbar() {
  const [active, setActive] = useState('top')
  const [open, setOpen] = useState(false)

  // Track which section is currently in view to highlight its nav link.
  useEffect(() => {
    const ids = ['top', ...navLinks.map((l) => l.href.replace('#', ''))]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // a section counts as "active" when it crosses the upper third
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-4 z-40 px-4">
      <nav className="mx-auto max-w-6xl rounded-3xl border border-ink/10 bg-cream/70 px-4 py-2.5 shadow-[0_10px_30px_-18px_rgba(36,31,27,0.5)] backdrop-blur-md sm:rounded-full sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-sm font-extrabold tracking-tight text-butter transition-transform duration-300 group-hover:rotate-12">
              IJ
            </span>
            {profile.firstName}
          </a>

          {/* desktop links */}
          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href.replace('#', '')
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'bg-ink/10 text-ink' : 'text-ink/60 hover:bg-ink/5 hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="group hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition-all duration-300 hover:bg-lilac hover:text-ink sm:flex"
            >
              Say hi
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-cream/60 text-ink transition-colors hover:bg-ink/5 sm:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu panel */}
        {open && (
          <div className="mt-3 flex flex-col gap-1 border-t border-ink/10 pt-3 sm:hidden">
            {navLinks.map((l) => {
              const isActive = active === l.href.replace('#', '')
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'bg-ink/10 text-ink' : 'text-ink/70 hover:bg-ink/5'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-cream"
            >
              Say hi
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
