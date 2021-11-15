import { defineNuxtPlugin } from '@nuxt/kit'
import { useToast } from '@/toast'
import { useModal } from '@/modal'
import { TailvueModal, TailvueToast } from '@/types'
import { ModalBase, PushButton } from '@/index'

export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.$toast) {
    nuxtApp.provide('toast', useToast())
    nuxtApp.provide('modal', useModal())
  }
  nuxtApp.vueApp.component('PushButton', PushButton)
  nuxtApp.vueApp.component('ModalBase', ModalBase)
})

declare module '#app' {
  interface NuxtApp {
    $toast: TailvueToast
    $modal: TailvueModal
  }
}
