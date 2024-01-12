import { defineConfig } from 'vite';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  root: './src',
  build: {
    outDir: './dist',
  },
  plugins: [

  ],
  server: {
    port: 3000, // 设置端口为 3000
    proxy: {
        "/api": {
            target: "http://localhost:4000/", 
            changeOrigin: true, 
          },
    },
  },
});