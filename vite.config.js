import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/main-list": {
        target: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/main-list/, ""),
      },
      "/searched-coin": {
        target: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/searched-coin/, ""),
      },
      "/meta-data": {
        target: "https://pro-api.coinmarketcap.com/v2/cryptocurrency/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/meta-data/, ""),
      },
    }
  },
  plugins: [react()],
})