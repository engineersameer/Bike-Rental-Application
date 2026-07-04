import Container from '../ui/Container'
import { navigationItems } from '../../routes/navigation'

const customerFooterItems = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Bookings', href: '#bookings' },
  { label: 'Profile', href: '#profile' },
  { label: 'Support', href: '#support' },
]

function CustomerFooter() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-footer)]">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            customer footer
          </p>
          <p className="mt-2 max-w-md text-sm text-[color:var(--color-muted)]">
            Your booking space is organized for quick action, clear status, and easy support access.
          </p>
        </div>

        <nav aria-label="Customer footer" className="flex flex-wrap gap-2">
          {customerFooterItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm text-[color:var(--color-muted)] transition hover:border-[color:var(--color-primary-border)] hover:bg-[color:var(--color-surface-hover)] hover:text-[color:var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  )
}

export default CustomerFooter