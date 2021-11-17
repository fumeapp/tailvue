<template>
  <div class="ml-4 flex-shrink-0 flex">
    <button @click="close" class="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span class="sr-only">Close</span>
      <Icon icon="mdi-close-thick" class="w-4 h-4" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const emit = defineEmits(['close'])

function close () {
  emit('close')
}
</script>
