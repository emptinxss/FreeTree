<template>
  <img
    class="rounded-full"
    :class="size"
    :src="image ? imageURL + image : defaultUserImage"
  />
</template>

<script setup>
const imageURL = new URL('../../../uploads/', import.meta.url).href;
const defaultUserImage = new URL('../../assets/user.png', import.meta.url).href;
defineProps({
  image: String,
  size: { default: 'h-8 w-8 ' },
});
</script>

<style>
</style>
