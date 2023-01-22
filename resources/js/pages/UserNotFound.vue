<template>
  <header class="sm:mb-2 sm:flex sm:justify-center">
    <Logo :theme="theme" :image="image" :darkImage="darkImage" />
  </header>
  <main>
    <InfoContent
      title="404 NOT FOUND"
      description="The user does not exist
    in our system or the account is not public."
    />
    <a
      href="javascript:history.go(-2)"
      class="
        text-scuro
        dark:text-chiaro
        sm:text-center
        flex
        justify-center
        underline
        hover:text-viola
        dark:hover:text-arancio
      "
      >Go back.</a
    >
    <div class="mt-8 flex gap-x-4 justify-center">
      <LogInButton />
      <SignUpButton />
    </div>
  </main>
</template>

<script setup>
import Logo from '../components/Logo.vue';
import InfoContent from '../components/InfoContent.vue';
import SignUpButton from '../components/buttons/SignUpButton.vue';
import LogInButton from '../components/buttons/LogInButton.vue';
import { useLogo } from '../composables/logo.js';

const { image, darkImage, theme } = useLogo();
</script>


