<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue'
import { PushButtonSize, PushButtonState, PushButtonTheme } from 'src/types/push-button'

const props = defineProps({
  alwaysClick: Boolean,
  customTheme: Object as PropType<PushButtonTheme>,
  theme: String as PropType<PushButtonTheme>,
  state: {
    type: String as PropType<PushButtonState>,
    default: 'active',
  },
  size: {
    type: String as PropType<PushButtonSize>,
    default: 'm',
  },
  ping: String,
})

const isActive = computed(() => props.state === PushButtonState.Active)
const isDisabled = computed(() => props.state === PushButtonState.Disabled)
const cursor = computed(() => isActive.value ? 'cursor-pointer' : isDisabled.value ? 'cursor-not-allowed' : 'cursor-wait')

const sizes: Record<PushButtonSize, string> = {
  [PushButtonSize.Smallest]: 'px-2.5 py-1.5 text-xs leading-4',
  [PushButtonSize.Small]: 'px-3 py-2 text-sm leading-4',
  [PushButtonSize.Medium]: 'px-4 py-2 text-sm leading-5',
  [PushButtonSize.Large]: 'px-4 py-2 text-base leading-6',
  [PushButtonSize.Largest]: 'px-6 py-3 text-base leading-6',
}

</script>

<template>
  <button
      type="button"
      class="relative inline-flex items-center"
      :class="[ sizes[ size ], cursor, currentThemeClass ]"
      @click="click"
  >
    <slot />
    <span
        v-if="ping"
        class="absolute top-0 right-0 -mr-1 -mt-1 z-10"
    >
      <span class="flex w-3 h-3 relative">
        <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            :class="ping"
        />
        <span
            class="relative inline-flex rounded-full h-3 w-3"
            :class="ping"
        />
      </span>
    </span>
  </button>
</template>
