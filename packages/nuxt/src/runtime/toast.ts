import { useToast, useModal, TailvueModal, TailvueToast, ModalBase, PushButton } from 'tailvue'
import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.$toast) {
    nuxtApp.provide('toast', useToast())
    nuxtApp.provide('modal', useModal())
  }
  nuxtApp.vueApp.component('PushButton', PushButton)
  nuxtApp.vueApp.component('ModalBase', ModalBase)
})

// @ts-ignore
declare module '#app' {
  interface NuxtApp {
    $toast: TailvueToast
    $modal: TailvueModal
  }
}
