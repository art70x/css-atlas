import { BrowserRouter, Routes, Route } from 'react-router'
import Index from '@/pages'
import Og from '@/pages/og'
import NotFound from '@/pages/not-found'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  useSeo({
    meta: { author: 'art70x' },
    icons: { favicon: '/favicon.ico', icon: '/icon.svg', appleTouchIcon: '/apple-touch-icon.png' },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Analytics />
      <a
        className="sr-only hover:underline focus-visible:not-sr-only focus-visible:absolute focus-visible:top-2 focus-visible:left-2 focus-visible:z-50 focus-visible:bg-foreground focus-visible:px-4 focus-visible:py-3 focus-visible:text-background"
        href="#content"
      >
        Skip to main content
      </a>
      <main id="content" className="flex-1" tabIndex={-1}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/og" element={<Og />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}
