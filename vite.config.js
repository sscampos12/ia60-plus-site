import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import path from 'path' // Remova ou comente esta linha

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react( ),tailwindcss()],
  // Remova todo o bloco 'resolve' abaixo
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
})
