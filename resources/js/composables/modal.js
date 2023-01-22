import { computed } from "vue";
import store from "../store";

export function useModal() {
    const successModal = computed(() => {
        return store.state.successModal;
    });
    const successMessage = computed(() => {
        return store.state.successMessage;
    });

    return { successMessage, successModal };
}
