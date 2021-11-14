<template>
  <push-button @click="modal = true">&lt;modal-base&gt;</push-button>
  <push-button @click="test">$modal.show('this is a test')</push-button>
  <push-button @click="danger">danger modal</push-button>
  <modal-base v-if="modal" :destroyed="() => modal = false">
    <div class="flex items-center justify-center p-12">
      this is a modal
    </div>
  </modal-base>
</template>

<script lang="ts" setup>
import PushButton from '../../src/PushButton.vue'
import ModalBase from '../../src/ModalBase.vue'
import { ref } from 'vue'
import { useModal } from '../../src/modal'
const modal = ref(false)
const $modal = useModal()

function test() {
  $modal.show('this is a test')
}

function danger() {
  $modal.show({
    type: 'danger',
    title: 'This is the title property',
    body: 'This is the body property.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam.',
    primary: {
      label: 'Primary Action',
      theme: 'red',
      action: () => console.log('Primary Button clicked'),
    },
    secondary: {
      label: 'Secondary Button',
      theme: 'white',
      action: () => console.log('Clicked Secondary'),
    },
  })
}
</script>
