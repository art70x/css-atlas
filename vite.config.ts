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
    fontless({
      priority: ['google'],
      families: [
        {
          name: 'Inter',
          weights: [400, 500, 600, 700, 800],
          fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial'],
          global: true,
        },
        {
          name: 'IBM Plex Mono',
          fallbacks: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Menlo', 'Consolas'],
          weights: [400, 500],
          global: true,
        },
      ],
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// create-vite@8.2.0
