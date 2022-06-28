<template>
  <div
    v-if="props.type === 'success'"
    class="flex items-center justify-center w-6 h-6 border-2 border-green-200 rounded-full"
  >
    <Icon icon="mdi-check" class="w-4 h-4 text-green-400" />
  </div>
  <div
    v-else-if="props.type === 'info'"
    class="flex items-center justify-center w-6 h-6 border-2 border-blue-200 rounded-full"
  >
    <Icon icon="bi-info-lg" class="w-4 h-4 text-blue-400" />
  </div>
  <div
    v-else-if="props.type === 'warning'"
    class="flex items-center justify-center w-6 h-6 border-2 border-yellow-200 rounded-full"
  >
    <Icon icon="mdi-exclamation-thick" class="w-4 h-4 text-yellow-400" />
  </div>
  <div
    v-else-if="props.type === 'danger'"
    class="flex items-center justify-center w-6 h-6 border-2 border-red-200 rounded-full"
  >
    <Icon icon="mdi-exclamation-thick" class="w-4 h-4 text-red-400" />
  </div>
  <div
    v-else-if="props.type === 'denied'"
    class="flex items-center justify-center w-6 h-6 rounded-full"
  >
    <Icon icon="mdi-cancel" class="w-4 h-4 text-red-400" />
  </div>
  <div v-else class="flex items-center justify-center w-6 h-6 rounded-full">
    <Icon :icon="type" class="w-4 h-4 text-red-400" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { Icon } from '@iconify/vue'
import { ToastType } from '../types/toast'
const props = defineProps({
  type: String as PropType<ToastType>,
})
</script>
