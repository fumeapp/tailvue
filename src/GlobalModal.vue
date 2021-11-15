<template>
  <modal-base ref="modalBaseRef" :active="active" :destroyed="destroy">
    <div class="sm:flex sm:items-start">
      <div
        :class="typeColors[type]"
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
        <Icon icon="mdi-check" v-if="type === 'success'" class="h-5 w-5 text-green-500" />
        <Icon icon="bi-info-lg" v-if="type === 'info'" class="h-5 w-5 text-blue-500" />
        <Icon icon="mdi-exclamation-thick" v-if="type === 'danger'" class="h-5 w-5 text-red-500" />
        <Icon icon="mdi-exclamation-thick" v-if="type === 'warning'" class="h-5 w-5 text-yellow-500" />
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 v-if="title" class="mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-300" id="modal-headline">
          {{ title }}
        </h3>
        <p v-if="body" class="text-sm leading-5" v-html="body"></p>
      </div>
    </div>
    <div v-if="primary" class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <push-button
        v-if="primary"
        ref="primaryRef"
        class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
        :theme="primary.theme"
        @click.native="action('primary')"
      >
        {{ primary.label }}
      </push-button>
      <push-button
        v-if="secondary"
        class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
        :theme="secondary.theme"
        @click.native="action('secondary')"
      >
        {{ secondary.label }}
      </push-button>
    </div>
  </modal-base>
</template>

<script lang="ts" setup="{ ray }">
import { Icon } from '@iconify/vue'
import { removeElement } from './utils'
import ModalBase from './ModalBase.vue'
import PushButton from './PushButton.vue'
import { onMounted, PropType, ref } from 'vue'
import { ModalButton, ModalType } from '@/types/modal'

const props = defineProps({
  type: {
    type: String as PropType<ModalType>,
    required: false,
    default: 'info',
  },
  title: {
    type: [Boolean, String],
    required: false,
    default: false,
  },
  body: {
    type: [Boolean, String],
    required: false,
    default: false,
  },
  primary: [Boolean, Object] as PropType<ModalButton>,
  secondary: [Boolean, Object] as PropType<ModalButton>,
})

const active = ref(false)
const primaryRef = ref<null|Object & { $el: HTMLButtonElement }>(null)
const modalBaseRef = ref<InstanceType<typeof ModalBase>|null>(null)
const typeColors:Record<ModalType, string> = {
  success: 'bg-green-100 dark:bg-green-900',
  info: 'bg-blue-100 dark:bg-blue-900',
  danger: 'bg-red-100 dark:bg-red-900',
  warning: 'bg-yellow-100 dark:bg-yellow-900',
}
onMounted(() => {
  active.value = true
  setTimeout(() => {
    if (props.primary && primaryRef && primaryRef.value)
      primaryRef?.value?.$el.focus()
  }, 200)
})

async function action (type: 'primary'|'secondary') {
  if (modalBaseRef) {
    modalBaseRef?.value?.destroy()
  }
  if (type === 'primary' && props.primary)
    props.primary.action()
  if (type === 'secondary' && props.secondary)
    props.secondary.action()
}
async function destroy ()  {
  active.value = false
  removeElement(modalBaseRef?.value?.$el)
}
</script>
