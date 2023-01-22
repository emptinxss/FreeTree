import { ref } from "@vue/reactivity";
import store from "../store";

export function useAddLink() {
    const showForm = ref(false);

    const createLink = async (link) => {
        store.dispatch("newLink", link).then((response) => {
            showForm.value = false;
            store.commit("setModal", response);
        });
    };
    return { showForm, createLink };
}
