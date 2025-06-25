import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: './', // Adicione esta linha
  base: './',
  plugins: [react(),tailwindcss()],
})

