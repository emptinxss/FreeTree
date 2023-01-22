<template>
  <h1
    class="
      text-4xl
      font-bold
      tracking-tight
      text-center
      sm:text-6xl
      dark:text-chiaro
      text-scuro
    "
  >
    {{ title }}
  </h1>
  <p
    class="
      mt-6
      text-base
      sm:text-lg
      leading-8
      dark:text-chiaro
      text-scuro text-center
    "
  >
    {{ description }}
  </p>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

