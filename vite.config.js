import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const repoName = 'MaternalHealthManagementSystem'; 

export default defineConfig({
  plugins: [vue()],
  base: '/Maternal/',
  build: {
    // 設置輸出目錄為 docs
    outDir: 'docs', 
  }
})
