<template>
  <main v-auto-animate class="mt-2">
    <section v-if="!user.public">
      <PublicButton
        @click.prevent="publicUser"
        label="Create public page"
        colors="hover:text-green-500  bg-green-500  border-green-500"
      />
      <Tooltip
        message="By clicking on create public page, your page will be published and will
      be visible to anyone, if they have the link, it will also be visible in
      the dashboard for all FreeTree users."
      />
    </section>
    <section v-if="user.public">
      <router-link :to="`/users/${user.name}`" target="_blank">
        <PublicButton
          label="Open public page"
          colors="hover:text-green-500  bg-green-500  border-green-500"
        />
      </router-link>

      <PublicButton
        @click.prevent="publicUser"
        label="Remove public page"
        colors="hover:text-red-500  bg-red-500  border-red-500"
      />
      <p class="text-green-500 flex justify-start pl-1">
        Your links are now public.
      </p>
    </section>
  </main>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import store from '../store';
import PublicButton from './links/PublicButton.vue';
import Tooltip from './Tooltip.vue';

const user = computed(() => {
  return store.state.user.data;
});

const publicUser = async (user) => {
  store.dispatch('publicUser', user).catch((err) => console.log(err));
};
</script>

<style></style>
