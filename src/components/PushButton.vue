<script lang="ts" setup>
import { PropType, computed } from '@vue/runtime-core'
import {
  PushButtonSize,
  PushButtonState,
  PushButtonTheme,
  PushButtonThemeName,
} from '../types/push-button'
import { themes } from '../themes/PushButtonThemes'

const emit = defineEmits(['click'])
const props = defineProps({
  alwaysClick: Boolean,
  customTheme: Object as PropType<PushButtonTheme>,
  theme: String as PropType<PushButtonThemeName>,
  state: {
    type: String as PropType<PushButtonState>,
    default: 'active',
  },
  size: {
    type: String as PropType<PushButtonSize>,
    default: 'm',
  },
  ping: Boolean,
  pingColor: {
    type: String,
    default: 'bg-indigo-500',
  },
})

const isActive = computed(() => props.state === 'active')
const isDisabled = computed(() => props.state === 'disabled')
const cursor = computed(() =>
  isActive.value
    ? 'cursor-pointer'
    : isDisabled.value
    ? 'cursor-not-allowed'
    : 'cursor-wait'
)

const sizes: Record<PushButtonSize, string> = {
  xs: 'px-2.5 py-1.5 text-xs leading-4',
  s: 'px-3 py-2 text-sm leading-4',
  m: 'px-4 py-2 text-sm leading-5',
  l: 'px-4 py-2 text-base leading-6',
  xl: 'px-6 py-3 text-base leading-6',
}

const currentTheme = computed((): PushButtonTheme | undefined => {
  if (props.customTheme) return props.customTheme
  if (props.theme && themes.find(({ name }) => name === props.theme))
    return themes.find(({ name }) => name === props.theme)
  return themes.find(({ name }) => name === 'white')
})

function click(): void {
  if (isActive) emit('click')
}
</script>

<template>
  <button
    type="button"
    class="relative inline-flex items-center"
    :class="[
      sizes[size],
      currentTheme?.primary,
      currentTheme?.dark,
      cursor,
      isActive ? currentTheme?.active : currentTheme?.disabled,
    ]"
    @click="click"
  >
    <slot />
    <span v-if="ping" class="absolute top-0 right-0 z-10 -mt-1 -mr-1">
      <span class="relative flex w-3 h-3">
        <span
          class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
          :class="pingColor"
        />
        <span
          class="relative inline-flex w-3 h-3 rounded-full"
          :class="pingColor"
        />
      </span>
    </span>
  </button>
</template>
