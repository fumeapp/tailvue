import { addPlugin, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  name: 'tailvue',

  setup () {
    addPlugin({
      src: 'toastPlugin.ts',
      mode: 'client',
    })
  }
})
