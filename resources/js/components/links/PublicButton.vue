<template>
  <button
    class="
      text-white
      border
      hover:bg-transparent
      active:bg-scuro
      transition-all
      font-medium
      rounded-full
      text-xs
      sm:text-sm
      px-3
      sm:px-5
      py-1.5
      sm:py-2.5
      text-center
      mr-2
      mb-2
    "
    :class="colors"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  colors: String,
});
</script>

<style>
</style>
