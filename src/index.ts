import { App, Plugin } from '@vue/runtime-core'
import PushButton from './components/PushButton.vue'
import ModalBase from './components/ModalBase.vue'
import AppTour from './components/AppTour.vue'
import { useModal } from './composables/useModal'
import { useToast } from './composables/useToast'
import { useAppTour } from './composables/useAppTour'

const install: Plugin = (app: App) => {
  app.component('PushButton', PushButton)
  app.component('ModalBase', ModalBase)
  app.component('AppTour', AppTour)
}

export {
  // Components
  PushButton,
  ModalBase,
  AppTour,

  // Composables
  useModal,
  useToast,
  useAppTour,

  // Plugin
  install
}
