import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'

export interface TailvueOptions {

}

export default defineNuxtModule<TailvueOptions>({
  name: 'tailvue',
  setup (options, nuxt) {
    console.log('in setup before addPluginTemplate')
    addPluginTemplate({
      filename: 'toast.mjs',
      src: 'node_modules/@tailvue/nuxt/dist/runtime/toast.mjs',
      mode: 'client'
    })
    console.log('in setup after addPluginTemplate')
  }
})
