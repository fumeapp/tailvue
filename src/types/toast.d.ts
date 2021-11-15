
export type ToastType = 'success'|'info'|'danger'|'warning'|'denied'

export interface ToastAction {
  label: string
  action: Function
}


export interface ToastProps {
  title?: string
  message?: string
  type?: ToastType
  progress?: Boolean
  timeout?: number
  primary?: ToastAction
  secondary?: ToastAction
}
