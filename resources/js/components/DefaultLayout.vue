<template>
    <!-- template -->
    <div class="dark:bg-black bg-chiaro">
        <div
            class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
            <svg
                class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                        id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#9089FC" />
                        <stop offset="1" stop-color="#FF80B5" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] -mt-96 -ml-96"
        >
            <svg
                class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#9089FC" />
                        <stop offset="1" stop-color="#FF80B5" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
    <!-- fine template -->
    <div class="min-h-full">
        <Disclosure
            as="nav"
            class="border-b dark:border-b-scuro border-b-gray-200"
            v-slot="{ open }"
        >
            <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                class="mx-auto h-14 w-14"
                                :src="theme ? image : darkImage"
                            />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <router-link
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :to="item.to"
                                    active-class=""
                                    :class="[
                                        route.name === item.to.name
                                            ? ' text-chiaro bg-viola dark:bg-arancio dark:text-scuro'
                                            : 'text-scuro dark:text-chiaro hover:bg-gray-200 dark:hover:bg-scuro dark:hover:text-chiaro',
                                        'px-3 py-2 rounded-md text-sm font-medium ',
                                    ]"
                                    >{{ item.name }}</router-link
                                >
                            </div>
                        </div>
                    </div>
                    <!-- Profile dropdown -->
                    <section class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <DarkToggle class="mt-2"></DarkToggle>

                            <Menu as="div" class="relative ml-3">
                                <div>
                                    <MenuButton
                                        class="flex max-w-xs items-center rounded-full dark:bg-chiaro bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-800"
                                    >
                                        <span class="sr-only"
                                            >Open user menu</span
                                        >
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            :src="
                                                user.image
                                                    ? imageURL + user.image
                                                    : defaultUserImage
                                            "
                                        />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-chiaro dark:bg-scuro py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div
                                            class="flex flex-col text-scuro dark:text-chiaro"
                                        >
                                            <p class="block px-4 py-2 text-sm">
                                                Hi, {{ user.name }}
                                            </p>

                                            <router-link
                                                to="/settings"
                                                class="block px-4 py-2 text-sm active:bg-gray-200 hover:text-viola dark:hover:text-arancio transition-all"
                                                >Settings</router-link
                                            >
                                            <a
                                                class="block px-4 py-2 text-sm active:bg-gray-200 cursor-pointer hover:text-viola dark:hover:text-arancio transition-all"
                                                @click="logout"
                                            >
                                                Log out
                                            </a>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </section>
                    <!-- Mobile menu button -->
                    <section class="-mr-2 flex md:hidden">
                        <DarkToggle class="mt-2 mr-2"></DarkToggle>
                        <DisclosureButton
                            class="inline-flex items-center justify-center rounded-md bg-viola dark:bg-gray-700 p-2 text-chiaro dark:text-chiaro dark:hover:bg-gray-800 hover:text-white"
                        >
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </section>
                </div>
            </nav>

            <!-- mobile nav -->
            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <router-link
                        v-for="item in navigation"
                        :key="item.name"
                        :to="item.to"
                        :class="[
                            route.name === item.to.name
                                ? 'text-chiaro bg-viola dark:bg-scuro dark:text-arancio'
                                : 'text-scuro dark:text-chiaro hover:bg-gray-200 dark:hover:bg-scuro dark:hover:text-chiaro',
                            'block px-3 py-2 rounded-md text-xs font-medium',
                        ]"
                        >{{ item.name }}</router-link
                    >
                </div>
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full dark:bg-chiaro"
                                :src="
                                    user.image
                                        ? imageURL + '/' + user.image
                                        : defaultUserImage
                                "
                            />
                        </div>
                        <div class="ml-3">
                            <div
                                class="text-sm font-medium leading-none text-scuro dark:text-chiaro"
                            >
                                {{ user.name }}
                            </div>
                            <div
                                class="text-xs font-medium leading-none text-gray-400"
                            >
                                {{ user.email }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <div
                            class="flex flex-col rounded-md py-2 text-xs font-medium dark:text-chiaro"
                        >
                            <router-link
                                to="/settings"
                                :class="[
                                    route.name == 'Settings'
                                        ? 'text-chiaro bg-viola dark:bg-scuro dark:text-arancio'
                                        : 'text-scuro dark:text-chiaro hover:bg-gray-200 dark:hover:bg-scuro dark:hover:text-chiaro',
                                    'block px-3 py-2 rounded-md text-xs font-medium',
                                ]"
                                >Settings</router-link
                            >
                            <a
                                @click="logout"
                                class="mt-1 text-scuro hover:bg-gray-200 dark:hover:bg-scuro dark:text-chiaro rounded-md px-3 py-2 dark:active:text-arancio active:text-viola"
                            >
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
        <router-view></router-view>
    </div>
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { computed } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import store from "../store";
import DarkToggle from "./DarkToggle.vue";

const image = new URL("../../assets/i.png", import.meta.url).href;
const darkImage = new URL("../../assets/u2.png", import.meta.url).href;

const imageURL = new URL("../../../uploads/", import.meta.url).href;
const defaultUserImage = new URL("../../assets/user.png", import.meta.url).href;

const router = useRouter();
const route = useRoute();

const navigation = [
    { name: "Dashboard", to: { name: "Dashboard" } },
    { name: "My Links", to: { name: "MyLinks" } },
];

const user = computed(() => {
    return store.state.user.data;
});

function logout() {
    store.dispatch("logout").then(() => {
        router.go("/login");
    });
}
const theme = computed(() => {
    return store.state.theme;
});

store.dispatch("getUser").catch((err) => console.log(err));

document.documentElement.classList.remove("overflow-y-hidden");
</script>

<style></style>
