import { computed, onMounted } from "vue";
import store from "../store";

export function useGetLinks() {
    const link = computed(() => {
        return store.state.user.link;
    });

    onMounted(() => {
        store.dispatch("mylinks").catch((err) => {
            store.commit("setError", err);
        });
    });
    return { link };
}
