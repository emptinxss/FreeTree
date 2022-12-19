<template>
    <header class="sm:mb-2 sm:flex sm:justify-center">
        <img
            class="mx-auto h-16 w-16 sm:h-28 sm:w-28"
            :src="theme ? image : darkImage"
        />
    </header>
    <main>
        <h1
            class="text-4xl font-bold tracking-tight text-center sm:text-6xl dark:text-chiaro text-scuro"
        >
            Welcome
        </h1>
        <p
            class="mt-6 text-base sm:text-lg leading-8 dark:text-chiaro text-scuro text-center"
        >
            Free tool for content creators and freelancers, which helps you to
            keep all the useful links in one place to speed up your work and
            facilitate your customers, having a convenient page with all the
            useful information.
        </p>
        <section class="mt-8 flex gap-x-4 justify-center">
            <a
                href="/login"
                class="inline-block rounded-lg bg-viola dark:bg-arancio sm:px-4 sm:py-1.5 px-3 py-1.5 sm:text-base text-sm font-semibold leading-7 text-chiaro dark:text-scuro shadow-sm border border-viola dark:border-arancio hover:bg-chiaro dark:hover:bg-scuro hover:text-viola dark:hover:text-arancio hover:border-viola dark:hover:border-arancio transition-all"
            >
                Log in
            </a>
            <a
                href="/register"
                class="inline-block rounded-lg bg-scuro dark:bg-chiaro sm:px-4 sm:py-1.5 px-3 py-1.5 sm:text-base text-sm font-semibold leading-7 text-chiaro dark:text-scuro shadow-sm border border-scuro dark:border-scuro hover:bg-chiaro dark:hover:bg-scuro hover:text-scuro dark:hover:text-chiaro dark:hover:border-chiaro transition-all"
            >
                Sign up &rarr;
            </a>
        </section>
    </main>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import store from "../../store";

const image = new URL("../../../assets/i.png", import.meta.url).href;
const darkImage = new URL("../../../assets/u2.png", import.meta.url).href;

const theme = computed(() => {
    return store.state.theme;
});
</script>

<style></style>
