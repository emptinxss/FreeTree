<template>
  <td class="block p2 md:px-6 md:py-4 text-sm whitespace-nowrap md:table-cell">
    <span class="inline-block w-1/3 font-bold p-1 md:hidden">Name</span>
    <p class="px-1 text-xs sm:text-sm" v-if="!edit.show || edit.id != index">
      {{ data }}
    </p>
    <p>
      <input
        class="
          rounded-md
          p-0
          px-1
          border-gray-300
          focus:border-indigo-500 focus:ring-indigo-500
          text-xs
          sm:text-sm
          text-scuro
          transition-all
        "
        v-if="edit.show && edit.id == index"
        type="text"
        name="link_name"
        :value="name"
        @input="$emit('update:name', $event.target.value)"
        @keyup.enter="$emit('save-settings')"
      />
    </p>
  </td>
</template>

<script setup>
defineProps({
  data: String,
  edit: Object,
  index: Number,
  name: String,
});

defineEmits([, 'save-settings', 'update:name']);
</script>

<style>
</style>
