<template>
  <div class="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
    <div class="i-logos-vue text-3xl" />
    <div class="i-logos-vue text-3xl bg-red-300 w-8 h-8" />
    <div class="i-mdi-alarm text-orange-400 w-8 h-8 bg-white" />
    <push-button>
      &lt;push-button&gt;
    </push-button>
    <push-button state="disabled">
      state="disabled"
    </push-button>
    <push-button state="loading">
      state="loading"
    </push-button>
    <push-button size="xs">
      size="xs"
    </push-button>
    <push-button theme="indigo">
      theme="indigo"
    </push-button>
    <push-button ping>
      ping
    </push-button>
    <push-button ping ping-color="bg-green-500">
      ping-color="bg-green-500"
    </push-button>
    <push-button theme="white-left">
      theme="white-left"
    </push-button>
  </div>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
</script>
