<template>
  <button
    type="submit"
    class="
      group
      relative
      flex
      w-full
      justify-center
      rounded-md
      bg-viola
      dark:bg-arancio
      py-2
      px-4
      text-sm
      font-medium
      text-chiaro
      dark:text-scuro
      hover:bg-indigo-500
      dark:hover:bg-[rgb(214,147,60)]
      transition-all
    "
  >
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <LockClosedIcon
        class="h-5 w-5 text-gray-300 dark:text-scuro group-hover:text"
        aria-hidden="true"
      />
    </span>
    {{ label }}
  </button>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid';

defineProps({
  label: String,
});
</script>

