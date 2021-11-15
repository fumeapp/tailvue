
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

export interface TailvueToast {
  show(props: ToastProps|string): void
  success(message: string): void
  info(message: string): void
  danger(message: string): void
  warning(message: string): void
  denied(message: string): void
}
