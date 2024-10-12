import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Header from './components/header'
import './index.css'
import Footer from './components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>,
)
