<template>
  <default-background />
  <div class="min-h-full">
    <Disclosure
      as="nav"
      class="border-b dark:border-b-scuro border-b-gray-200"
      v-slot="{ open }"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Logo
                size=" h-14 w-14 sm:h-16 sm:w-16"
                :theme="theme"
                :image="image"
                :darkImage="darkImage"
              />
            </div>
            <div class="hidden md:block">
              <Tabs :navigation="navigation" />
            </div>
          </div>
          <section class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <DarkToggle
                class="mt-2"
                :isDark="isDark"
                @toggle-dark="toggleDark()"
                @check-mode="checkMode()"
              />
              <DropdownMenu :user="user" @logout="logout()" />
            </div>
          </section>
          <section class="-mr-2 flex md:hidden">
            <DarkToggle
              class="mt-2 mr-2"
              :isDark="isDark"
              @toggle-dark="toggleDark()"
              @check-mode="checkMode()"
            />
            <MobileMenuButton :open="!open" />
          </section>
        </div>
      </nav>
      <MobileMenu :user="user" :navigation="navigation" @logout="logout" />
    </Disclosure>
    <router-view />
  </div>
</template>

<script setup>
import DropdownMenu from '../components/navabar/DropdownMenu.vue';
import DarkToggle from '../components/DarkToggle.vue';
import Logo from '../components/Logo.vue';
import DefaultBackground from '../components/DefaultBackground.vue';
import MobileMenu from '../components/navabar/MobileMenu.vue';
import MobileMenuButton from '../components/navabar/MobileMenuButton.vue';
import Tabs from '../components/navabar/Tabs.vue';
import { Disclosure } from '@headlessui/vue';
import { useRoute } from 'vue-router';
import { useLogo } from '../composables/logo.js';
import { useThemeToggle } from '../composables/themeToggle.js';
import { useUser } from '../composables/user.js';
import { useLogout } from '../composables/logout.js';

const { isDark, toggleDark, checkMode } = useThemeToggle();
const { logout } = useLogout();
const { image, darkImage, theme } = useLogo();
const { user } = useUser();

const route = useRoute();

const navigation = [
  { name: 'Dashboard', to: { name: 'Dashboard' } },
  { name: 'My Links', to: { name: 'MyLinks' } },
];

document.documentElement.classList.remove('overflow-y-hidden');
</script>

<style></style>
