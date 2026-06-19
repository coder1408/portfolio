import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

// Read the active theme. Mirrors the inline boot script in index.html so the
// first React render matches what's already on <html> (no flash / mismatch).
export function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function apply(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem(STORAGE_KEY, theme)
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Keep <html>.dark + storage in sync whenever theme changes.
  useEffect(() => {
    apply(theme)
  }, [theme])

  // Follow the OS preference until the user makes an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) setTheme(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Toggle with a circular reveal originating from the click point (the toggle
  // button, in the top-right). Falls back to an instant state swap — the body
  // + starfield CSS transitions still give a smooth cross-fade — where the
  // View Transitions API or motion isn't available.
  const toggle = (event) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!document.startViewTransition || reduce) {
      setTheme(next)
      return
    }

    // origin of the wipe = the toggle button's center (defaults to top-right)
    const x = event?.clientX ?? window.innerWidth
    const y = event?.clientY ?? 0
    document.documentElement.style.setProperty('--vt-x', `${x}px`)
    document.documentElement.style.setProperty('--vt-y', `${y}px`)

    document.startViewTransition(() => {
      // flushSync-style: apply synchronously so the API captures the new frame
      setTheme(next)
      apply(next)
    })
  }

  return { theme, toggle }
}
