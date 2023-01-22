<template>
  <DisclosurePanel class="md:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        :class="[
          route.name === item.to.name
            ? 'text-chiaro bg-viola dark:bg-scuro dark:text-arancio'
            : 'text-scuro dark:text-chiaro hover:bg-gray-200 dark:hover:bg-scuro dark:hover:text-chiaro',
          'block px-3 py-2 rounded-md text-xs font-medium',
        ]"
        >{{ item.name }}</router-link
      >
    </div>
    <div class="border-t border-gray-700 pt-4 pb-3">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <UserImage
            class="dark:bg-chiaro"
            size="h-10 w-10"
            :image="user.image"
          />
        </div>
        <div class="ml-3">
          <div
            class="text-sm font-medium leading-none text-scuro dark:text-chiaro"
          >
            {{ user.name }}
          </div>
          <div class="text-xs font-medium leading-none text-gray-400">
            {{ user.email }}
          </div>
        </div>
      </div>
      <div class="mt-3 space-y-1 px-2">
        <div
          class="
            flex flex-col
            rounded-md
            py-2
            text-xs
            font-medium
            dark:text-chiaro
          "
        >
          <router-link
            to="/settings"
            :class="[
              route.name == 'Settings'
                ? 'text-chiaro bg-viola dark:bg-scuro dark:text-arancio'
                : 'text-scuro dark:text-chiaro hover:bg-gray-200 dark:hover:bg-scuro dark:hover:text-chiaro',
              'block px-3 py-2 rounded-md text-xs font-medium',
            ]"
            >Settings</router-link
          >
          <a
            @click="$emit('logout')"
            class="
              mt-1
              text-scuro
              hover:bg-gray-200
              dark:hover:bg-scuro dark:text-chiaro
              rounded-md
              px-3
              py-2
              dark:active:text-arancio
              active:text-viola
            "
          >
            Log out
          </a>
        </div>
      </div>
    </div>
  </DisclosurePanel>
</template>

<script setup>
import { DisclosurePanel } from '@headlessui/vue';
import { useRoute } from 'vue-router';
import UserImage from '../UserImage.vue';

defineProps({
  user: Object,
  navigation: Array,
});

defineEmits(['logout']);

const route = useRoute();
</script>

<style>
</style>
