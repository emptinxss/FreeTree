<template>
    <header>
        <img
            class="mx-auto h-16 w-16 sm:h-24 sm:w-24"
            :src="theme ? image : darkImage"
        />
        <h2
            class="mt-4 text-center text-xl sm:text-3xl font-bold tracking-tight text-scuro dark:text-chiaro"
        >
            Sign in to your account
        </h2>
        <p
            class="sm:mt-2 mt-1 text-center text-xs sm:text-sm text-scuro dark:text-chiaro"
        >
            Or

            <router-link
                to="/register"
                class="font-medium text-viola dark:text-arancio hover:text-indigo-500 dark:hover:text-[rgb(214,147,60)]"
                >register for free</router-link
            >
        </p>
    </header>

    <form
        class="sm:mt-8 mt-4 space-y-6 scale-75 sm:scale-100"
        @submit.prevent="login"
    >
        <ErrorMsgVue v-if="error" :msg="errorMsg"></ErrorMsgVue>

        <div class="-space-y-px rounded-md shadow-sm">
            <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    v-model="user.email"
                />
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    v-model="user.password"
                />
            </div>
        </div>

        <div>
            <button
                type="submit"
                class="group relative flex w-full justify-center rounded-md bg-viola dark:bg-arancio py-2 px-4 text-sm font-medium text-chiaro dark:text-scuro hover:bg-indigo-500 dark:hover:bg-[rgb(214,147,60)] transition-all"
            >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                        class="h-5 w-5 text-gray-300 dark:text-scuro group-hover:text"
                        aria-hidden="true"
                    />
                </span>
                Sign in
            </button>
        </div>
    </form>
</template>

<script setup>
import ErrorMsgVue from "../ErrorMsg.vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import store from "../../store";

const image = new URL("../../../assets/i.png", import.meta.url);
const darkImage = new URL("../../../assets/u2.png", import.meta.url);

const router = useRouter();

const errorMsg = ref("");
const error = computed(() => {
    return store.state.error;
});
const showError = () => {
    store.commit("showError");
};

const user = reactive({
    email: "",
    password: "",
});

const login = async () => {
    store
        .dispatch("login", user)
        .then(() => {
            router.go("/dashboard");
        })
        .catch((err) => {
            showError();
            if (!err.response) {
                errorMsg.value = "Error: Network Error";
            } else {
                errorMsg.value = err.response.data.message;
            }
        });
};

store.commit("reset");

const theme = computed(() => {
    return store.state.theme;
});
</script>

<style scoped></style>
