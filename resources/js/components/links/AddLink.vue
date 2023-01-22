<template>
  <main class="flex justify-between pt-2">
    <div v-auto-animate>
      <AddButton v-if="!showForm" @click="showForm = true" />
      <div v-if="showForm" class="-mb-10">
        <FormKit
          type="form"
          submit-label="Save"
          @submit="createLink"
          :submit-attrs="{
            inputClass:
              'text-chiaro dark:text-scuro hover:text-viola dark:hover:text-arancio border border-viola dark:border-arancio bg-viola dark:bg-arancio hover:bg-chiaro dark:hover:bg-black  active:bg-gray-200 dark:active:bg-scuro transition-all font-medium rounded-full  text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-center mr-2 mb-2 mt-2',
          }"
          incomplete-class="text-red-500"
        >
          <FormKit
            name="link_name"
            label="Name"
            input-class="rounded-md p-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-scuro"
            label-class="px-1 py-3 text-xs font-bold text-left uppercase text-scuro dark:text-chiaro"
            validation="required|string"
          />
          <FormKit
            name="link"
            label="Link"
            input-class="rounded-md p-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-scuro"
            label-class="px-1 py-3 text-xs font-bold text-left  uppercase text-scuro dark:text-chiaro "
            validation="required|url"
          />
        </FormKit>
        <CancelButton @click="showForm = false" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useAddLink } from '../../composables/addLink.js';
import CancelButton from './CancelButton.vue';
import AddButton from './AddButton.vue';
const { showForm, createLink } = useAddLink();
</script>

<style>
.formkit-messages {
  color: red;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
}

.truncate {
  max-width: 30ch;
}
</style>
