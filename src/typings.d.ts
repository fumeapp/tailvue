import { TailvueModal } from './types/modal'
import { TailvueToast } from './types/toast'
import { PushButtonSize, PushButtonState, PushButtonTheme, PushButtonThemeName } from './types/push-button'
import { FormToggleSizeLabel, FormToggleTheme, FormToggleThemeName } from './types/form-toggle'
import { DefineComponent, PropType } from 'vue'

export * from './types/modal'
export * from './types/push-button'
export * from './types/form-toggle'
export * from './types/toast'

declare const PushButton: DefineComponent<{
  state: PropType<PushButtonState>
  size: PropType<PushButtonSize>
  theme: PropType<PushButtonThemeName>
  customTheme: PropType<PushButtonTheme>
}>

declare const FormToggle: DefineComponent<{
  size: PropType<FormToggleSizeLabel>
  theme: PropType<FormToggleThemeName>
  customTheme: PropType<FormToggleTheme>
}>

declare const ModalBase: DefineComponent<{
  destroyed: Function
}>

declare function install(): void;
declare function useModal(): TailvueModal;
declare function useToast(): TailvueToast;

export { PushButton, FormToggle, ModalBase, install, useModal, useToast }
