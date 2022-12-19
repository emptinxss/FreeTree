import axios from "axios";
import { useRouter } from "vue-router";
import store from "./store";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.request.use((config) => {
    const token = store.state.user.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = "apllication/json";
    } else {
        const router = useRouter();
        store.commit("logout");
        router.go("/login");
    }

    return config;
});

export default axiosClient;
