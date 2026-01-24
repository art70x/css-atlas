import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { fontless } from 'fontless'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins: [
    react(),
    tailwindcss(),
    fontless({
      defaults: {
        preload: true,
        weights: [400, 500, 600, 700, 800],
        styles: ['normal', 'italic'],
        fallbacks: {
          'sans-serif': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial'],
          monospace: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Menlo', 'Consolas'],
        },
      },
      assets: {
        prefix: '/_fonts',
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// create-vite@8.2.0
