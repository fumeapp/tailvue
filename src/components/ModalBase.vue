<template>
  <div class="fixed inset-0 z-10 overflow-y-auto" id="ModalBase">
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity"
          v-if="active"
          @click="destroy"
        >
          <div class="absolute inset-0 bg-black opacity-75"></div>
          <div class="fixed top-0 right-0 p-3">
            <div
              class="p-3 transition duration-150 ease-in-out rounded-full cursor-pointer hover:bg-gray-800"
            >
              <Icon
                icon="mdi-close"
                class="w-6 h-6 text-gray-200 dark:text-gray-400"
              />
            </div>
          </div>
        </div>
      </transition>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&nbsp;</span
      >
      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
        leave-active-class="duration-200 ease-in"
        leave-class="translate-y-0 opacity-100 sm:scale-100"
        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-if="active"
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:my-8 sm:align-middle sm:w-full sm:p-6"
          :class="[innerClass, maxWidth]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from '@vue/runtime-core'
import { onKeyStroke } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const props = defineProps({
  destroyed: {
    type: Function,
    required: false,
    default: () => {},
  },
  innerClass: {
    type: String,
    required: false,
    default: '',
  },
  maxWidth: {
    type: String,
    required: false,
    default: 'sm:max-w-lg',
  },
})
const active = ref(false)
onMounted(() => (active.value = true))
onKeyStroke('Escape', (e: KeyboardEvent) => {
  e.preventDefault()
  destroy()
})
async function destroy() {
  active.value = false
  setTimeout(() => props.destroyed(), 200)
}
defineExpose({ destroy })
</script>
