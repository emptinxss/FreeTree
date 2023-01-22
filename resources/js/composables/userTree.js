import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export function useUserTree() {
    const router = useRouter();
    const route = useRoute();
    const path = route.path;
    const user = ref("");
    const links = ref("");
    const empty = ref(false);

    onMounted(() => {
        axios
            .get("/api/v1" + path)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    user.value = response.data.data;
                    links.value = response.data.data.links;
                    if (links.value.length == 0) {
                        empty.value = true;
                    }
                } else {
                    router.push({ name: "UserNotFound" });
                }
            })
            .catch(() => {
                router.push({ name: "UserNotFound" });
            });
    });
    return { user, links, empty };
}
