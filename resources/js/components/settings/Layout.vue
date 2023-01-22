<template>
  <div
    class="
      overflow-hidden
      sm:rounded-lg
      border
      shadow-md
      dark:border-chiaro
      rounded-lg
    "
  >
    <header class="px-4 py-5 sm:px-6 bg-white dark:bg-scuro">
      <h3 class="text-lg font-medium leading-6 text-scuro dark:text-chiaro">
        {{ title }}
      </h3>

      <p class="mt-1 max-w-2xl text-sm text-scuro dark:text-gray-300">
        {{ description }}
      </p>
    </header>
    <main>
      <dl>
        <slot></slot>
      </dl>
    </main>
  </div>
</template>

  <script setup>
defineProps(['title', 'description']);
</script>

  <style></style>
