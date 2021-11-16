<template>
  <push-button @click="test">$toast.show('this is a test')</push-button>
  <push-button @click="noTimeout">{ timeout: 0 }</push-button>
  <push-button @click="warn">warning('warning')</push-button>
  <push-button @click="single">single action</push-button>
  <push-button @click="double">primary and secondary action</push-button>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
import { useToast } from '../../src'
const $toast = useToast()
function test() {
  $toast.show('this is a test')
}
function noTimeout() {
  $toast.show({ message: 'this is a test', timeout: 0 })
}

function warn() {
  $toast.warning('this is a warning')
}

function single() {
  $toast.show({
    type: 'danger',
    message: 'single action toast',
    timeout: 6,
    primary: {
      label: 'UNDO',
      action: () => $toast.show('you clicked UNDO')
    }
  })
}

function double() {
  $toast.show({
    type: 'info',
    title: 'this is the title',
    message: 'dual action toast',
    timeout: 0,
    primary: {
      label: 'OK',
      action: () => $toast.success('you clicked OK')
    },
    secondary: {
      label: 'Cancel',
      action: () => $toast.warning('you clicked Cancel')
    }
  })
}
</script>
