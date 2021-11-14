<template>
  <push-button @click="toast">$toast.show('this is a test')</push-button>
  <push-button @click="noTimeout">{ timeout: 0 }</push-button>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
import { useToast } from '../../src/toast'
const $toast = useToast()
function toast() {
  $toast.show('this is a test')
}
function noTimeout() {
  $toast.show({ message: 'this is a test', timeout: 0 })
}
</script>
