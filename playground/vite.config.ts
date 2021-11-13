import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    presetIcons(),
  ],
})
