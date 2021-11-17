<template>
  <div class="absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-200 dark:bg-gray-600" :style="props.style" />
</template>
<script lang="ts" setup>
const props = defineProps({ style: String })
</script>
