<template>
  <button
    type="button"
    aria-pressed="false"
    :disabled="disabled"
    class="relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
    :class="[
      {
        'bg-blue-300': value,
        'bg-gray-200': !value,
        'cursor-not-allowed': disabled
      },
      sizeClasses.button
    ]"
    @click="choose"
  >
    <span class="sr-only">Use setting</span>
    <span
      class="relative inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      :class="[value ? sizeClasses.translate : 'translate-x-0', sizeClasses.span]"
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

<script>
export default {
  data () {
    return {
      value: false,
      disabled: false,
    }
  },
  computed: {
    sizeClasses () {
      return {
          name: 'medium',
          button: 'h-6 w-11',
          span: 'w-5 h-5',
          translate: 'translate-x-5',
        // name: 'small',
        // button: 'h-5 w-9',
        // span: 'w-4 h-4',
        // translate: 'translate-x-4',
      }
    },
  },
  methods: {
    choose () {
      console.log(this.value)

      this.value = !this.value
    },
  },
}
</script>
