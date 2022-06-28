<template>
  <div v-if="!isFinished" class="relative z-40">
    <div v-if="slotControl">
      <slot
        :key="index"
        :index="index"
        :step="activeStep"
        :numSteps="steps"
        :isFirst="isFirstStep"
        :isLast="isLastStep"
        :isFinished="isFinished"
        :next="() => toNextStep()"
        :previous="() => toPreviousStep()"
        :exit="() => finish()"
      />
    </div>
    <div v-else>
      <AppTourStep :key="index" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType, ref, provide } from '@vue/runtime-core'
import { TourStep, TourOptions } from '../types/tour'
import { mergeDeep } from '../utils'
import AppTourStep from './AppTourStep.vue'

const props = defineProps({
  steps: {
    type: Array as PropType<TourStep[]>,
    required: true,
    default: () => [],
  },
  options: {
    type: Object as PropType<TourOptions>,
    required: false,
    default: () => {},
  },
  slotControl: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
})

const index = ref(-1)
const defaultOptions: TourOptions = {
  popperOptions: {
    placement: 'bottom',
  },
  disableOverlay: false,
  scrollToStep: {
    enabled: true,
    options: {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    },
  },
}

const mergedOptions = computed(() => mergeDeep(defaultOptions, props.options))
const activeStep = computed(() => props.steps?.[index.value] || null)
const isFirstStep = computed(() => index.value === 0)
const isLastStep = computed(() => index.value === props.steps.length - 1)
const isFinished = computed(
  () => index.value >= props.steps.length || index.value < 0
)

const setIndex = (value: number | ((_: number) => number)) => {
  if (typeof value === 'function') index.value = value(index.value)
  else index.value = value
}
const toPreviousStep = () => setIndex((current) => current - 1)
const toNextStep = () => setIndex((current) => current + 1)
const start = () => setIndex(0)
const finish = () => setIndex(-1)

defineExpose({
  start,
  finish,
  goToStep: setIndex,
})

provide('options', mergedOptions)
provide('step', activeStep)
provide('next', toNextStep)
provide('previous', toPreviousStep)
provide('is-first', isFirstStep)
provide('is-last', isLastStep)
provide('is-finished', isFinished)
provide('exit', () => finish())
provide('index', index)
provide('numSteps', props.steps.length)
</script>
