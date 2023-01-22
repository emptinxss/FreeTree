<template>
  <img class="mx-auto" :class="size" :src="theme ? image : darkImage" />
</template>

<script setup>
const props = defineProps({
  theme: Boolean,
  image: String,
  darkImage: String,
  size: { default: 'h-16 w-16 sm:h-28 sm:w-28' },
});
</script>

<style>
</style>
