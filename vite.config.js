import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true, // Exposes to local network
    port: 5173, // Optional: set your own port
  },
})