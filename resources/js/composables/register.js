import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import store from "../store";

export function useRegister() {
    const router = useRouter();
    const user = reactive({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const register = async () => {
        await store
            .dispatch("register", user)
            .then(() => {
                router.go("/dashboard");
            })
            .catch((err) => {
                store.commit("setError", err);
            });
    };
    onMounted(() => {
        store.commit("reset");
    });
    return { user, register };
}
