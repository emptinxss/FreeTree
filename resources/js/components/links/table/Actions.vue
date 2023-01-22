<template>
  <td
    class="py-2 md:px-6 md:py-4 text-sm whitespace-nowrap block md:table-cell"
  >
    <span class="inline-block w-1/3 md:hidden font-bold p-1">Actions</span>
    <div
      class="
        flex
        justify-start
        md:justify-end
        px-1
        md:px-0
        border-b-2
        pb-2
        border-b-scuro
        dark:border-b-chiaro
        md:border-hidden md:pb-0
      "
    >
      <Edit
        label="Edit"
        :edit="edit"
        :index="index"
        @get-link-data="$emit('get-link-data')"
      />
      <form
        @submit.prevent="$emit('del-link')"
        v-if="edit.show && edit.id == index"
      >
        <Cancel :edit="edit" />
        <Save @save-settings="$emit('save-settings')" />
        <Delete type="submit" />
      </form>
    </div>
  </td>
</template>

<script setup>
import Cancel from './buttons/Cancel.vue';
import Save from './buttons/Save.vue';
import Delete from './buttons/Delete.vue';
import Edit from './buttons/Edit.vue';

defineProps({
  edit: Object,
  index: Number,
});
defineEmits(['save-settings', 'get-link-data', 'del-link']);
</script>

<style>
</style>
