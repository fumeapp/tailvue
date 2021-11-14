<template>
  <!-- div class="z-40 fixed inset-0 flex flex-col-reverse items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-end'"></div> make sure these dont get purged -->
  <div ref="toastRef">
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transform ease-in duration-100 transition"
      leave-from-class="translate-y-0 opacity-100 sm:translate-y-0 sm:translate-x-0"
      leave-to-class="translate-y-1 opacity-0 sm:translate-y-0 sm:translate-x-1"
    >
      <div
        v-if="active && !primary"
        class="max-w-sm relative w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div v-if="progress && timeout" class="absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-200 dark:bg-gray-700" :style="progressStyle" />
        <div class="rounded-lg shadow-xs overflow-hidden z-100">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <global-toast-icons :type="type" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p v-if="title" class="text-sm leading-5 font-medium">{{ title }}</p>
                <p :class="{'mt-1': title}" class="text-sm leading-5" v-html="message"></p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button class="inline-flex text-gray-400 transition ease-in-out duration-150 focus:outline-none focus:text-gray-500" @click="destroy">
                  <Icon icon="mdi-close-thick" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="active && primary && secondary" class="max-w-sm relative w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div v-if="progress && timeout"  class="absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-100 dark:bg-gray-900" :style="progressStyle"></div>
        <div class="flex rounded-lg shadow-xs">
          <div class="w-0 flex-1 flex items-center p-4">
            <div class="flex-shrink-0 mr-4">
              <global-toast-icons :type="type" />
            </div>
            <div class="w-full">
              <p v-if="title" class="text-sm leading-5 font-medium">{{ title }}</p>
              <p :class="{'mt-1': title}" class="text-sm leading-5" v-html="message"></p>
            </div>
          </div>
          <div class="flex border-l border-gray-200">
            <div class="-ml-px flex flex-col">
              <div class="h-0 flex-1 flex border-b border-gray-200">
                <button
                  class="-mb-px flex items-center justify-center w-full rounded-tr-lg border border-transparent px-4 py-3 text-sm leading-5 font-medium transition ease-in-out duration-150 focus:outline-none"
                  @click="primaryAction">
                  {{ primary.label }}
                </button>
              </div>
              <div class="-mt-px h-0 flex-1 flex">
                <button
                  class="flex items-center justify-center w-full rounded-br-lg border border-transparent px-4 py-3 text-sm leading-5 font-medium transition ease-in-out duration-150 focus:outline-none"
                  @click="secondaryAction">
                  {{ secondary.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="active && primary && !secondary" class="max-w-sm relative w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div v-if="progress && timeout"  class="absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-100 dark:bg-gray-900"  :style="progressStyle"></div>
        <div class="rounded-lg shadow-xs overflow-hidden">
          <div class="p-4">
            <div class="flex items-center">
              <div class="flex-shrink-0 mr-4">
                <global-toast-icons :type="type" />
              </div>
              <div class="w-0 flex-1 flex justify-between">
                <p class="w-0 flex-1 text-sm leading-5" v-html="message"></p>
                <button
                  class="ml-3 flex-shrink-0 text-sm leading-5 font-medium transition ease-in-out duration-150 focus:outline-none focus:underline'"
                  @click="primaryAction"
                >{{ primary.label }}</button>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" @click="destroy">
                  <Icon icon="mdi-close-thick" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
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
import { Icon } from '@iconify/vue'
import { removeElement } from './utils'
import { ToastAction, ToastType } from './ToastTypes'
import { computed, getCurrentInstance, onMounted, PropType, ref } from 'vue'
import GlobalToastIcons from './GlobalToastIcons.vue'
const props = defineProps({
  title: String,
  message: {
    type: String,
    required: false,
    default: 'Please specify a <b>message</b>',
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
  icon: {
    type: [Boolean, String],
    required: false,
    default: false,
  },
  primary: Object as PropType<ToastAction>,
  secondary: Object as PropType<ToastAction>,
})
const toastRef = ref<HTMLElement|undefined>(undefined)
const active = ref(false)
let interval:undefined|number = undefined
const timeLeft = ref(0)
const speed = 100
const instance = getCurrentInstance()

const timeLeftPercent = computed((): number => Math.round(((timeLeft.value * 100 / (props.timeout * 1000)) * 100) / 100))
const progressStyle = computed((): string => `width: ${timeLeftPercent.value}%; transition: width 0.1s linear`)

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

function destroy  () {
  setTimeout(() => active.value = false, 100)
  clearInterval(interval)
  // removeElement(toastRef?.value)
  setTimeout(() => removeElement(toastRef?.value), 200)
  setTimeout(() => instance?.appContext.app.unmount(), 300)
}

function primaryAction () {
  if (props.primary) props.primary.action()
  destroy()
}

function secondaryAction () {
  if (props.secondary) props.secondary.action()
  destroy()
}
</script>
