import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Header from './components/header'
import './index.css'
import Footer from './components/footer'
import Journal from './components/journal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />

    <div className='journals'>
      <Journal date="9/12" title="WOW WE'RE CODING SOMTHING REALLY COOL!!!" example="EXAMPLE JOURNAL ENTRY!!!" />
      <Journal />
      <Journal />
      <Journal />
      <Journal />
      <Journal />
    </div>

    <Footer />
  </StrictMode>,
)
