<script lang="ts" setup>
import FormToggle from '../../src/FormToggle.vue'
</script>

<template>
  <!-- Default -->
  <form-toggle />

  <!-- With Custom Icon -->
  <form-toggle>
    <template #icon-on>
      <div class="flex items-center rounded">
        <span class="w-3 h-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path :class="['text-white', 'fill-current']" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-20.69 165.94l-184 184a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.75l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63z" />
            <path :class="['text-gray-400', 'fill-current']" d="M195.31 381.94a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.74l150.06-150a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63l-184 184z" />
          </svg>
        </span>
      </div>
    </template>
  </form-toggle>
</template>


