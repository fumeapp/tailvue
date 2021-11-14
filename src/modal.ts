import GlobalModal from './GlobalModal.vue'
import { spawn } from './utils'
import { GlobalModalProps } from './ModalTypes'

export function useModal () {
  const modals = document.createElement('div')
  modals.setAttribute('id', 'modals')
  document.body.appendChild(modals)
  return {
    show (props: GlobalModalProps|string) {
      if (typeof props === 'string') props = { title: props }
      return spawn('modals', props, GlobalModal)
    }
  }
}
