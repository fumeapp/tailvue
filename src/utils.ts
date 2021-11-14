/*
 * utils.ts
 * General element removal and spawning
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import { AllowedComponentProps, createApp, defineComponent } from 'vue'
import { GlobalModalProps } from './ModalTypes'

export function removeElement (el: HTMLElement|undefined) {
  if (!el) return
  if (typeof (el).remove !== 'undefined') el.remove()
  else el?.parentNode?.removeChild(el)
}

// add the component w/ the specified props
export function spawn (id: string, props: GlobalModalProps, Component: AllowedComponentProps) {
  return createApp(defineComponent(Component), props as unknown as Record<string, unknown>).mount(
    document?.getElementById(id)?.appendChild(document.createElement('div')) as Element
  )
}
