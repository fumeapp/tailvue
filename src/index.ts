import { App, Plugin } from 'vue';
import PushButton from './PushButton.vue'
import ModalBase from './ModalBase.vue'
import { useModal } from './modal'
import { useToast } from './toast'

const install:Plugin = (app: App) => {
  app.component('PushButton', PushButton)
  app.component('ModalBase', ModalBase)
}

export { PushButton, ModalBase, useModal, useToast, install }
