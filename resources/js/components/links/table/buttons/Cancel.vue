<template>
  <button
    @click="(edit.show = false), (edit.id = '')"
    type="button"
    class="pr-4 md:pr-2 text-blue-500 hover:text-blue-700 transition-all"
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  edit: Object,
});
</script>

<style>
</style>
