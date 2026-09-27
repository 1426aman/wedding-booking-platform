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
        services: resolve(process.cwd(), 'services/index.html'),
        tentsCanopies: resolve(process.cwd(), 'services/tents-canopies/index.html'),
        weddingLawns: resolve(process.cwd(), 'services/wedding-lawns/index.html'),
        photographyVideography: resolve(process.cwd(), 'services/photography-videography/index.html'),
        reelShoots: resolve(process.cwd(), 'services/reel-shoots/index.html'),
        reelSocialMediaManagement: resolve(process.cwd(), 'services/reel-social-media-management/index.html'),
        otherServices: resolve(process.cwd(), 'services/other-services/index.html'),
        vendors: resolve(process.cwd(), 'vendors/index.html'),
        luxuryTentPalace: resolve(process.cwd(), 'vendors/luxury-tent-palace/index.html'),
        riversideWeddingLawn: resolve(process.cwd(), 'vendors/riverside-wedding-lawn/index.html'),
        candidMoments: resolve(process.cwd(), 'vendors/candid-moments/index.html'),
        everlastingMemories: resolve(process.cwd(), 'vendors/everlasting-memories/index.html'),
        reelItRightStudios: resolve(process.cwd(), 'vendors/reel-it-right-studios/index.html'),
        eventDecorHub: resolve(process.cwd(), 'vendors/event-decor-hub/index.html'),
        about: resolve(process.cwd(), 'about/index.html'),
        contact: resolve(process.cwd(), 'contact/index.html'),
        login: resolve(process.cwd(), 'login/index.html'),
        terms: resolve(process.cwd(), 'terms/index.html'),
        privacy: resolve(process.cwd(), 'privacy/index.html'),
      },
    },
  },
})
