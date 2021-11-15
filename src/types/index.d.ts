import { DefineComponent } from 'vue'

export * from './modal'
export * from './push-button'
export * from './toast'

declare module 'tailvue' {
  export function install(): void;
  export function useModal(): Object & { show: Function };
  export function useToast(): Object & { show: Function };
  export function PushButton(): DefineComponent
  export function ModalBase(): DefineComponent
}
