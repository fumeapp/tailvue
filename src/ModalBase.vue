<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" id="ModalBase">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0">
        <div class="fixed inset-0 transition-opacity" v-if="active" @click="destroy">
          <div class="absolute inset-0 bg-black opacity-75"></div>
          <div class="fixed top-0 right-0 p-3">
            <div class="p-3 cursor-pointer rounded-full transition ease-in-out duration-150 hover:bg-gray-800">
              <Icon icon="mdi-close" class="w-6 h-6 text-gray-200 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </transition>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&nbsp;</span>
      <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div
          v-if="active"
          class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"
          :class="[innerClass, maxWidth]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline">
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
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
onMounted(() => active.value = true)
async function destroy() {
  active.value = false
  setTimeout(() => props.destroyed(), 200)
}
defineExpose({ destroy })
</script>
