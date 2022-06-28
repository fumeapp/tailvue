import { useToast, useModal, useAppTour, TailvueModal, TailvueToast, ModalBase, PushButton, AppTour } from 'tailvue'
// @ts-ignore: resolved with nuxt
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.provide('toast', useToast())
  nuxtApp.provide('modal', useModal())
  nuxtApp.provide('tour', useAppTour())
  nuxtApp.vueApp.component('PushButton', PushButton)
  nuxtApp.vueApp.component('ModalBase', ModalBase)
  nuxtApp.vueApp.component('AppTour', AppTour)
})

// @ts-ignore: resolved with nuxt
declare module '#app' {
  interface NuxtApp {
    $toast: TailvueToast
    $modal: TailvueModal
    $tour: AppTour
  }
}
