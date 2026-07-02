import { useState } from 'react'
import AuthModal from '../../components/auth/AuthModal'
import Container from '../../components/ui/Container'

const metrics = [
  { value: '120+', label: 'Curated bikes ready for booking' },
  { value: '24/7', label: 'Support and trip coordination' },
  { value: '98%', label: 'Average rider satisfaction goal' },
]

const pillars = [
  {
    title: 'Premium booking flow',
    description:
      'Browse, compare, and reserve bikes from a clean, polished interface built for speed and clarity.',
  },
  {
    title: 'Consistent app-wide theme',
    description:
      'Light and dark modes are shared across the entire application through a common theme layer.',
  },
  {
    title: 'Scalable platform foundation',
    description:
      'The structure is ready for new features without forcing a redesign of the existing experience.',
  },
]

function HomePage() {
  const [authMode, setAuthMode] = useState(null)

  const openLogin = () => setAuthMode('login')
  const openSignup = () => setAuthMode('signup')
  const closeAuth = () => setAuthMode(null)

  return (
    <>
      <section id="overview" className="border-b border-[color:var(--color-border)]">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] px-4 py-2 text-sm font-medium text-[color:var(--color-primary-contrast)]">
              Premium bike rental, bookings, and rider support
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-6xl">
                Ride farther with a platform built for discovery and speed.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[color:var(--color-muted)] sm:text-lg">
                Explore premium bikes, reserve in seconds, and manage every trip from a polished
                experience that feels made for riders.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openLogin}
                className="inline-flex items-center rounded-full bg-[color:var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-strong)]"
              >
                Login
              </button>
              <button
                type="button"
                onClick={openSignup}
                className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] px-5 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:border-[color:var(--color-primary-border)] hover:bg-[color:var(--color-surface-hover)]"
              >
                Sign Up
              </button>
            </div>

            <p className="max-w-xl text-sm leading-6 text-[color:var(--color-muted)]">
              Built for commuters, weekend riders, and adventure seekers who want a premium rental
              experience without friction.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_24px_80px_rgba(2,8,23,0.18)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_34%),linear-gradient(145deg,transparent_0%,rgba(56,189,248,0.08)_45%,transparent_100%)]" />
            <div className="relative rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                    Ride preview
                  </p>
                  <p className="mt-2 text-xl font-semibold text-[color:var(--color-text)]">
                    Night ride ready
                  </p>
                </div>
                <div className="grid size-14 place-items-center rounded-2xl border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] text-[color:var(--color-primary-contrast)]">
                  BR
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] p-4">
                  <p className="text-sm text-[color:var(--color-muted)]">Featured route</p>
                  <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">
                    Coastal ride with scenic stops
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                      Duration
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">
                      2 hours
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                      Support
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">
                      Always on
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(2,8,23,0.08),rgba(2,8,23,0.22))] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-[color:var(--color-muted)]">Experience</p>
                      <p className="text-base font-semibold text-[color:var(--color-text)]">
                        Premium, flexible, and mobile-ready.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-8 rounded-full bg-[color:var(--color-primary)]" />
                      <span className="h-2 w-2 rounded-full bg-[color:var(--color-border)]" />
                      <span className="h-2 w-2 rounded-full bg-[color:var(--color-border)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Metrics" className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)]">
        <Container className="grid gap-4 py-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5"
            >
              <p className="text-2xl font-semibold text-[color:var(--color-text)]">{metric.value}</p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                {metric.label}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <section id="how-it-works" className="border-b border-[color:var(--color-border)]">
        <Container className="py-16 lg:py-20">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
              Project structure
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-text)] sm:text-4xl">
              Clear boundaries now, less restructuring later.
            </h2>
            <p className="text-base leading-7 text-[color:var(--color-muted)]">
              Reusable UI lives in shared component folders, pages stay focused on composition, and
              server responsibilities are separated by concern from the start.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-lg shadow-black/10"
              >
                <h3 className="text-lg font-semibold text-[color:var(--color-text)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <AuthModal
        isOpen={authMode !== null}
        mode={authMode || 'login'}
        onClose={closeAuth}
        onModeChange={setAuthMode}
      />
    </>
  )
}

export default HomePage
