/*
import { useToast } from '@/toast'
import { useModal } from '@/modal'
import { TailvueModal, TailvueToast } from '@/types'
import { ModalBase, PushButton } from '@/index'
*/
import { defineNuxtPlugin } from 'nuxt3'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('we are in defineNuxtPlugin')
})
  /*
  if (!nuxtApp.$toast) {
    nuxtApp.provide('toast', useToast())
    nuxtApp.provide('modal', useModal())
  }
  nuxtApp.vueApp.component('PushButton', PushButton)
  nuxtApp.vueApp.component('ModalBase', ModalBase)

// @ts-ignore
declare module '#app' {
  interface NuxtApp {
    $toast: TailvueToast
    $modal: TailvueModal
  }
}
*/
