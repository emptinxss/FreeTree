<template>
  <div class="group flex">
    <div class="absolute sm:top-3 sm:left-44 top-1.5 left-36">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </div>
    <span
      class="
        group-hover:flex
        transition-opacity
        dark:bg-scuro dark:text-chiaro
        bg-white
        text-scuro
        px-4
        py-2
        text-sm
        rounded-md
        absolute
        left-6
        md:left-52
        top-8
        md:-top-10
        hidden
        m-4
        mx-auto
        flex-wrap
        w-3/4
        md:w-1/6
      "
      >{{ message }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  message: String,
});
</script>

