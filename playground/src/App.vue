<template>
  <div class="w-screen h-screen bg-gray-100 flex items-center justify-center">
    <span> hello {{ world }} </span>
    <push-button>
      this is a default button
    </push-button>
  </div>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
import { ref } from 'vue'
const world = ref('world')
</script>
