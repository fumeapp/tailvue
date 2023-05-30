import { defineConfig } from 'vite'
import transformerDirectives from '@unocss/transformer-directives'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      transformers: [
        transformerDirectives(),
      ]
    }),
  ],
})
