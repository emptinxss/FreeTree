<template>
    <ErrorMsgVue v-if="error" :msg="errorMsg"></ErrorMsgVue>
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
    <div
        class="overflow-hidden sm:rounded-lg border shadow-md dark:border-chiaro rounded-lg"
    >
        <header
            class="px-4 py-5 sm:px-6 border-b border-gray-400 bg-white dark:bg-scuro"
        >
            <h3
                class="text-lg font-medium leading-6 text-scuro dark:text-chiaro"
            >
                Profile Information
            </h3>

            <p class="mt-1 max-w-2xl text-sm text-scuro dark:text-gray-300">
                Personal details and application.
            </p>
        </header>
        <main>
            <dl>
                <!-- name -->
                <section
                    class="text-scuro dark:text-chiaro px-4 sm:py-5 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                    <dt class="text-sm font-medium">Username</dt>
                    <dd
                        class="mt-1 sm:text-sm text-xs sm:col-span-2 sm:mt-0 flex justify-between"
                    >
                        <p v-if="!showEditName">{{ user.name }}</p>

                        <input
                            class="rounded-md p-0 px-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm text-scuro"
                            v-if="showEditName"
                            type="text"
                            name="name"
                            v-model="saveName.name"
                            @keyup.enter="saveSettingName"
                        />

                        <button
                            v-if="!showEditName"
                            @click="showEditName = true"
                            class="dark:hover:text-arancio hover:text-viola transition-all"
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
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                        </button>
                        <div v-if="showEditName">
                            <button
                                @click="showEditName = false"
                                class="hover:text-red-500 pr-2 transition-all"
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
                                @click="saveSettingName"
                                class="hover:text-green-500 transition-all"
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
                        </div>
                    </dd>
                </section>
                <!-- email adress -->
                <section
                    class="px-4 sm:py-5 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-scutro dark:text-chiaro border-t border-t-gray-400"
                >
                    <dt class="text-sm font-medium">Email address</dt>
                    <dd
                        class="mt-1 sm:text-sm text-xs sm:col-span-2 sm:mt-0 flex justify-between"
                    >
                        <p v-if="!showEditEmail">{{ user.email }}</p>
                        <input
                            class="rounded-md p-0 px-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm text-scuro"
                            v-if="showEditEmail"
                            type="email"
                            name="email"
                            v-model="saveEmail.email"
                            @keyup.enter="saveSettingEmail"
                        />
                        <button
                            v-if="!showEditEmail"
                            @click="showEditEmail = true"
                            class="hover:text-viola dark:hover:text-arancio transition-all"
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
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                        </button>
                        <div v-if="showEditEmail">
                            <button
                                @click="showEditEmail = false"
                                class="pr-2 hover:text-red-500 transition-all"
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
                                @click="saveSettingEmail"
                                class="hover:text-green-500 transition-all"
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
                        </div>
                    </dd>
                </section>
                <!-- token -->
                <section
                    class="px-4 sm:py-5 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-scuro dark:text-chiaro border-t border-t-gray-400"
                >
                    <dt class="text-sm font-medium">Token</dt>
                    <dd
                        class="mt-1 text-xs sm:text-sm sm:col-span-2 sm:mt-0 flex justify-between"
                    >
                        {{ hiddenToken }}
                        <button
                            @click="showToken = !showToken"
                            class="hover:text-viola dark:hover:text-arancio transition-all"
                        >
                            <div v-if="!showToken">
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
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            </div>
                            <div v-else>
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
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                        </button>
                    </dd>
                </section>
                <!-- profile image -->
                <section
                    class="px-4 sm:py-5 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-scuro dark:text-chiaro border-t border-t-gray-400"
                >
                    <dt class="text-sm font-medium">Profile image</dt>
                    <dd class="mt-1 sm:text-sm text-xs sm:col-span-2 sm:mt-0">
                        <div class="flex-shrink-0">
                            <button
                                v-if="!showEditImage"
                                @click="showEditImage = true"
                                class="font-medium dark:text-chiaro dark:hover:text-arancio hover:text-viola"
                            >
                                Change
                            </button>
                            <div
                                v-if="showEditImage"
                                class="flex justify-between transition-all"
                            >
                                <input
                                    class=""
                                    type="file"
                                    name="image"
                                    @change="imageFile($event)"
                                />
                                <div>
                                    <button
                                        @click="showEditImage = false"
                                        class="hover:text-red-500 mr-2"
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
                                        @click="uploadImage"
                                        class="dark:hover:text-arancio hover:text-viola"
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
                                                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </dd>
                </section>
                <!-- account -->
                <section
                    class="px-4 sm:py-5 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-scuro dark:text-white border-t border-t-gray-400 flex justify-between"
                >
                    <dt class="text-sm font-medium">Account</dt>
                    <dd class="mt-1 text-xs sm:text-sm sm:col-span-2 sm:mt-0">
                        <ModalVue
                            styleModalButton="text-chiaro dark:text-scuro hover:text-red-500 border border-red-500 bg-red-500 hover:bg-transparent dark:hover:text-red-500 dark:hover:border-red-500 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center -mt-2 mr-2 mb-2 transition-all"
                            :defaultModal="true"
                            textOpenModal="Delete account"
                            title="Are you sure?"
                            text="You won't be able to revert this!"
                            icon="warning"
                            iconColor="red"
                            confirmButtonText="Yes, delete it!"
                            :showCancelButton="true"
                            :isConfirmed="delUser"
                            :customClass="{
                                popup: 'bg-chiaro dark:bg-scuro',
                                title: 'text-scuro dark:text-white',
                                htmlContainer: 'text-scuro dark:text-chiaro',
                                confirmButton:
                                    'inline-block rounded-lg bg-red-500 hover:bg-red-600  ml-2 px-2 py-0.5 sm:px-3 sm:py-1.5 sm:text-base text-xs font-semibold leading-7 text-chiaro shadow-sm ',
                                cancelButton:
                                    'inline-block rounded-lg bg-chiaro hover:bg-gray-300  ml-2 px-2 py-0.5 sm:px-3 sm:py-1.5 sm:text-base text-xs font-semibold leading-7 text-scuro shadow-sm',
                            }"
                        ></ModalVue>
                    </dd>
                </section>
            </dl>
        </main>
    </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import store from "../store";
import { PaperClipIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import ModalVue from "./Modal.vue";
import ErrorMsgVue from "./ErrorMsg.vue";

const router = useRouter();

const token = computed(() => {
    return store.state.user.token;
});

const user = computed(() => {
    return store.state.user.data;
});

const errorMsg = ref("");
const error = computed(() => {
    return store.state.error;
});
const showError = () => {
    store.commit("showError");
};
const successModal = ref(false);
const successMessage = ref("");

const showToken = ref(true);
const showEditName = ref(false);
const showEditEmail = ref(false);
const showEditImage = ref(false);

const hiddenToken = computed(() => {
    if (showToken.value)
        return token.value.slice(0, 0) + "********************";
    return token.value;
});
const saveImage = ref("");
const saveName = reactive({
    name: user.value.name,
});
const saveEmail = reactive({
    email: user.value.email,
});
const saveSettingName = async () => {
    store
        .dispatch("saveSettings", saveName)
        .then((response) => {
            showEditName.value = false;
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

            if (!err) {
                errorMsg.value = "Error: Network Error";
            } else {
                errorMsg.value = err.response.data.message;
            }
        });
};
const saveSettingEmail = async () => {
    store
        .dispatch("saveSettings", saveEmail)
        .then((response) => {
            showEditEmail.value = false;
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
            if (!err) {
                errorMsg.value = "Error: Network Error";
            } else {
                errorMsg.value = err.response.data.message;
            }
        });
};

const imageFile = (event) => {
    saveImage.value = event.target.files[0];
};

const uploadImage = () => {
    const imageData = new FormData();
    imageData.append("image", saveImage.value);
    store
        .dispatch("saveImage", imageData)
        .then((response) => {
            showEditImage.value = false;
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

const delUser = async () => {
    store
        .dispatch("delUser")
        .then(() => {
            router.go("/login");
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
