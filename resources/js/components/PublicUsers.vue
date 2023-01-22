<template>
  <div v-for="user in users" :key="user">
    <a :href="'/users/' + user.name" target="_blank">
      <div class="flex justify-center items-center">
        <div
          class="
            sm:w-full
            w-3/4
            max-w-sm
            rounded-lg
            shadow-md
            dark:shadow-xl dark:shadow-black
            hover:scale-105
            transition-all
            hover:border-viola
            dark:hover:border-arancio
            border
            dark:border-scuro
            text-scuro
            hover:text-viola
            dark:text-chiaro dark:hover:text-arancio
          "
        >
          <div class="flex justify-center px-4 pt-8">
            <div class="flex flex-col items-center pb-8">
              <UserImage
                class="
                  mb-3
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  transition-all
                  dark:bg-chiaro
                "
                size="sm:w-24 sm:h-24 w-16 h-16"
                :image="user.image"
              />
              <h5 class="mb-1 text-base sm:text-xl font-medium">
                <span class="text-xs sm:text-lg">@</span>{{ user.name }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import UserImage from '../components/UserImage.vue';
defineProps(['users']);
</script>

<style>
</style>
