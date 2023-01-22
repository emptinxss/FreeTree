import { reactive } from "vue";
import store from "../store";

export function useEditLinks() {
    const edit = reactive({
        show: false,
        id: "",
    });

    const updateLink = reactive({
        link_name: "",
        link: "",
        index: "",
    });

    function getlinkData(links, index) {
        updateLink.link_name = links.link_name;
        updateLink.link = links.link;
        updateLink.index = index;
    }

    const saveSettingLink = async (id, updateLink) => {
        await store
            .dispatch("saveSettingsLinks", [id, updateLink])
            .then((response) => {
                edit.show = false;
                store.commit("setModal", response);
            })
            .catch((err) => {
                store.commit("setError", err);
            });
    };

    const delLink = async (id) => {
        await store
            .dispatch("delLink", id)
            .then((response) => {
                edit.show = false;
                store.commit("setModal", response);
            })
            .catch((err) => {
                store.commit("setError", err);
            });
    };
    return { edit, updateLink, getlinkData, saveSettingLink, delLink };
}
