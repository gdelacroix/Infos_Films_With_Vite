import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/infos-film_dwwm",
  plugins: [react()],
  build: {
    outDir: 'dist', // Définit le dossier de sortie
  },
})
