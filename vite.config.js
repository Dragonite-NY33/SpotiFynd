import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['node-fetch'])],
    },
  },
  // proxy: {
  //   '/**': 'https://localhost:8080',
  //   '/userSongs': 'https://localhost:8080',
  //   '/playlistSongs': 'https://localhost:8080',
  //   '/mixedSongs': 'https://localhost:8080'
  //   '/api': {
  //     target: 'https://localhost:8080',
  //     changeOrigin: true,
  //     secure: false,
  //     ws: true,
  //   },
  // },
});
