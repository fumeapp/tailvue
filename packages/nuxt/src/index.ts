import { addPlugin, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  name: 'tailvue',
  setup (options) {
    console.log('we are in the setup()')
    /*
    addPlugin({
      src: 'toastPlugin.ts',
      mode: 'client',
    })
    */
  }
})
