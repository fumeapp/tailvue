export type ModalType = 'success'|'info'|'danger'|'warning'
export type ModalButtonTheme = 'red'|'white'

export interface ModalButton {
  label: string
  theme: ModalButtonTheme
  action: Function
}

export interface GlobalModalProps {
  type?: ModalType
  title: string
  body?: string
  primary?: ModalButton
  secondary?: ModalButton
}
