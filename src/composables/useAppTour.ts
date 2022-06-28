import type { Ref } from '@vue/runtime-core'
import { AppTour, TourElement } from '../types/tour'

export function useAppTour(ref: Ref): AppTour {
  return {
    start: () => ref.value.start(),
    finish: () => ref.value.finish(),
    goToStep: (step: number | ((currentStep: number) => number)) => ref.value.goToStep(step)
  }
}

export function useGetElement(element: TourElement) {
  if (typeof element === 'string')
    return document.querySelector(element)
  else if (typeof element === 'function')
    return element()
  return null
}
