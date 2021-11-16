import { PushButtonThemeName } from './push-button'

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

export interface TailvueModal {
  show(props: ModalProps|string): void
}
