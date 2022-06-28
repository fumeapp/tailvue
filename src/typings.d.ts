import { DefineComponent, PropType } from '@vue/runtime-core'

import { TailvueModal } from './types/modal'
import { TailvueToast } from './types/toast'
import { AppTour } from './types/tour'

import { PushButtonSize, PushButtonState, PushButtonTheme, PushButtonThemeName } from './types/push-button'
import { TourStep, TourOptions } from './types/tour'

export * from './types/modal'
export * from './types/push-button'
export * from './types/toast'
export * from './types/tour'

declare const PushButton: DefineComponent<{
  state: PropType<PushButtonState>
  size: PropType<PushButtonSize>
  theme: PropType<PushButtonThemeName>
  customTheme: PropType<PushButtonTheme>
}>

declare const ModalBase: DefineComponent<{
  destroyed: PropType<() => void>
}>

declare const AppTour: DefineComponent<{
  steps: PropType<TourStep[]>
  options: PropType<TourOptions>
  slotControl: PropType<boolean>
}>

declare function useModal(): TailvueModal
declare function useToast(): TailvueToast
declare function useAppTour(): AppTour

declare function install(): void

export {
  // Components
  PushButton,
  ModalBase,
  AppTour,

  // Composables
  useModal,
  useToast,
  useAppTour,

  install
}
