import { useTheme } from '../../context/ThemeContext'

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme()
  const nextThemeLabel = isDarkMode ? 'Light mode' : 'Dark mode'
  const currentThemeLabel = isDarkMode ? 'Dark mode' : 'Light mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel.toLowerCase()}`}
      aria-pressed={isDarkMode}
      className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] px-4 py-2 text-left text-sm font-medium text-[color:var(--color-primary-contrast)] transition hover:border-[color:var(--color-primary-border-hover)] hover:bg-[color:var(--color-primary-soft-hover)]"
    >
      <span className="grid size-8 place-items-center rounded-full bg-[color:var(--color-surface-strong)] text-[color:var(--color-primary)] shadow-sm shadow-black/10">
        {isDarkMode ? (
          <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
            <path
              d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
          Theme
        </span>
        <span>{currentThemeLabel}</span>
      </span>
    </button>
  )
}

export default ThemeToggleButton