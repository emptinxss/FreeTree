<template>
  <content-layout title="Dashboard">
    <p class="pb-4 -mt-4 sm:text-base text-sm dark:text-chiaro text-scuro">
      All the public user will be displayed here.
    </p>
    <ErrorMsg v-if="error" :msg="errorMsg" />
    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      <PublicUsers :users="users" />
    </main>
  </content-layout>
</template>

<script setup>
import ContentLayout from '../layouts/ContentLayout.vue';
import ErrorMsg from '../components/ErrorMsg.vue';
import PublicUsers from '../components/PublicUsers.vue';
import { usePublicUsers } from '../composables/publicUsers';
import { useErrors } from '../composables/errors';

const { error, errorMsg } = useErrors();
const { users } = usePublicUsers();
</script>

<style></style>
