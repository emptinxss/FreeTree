<template>
  <header>
    <Logo
      size=" h-16 w-16 sm:h-24 sm:w-24"
      :theme="theme"
      :image="image"
      :darkImage="darkImage"
    />
    <Content
      title="Sign in to your account"
      redirect="/register"
      label="register for free"
    />
  </header>
  <ErrorMsg v-if="error" :msg="errorMsg" />
  <AccessForm
    type="login"
    submitLabel="Log in"
    v-model:email="user.email"
    v-model:password="user.password"
    @submit-form="login"
  />
</template>

<script setup>
import Logo from '../components/Logo.vue';
import Content from '../components/auth/Content.vue';
import ErrorMsg from '../components/ErrorMsg.vue';
import AccessForm from '../components/auth/AccessForm.vue';
import { useLogo } from '../composables/logo.js';
import { useLogin } from '../composables/login.js';
import { useErrors } from '../composables/errors';

const { error, errorMsg } = useErrors();
const { image, darkImage, theme } = useLogo();
const { user, login } = useLogin();
</script>

<style scoped></style>
