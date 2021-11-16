<template>
  <push-button>
    simple button
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
  <div>
    <push-button theme="white-left"> theme="white-left" </push-button>
    <push-button theme="white-mid"> white-mid </push-button>
    <push-button theme="white-right"> white-right </push-button>
  </div>
</template>
<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'

</script>
