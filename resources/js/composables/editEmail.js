import { computed, reactive, ref } from "@vue/runtime-core";
import store from "../store";

export function useEditEmail() {
    const user = computed(() => {
        return store.state.user.data;
    });

    const updatedValue = reactive({
        email: user.value.email,
    });
    const successModal = ref(false);
    const successMessage = ref("");

    const isEditing = ref(false);

    const saveSettings = async () => {
        store
            .dispatch("saveSettings", updatedValue)
            .then((response) => {
                isEditing.value = false;
                store.commit("setModal", response);
            })
            .catch((err) => {
                store.commit("setError", err);
            });
    };
    return {
        user,
        successMessage,
        successModal,
        isEditing,
        updatedValue,
        saveSettings,
    };
}
