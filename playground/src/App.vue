<template>
  <div class="w-screen h-screen bg-gray-100 flex items-center justify-center space-x-4">
    <div class="flex flex-col space-y-4 items-start">
      <buttons />
    </div>
    <div class="flex flex-col space-y-4 items-start">
      <modals />
    </div>
    <div class="flex flex-col space-y-4 items-start">
      <toasts />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Buttons from './buttons.vue'
import Modals from './modals.vue'
import Toasts from './toasts.vue'
</script>
