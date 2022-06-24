import { useToast, useModal, TailvueModal, TailvueToast, ModalBase, PushButton, FormToggle } from 'tailvue'
// @ts-ignore: resolved with nuxt
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.provide('toast', useToast())
  nuxtApp.provide('modal', useModal())
  nuxtApp.vueApp.component('PushButton', PushButton)
  nuxtApp.vueApp.component('FormToggle', FormToggle)
  nuxtApp.vueApp.component('ModalBase', ModalBase)
})

// @ts-ignore: resolved with nuxt
declare module '#app' {
  interface NuxtApp {
    $toast: TailvueToast
    $modal: TailvueModal
  }
}
