<template>
  <div
    class="
      flex
      min-h-full
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <DarkToggle
      class="absolute top-5 right-5 z-10"
      :isDark="isDark"
      @toggle-dark="toggleDark()"
      @check-mode="checkMode()"
    />
    <Background>
      <router-view></router-view>
    </Background>
  </div>
</template>

<script setup>
import DarkToggle from '../components/DarkToggle.vue';
import Background from '../components/auth/Background.vue';
import { useThemeToggle } from '../composables/themeToggle.js';

const { isDark, toggleDark, checkMode } = useThemeToggle();

document.documentElement.classList.add('overflow-y-hidden');
</script>

<style></style>
