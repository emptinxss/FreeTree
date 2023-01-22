<template>
  <section
    class="
      px-4
      sm:py-5
      py-3
      sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
      text-scuro
      dark:text-white
      border-t border-t-gray-400
      flex
      justify-between
    "
  >
    <dt class="text-sm font-medium">{{ title }}</dt>
    <dd class="mt-1 text-xs sm:text-sm sm:col-span-2 sm:mt-0">
      <ModalVue
        styleModalButton="text-chiaro dark:text-scuro hover:text-red-500 border border-red-500 bg-red-500 hover:bg-transparent dark:hover:text-red-500 dark:hover:border-red-500 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center -mt-2 mr-2 mb-2 transition-all"
        :defaultModal="true"
        textOpenModal="Delete account"
        title="Are you sure?"
        text="You won't be able to revert this!"
        icon="warning"
        iconColor="red"
        confirmButtonText="Yes, delete it!"
        :showCancelButton="true"
        :isConfirmed="handleDelete"
        :customClass="{
          popup: 'bg-chiaro dark:bg-scuro',
          title: 'text-scuro dark:text-white',
          htmlContainer: 'text-scuro dark:text-chiaro',
          confirmButton:
            'inline-block rounded-lg bg-red-500 hover:bg-red-600  ml-2 px-2 py-0.5 sm:px-3 sm:py-1.5 sm:text-base text-xs font-semibold leading-7 text-chiaro shadow-sm ',
          cancelButton:
            'inline-block rounded-lg bg-chiaro hover:bg-gray-300  ml-2 px-2 py-0.5 sm:px-3 sm:py-1.5 sm:text-base text-xs font-semibold leading-7 text-scuro shadow-sm',
        }"
      />
    </dd>
  </section>
</template>

<script setup>
import ModalVue from '../Modal.vue';

defineProps({
  title: String,
});
const emit = defineEmits(['delete-account']);
const handleDelete = () => {
  emit('delete-account');
};
</script>

<style>
</style>
