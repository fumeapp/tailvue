import { TailvueModal } from './types/modal'
import { TailvueToast } from './types/toast'
import { PushButtonSize, PushButtonState, PushButtonTheme, PushButtonThemeName } from './types/push-button'
import { DefineComponent } from 'vue'

export * from './types/modal'
export * from './types/push-button'
export * from './types/toast'

declare const PushButton: DefineComponent<{
  state: PushButtonState
  size: PushButtonSize
  theme: PushButtonThemeName
  customTheme: PushButtonTheme
}>

declare const ModalBase: DefineComponent<{
  destroyed: Function
}>

declare function install(): void;
declare function useModal(): TailvueModal;
declare function useToast(): TailvueToast;

export { PushButton, ModalBase, install, useModal, useToast }
