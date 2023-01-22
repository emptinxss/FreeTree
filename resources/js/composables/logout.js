import { useRouter } from "vue-router";
import store from "../store";

export function useLogout() {
    const router = useRouter();
    function logout() {
        store.dispatch("logout").then(() => {
            router.go("/login");
        });
    }
    return { logout };
}
