<template>
  <div>
    <header>
      <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1
          class="
            text-xl
            sm:text-3xl
            font-bold
            tracking-tight
            dark:text-chiaro
            text-scuro
          "
        >
          {{ title }}
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-2 sm:px-0">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

