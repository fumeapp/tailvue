import GlobalToast from './GlobalToast.vue'
import { spawn } from './utils'
import { ToastProps } from '@/types/toast'
import { ComponentOptionsWithObjectProps } from 'vue'

const outerClasses = [
  'z-40', 'fixed',  'inset-0', 'flex',  'sm:items-start',
  'px-4', 'py-6',  'pointer-events-none',  'sm:p-6',
]

const innerClasses = [
  'w-full', 'flex', 'flex-col-reverse',
  'items-center', 'sm:items-end', 'sm:justify-end',
]

const elClasses = ['w-full', 'max-w-sm', 'mt-4']

export function useToast() {
  const outer = document.createElement('div')
  outerClasses.forEach(c => outer.classList.add(c))
  outer.setAttribute('aria-alive', 'assertive')
  const inner = document.createElement('div')
  innerClasses.forEach(c => inner.classList.add(c))
  inner.setAttribute('id', 'toasts')
  outer.appendChild(inner)
  document.body.appendChild(outer)

  return {
    show (props: ToastProps|string) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, GlobalToast as unknown as ComponentOptionsWithObjectProps, elClasses)
    },
    success (message: string) {
      return spawn('toasts', {type: 'success', message}, GlobalToast as unknown as ComponentOptionsWithObjectProps, elClasses)
    },
    info (message: string) {
      return spawn('toasts', {type: 'info', message}, GlobalToast as unknown as ComponentOptionsWithObjectProps, elClasses)
    },
    danger (message: string) {
      return spawn('toasts', {type: 'danger', message, timeout: 20}, GlobalToast as unknown as ComponentOptionsWithObjectProps, elClasses)
    },
    warning (message: string) {
      return spawn('toasts', {type: 'warning', message, timeout: 10}, GlobalToast as unknown as ComponentOptionsWithObjectProps, elClasses)
    },
    denied (message: string) {
      return spawn('toasts', {type: 'denied', message, timeout: 10}, GlobalToast as unknown as ComponentOptionsWithObjectProps, elClasses)
    },
  }


}
