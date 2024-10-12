import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Header from './components/header'
import './index.css'
import Footer from './components/footer'
import Journals from './components/journals'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Journals />
    <Footer />
  </StrictMode>,
)
