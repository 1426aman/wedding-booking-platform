import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/wedding-booking-platform/' : '/',
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
  build: {
    rolldownOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        terms: resolve(process.cwd(), 'terms/index.html'),
        privacy: resolve(process.cwd(), 'privacy/index.html'),
      },
    },
  },
})
