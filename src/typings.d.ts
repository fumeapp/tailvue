import { DefineComponent } from 'vue'
import { TailvueModal } from '@/types/modal'
import { TailvueToast } from '@/types/toast'

export * from './types/modal'
export * from './types/push-button'
export * from './types/toast'

declare module 'tailvue' {
  export function install(): void;
  export function useModal(): TailvueModal;
  export function useToast(): TailvueToast;
  export function PushButton(): DefineComponent
  export function ModalBase(): DefineComponent
}
