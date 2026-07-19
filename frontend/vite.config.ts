import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'img/**/*'],
      manifest: {
        name: 'Volcampanion',
        short_name: 'Volcampanion',
        description: 'Companion app for the Volcamp conference',
        theme_color: '#6FC660',
        background_color: '#6FC660',
        display: 'standalone',
        scope: './',
        start_url: './',
        icons: [72, 96, 128, 144, 152, 192, 384, 512].map((size) => ({
          src: `icons/icon-${size}x${size}.png`,
          sizes: `${size}x${size}`,
          type: 'image/png',
          purpose: 'maskable any',
        })),
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,webp,svg,json}'],
        // Avatars (~65×6KB) push us past the default 2 MiB precache entry cap.
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        runtimeCaching: [
          {
            // Conference data: always try the network first so the app syncs on
            // each open, fall back to the cached copy when offline.
            urlPattern: ({ url }) => url.pathname.endsWith('/data/volcamp-2026.json'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'volcamp-data',
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Speaker photos hosted on the public Volcamp site.
            urlPattern: ({ url }) => url.hostname.endsWith('volcamp.io'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'volcamp-images',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
