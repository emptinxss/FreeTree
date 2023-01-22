import { useDark, useToggle } from "@vueuse/core";
import store from "../store";

export function useThemeToggle() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    const checkMode = () => {
        if (document.documentElement.classList.contains("dark")) {
            store.commit("changeTheme");
        } else {
            store.commit("changeTheme");
        }
    };

    return { isDark, toggleDark, checkMode };
}
