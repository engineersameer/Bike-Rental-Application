import Container from '../../components/ui/Container'
import CustomerLayout from '../../layouts/CustomerLayout/CustomerLayout'

const quickActions = [
  {
    title: 'Browse available bikes',
    description: 'See the latest inventory, pickup points, and pricing in one clean view.',
  },
  {
    title: 'Review your bookings',
    description: 'Track active reservations, trip history, and ride status at a glance.',
  },
  {
    title: 'Get support fast',
    description: 'Reach out when you need help with trip changes, payments, or pickup issues.',
  },
]

function CustomerHomePage({ authSession, onLogout }) {
  const customerName = authSession?.fullName || authSession?.user?.fullName || 'Customer Home'
  const statusTitle = authSession?.mode === 'signup' ? 'Account created successfully' : 'Signed in successfully'

  return (
    <CustomerLayout customerName={customerName} onLogout={onLogout}>
      <section id="dashboard" className="border-b border-[color:var(--color-border)]">
        <Container className="grid gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:py-20">
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-400/25 bg-emerald-500/10 p-5 text-emerald-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                Success
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-[color:var(--color-text)] sm:text-4xl">
                {statusTitle}
              </h1>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                Welcome {customerName}. Your session is active and your customer area is ready.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
                Customer home
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[color:var(--color-muted)]">
                This view is the reusable landing area after login or signup. Keep the structure
                modular so booking, account, and support sections can be expanded later without
                changing the layout shell.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_24px_80px_rgba(2,8,23,0.18)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Session summary
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  User
                </p>
                <p className="mt-2 text-base font-semibold text-[color:var(--color-text)]">
                  {authSession?.email || authSession?.user?.email || 'N/A'}
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  Mode
                </p>
                <p className="mt-2 text-base font-semibold text-[color:var(--color-text)]">
                  {authSession?.mode || 'login'}
                </p>
              </div>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  Message
                </p>
                <p className="mt-2 text-base font-semibold text-[color:var(--color-text)]">
                  {authSession?.message || 'Authentication completed successfully.'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="bookings" className="border-b border-[color:var(--color-border)]">
        <Container className="py-16 lg:py-20">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
              Quick actions
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-text)] sm:text-4xl">
              Everything a customer needs, placed where it belongs.
            </h2>
            <p className="text-base leading-7 text-[color:var(--color-muted)]">
              Each card below is intentionally simple so you can expand the flow later into real
              booking, profile, and support modules.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {quickActions.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-lg shadow-black/10"
              >
                <h3 className="text-lg font-semibold text-[color:var(--color-text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="profile" className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)]">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
              <h3 className="text-lg font-semibold text-[color:var(--color-text)]">Profile</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                Personal information, saved addresses, and preferences can live here.
              </p>
            </article>
            <article id="support" className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
              <h3 className="text-lg font-semibold text-[color:var(--color-text)]">Support</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                Put support tickets, live chat, or contact details in this section later.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </CustomerLayout>
  )
}

export default CustomerHomePage