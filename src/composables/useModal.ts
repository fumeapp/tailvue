import { ComponentOptionsWithObjectProps } from '@vue/runtime-core'
import { ModalProps, TailvueModal } from '../types/modal'
import { spawn } from '../utils'
import GlobalModal from '../components/GlobalModal.vue'

export function useModal(): TailvueModal {
  const modals = document.createElement('div')
  modals.classList.add('z-30')
  modals.setAttribute('id', 'modals')
  document.body.appendChild(modals)

  return {
    show(props: ModalProps | string) {
      if (typeof props === 'string') props = { title: props }
      return spawn('modals', props, GlobalModal as unknown as ComponentOptionsWithObjectProps)
    }
  }
}
