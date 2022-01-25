<template>
  <button
    type="button"
    aria-pressed="false"
    :disabled="disabled"
    class="relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[
      {
        'cursor-not-allowed': disabled
      },
      currentSize.button,
      currentTheme.outer,
      currentTheme.focus,
    ]"
    @click="choose"
  >
    <span class="sr-only">Use setting</span>
    <span
      class="relative inline-block rounded-full shadow transform ring-0 transition ease-in-out duration-200"
      :class="[currentTheme.inner, value ? currentSize.translate : 'translate-x-0', currentSize.span]"
    >
      <span
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        :class="{
          'opacity-0 ease-out duration-100': value,
          'opacity-100 ease-in duration-200': !value,
        }"
        aria-hidden="true"
      >
        <slot name="icon-off" />
      </span>
      <span
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        :class="{
          'opacity-100 ease-in duration-200': value,
          'opacity-0 ease-out duration-100': !value,
        }"
        aria-hidden="true"
      >
        <slot name="icon-on" />
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { FormToggleSizeLabel, FormToggleSizes, FormToggleSize, FormToggleTheme, FormToggleThemeName } from './types/form-toggle';
import { themes } from './FormToggleThemes'

const emit = defineEmits(['toggle'])

const props = defineProps({
  customTheme: Object as PropType<FormToggleTheme>,
  theme: String as PropType<FormToggleThemeName>,
  size: {
    type: String as PropType<FormToggleSizeLabel>,
    default: 'm',
  },
  value: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const sizes: FormToggleSizes = [
  {
    name: 'xs',
    button: 'h-4 w-7',
    span: 'w-3 h-3',
    translate: 'translate-x-3',
  },
  {
    name: 's',
    button: 'h-5 w-9',
    span: 'w-4 h-4',
    translate: 'translate-x-4',
  },
  {
    name: 'm',
    button: 'h-6 w-11',
    span: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  {
    name: 'l',
    button: 'h-7 w-14',
    span: 'w-6 h-6',
    translate: 'translate-x-7',
  },
  {
    name: 'xl',
    button: 'h-8 w-16',
    span: 'w-7 h-7',
    translate: 'translate-x-8',
  },
]

const currentSize = computed((): FormToggleSize => {
  return sizes.find(s => s.name === props.size)
})

const currentTheme = computed((): FormToggleTheme|undefined => {
  if (props.customTheme) return props.customTheme
  if (props.theme && themes.find(({ name }) => name === props.theme))
    return themes.find(({ name }) => name === props.theme)
  return themes.find(({ name }) => name === 'white')
})

const choose = () => {
  emit('toggle', !props.value)
}

</script>
