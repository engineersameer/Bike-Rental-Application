import { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { loginUser, signupUser } from '../../services/api/auth'

const MODE_TRANSITION_DURATION = 280

function Field({ label, type = 'text', placeholder, autoComplete, icon, rightSlot, name }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-[color:var(--color-text)]">{label}</span>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[color:var(--color-muted)]">
          {icon}
        </span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] py-3.5 pl-12 pr-4 text-sm text-[color:var(--color-text)] outline-none transition placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-primary-border)] focus:ring-2 focus:ring-[color:var(--color-primary-soft)]"
        />
        {rightSlot ? <div className="absolute inset-y-0 right-3 flex items-center">{rightSlot}</div> : null}
      </div>
    </label>
  )
}

function SocialButton({ label, accent, glyph }) {
  return (
    <button
      type="button"
      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] px-4 py-3 text-sm font-medium text-[color:var(--color-text)] transition hover:border-[color:var(--color-primary-border)] hover:bg-[color:var(--color-surface-hover)]"
    >
      <span
        className="grid size-7 place-items-center rounded-full text-xs font-semibold"
        style={{ backgroundColor: accent, color: '#ffffff' }}
      >
        {glyph}
      </span>
      {label}
    </button>
  )
}

const authContent = {
  login: {
    eyebrow: 'Welcome back',
    title: 'Sign in to continue your ride',
    subtitle: 'Access your bookings, saved bikes, and trip history without leaving the home page.',
    primaryAction: 'Login',
    switchPrompt: "No account yet?",
    switchAction: 'Sign Up',
    footerNote: 'Back to the home page any time with a single click.',
  },
  signup: {
    eyebrow: 'Join the platform',
    title: 'Create your account in seconds',
    subtitle: 'Set up your profile once and unlock faster booking, saved preferences, and support.',
    primaryAction: 'Sign Up',
    switchPrompt: 'Already have an account?',
    switchAction: 'Login',
    footerNote: 'Your account helps keep every ride organized and easy to manage.',
  },
}

