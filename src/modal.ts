import GlobalModal from './GlobalModal.vue'
import { spawn } from './utils'
import { ModalProps } from './ModalTypes'

export function useModal () {
  const modals = document.createElement('div')
  modals.classList.add('z-30')
  modals.setAttribute('id', 'modals')
  document.body.appendChild(modals)
  return {
    show (props: ModalProps|string) {
      if (typeof props === 'string') props = { title: props }
      return spawn('modals', props, GlobalModal)
    }
  }
}
