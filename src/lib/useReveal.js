import { useEffect, useRef, useState } from 'react'

// Reveals an element once it scrolls into view. Returns a ref + boolean.
// Respects prefers-reduced-motion (shows immediately, no animation).
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            obs.unobserve(entry.target) // reveal once, then stop watching
          }
        })
      },
      { threshold, rootMargin },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return [ref, shown]
}
