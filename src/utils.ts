/*
 * utils.ts
 * General element removal and spawning
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import { AllowedComponentProps, createApp, defineComponent } from 'vue'
import { ModalProps } from './ModalTypes'
import { ToastProps } from './ToastTypes'

export function removeElement (el: HTMLElement|undefined) {
  if (!el) return
  (el.parentNode as HTMLElement).remove()
}

// add the component w/ the specified props
export function spawn (id: string, props: ModalProps|ToastProps, Component: AllowedComponentProps, classes?: string[]) {
  const el = document.createElement('div')
  if (classes) classes.forEach(c => el.classList.add(c))
  return createApp(defineComponent(Component), props as unknown as Record<string, unknown>).mount(
    document?.getElementById(id)?.appendChild(el) as Element
)
}
