<template>
  <header>
    <Logo
      size=" h-16 w-16 sm:h-24 sm:w-24"
      :theme="theme"
      :image="image"
      :darkImage="darkImage"
    />
    <Content
      title="Register for free"
      redirect="/login"
      label="login to your account"
    />
  </header>
  <ErrorMsg v-if="error" :msg="errorMsg" />
  <AccessForm
    type="register"
    submitLabel="Sign up"
    v-model:username="user.name"
    v-model:email="user.email"
    v-model:password="user.password"
    v-model:password_confirmation="user.password_confirmation"
    @submit-form="register"
  />
</template>

<script setup>
import Logo from '../components/Logo.vue';
import Content from '../components/auth/Content.vue';
import ErrorMsg from '../components/ErrorMsg.vue';
import AccessForm from '../components/auth/AccessForm.vue';
import { useLogo } from '../composables/logo.js';
import { useRegister } from '../composables/register.js';
import { useErrors } from '../composables/errors';

const { error, errorMsg } = useErrors();
const { image, darkImage, theme } = useLogo();
const { user, register } = useRegister();
</script>

<style scoped></style>
