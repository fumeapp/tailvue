<template>
  <div class="bg-gray-100 flex flex-col items-center justify-center">
    <h1 class="py-12 text-xl"> tailvue playground </h1>
    <div class="flex flex-col items-stretch space-y-4 px-6 md:flex-row md:space-x-4 md:space-y-0">
      <div class="flex flex-col space-y-4 items-start">
        <h2 class="text-lg">PushButton</h2>
        <buttons />
      </div>
      <div class="flex flex-col space-y-4 items-start">
        <h2 class="text-lg">Modals</h2>
        <modals />
      </div>
      <div class="flex flex-col space-y-4 items-start">
        <h2 class="text-lg">Toasts</h2>
        <toasts />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Buttons from './buttons.vue'
import Modals from './modals.vue'
import Toasts from './toasts.vue'
</script>


<style>
html, body {
  @apply bg-gray-100
}
.ssh-pre {
  @apply max-w-md whitespace-nowrap overflow-scroll
}
</style>
