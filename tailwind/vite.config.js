import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  // برای انتشار روی GitHub Pages زیرمسیر پروژه، base را تنظیم کنید؛ مثلاً:
  // base: '/afixa/'
})
