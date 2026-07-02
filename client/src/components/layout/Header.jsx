import Container from '../ui/Container'
import ThemeToggleButton from './ThemeToggleButton'
import { navigationItems } from '../../routes/navigation'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-header)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-6 py-4">
        <a href="#overview" className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="grid size-10 place-items-center rounded-2xl border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] text-[color:var(--color-primary)] shadow-lg shadow-black/10">
            BR
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Bike Rental
            </span>
            <span className="text-base text-[color:var(--color-text)]">Platform Foundation</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[color:var(--color-muted)] transition hover:bg-[color:var(--color-surface-hover)] hover:text-[color:var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <a
            href="#support"
            className="inline-flex items-center rounded-full border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] px-4 py-2 text-sm font-medium text-[color:var(--color-primary-contrast)] transition hover:border-[color:var(--color-primary-border-hover)] hover:bg-[color:var(--color-primary-soft-hover)]"
          >
            Contact team
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header
