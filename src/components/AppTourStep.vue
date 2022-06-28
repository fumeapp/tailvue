<template>
  <div v-show="show">
    <div ref="target">
      <div v-if="step">
        <div class="p-4 bg-white rounded dark:bg-gray-700">
          <button @click="exit">
            <Icon
              icon="mdi-close"
              class="w-6 h-6 text-gray-200 dark:text-gray-400"
            />
          </button>
          <p
            v-if="step.title"
            class="pb-1 text-sm font-bold text-gray-800 dark:text-gray-200"
          >
            {{ step.title }}
          </p>
          <p
            v-if="step.description"
            class="pb-3 text-xs leading-4 text-gray-600 dark:text-gray-100"
          >
            {{ step.description }}
          </p>
          <div class="flex justify-between space-x-4">
            <div class="flex items-center">
              <span
                class="text-xs font-bold text-indigo-700 dark:text-indigo-600"
              >
                Step {{ index + 1 }} of {{ numSteps }}
              </span>
            </div>
            <div class="flex items-center">
              <push-button
                v-if="!isFirst"
                @click="onPrevious"
                theme="white-left"
              >
                Previous
              </push-button>
              <push-button
                @click="onNext"
                :theme="`${isFirst ? 'white' : 'white-right'}`"
              >
                {{ isLast ? 'Finish' : 'Next' }}
              </push-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ComputedRef, inject, onMounted, Ref, ref } from '@vue/runtime-core'
import { createPopper } from '@popperjs/core'
import { Icon } from '@iconify/vue'
import { TourStep, TourOptions } from '../types/tour'
import { useGetElement } from '../composables/useAppTour'
import PushButton from './PushButton.vue'

const show = ref(false)
const target = ref<HTMLElement | null>(null)

const onNext = async () => {
  await beforeStepEnd()
  next()
}
const onPrevious = async () => {
  await beforeStepEnd()
  previous()
}
const beforeStepStart = async () => {
  await step?.value?.hook?.before?.()
  attachElement()
}
const beforeStepEnd = async () => await step?.value?.hook?.after?.()

const attachElement = () => {
  const element = useGetElement(step?.value?.element)
  if (target.value && element) {
    show.value = true
    if (options?.value?.scrollToStep?.enabled)
      element.scrollIntoView(options.value?.scrollToStep?.options)

    createPopper(element, target.value, options?.value.popperOptions)
  }
}

const options = inject<ComputedRef<TourOptions>>('options')
const step = inject<ComputedRef<TourStep>>('step', {} as ComputedRef<TourStep>)
const isFirst = inject<ComputedRef<boolean>>('is-first')
const isLast = inject<ComputedRef<boolean>>('is-last')
const index = inject<Ref<number>>('index', ref(0))
const numSteps = inject<number>('numSteps', 0)
const next = inject('next', () => {})
const previous = inject('previous', () => {})
const exit = inject('exit', () => {})

onMounted(async () => await beforeStepStart())
</script>
