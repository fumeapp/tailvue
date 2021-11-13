<template>
  <div class="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
    <push-button>
      &lt;push-button&gt;
    </push-button>
    <push-button state="disabled">
      &lt;push-button state="disabled"&gt;
    </push-button>
    <push-button state="loading">
      &lt;push-button state="loading"&gt;
    </push-button>
    <push-button size="xs">
      &lt;push-button size="xs"&gt;
    </push-button>
    <push-button theme="indigo">
      &lt;push-button theme="indigo"&gt;
    </push-button>
    <push-button ping>
      &lt;push-button ping&gt;
    </push-button>
    <push-button ping ping-color="bg-green-500">
      &lt;push-button ping ping-color="bg-green-500"&gt;
    </push-button>
  </div>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
</script>
