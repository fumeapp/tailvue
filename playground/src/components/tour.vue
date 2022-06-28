<template>
  <div>
    <AppTour ref="appTour" :steps="steps" :options="options" />
    <h1 id="one">One</h1>
    <!-- <h1 id="two">Two</h1>
    <h1 id="three">Three</h1> -->
    <div>
      <push-button @click="demo">See Demo</push-button>
      <!-- <push-button @click="restart">Restart Demo</push-button> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ComponentPublicInstance, ref } from '@vue/runtime-core'
import { TourStep, TourOptions } from '../../../src/types/tour'
import AppTour from '../../../src/components/AppTour.vue'
import PushButton from '../../../src/components/PushButton.vue'
import { useAppTour } from '../../../src/composables/useAppTour'

// Stuff for app tour
const appTour = ref<ComponentPublicInstance<typeof AppTour> | null>(null)
const { goToStep, start } = useAppTour(appTour)
const steps: TourStep[] = [
  {
    title: 'Test One',
    description: 'Test One',
    element: '#one',
  },
  {
    title: 'Test Two',
    description: 'Test Two',
    element: '#two',
  },
  {
    title: 'Test Three',
    description: 'Test Three',
    element: '#three',
  },
]

const options: TourOptions = {}

// Tour Demo
const demo = () => start()
const restart = () => goToStep(() => 0)
</script>
