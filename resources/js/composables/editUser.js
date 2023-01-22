import { computed, reactive, ref } from "@vue/runtime-core";
import store from "../store";

export function useEditUser() {
    const user = computed(() => {
        return store.state.user.data;
    });

    const updatedName = reactive({
        name: user.value.name,
    });
    /* Had to split for the unique param of email, if the user change email and then name
    int the payload will be sended also the email, resulting of error, until page is refreshed  */
    const updatedEmail = reactive({
        email: user.value.email,
    });

    const isEditing = ref(false);

    const saveSettings = async (value) => {
        await store
            .dispatch("saveSettings", value)
            .then((response) => {
                console.log(response);
                isEditing.value = false;
                store.commit("setModal", response);
            })
            .catch((err) => {
                console.log(err);
                store.commit("setError", err);
            });
    };
    return {
        user,

        isEditing,
        updatedEmail,
        updatedName,
        saveSettings,
    };
}
