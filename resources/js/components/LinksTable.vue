<template>
    <ModalVue
        v-if="successModal"
        :toast="true"
        toastIcon="success"
        :toastTitle="successMessage"
        :timer="3000"
        timerProgressBar="true"
        position="top"
        :showConfirmButton="false"
        :customClass="{
            popup: 'width-toast',
        }"
    ></ModalVue>
    <ErrorMsgVue v-if="error" :msg="errorMsg"></ErrorMsgVue>
    <main class="p-1.5">
        <div class="overflow-hidden md:border md:rounded-lg md:shadow-md">
            <table
                class="min-w-full block md:table md:divide-y md:divide-gray-400"
            >
                <thead class="block md:table-header-group">
                    <tr
                        class="block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative text-scuro dark:text-chiaro bg-white dark:bg-scuro"
                    >
                        <th
                            class="px-6 py-3 text-xs font-bold text-left uppercase md:table-cell"
                        >
                            Name
                        </th>
                        <th
                            class="px-6 py-3 text-xs font-bold text-left uppercase md:table-cell"
                        >
                            Link
                        </th>
                        <th
                            class="px-6 py-3 text-xs font-bold text-left uppercase md:table-cell"
                        >
                            Visit
                        </th>
                        <th
                            class="px-6 py-3 text-xs font-bold text-left uppercase md:table-cell"
                        >
                            Last Visit
                        </th>
                        <th
                            class="px-6 py-3 text-xs font-bold text-right uppercase md:table-cell"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody
                    class="block md:table-row-group"
                    v-for="(links, index) in link"
                    :key="index"
                >
                    <tr class="block md:table-row text-scuro dark:text-chiaro">
                        <td
                            class="block p2 md:px-6 md:py-4 text-sm whitespace-nowrap md:table-cell"
                        >
                            <span
                                class="inline-block w-1/3 font-bold p-1 md:hidden"
                                >Name</span
                            >
                            <p
                                class="px-1 text-xs sm:text-sm"
                                v-if="!showEdit.show || showEdit.id != index"
                            >
                                {{ links.link_name }}
                            </p>

                            <p>
                                <input
                                    class="rounded-md p-0 px-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm text-scuro transition-all"
                                    v-if="showEdit.show && showEdit.id == index"
                                    type="text"
                                    name="link_name"
                                    v-model="updateLink.link_name"
                                    @keyup.enter="
                                        saveSettingLink(links.id, updateLink)
                                    "
                                />
                            </p>
                        </td>
                        <td
                            class="p2 md:px-6 md:py-4 text-sm block md:table-cell"
                        >
                            <span
                                class="inline-block w-1/3 md:hidden font-bold p-1"
                                >Link</span
                            >
                            <p
                                class="px-1 text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis truncate"
                                v-if="!showEdit.show || showEdit.id != index"
                            >
                                <a
                                    class="hover:text-viola dark:hover:text-arancio transition-all"
                                    target="_blank"
                                    :href="links.link"
                                    >{{ links.link }}</a
                                >
                            </p>

                            <p>
                                <input
                                    class="rounded-md p-0 px-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm text-scuro transition-all"
                                    v-if="showEdit.show && showEdit.id == index"
                                    type="text"
                                    name="link_name"
                                    v-model="updateLink.link"
                                    @keyup.enter="
                                        saveSettingLink(links.id, updateLink)
                                    "
                                />
                            </p>
                        </td>
                        <td
                            class="p2 md:px-6 md:py-4 text-sm whitespace-nowrap block md:table-cell"
                        >
                            <span
                                class="inline-block w-1/3 md:hidden font-bold p-1"
                                >Visit</span
                            >
                            <p class="px-1 text-xs sm:text-sm">
                                {{
                                    links.visits_count ? links.visits_count : 0
                                }}
                            </p>
                        </td>
                        <td
                            class="p2 md:px-6 md:py-4 text-sm whitespace-nowrap block md:table-cell"
                        >
                            <span
                                class="inline-block w-1/3 md:hidden font-bold p-1"
                                >Last Visit</span
                            >
                            <p class="px-1 text-xs sm:text-sm">
                                {{
                                    links.latest_visit
                                        ? dateFormat(
                                              links.latest_visit.created_at
                                          )
                                        : "N/A"
                                }}
                            </p>
                        </td>

                        <td
                            class="py-2 md:px-6 md:py-4 text-sm whitespace-nowrap block md:table-cell"
                        >
                            <span
                                class="inline-block w-1/3 md:hidden font-bold p-1"
                                >Actions</span
                            >
                            <div
                                class="flex justify-start md:justify-end px-1 md:px-0 border-b-2 pb-2 border-b-scuro dark:border-b-chiaro md:border-hidden md:pb-0"
                            >
                                <button
                                    class="text-green-500 hover:text-green-700 pr-4 mt-1 transition-all"
                                    v-if="
                                        !showEdit.show || showEdit.id != index
                                    "
                                    @click="
                                        (showEdit.show = true),
                                            (showEdit.id = index),
                                            getlinkData(links, index)
                                    "
                                >
                                    Edit
                                </button>

                                <form
                                    @submit.prevent="delLink(links.id)"
                                    v-if="showEdit.show && showEdit.id == index"
                                >
                                    <button
                                        @click="
                                            (showEdit.show = false),
                                                (showEdit.id = '')
                                        "
                                        type="button"
                                        class="pr-4 md:pr-2 text-blue-500 hover:text-blue-700 transition-all"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-4 h-4 md:w-6 md:h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        class="pr-4 text-green-500 hover:text-green-700 transition-all"
                                        type="button"
                                        @click="
                                            saveSettingLink(
                                                links.id,
                                                updateLink
                                            )
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-4 h-4 md:w-6 md:h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                    </button>

                                    <!-- DELETE -->
                                    <button
                                        class="text-red-500 hover:text-red-700 transition-all"
                                        type="submit"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-4 h-4 md:w-6 md:h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script setup>
import ModalVue from "./Modal.vue";
import ErrorMsgVue from "./ErrorMsg.vue";
import { reactive, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import store from "../store";
import moment from "moment";

let successModal = ref(false);
let successMessage = ref("");

const errorMsg = ref("");
const error = computed(() => {
    return store.state.error;
});
const showError = () => {
    store.commit("showError");
};

const link = computed(() => {
    return store.state.user.link;
});
const showEdit = reactive({
    show: false,
    id: "",
});

const updateLink = reactive({
    link_name: "",
    link: "",
    index: "",
});

onMounted(() => {
    store.dispatch("mylinks").catch((err) => {
        showError();
        if (!err.response) {
            errorMsg.value = "Error: Network Error";
        } else {
            errorMsg.value = err.response.data.message;
        }
    });
});

function getlinkData(links, index) {
    updateLink.link_name = links.link_name;
    updateLink.link = links.link;
    updateLink.index = index;
}

const saveSettingLink = async (id, updateLink) => {
    store
        .dispatch("saveSettingsLinks", [id, updateLink])
        .then((response) => {
            showEdit.show = false;
            if (response.data.success) {
                successModal.value = true;
                successMessage.value = response.data.message;
                setTimeout(() => {
                    successModal.value = false;
                    successMessage.value = "";
                }, 3000);
            }
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

const dateFormat = (value) => {
    return moment(value).fromNow();
};
const delLink = async (id) => {
    store
        .dispatch("delLink", id)
        .then((response) => {
            showEdit.show = false;

            if (response.data.success) {
                successModal.value = true;
                successMessage.value = response.data.message;
                setTimeout(() => {
                    successModal.value = false;
                    successMessage.value = "";
                }, 3000);
            }
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
</script>

<style></style>
