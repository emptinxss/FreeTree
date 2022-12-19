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
    ></ModalVue>
    <main class="flex justify-between pt-2">
        <div v-auto-animate>
            <button
                class="text-chiaro dark:text-scuro bg-viola dark:bg-arancio hover:bg-chiaro dark:hover:bg-black hover:text-viola dark:hover:text-arancio active:bg-gray-200 dark:active:bg-scuro border border-chiaro dark:border-black hover:border-viola dark:hover:border-arancio transition-all font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center"
                v-if="!showForm"
                @click="showForm = true"
            >
                Add link
            </button>
            <div v-if="showForm" class="-mb-10">
                <FormKit
                    type="form"
                    submit-label="Save"
                    @submit="createLink"
                    :submit-attrs="{
                        inputClass:
                            'text-chiaro dark:text-scuro hover:text-viola dark:hover:text-arancio border border-viola dark:border-arancio bg-viola dark:bg-arancio hover:bg-chiaro dark:hover:bg-black  active:bg-gray-200 dark:active:bg-scuro transition-all font-medium rounded-full  text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-center mr-2 mb-2 mt-2',
                    }"
                    incomplete-class="text-red-500"
                >
                    <FormKit
                        name="link_name"
                        label="Name"
                        input-class="rounded-md p-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-scuro"
                        label-class="px-1 py-3 text-xs font-bold text-left uppercase text-scuro dark:text-chiaro"
                        validation="required|string"
                    />
                    <FormKit
                        name="link"
                        label="Link"
                        input-class="rounded-md p-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-scuro"
                        label-class="px-1 py-3 text-xs font-bold text-left  uppercase text-scuro dark:text-chiaro "
                        validation="required|url"
                    />
                </FormKit>
                <button
                    class="relative bottom-[3.15rem] sm:bottom-[3.55rem] left-[6.1rem] text-chiaro dark:text-black border border-scuro dark:border-chiaro bg-scuro dark:bg-chiaro hover:bg-chiaro dark:hover:bg-black hover:text-scuro dark:hover:text-chiaro active:bg-gray-200 dark:active:bg-scuro transition-all font-medium rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-center mr-2 mt-3"
                    @click="showForm = false"
                >
                    Cancel
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import ModalVue from "./Modal.vue";
import { ref } from "@vue/reactivity";
import store from "../store";

const showForm = ref(false);
let successModal = ref(false);
let successMessage = ref("");

const createLink = async (link) => {
    store.dispatch("newLink", link).then((response) => {
        if (response.data.success) {
            successModal.value = true;
            successMessage.value = response.data.message;
            setTimeout(() => {
                successModal.value = false;
                successMessage.value = "";
            }, 3000);
        }
    });

    setTimeout(() => {
        showForm.value = false;
    }, 800);
};
</script>

<style>
.formkit-messages {
    color: red;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
}

.truncate {
    max-width: 30ch;
}
</style>
