import { DefineComponent } from 'vue'
import { TailvueModal } from '@/types/modal'
import { TailvueToast } from '@/types/toast'

export * from './modal'
export * from './push-button'
export * from './toast'

declare module 'tailvue' {
  export function install(): void;
  export function useModal(): TailvueModal;
  export function useToast(): TailvueToast;
  export function PushButton(): DefineComponent
  export function ModalBase(): DefineComponent
}
