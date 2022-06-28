<template>
  <div
    class="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded dark:bg-gray-600"
    :style="props.style"
  />
</template>
<script lang="ts" setup>
const props = defineProps({ style: String })
</script>
