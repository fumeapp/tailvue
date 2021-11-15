import { App, Plugin } from 'vue';
import PushButton from './PushButton.vue'
import { useModal } from './modal'
import ModalBase from './ModalBase.vue'
import { useToast } from './toast'

const install = (app: App) => {
  app.component('PushButton', PushButton)
  app.component('ModalBase', ModalBase)
}

export { PushButton, ModalBase, useModal, useToast, install }
