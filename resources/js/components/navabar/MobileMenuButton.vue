<template>
  <DisclosureButton
    class="
      inline-flex
      items-center
      justify-center
      rounded-md
      bg-viola
      dark:bg-gray-700
      p-2
      text-chiaro
      dark:text-chiaro dark:hover:bg-gray-800
      hover:text-white
    "
  >
    <span class="sr-only">Open main menu</span>
    <Bars3Icon v-if="open" class="block h-6 w-6" aria-hidden="true" />
    <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
  </DisclosureButton>
</template>

<script setup>
import { DisclosureButton } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
defineProps({
  open: Boolean,
});
</script>

<style>
</style>
