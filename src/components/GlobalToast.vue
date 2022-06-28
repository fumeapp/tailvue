<template>
  <div
    ref="toastRef"
    class="z-40 flex flex-col-reverse items-end justify-center pointer-events-none sm:p-2 sm:items-end sm:justify-end'"
  >
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition duration-100 ease-in transform"
      leave-from-class="translate-y-0 opacity-100 sm:translate-y-0 sm:translate-x-0"
      leave-to-class="translate-y-1 opacity-0 sm:translate-y-0 sm:translate-x-1"
    >
      <div
        v-if="active && !primary"
        :class="{ 'max-w-sm': !wide, 'max-w-3xl': wide }"
        class="relative w-full overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <global-toast-progress
          v-if="progress && timeout"
          :style="progressStyle"
        />
        <div class="overflow-hidden rounded-lg shadow-xs z-100">
          <div class="p-4">
            <div class="flex items-start">
              <div v-if="props.icon !== false" class="flex-shrink-0">
                <global-toast-icons :type="type" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p v-if="title" class="text-sm font-medium leading-5">
                  {{ title }}
                </p>
                <p
                  :class="{ 'mt-1': title }"
                  class="text-sm leading-5"
                  v-html="message"
                ></p>
              </div>
              <div class="ml-4 flex-shrink-0 flex mt-0.5">
                <global-toast-close @close="destroy(true)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else-if="active && primary && secondary"
        :class="{ 'max-w-sm': !wide, 'max-w-3xl': wide }"
        class="relative w-full overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <global-toast-progress
          v-if="progress && timeout"
          :style="progressStyle"
        />
        <div
          class="flex divide-x divide-gray-200 rounded-lg shadow-xs dark:divide-gray-600"
        >
          <div class="flex items-start flex-1 w-0 p-4">
            <div v-if="props.icon !== false" class="flex-shrink-0 mr-4">
              <global-toast-icons :type="type" />
            </div>
            <div class="w-full">
              <p
                v-if="title"
                class="text-sm font-medium leading-5 text-gray-900 dark:text-gray-300"
              >
                {{ title }}
              </p>
              <p
                :class="{ 'mt-1': title }"
                class="text-sm leading-5 text-gray-500"
                v-html="message"
              ></p>
            </div>
          </div>
          <div class="flex">
            <div
              class="flex flex-col divide-y divide-gray-200 dark:divide-gray-600"
            >
              <div class="flex flex-1 h-0">
                <button
                  class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-900 border border-transparent rounded-none rounded-tr-lg dark:text-gray-100 hover:text-gray-500 focus:outline-none focus:z-10 focus:ring-2 focus:ring-gray-500"
                  @click="primaryAction"
                >
                  {{ primary.label }}
                </button>
              </div>
              <div class="flex flex-1 h-0">
                <button
                  class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 border border-transparent rounded-none rounded-br-lg dark:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  @click="secondaryAction"
                >
                  {{ secondary.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else-if="active && primary && !secondary"
        :class="{ 'max-w-sm': !wide, 'max-w-3xl': wide }"
        class="relative w-full overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <global-toast-progress
          v-if="progress && timeout"
          :style="progressStyle"
        />
        <div class="overflow-hidden rounded-lg shadow-xs">
          <div class="p-4">
            <div class="flex items-center">
              <div v-if="props.icon !== false" class="flex-shrink-0 mr-4">
                <global-toast-icons :type="type" />
              </div>
              <div class="flex justify-between flex-1 w-0">
                <p class="flex-1 w-0 text-sm leading-5" v-html="message"></p>
                <button
                  type="button"
                  class="flex-shrink-0 ml-3 text-sm font-medium text-gray-600 rounded-md dark:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  @click="primaryAction"
                >
                  {{ primary.label }}
                </button>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button
                  class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500"
                  @click="destroy()"
                >
                  <global-toast-close @close="destroy(true)" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  onMounted,
  PropType,
  ref,
} from '@vue/runtime-core'
import { ToastAction, ToastType } from '../types/toast'
import { removeElement } from '../utils'
import GlobalToastIcons from './GlobalToastIcons.vue'
import GlobalToastClose from './GlobalToastClose.vue'
import GlobalToastProgress from './GlobalToastProgress.vue'
const props = defineProps({
  title: String,
  icon: {
    type: [Boolean, String],
    required: false,
    default: undefined,
  },
  message: {
    type: String,
  },
  type: {
    type: String as PropType<ToastType>,
    required: false,
    default: 'info',
  },
  progress: {
    type: Boolean,
    required: false,
    default: true,
  },
  timeout: {
    type: Number,
    required: false,
    default: 2,
  },
  primary: Object as PropType<ToastAction>,
  secondary: Object as PropType<ToastAction>,
  wide: Boolean,
})
const toastRef = ref<HTMLElement | undefined>(undefined)
const active = ref(false)
let interval: undefined | NodeJS.Timer = undefined
const timeLeft = ref(0)
const speed = 100
const instance = getCurrentInstance()

const type = computed((): string =>
  typeof props.icon === 'string' ? props.icon : props.type
)

const timeLeftPercent = computed((): number =>
  Math.round((((timeLeft.value * 100) / (props.timeout * 1000)) * 100) / 100)
)
const progressStyle = computed(
  (): string =>
    `width: ${timeLeftPercent.value}%; transition: width 0.1s linear`
)

onMounted(() => {
  active.value = true
  if (props.timeout > 0) {
    timeLeft.value = props.timeout * 1000
    interval = setInterval(() => updateTime(), speed)
  }
})

function updateTime() {
  timeLeft.value -= speed
  if (timeLeft.value === 0) destroy()
}

function destroy(instant = false) {
  clearInterval(interval as NodeJS.Timer)
  if (instant) {
    active.value = false
    setTimeout(() => removeElement(toastRef?.value), 100)
    setTimeout(() => instance?.appContext.app.unmount(), 100)
  } else {
    setTimeout(() => (active.value = false), 100)
    setTimeout(() => removeElement(toastRef?.value), 200)
    setTimeout(() => instance?.appContext.app.unmount(), 200)
  }
}

function primaryAction() {
  if (props.primary) props.primary.action()
  destroy()
}

function secondaryAction() {
  if (props.secondary) props.secondary.action()
  destroy()
}
</script>
