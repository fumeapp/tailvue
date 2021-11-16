<template>
  <div v-if="props.type === 'success'" class="border-2 border-green-200 rounded-full p-1">
    <Icon icon="mdi-check"  class="h-3 w-3 text-green-400" />
  </div>
  <div v-if="props.type === 'info'" class="border-2 border-blue-200 rounded-full p-1">
    <Icon icon="bi-info-lg"  class="h-3 w-3 text-blue-400" />
  </div>
  <div v-if="props.type === 'warning'" class="border-2 border-yellow-200 rounded-full p-1">
    <Icon icon="mdi-exclamation-thick" class="h-3 w-3 text-yellow-400" />
  </div>
  <div v-if="props.type === 'danger'" class="border-2 border-red-200 rounded-full p-1">
    <Icon icon="mdi-exclamation-thick" class="h-3 w-3 text-red-400" />
  </div>
  <div v-if="props.type === 'denied'" class="rounded-full">
    <Icon icon="mdi-cancel" class="h-3 w-3 text-red-400" />
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
