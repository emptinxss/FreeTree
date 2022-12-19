<template>
    <ContentLayout title="Dashboard">
        <p class="pb-4 -mt-4 sm:text-base text-sm dark:text-chiaro text-scuro">
            All the public user will be displayed here.
        </p>

        <main
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
            <div v-for="user in users" :key="user">
                <a :href="'/' + user.name" target="_blank">
                    <div class="flex justify-center items-center">
                        <div
                            class="sm:w-full w-3/4 max-w-sm rounded-lg shadow-md dark:shadow-xl dark:shadow-black hover:scale-105 transition-all hover:border-viola dark:hover:border-arancio border dark:border-scuro text-scuro hover:text-viola dark:text-chiaro dark:hover:text-arancio"
                        >
                            <div class="flex justify-center px-4 pt-8">
                                <div class="flex flex-col items-center pb-8">
                                    <img
                                        class="sm:w-24 sm:h-24 w-16 h-16 mb-3 rounded-full shadow-lg hover:scale-105 transition-all dark:bg-chiaro"
                                        :src="
                                            user.image
                                                ? imageURL + user.image
                                                : defaultUserImage
                                        "
                                    />
                                    <h5
                                        class="mb-1 text-base sm:text-xl font-medium"
                                    >
                                        <span class="text-xs sm:text-lg">@</span
                                        >{{ user.name }}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </main>
    </ContentLayout>
</template>

<script setup>
import ContentLayout from "../ContentLayout.vue";
import { ref } from "@vue/reactivity";
import store from "../../store";
import { computed } from "@vue/runtime-core";

const imageURL = new URL("../../../../uploads/", import.meta.url).href;
const defaultUserImage = new URL("../../../assets/user.png", import.meta.url);

const users = ref("");

store.dispatch("getAllPublicUsers").then((response) => {
    users.value = response.data.data;
});
</script>

<style></style>
