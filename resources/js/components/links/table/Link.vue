<template>
  <td class="p2 md:px-6 md:py-4 text-sm block md:table-cell">
    <span class="inline-block w-1/3 md:hidden font-bold p-1">Link</span>
    <p
      class="
        px-1
        text-xs
        sm:text-sm
        whitespace-nowrap
        overflow-hidden
        text-ellipsis
        truncate
      "
      v-if="!edit.show || edit.id != index"
    >
      <a
        class="hover:text-viola dark:hover:text-arancio transition-all"
        target="_blank"
        :href="data"
        >{{ data }}</a
      >
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
        :value="url"
        @input="$emit('update:url', $event.target.value)"
        @keyup.enter="$emit('save-settings')"
      />
    </p>
  </td>
</template>

<script setup>
defineProps({
  data: String,
  index: Number,
  url: String,
  edit: Object,
});

defineEmits(['update:url', 'save-settings']);
</script>

<style>
</style>