function AuthFormPanel({
  mode,
  isDarkMode,
  onSwitchMode,
  onClose,
  onSubmit,
  authError,
  isSubmitting,
  showPassword,
  setShowPassword,
}) {
  const content = authContent[mode]

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            {content.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[color:var(--color-text)]">{content.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--color-muted)]">
            {content.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[color:var(--color-text)] transition hover:border-[color:var(--color-primary-border)] hover:bg-[color:var(--color-surface-hover)]"
        >
          Back to Home
        </button>
      </div>

      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        <div className="space-y-4">
          {mode === 'signup' ? (
            <Field
              label="Full name"
              name="fullName"
              placeholder="Enter your full name"
              autoComplete="name"
              icon={
                <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                  <path
                    d="M12 12.5a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M4.5 20a7.5 7.5 0 0 1 15 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
          ) : null}

          <Field
            label="Email address"
            name="email"
            placeholder="name@example.com"
            autoComplete="email"
            icon={
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                <path
                  d="M4.5 6.5h15a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16V8a1.5 1.5 0 0 1 1.5-1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m4.8 7.2 7.2 5.2 7.2-5.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <Field
            label="Password"
            name="password"
            placeholder="Enter your password"
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            type={showPassword ? 'text' : 'password'}
            icon={
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                <path
                  d="M6.5 11V8.5a5.5 5.5 0 1 1 11 0V11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <rect
                  x="4.5"
                  y="11"
                  width="15"
                  height="9"
                  rx="2.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            }
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-[color:var(--color-muted)] transition hover:bg-[color:var(--color-surface-hover)] hover:text-[color:var(--color-text)]"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            }
          />

          {mode === 'signup' ? (
            <label className="flex items-start gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4 text-sm text-[color:var(--color-muted)]">
              <input
                type="checkbox"
                className="mt-1 size-4 rounded border-[color:var(--color-border)] bg-transparent text-[color:var(--color-primary)] focus:ring-[color:var(--color-primary-soft)]"
              />
              <span>
                I agree to the Terms & Conditions and understand that this account will be used
                to manage bookings and support requests.
              </span>
            </label>
          ) : null}
        </div>

        {authError ? (
          <div
            role="alert"
            className="rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
          >
            {authError}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--color-primary)] px-4 py-3.5 text-sm font-semibold text-[color:var(--color-primary-contrast)] transition hover:bg-[color:var(--color-primary-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Please wait...' : content.primaryAction}
        </button>

        <div className="flex items-center gap-3 py-2">
          <span className="h-px flex-1 bg-[color:var(--color-border)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            or continue with
          </span>
          <span className="h-px flex-1 bg-[color:var(--color-border)]" />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <SocialButton label="Google" accent="#ef4444" glyph="G" />
          <SocialButton label="Apple" accent={isDarkMode ? '#ffffff' : '#0f172a'} glyph="A" />
          <SocialButton label="GitHub" accent="#111827" glyph="#" />
        </div>

        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] p-4 text-sm text-[color:var(--color-muted)]">
          <span>{content.switchPrompt} </span>
          <button
            type="button"
            onClick={onSwitchMode}
            className="font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-primary-strong)]"
          >
            {content.switchAction}
          </button>
          <span className="block pt-2 text-xs text-[color:var(--color-muted)]">{content.footerNote}</span>
        </div>
      </form>
    </>
  )
}

function AuthModal({ isOpen, mode, onClose, onModeChange, onSuccess }) {
  const { isDarkMode } = useTheme()
  const [shouldRender, setShouldRender] = useState(isOpen)
  const [showPassword, setShowPassword] = useState(false)
  const [displayMode, setDisplayMode] = useState(mode)
  const [nextMode, setNextMode] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      return undefined
    }

    const timeoutId = window.setTimeout(() => setShouldRender(false), 220)
    return () => window.clearTimeout(timeoutId)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setDisplayMode(mode)
      setNextMode(null)
      setAuthError('')
      setIsSubmitting(false)
      return undefined
    }

    if (mode === displayMode) {
      setNextMode(null)
      return undefined
    }

    setNextMode(mode)

    const timeoutId = window.setTimeout(() => {
      setDisplayMode(mode)
      setNextMode(null)
    }, MODE_TRANSITION_DURATION)

    return () => window.clearTimeout(timeoutId)
  }, [displayMode, isOpen, mode])

  useEffect(() => {
    if (!shouldRender) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [onClose, shouldRender])

  if (!shouldRender) {
    return null
  }

  const currentMode = nextMode ?? displayMode
  const isSwitching = nextMode !== null
  const currentContent = authContent[currentMode]

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) {
      return
    }

    const formData = new FormData(event.currentTarget)
    const payload = {
      email: String(formData.get('email') ?? '').trim(),
      password: String(formData.get('password') ?? ''),
    }

    if (currentMode === 'signup') {
      payload.fullName = String(formData.get('fullName') ?? '').trim()
    }

    setIsSubmitting(true)
    setAuthError('')

    try {
      const response = currentMode === 'signup' ? await signupUser(payload) : await loginUser(payload)
      const authSession = {
        mode: currentMode,
        message: response.message,
        ...response.data,
      }

      window.localStorage.setItem('bike-renter-auth', JSON.stringify(authSession))
      window.dispatchEvent(new CustomEvent('bike-renter-auth-updated', { detail: authSession }))

      if (typeof onSuccess === 'function') {
        onSuccess(authSession)
      }

      onClose()
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto px-4 py-4 sm:items-center sm:py-6 transition duration-300 ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close authentication modal"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-slate-950/55 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={currentContent.title}
        className={`relative z-10 my-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_40px_120px_rgba(2,8,23,0.45)] transition duration-300 max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
      >
        <div className="grid h-full lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative min-h-[16rem] overflow-hidden border-b border-[color:var(--color-border)] lg:min-h-[32rem] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_26%),linear-gradient(145deg,rgba(2,8,23,0.95)_0%,rgba(15,23,42,0.78)_45%,rgba(56,189,248,0.16)_100%)]" />
            <div className="absolute inset-0">
              <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="absolute -right-10 bottom-12 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[1px] w-[130%] -translate-x-1/2 rotate-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[1px] w-[130%] -translate-x-1/2 rotate-[20deg] bg-gradient-to-r from-transparent via-sky-300/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(180deg,transparent_0%,rgba(2,8,23,0.35)_25%,rgba(2,8,23,0.9)_100%)]" />
            </div>

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl border border-[color:var(--color-primary-border)] bg-[color:var(--color-primary-soft)] text-sm font-semibold text-white shadow-lg shadow-black/20">
                  BR
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Bike Rental</p>
                  <p className="text-lg font-medium text-white">Ride premium. Move freely.</p>
                </div>
              </div>

              <div className="max-w-md space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                  Adventure, travel, and night rides
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Premium bikes for city streets and open roads.
                </h2>
                <p className="text-sm leading-6 text-white/75">
                  Book quickly, explore confidently, and keep every ride organized from one elegant
                  platform.
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-8 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
                <div className="max-w-xs rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/80 backdrop-blur">
                  Scenic routes, fast pickup, and a polished rider experience.
                </div>
              </div>
            </div>
          </section>

          <section className="max-h-[calc(100vh-18rem)] overflow-y-auto p-6 sm:max-h-[calc(100vh-16rem)] sm:p-8 lg:max-h-[calc(100vh-3rem)] lg:p-10">
            <div className="relative overflow-hidden">
              <div
                style={{ transitionDuration: `${MODE_TRANSITION_DURATION}ms` }}
                className={`transition-all ease-out ${
                  isSwitching
                    ? 'pointer-events-none translate-x-[-10px] opacity-0 blur-[1px]'
                    : 'translate-x-0 opacity-100'
                }`}
                aria-hidden={isSwitching}
              >
                <AuthFormPanel
                  mode={displayMode}
                  isDarkMode={isDarkMode}
                  onClose={onClose}
                  onSwitchMode={() => {
                    setAuthError('')
                    onModeChange(displayMode === 'login' ? 'signup' : 'login')
                  }}
                  onSubmit={handleSubmit}
                  authError={authError}
                  isSubmitting={isSubmitting}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </div>

              {nextMode ? (
                <div
                  style={{ transitionDuration: `${MODE_TRANSITION_DURATION}ms` }}
                  className={`absolute inset-0 transition-all ease-out ${
                    isSwitching
                      ? 'translate-x-0 opacity-100'
                      : 'pointer-events-none translate-x-[10px] opacity-0'
                  }`}
                  aria-hidden={!isSwitching}
                >
                  <AuthFormPanel
                    mode={nextMode}
                    isDarkMode={isDarkMode}
                    onClose={onClose}
                    onSwitchMode={() => {
                      setAuthError('')
                      onModeChange(nextMode === 'login' ? 'signup' : 'login')
                    }}
                    onSubmit={handleSubmit}
                    authError={authError}
                    isSubmitting={isSubmitting}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AuthModal