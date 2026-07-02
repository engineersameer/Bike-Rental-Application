import Container from '../ui/Container'
import { navigationItems } from '../../routes/navigation'

function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-footer)]">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            Bike Rental Platform
          </p>
          <p className="mt-2 max-w-md text-sm text-[color:var(--color-muted)]">
            A modular foundation for fleet browsing, bookings, payments, and support workflows.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-2">
          {navigationItems.map((item) => (
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

export default Footer
