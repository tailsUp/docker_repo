import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.jsx'],
    environment: "jsdom",
    globals: true
  }
})

//https://stackoverflow.com/questions/75971024/describe-is-not-defined-in-vitest
//https://stackoverflow.com/questions/77713195/referenceerror-document-is-not-defined-testing-with-vitest