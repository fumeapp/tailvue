// uno.config.ts
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'
import presetAttributify from "@unocss/preset-attributify"
import presetUno from "@unocss/preset-uno"

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [presetUno(), presetAttributify()],
})
