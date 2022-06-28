<template>
  <push-button @click="modal = true">&lt;modal-base&gt;</push-button>
  <ssh-pre language="html" copy-button dark>
    <pre>
&lt;modal-base&gt;<br />
  &lt;div class="p-12"&gt;
    this is a modal
  &lt;div&gt;
&lt;/modal-base&gt;
    </pre>
    <template #copy-button>
      <icon icon="mdi-content-copy">copy</icon>
    </template>
  </ssh-pre>
  <push-button @click="test">$modal.show('this is a test')</push-button>
  <push-button @click="danger">danger modal</push-button>
  <ssh-pre language="js" copy-button dark>
    <pre>
$modal.show({
  type: 'danger',
  title: 'This is the title property',
  body: 'This is the body property.',
  primary: {
    label: 'Primary Action',
    theme: 'red',
    action: () => $toast.show('Primary Button clicked'),
  },
  secondary: {
    label: 'Secondary Action',
    theme: 'white',
    action: () => $toast.show('Clicked Secondary'),
  },
})
  </pre
    >
    <template #copy-button>
      <icon icon="mdi-content-copy">copy</icon>
    </template>
  </ssh-pre>
  <modal-base v-if="modal" :destroyed="() => (modal = false)">
    <div class="flex items-center justify-center p-12">this is a modal</div>
  </modal-base>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-core'
import { Icon } from '@iconify/vue'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import PushButton from '../../../src/components/PushButton.vue'
import ModalBase from '../../../src/components/ModalBase.vue'
import { useModal } from '../../../src/composables/useModal'
import { useToast } from '../../../src/composables/useToast'

const modal = ref(false)
const $modal = useModal()
const $toast = useToast()

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
      action: () => $toast.show('Primary Button clicked'),
    },
    secondary: {
      label: 'Secondary Action',
      theme: 'white',
      action: () => $toast.show('Clicked Secondary'),
    },
  })
}
</script>
