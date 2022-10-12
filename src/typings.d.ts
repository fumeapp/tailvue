import { TailvueModal } from './types/modal'
import { TailvueToast } from './types/toast'
import { PushButtonSize, PushButtonState, PushButtonTheme, PushButtonThemeName } from './types/push-button'
import { DefineComponent, PropType } from 'vue'

export * from './types/modal'
export * from './types/push-button'
export * from './types/toast'

declare const PushButton: DefineComponent<{
  state: PropType<PushButtonState>
  size: PropType<PushButtonSize>
  theme: PropType<PushButtonThemeName>
  customTheme: PropType<PushButtonTheme>
}>

declare const ModalBase: DefineComponent<{
  destroyed: PropType<Function>
}>

declare function install(): void
declare function useModal(): TailvueModal
declare function useToast(): TailvueToast

export { PushButton, ModalBase, install, useModal, useToast }
