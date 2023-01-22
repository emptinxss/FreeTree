<template>
  <section
    class="
      px-4
      sm:py-5
      py-3
      sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
      text-scuro
      dark:text-chiaro
      border-t border-t-gray-400
    "
  >
    <dt class="text-sm font-medium">{{ title }}</dt>
    <dd class="mt-1 sm:text-sm text-xs sm:col-span-2 sm:mt-0">
      <div class="flex-shrink-0">
        <button
          v-if="!edit"
          @click="edit = true"
          class="
            font-medium
            dark:text-chiaro dark:hover:text-arancio
            hover:text-viola
          "
        >
          Change
        </button>
        <div v-if="edit" class="flex justify-between transition-all">
          <input type="file" name="image" @change="handlechange" />
          <div>
            <button @click="edit = false" class="hover:text-red-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              @click="$emit('upload-image')"
              class="dark:hover:text-arancio hover:text-viola"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </dd>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  edit: Boolean,
});

const emit = defineEmits(['upload-image', 'image-file']);

const handlechange = (event) => {
  emit('image-file', event.target.files[0]);
};
</script>

<style>
</style>
