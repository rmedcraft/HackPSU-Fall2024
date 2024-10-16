import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Header from './components/header'
import './index.css'
import Footer from './components/footer'
import Journals from './components/journals'
import App from './App'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
