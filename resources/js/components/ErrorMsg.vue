<template>
  <div
    class="
      py-3
      px-5
      bg-red-500
      text-white
      rounded
      flex
      justify-between
      items-center
      mt-4
    "
  >
    {{ msg }}
    <span
      @click="closeError"
      class="
        w-8
        h-8
        flex
        items-center
        justify-center
        cursor-pointer
        rounded-full
        transition-colors
        hover:bg-[rgba(0,0,0,0.2)]
      "
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  </div>
</template>

<script setup>
import store from '../store';

defineProps({
  msg: String,
});

const closeError = () => {
  store.commit('closeError');
};
</script>

<style></style>
