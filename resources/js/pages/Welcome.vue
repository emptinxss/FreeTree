<template>
  <header class="sm:mb-2 sm:flex sm:justify-center">
    <Logo :theme="theme" :image="image" :darkImage="darkImage" />
  </header>
  <main>
    <InfoContent
      title="Welcome"
      description="Free tool for content creators and freelancers, which helps you to keep all
    the useful links in one place to speed up your work and facilitate your
    customers, having a convenient page with all the useful information."
    />
    <section class="mt-8 flex gap-x-4 justify-center">
      <LogInButton />
      <SignUpButton />
    </section>
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
