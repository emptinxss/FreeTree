<template>
    <main v-auto-animate class="mt-2">
        <section v-if="!user.public">
            <button
                class="text-white hover:text-green-500 border border-green-500 bg-green-500 hover:bg-transparent active:bg-scuro transition-all font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center mr-2 mb-2"
                @click.prevent="publicUser"
            >
                Create public page
            </button>
            <div class="group flex">
                <div class="absolute sm:top-3 sm:left-44 top-1.5 left-36">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                    </svg>
                </div>
                <span
                    class="group-hover:flex transition-opacity dark:bg-scuro dark:text-chiaro bg-white text-scuro px-4 py-2 text-sm rounded-md absolute left-6 md:left-52 top-8 md:-top-10 hidden m-4 mx-auto flex-wrap w-3/4 md:w-1/6"
                    >By clicking on create public page, your page will be
                    published and will be visible to anyone, if they have the
                    link, it will also be visible in the dashboard for all
                    FreeTree users.
                </span>
            </div>
        </section>
        <section v-if="user.public">
            <router-link :to="`/${user.name}`" target="_blank">
                <button
                    class="text-white hover:text-green-500 border border-green-500 bg-green-500 hover:bg-transparent active:bg-scuro transition-all font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center mr-2 mb-2"
                >
                    Open public page
                </button>
            </router-link>
            <button
                class="text-white hover:text-red-500 border border-red-500 bg-red-500 hover:bg-transparent active:bg-scuro transition-all font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5text-center mr-2 mb-2"
                @click.prevent="publicUser"
            >
                Remove public page
            </button>
            <p class="text-green-500 flex justify-start pl-1">
                Your links are now public.
            </p>
        </section>
    </main>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import store from "../store";

const user = computed(() => {
    return store.state.user.data;
});

const publicUser = async (user) => {
    store.dispatch("publicUser", user).catch((err) => console.log(err));
};
</script>

<style></style>
