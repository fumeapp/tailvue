import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/index.ts',
  plugins: [
    vue(),
    typescript({
      exclude: ["playground/**/*"]
    }),
  ],
  external:['vue']
})

