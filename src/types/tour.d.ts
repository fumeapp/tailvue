import type { createPopper } from '@popperjs/core/lib/createPopper'

export interface AppTour {
  start(): void
  finish(): void
  goToStep: (step: number | ((currentStep: number) => number)) => void
}

export type TourElement = string | (() => Element | null)

export interface TourStep {
  title: string
  description?: string
  element: TourElement,
  hook?: {
    before?: () => void
    after?: () => void
  }
}

export interface TourOptions {
  popperOptions?: Parameters<typeof createPopper>[2]
  disableOverlay?: boolean
  scrollToStep?: {
    enabled?: boolean
    options?: {
      inline?: ScrollLogicalPosition
      block?: ScrollLogicalPosition
      behavior?: ScrollBehavior
    }
  }
}
