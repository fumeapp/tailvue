<template>
  <div class="w-screen h-screen bg-gray-100 flex items-center justify-center">
    <div class="flex flex-col space-y-4 items-start">
      <buttons />
    </div>
    <div class="flex flex-col space-y-4 items-start">
      <modals />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Buttons from './buttons.vue'
import Modals from './modals.vue'
</script>
