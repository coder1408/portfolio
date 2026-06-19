import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/theme'

// Round pill toggle. Lives in the navbar (top-right) so the dark-mode circular
// reveal radiates from the corner, as designed. Sun/Moon cross-fade + rotate.
export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className="group relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-ink/10 bg-cream/60 text-ink transition-colors duration-300 hover:bg-ink/5"
    >
      <Sun
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
          dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
          dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  )
}
