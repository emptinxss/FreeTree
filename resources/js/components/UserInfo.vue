<template>
  <section
    class="
      text-scuro
      dark:text-chiaro
      px-4
      sm:py-5
      py-3
      sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
      border-t border-t-gray-400
    "
  >
    <dt class="text-sm font-medium">{{ title }}</dt>
    <dd
      class="mt-1 sm:text-sm text-xs sm:col-span-2 sm:mt-0 flex justify-between"
    >
      <p v-if="!isEditing">{{ data }}</p>
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
        "
        v-if="isEditing"
        :type="type"
        :value="data"
        @input="$emit('update:data', $event.target.value)"
        @keyup.enter="$emit('save-settings')"
      />
      <button
        v-if="!isEditing"
        @click="isEditing = true"
        class="dark:hover:text-arancio hover:text-viola transition-all"
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <div v-if="isEditing">
        <button
          @click="isEditing = false"
          class="hover:text-red-500 pr-2 transition-all"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          @click="$emit('save-settings')"
          class="hover:text-green-500 transition-all"
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
    </dd>
  </section>
</template>

<script setup>
defineProps({
  type: String,
  data: String,
  title: String,
  isEditing: Boolean,
});

defineEmits(['save-settings', 'update:data']);
</script>

  <style>
</style>
