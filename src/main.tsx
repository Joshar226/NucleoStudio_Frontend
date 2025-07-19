import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import Router from './router.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    <ToastContainer 
      pauseOnHover={false}
      closeButton={false}
      autoClose={2500}
      pauseOnFocusLoss={false}
    />
  </StrictMode>
)
