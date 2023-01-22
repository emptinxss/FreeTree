<template>
  <button
    class="text-green-500 hover:text-green-700 pr-4 mt-1 transition-all"
    v-if="!edit.show || edit.id != index"
    @click="(edit.show = true), (edit.id = index), $emit('get-link-data')"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  edit: Object,
  index: Number,
  label: String,
});

defineEmits(['get-link-data']);
</script>

<style>
</style>
