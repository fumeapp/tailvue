import { ComponentOptionsWithObjectProps, createApp, defineComponent } from 'vue'
import { ToastProps } from '../types/toast'
import { ModalProps } from '../types/modal'

/**
 * @desc Remove element from the DOM
 */
export function removeElement(el: HTMLElement | undefined): void {
  if (!el) return
  (el.parentNode as HTMLElement).remove()
}

/**
 * @desc Add the component w/ the specified props to the DOM
 */
export function spawn(id: string, props: ModalProps | ToastProps, Component: ComponentOptionsWithObjectProps, classes?: string[]) {
  const el = document.createElement('div')
  if (classes) classes.forEach(c => el.classList.add(c))
  return createApp(defineComponent(Component), props as unknown as Record<string, unknown>).mount(
    document?.getElementById(id)?.appendChild(el) as Element
  )
}

/**
 * @desc Merge two objects into a new object
 */
export function mergeDeep(obj1, obj2): object {
  const result = { ...obj1 }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === 'object')
        result[key] = mergeDeep(obj1[key] || {}, obj2[key])
      else
        result[key] = obj2[key]
    }
  }
  return result
}
