import { App, Plugin } from 'vue';
import PushButton from './PushButton.vue'
import { useModal } from './modal'
import ModalBase from './ModalBase.vue'
import { useToast } from './toast'

const install:Plugin = (app: App) => {
  app.component('PushButton', PushButton)
  app.component('ModalBase', ModalBase)
}

export default class Tailvue {
  static install = install
  PushButton = PushButton
  ModalBase = ModalBase
  useModal = useModal
  useToast = useToast
}
