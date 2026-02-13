import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/main.css'
import ThemeProvider from 'components/theme-provider'
import App from '@/app'

const head = createHead({
  init: [
    {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s - CSS Atlas',
    },
  ],
})

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
        <App />
      </ThemeProvider>
    </UnheadProvider>
  </StrictMode>,
)
