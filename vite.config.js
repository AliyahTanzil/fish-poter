import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Import path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // Add resolve alias
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    workerTimeout: 30000,
  },
})
