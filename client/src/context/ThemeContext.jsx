import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const THEME_STORAGE_KEY = 'bike-renter-theme'
const THEMES = {
  light: 'light',
  dark: 'dark',
}

const ThemeContext = createContext(null)

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return THEMES.dark
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  if (storedTheme === THEMES.light || storedTheme === THEMES.dark) {
    return storedTheme
  }

  return THEMES.dark
}

function applyTheme(theme) {
  const rootElement = document.documentElement
  rootElement.dataset.theme = theme
  rootElement.style.colorScheme = theme
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(() => {
    return {
      theme,
      isDarkMode: theme === THEMES.dark,
      toggleTheme: () => {
        setTheme((currentTheme) => (currentTheme === THEMES.dark ? THEMES.light : THEMES.dark))
      },
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}