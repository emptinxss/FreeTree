<template>
  <form
    class="sm:mt-6 mt-4 space-y-6 scale-75 sm:scale-100"
    @submit.prevent="$emit('submit-form')"
  >
    <div class="-space-y-px rounded-md shadow-sm">
      <div v-if="!login">
        <input
          name="name"
          type="text"
          autocomplete="name"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-t-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Username"
          :value="username"
          @input="$emit('update:username', $event.target.value)"
        />
      </div>
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-t-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          :class="{ 'rounded-t-none': !login }"
          placeholder="Email address"
          :value="email"
          @input="$emit('update:email', $event.target.value)"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-b-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          :class="{ 'rounded-b-none': !login }"
          placeholder="Password"
          :value="password"
          @input="$emit('update:password', $event.target.value)"
        />
      </div>
      <div v-if="!login">
        <input
          name="password_confirmation"
          type="password"
          autocomplete="current-password_confirmation"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-b-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Password Confirmation"
          :value="password_confirmation"
          @input="$emit('update:password_confirmation', $event.target.value)"
        />
      </div>
    </div>
    <AccessButton type="submit" :label="submitLabel" />
  </form>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import AccessButton from './AccessButton.vue';

defineEmits([
  'submit-form',
  'update:email',
  'update:password',
  'update:password_confirmation',
  'update:username',
]);
const props = defineProps({
  type: String,
  submitLabel: String,
  username: String,
  email: String,
  password: String,
  password_confirmation: String,
});

const login = ref(true);

if (props.type == 'login') {
  login.value = true;
}
if (props.type == 'register') {
  login.value = false;
}
</script>


