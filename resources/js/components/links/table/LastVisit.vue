<template>
  <td class="p2 md:px-6 md:py-4 text-sm whitespace-nowrap block md:table-cell">
    <span class="inline-block w-1/3 md:hidden font-bold p-1">Last Visit</span>
    <p class="px-1 text-xs sm:text-sm">
      {{ data ? dateFormat(data.created_at) : 'N/A' }}
    </p>
  </td>
</template>

<script setup>
import moment from 'moment';

defineProps({
  data: Object,
});

const dateFormat = (value) => {
  return moment(value).fromNow();
};
</script>

<style>
</style>
