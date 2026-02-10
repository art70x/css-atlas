import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/main.css'
import App from '@/app'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
