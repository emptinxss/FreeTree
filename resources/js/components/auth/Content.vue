<template>
  <h2
    class="
      mt-4
      text-center text-xl
      sm:text-3xl
      font-bold
      tracking-tight
      text-scuro
      dark:text-chiaro
    "
  >
    {{ title }}
  </h2>
  <p
    class="
      sm:mt-2
      mt-1
      text-center text-xs
      sm:text-sm
      text-scuro
      dark:text-chiaro
    "
  >
    Or

    <router-link
      :to="redirect"
      class="
        font-medium
        text-viola
        dark:text-arancio
        hover:text-indigo-500
        dark:hover:text-[rgb(214,147,60)]
      "
      >{{ label }}</router-link
    >
  </p>
</template>

<script setup>
defineProps({
  title: String,
  redirect: String,
  label: String,
});
</script>
