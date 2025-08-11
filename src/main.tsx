import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './router.tsx'
import { ToastContainer } from 'react-toastify'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* <ReactQueryDevtools/> */}
      <ToastContainer 
        pauseOnHover={false}
        closeButton={false}
        autoClose={2500}
        pauseOnFocusLoss={false}
      />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  </StrictMode>
)
