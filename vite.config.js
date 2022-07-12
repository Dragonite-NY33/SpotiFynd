import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
        esbuildCommonjs(['node-fetch']) 
      ]
    }
  }
})
