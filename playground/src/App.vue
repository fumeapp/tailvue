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
    <push-button theme="indigo">
      &lt;push-button theme="indigo"&gt;
    </push-button>
  </div>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
</script>
