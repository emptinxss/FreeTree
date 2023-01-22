<template>
  <button
    class="pr-4 text-green-500 hover:text-green-700 transition-all"
    type="button"
    @click="$emit('save-settings')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4 md:w-6 md:h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </button>
</template>

<script setup>
defineEmits(['save-settings']);
</script>

