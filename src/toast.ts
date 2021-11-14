import GlobalToast from './GlobalToast.vue'
import { ToastProps } from './ToastTypes'
import { spawn } from './utils'

const outerClasses = [
  'z-40', 'fixed',  'inset-0', 'flex',  'items-end',
  'px-4', 'py-6',  'pointer-events-none',  'sm:p-6', 'sm:items-start',
]

const innerClasses = [ 'w-full', 'flex', 'flex-col', 'items-center', 'space-y-4',  'sm:items-end', ]

const elClasses = ['w-full', 'max-w-sm']

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
      return spawn('toasts', props, GlobalToast, elClasses)
    },
    success (message: string) {
      return spawn('toasts', {type: 'success', message}, GlobalToast, elClasses)
    },
    info (message: string) {
      return spawn('toasts', {type: 'info', message}, GlobalToast, elClasses)
    },
    danger (message: string) {
      return spawn('toasts', {type: 'danger', message, timeout: 20}, GlobalToast, elClasses)
    },
    warning (message: string) {
      return spawn('toasts', {type: 'warning', message, timeout: 10}, GlobalToast, elClasses)
    },
    denied (message: string) {
      return spawn('toasts', {type: 'denied', message, timeout: 10}, GlobalToast, elClasses)
    },
  }


}
