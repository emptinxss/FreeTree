import { useRouter } from "vue-router";
import store from "../store";

export function useDeleteAccount() {
    const router = useRouter();

    const delUser = async () => {
        store
            .dispatch("delUser")
            .then(() => {
                router.go("/login");
            })
            .catch((err) => {
                store.commit("setError", err);
            });
    };

    return { delUser };
}
