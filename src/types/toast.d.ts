
export type ToastType = 'success'|'info'|'danger'|'warning'|'denied'

export interface ToastTheme {
  outer: string
}

export interface ToastAction {
  /* Button Label */
  label: string
  /* Executed upon click */
  action: Function
}


export interface ToastProps {
  title?: string
  message?: string
  /** Different types show different icons and colors */
  type?: ToastType
  /** Hide the timeout progress bar, default: true */
  progress?: Boolean
  /** Specify a timeout in seconds, 0 = infinite */
  timeout?: number
  primary?: ToastAction
  secondary?: ToastAction
  /** Specify false for no icon, or pass an iconify.design name */
  icon?: boolean|string
  /** make your toast wider for mode detailed info */
  wide?: boolean
  pauseOnHover?: boolean
}

export interface TailvueToast {
  show(props: ToastProps|string): void
  success(message: string): void
  info(message: string): void
  danger(message: string): void
  warning(message: string): void
  denied(message: string): void
}
