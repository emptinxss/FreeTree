<template>
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
    <main class="flex items-center flex-col gap-6 md:gap-12 mt-8">
        <header v-if="user" class="flex flex-col items-center" v-auto-animate>
            <img
                class="h-14 w-14 md:h-24 md:w-24 rounded-full mb-2"
                :src="user.image ? imageURL + user.image : defaultUserImage"
            />

            <h1
                class="text-xl sm:text-3xl font-bold text-center dark:text-chiaro text-gray-800"
            >
                @{{ user.name }}
            </h1>
        </header>
        <section class="w-11/12 sm:w-2/3" v-auto-animate>
            <div class="flex justify-center" v-if="test">
                {{ user.name }} has 0 link associated.
            </div>
            <div v-if="links">
                <ul>
                    <li
                        v-for="link in links"
                        :key="link"
                        class="flex justify-center"
                    >
                        <a
                            class="flex justify-center text-center gap-1 text-base sm:text-lg py-6 border dark:text-chiaro dark:border-chiaro text-gray-700 border-gray-700 shadow-xl rounded mb-4 w-full md:w-3/4 transition-all hover:scale-105"
                            :href="link.link"
                            target="_blank"
                            @click="visitData(link.id, link.link)"
                        >
                            <div>{{ link.link_name }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <footer v-if="user" class="dark:text-chiaro text-gray-700">
            Powered By FreeTree
        </footer>
    </main>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

const imageURL = new URL("../../../../uploads/", import.meta.url).href;
const defaultUserImage = new URL("../../../assets/user.png", import.meta.url);

const router = useRouter();
const route = useRoute();

const visitData = (linkId, linkUrl) => {
    axios.post("api/v1/visit/" + linkId, linkUrl);
};

const path = route.path;
const user = ref("");
const links = ref("");
const test = ref(false);

onMounted(() => {
    axios
        .get("api/v1" + path)
        .then((response) => {
            if (response.data.success) {
                user.value = response.data.data;
                links.value = response.data.data.links;
                if (links.value.length == 0) {
                    test.value = true;
                }
            } else {
                router.push({ name: "UserNotFound" });
            }
        })
        .catch(() => {
            router.push({ name: "UserNotFound" });
        });
});
</script>

<style scoped></style>
