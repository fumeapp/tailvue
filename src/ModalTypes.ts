import { PushButtonThemeName } from './PushButtonTypes'

export type ModalType = 'success'|'info'|'danger'|'warning'

export interface ModalButton {
  label: string
  theme: PushButtonThemeName
  action: Function
}

export interface ModalProps {
  type?: ModalType
  title: string
  body?: string
  primary?: ModalButton
  secondary?: ModalButton
}
