import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
