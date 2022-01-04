import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'

export interface TailvueOptions {

}

import { resolve } from 'pathe'
import { distDir } from './dirs'

export default defineNuxtModule<TailvueOptions>({
  meta: {
    name: 'tailvue',
  },
  setup () {
    addPluginTemplate({
      filename: 'plugin.mjs',
      src: resolve(distDir, 'runtime/plugin.mjs'),
      mode: 'client'
    })
  }
})
