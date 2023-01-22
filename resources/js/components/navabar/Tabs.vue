<template>
  <div class="ml-10 flex items-baseline space-x-4">
    <router-link
      v-for="item in navigation"
      :key="item.name"
      :to="item.to"
      active-class=""
      :class="[
        route.name === item.to.name
          ? ' text-chiaro bg-viola dark:bg-arancio dark:text-scuro'
          : 'text-scuro dark:text-chiaro hover:bg-gray-200 dark:hover:bg-scuro dark:hover:text-chiaro',
        'px-3 py-2 rounded-md text-sm font-medium ',
      ]"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

defineProps({
  navigation: Array,
});

const route = useRoute();
</script>

<style>
</style>
