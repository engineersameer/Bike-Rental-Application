import Container from '../ui/Container'

const customerNavigationItems = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Bookings', href: '#bookings' },
  { label: 'Profile', href: '#profile' },
  { label: 'Support', href: '#support' },
]

function CustomerHeader({ onLogout, customerName }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-header)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-6 py-4">
        <a href="#dashboard" className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="grid size-10 place-items-center rounded-2xl border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] text-[color:var(--color-primary)] shadow-lg shadow-black/10">
            BR
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Customer header
            </span>
            <span className="text-base text-[color:var(--color-text)]">
              {customerName || 'Customer Home'}
            </span>
          </span>
        </a>

        <nav aria-label="Customer primary" className="hidden items-center gap-1 md:flex">
          {customerNavigationItems.map((item) => (
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
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[color:var(--color-text)] transition hover:border-[color:var(--color-primary-border)] hover:bg-[color:var(--color-surface-hover)]"
          >
            Log out
          </button>
        </div>
      </Container>
    </header>
  )
}

export default CustomerHeader