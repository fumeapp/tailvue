<template>
  <nav class="bg-gray-200 dark:bg-gray-700">
    <div class="max-w-screen-xl px-2 mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 p-4">
        <div class="flex items-center">
          <Icon icon="logos-vue" class="w-8 h-8" />
          <Icon icon="mdi-plus" class="w-8 h-8" />
          <img
            src="https://avatars.githubusercontent.com/u/79109951?s=200&v=4"
            class="w-8 h-8"
            alt="windicss logo"
          />
          <div class="w-0.5 h-8 bg-gray-600 dark:bg-gray-300 mx-2" />
          <Icon icon="logos-tailwindcss-icon" class="w-8 h-8" />
        </div>
        <button
          @click="toggleDark()"
          class="flex items-center justify-center w-8 h-8 text-gray-800 rounded-full dark:text-white"
        >
          <icon icon="carbon-moon" v-if="isDark" class="w-6 h-6" />
          <icon icon="carbon-sun" v-else class="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>
  <div class="flex flex-col items-center justify-center">
    <h1 class="py-12 text-xl">tailvue playground</h1>
    <div
      class="flex flex-col items-stretch px-6 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
    >
      <div class="flex flex-col items-start space-y-4">
        <h2 class="text-lg">PushButton</h2>
        <buttons />
      </div>
      <div class="flex flex-col items-start space-y-4">
        <h2 class="text-lg">Modals</h2>
        <modals />
      </div>
      <div class="flex flex-col items-start space-y-4">
        <h2 class="text-lg">Toasts</h2>
        <toasts />
      </div>
      <div class="flex flex-col items-start space-y-4">
        <h2 class="text-lg">Tour / OnBoarding</h2>
        <tour />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import Buttons from './components/buttons.vue'
import Modals from './components/modals.vue'
import Toasts from './components/toasts.vue'
import Tour from './components/tour.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style>
html,
body {
  @apply bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 min-h-screen;
}
.ssh-pre {
  @apply max-w-md whitespace-nowrap overflow-scroll;
}
</style>
