import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import VitePluginWindicss from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginWindicss({
      config: {
        darkMode: 'class', // or 'media' or 'class'
        extract: {
          include: [
            'src/**.{vue,ts}',
            '../src/**.{vue,ts}',
            '../src/components/**.{vue,ts}',
            '../src/themes/*.ts',
          ],
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
})
