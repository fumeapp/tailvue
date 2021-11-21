<template>
  <div v-if="props.type === 'success'" class="border-2 border-green-200 rounded-full w-6 h-6 flex items-center justify-center">
    <Icon icon="mdi-check"  class="h-4 w-4 text-green-400" />
  </div>
  <div v-else-if="props.type === 'info'" class="border-2 border-blue-200 rounded-full w-6 h-6 flex items-center justify-center">
    <Icon icon="bi-info-lg"  class="h-4 w-4 text-blue-400" />
  </div>
  <div v-else-if="props.type === 'warning'" class="border-2 border-yellow-200 rounded-full w-6 h-6 flex items-center justify-center">
    <Icon icon="mdi-exclamation-thick" class="h-4 w-4 text-yellow-400" />
  </div>
  <div v-else-if="props.type === 'danger'" class="border-2 border-red-200 rounded-full w-6 h-6 flex items-center justify-center">
    <Icon icon="mdi-exclamation-thick" class="h-4 w-4 text-red-400" />
  </div>
  <div v-else-if="props.type === 'denied'" class="rounded-full w-6 h-6 flex items-center justify-center">
    <Icon icon="mdi-cancel" class="h-4 w-4 text-red-400" />
  </div>
  <div v-else class="rounded-full w-6 h-6 flex items-center justify-center">
    <Icon :icon="type" class="h-4 w-4 text-red-400" />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { PropType } from 'vue'
import { ToastType } from './types/toast'
const props = defineProps({
  type: String as PropType<ToastType>,
})
</script>
