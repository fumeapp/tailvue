<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <img src="https://avatars.githubusercontent.com/u/79109951?s=200&v=4" class="w-8 h-8" alt="windicss logo">
          <Icon icon="logos-vue" class="w-8 h-8" />
          <Icon icon="logos-tailwindcss-icon" class="w-8 h-8" />
        </div>
        <button @click="toggleDark" class="text-gray-800 dark:text-white">
          <icon icon="carbon-moon" v-if="isDark" class="w-6 h-6" />
          <icon icon="carbon-sun" v-else class="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>
  <div class="flex flex-col items-center justify-center">
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
import { Icon } from '@iconify/vue'
import Buttons from './buttons.vue'
import Modals from './modals.vue'
import Toasts from './toasts.vue'
import PushButton from '../../src/PushButton.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>


<style>
html, body {
  @apply bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 min-h-screen
}
.ssh-pre {
  @apply max-w-md whitespace-nowrap overflow-scroll
}
</style>
