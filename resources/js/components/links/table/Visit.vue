<template>
  <td class="p2 md:px-6 md:py-4 text-sm whitespace-nowrap block md:table-cell">
    <span class="inline-block w-1/3 md:hidden font-bold p-1">Visit</span>
    <p class="px-1 text-xs sm:text-sm">
      {{ data ? data : 0 }}
    </p>
  </td>
</template>

<script setup>
defineProps({
  data: Number,
});
</script>

<style>
</style>
