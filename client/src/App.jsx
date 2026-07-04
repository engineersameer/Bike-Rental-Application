import './App.css'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/Home/HomePage'
import CustomerHomePage from './pages/CustomerHome/CustomerHomePage'

function getStoredAuthSession() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const storedSession = window.localStorage.getItem('bike-renter-auth')
    return storedSession ? JSON.parse(storedSession) : null
  } catch (_error) {
    return null
  }
}

function App() {
  const [authSession, setAuthSession] = useState(getStoredAuthSession)

  useEffect(() => {
    const handleAuthUpdate = (event) => {
      setAuthSession(event.detail ?? getStoredAuthSession())
    }

    window.addEventListener('bike-renter-auth-updated', handleAuthUpdate)

    return () => window.removeEventListener('bike-renter-auth-updated', handleAuthUpdate)
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('bike-renter-auth')
    setAuthSession(null)
  }

  return (
    <ThemeProvider>
      {authSession ? (
        <CustomerHomePage authSession={authSession} onLogout={handleLogout} />
      ) : (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )}
    </ThemeProvider>
  )
}

export default App
