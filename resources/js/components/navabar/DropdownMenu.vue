<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton
        class="
          flex
          max-w-xs
          items-center
          rounded-full
          dark:bg-chiaro
          bg-transparent
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-gray-300
          dark:focus:ring-offset-gray-800
        "
      >
        <span class="sr-only">Open user menu</span>
        <UserImage :image="user.image" />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          absolute
          right-0
          z-10
          mt-2
          w-48
          origin-top-right
          rounded-md
          bg-chiaro
          dark:bg-scuro
          py-1
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <div class="flex flex-col text-scuro dark:text-chiaro">
          <p class="block px-4 py-2 text-sm">Hi, {{ user.name }}</p>

          <router-link
            to="/settings"
            class="
              block
              px-4
              py-2
              text-sm
              active:bg-gray-200
              hover:text-viola
              dark:hover:text-arancio
              transition-all
            "
            >Settings</router-link
          >
          <a
            class="
              block
              px-4
              py-2
              text-sm
              active:bg-gray-200
              cursor-pointer
              hover:text-viola
              dark:hover:text-arancio
              transition-all
            "
            @click="$emit('logout')"
          >
            Log out
          </a>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import UserImage from '../UserImage.vue';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';

defineProps({
  user: Object,
});

defineEmits(['logout']);
</script>

