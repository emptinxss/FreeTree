import { computed } from "vue";
import store from "../store";

export function useErrors() {
    const errorMsg = computed(() => {
        return store.state.errorMsg;
    });
    const error = computed(() => {
        return store.state.error;
    });

    return { error, errorMsg };
}
