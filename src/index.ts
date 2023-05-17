import { App, Plugin } from 'vue'
import PushButton from './PushButton.vue'
import FormToggle from './FormToggle.vue'
import ModalBase from './ModalBase.vue'
import { useModal } from './modal'
import { useToast } from './toast'

const install:Plugin = (app: App) => {
  app.component('PushButton', PushButton)
  app.component('FormToggle', FormToggle)
  app.component('ModalBase', ModalBase)
}

export { PushButton, FormToggle, ModalBase, useModal, useToast, install }
