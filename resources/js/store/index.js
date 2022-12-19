import { createStore } from "vuex";
import axios from "axios";
import axiosClient from "../axios";
import { useDark } from "@vueuse/core";

const store = createStore({
    state: {
        user: {
            data: {},
            link: [],
            token: sessionStorage.getItem("TOKEN"),
        },
        theme: useDark(),
        error: false,
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            axios.get("/sanctum/crsf-cookie");

            return axios.post("api/v1/register", user).then((response) => {
                commit("setToken", response.data.data.token);
                commit("setUser", response.data.data.user);
                return response;
            });
        },
        login({ commit }, user) {
            axios.get("/sanctum/crsf-cookie");

            return axios.post("api/v1/login", user).then((response) => {
                commit("setToken", response.data.data.token);
                commit("setUser", response.data.data.user);
                return response;
            });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("logout");
                return response;
            });
        },
        getUser({ commit }) {
            return axiosClient.get("/user/data").then((response) => {
                commit("setUser", response.data.data);
                return response;
            });
        },
        mylinks({ commit }) {
            return axiosClient.get("/mylinks").then((response) => {
                commit("setLink", response.data.data);
                return response;
            });
        },
        newLink({ commit }, link) {
            return axiosClient.post("/mylinks/new", link).then((response) => {
                commit("addLink", response.data.data);
                return response;
            });
        },
        delLink({ commit }, linkId) {
            return axiosClient.delete(`/mylinks/${linkId}`).then((response) => {
                commit("delLink", linkId);
                return response;
            });
        },
        saveSettings({ commit }, userSettings) {
            return axiosClient
                .put("/settings/edit", userSettings)
                .then((response) => {
                    commit("setUser", response.data.data);
                    return response;
                });
        },
        saveImage({ commit }, image) {
            return axiosClient
                .post("/settings/edit/upload/image", image)
                .then((response) => {
                    commit("setImage", response.data.data);
                    return response;
                });
        },
        saveSettingsLinks({ commit }, [linkId, linkSettings]) {
            return axiosClient
                .post(`/mylinks/${linkId}`, linkSettings)
                .then((response) => {
                    commit("updateLink", response.data.data);
                    return response;
                });
        },
        publicUser({ commit }, user) {
            return axiosClient
                .post("/settings/public", user)
                .then((response) => {
                    commit("setPublicUser", response.data.data.public);
                    return response;
                });
        },
        getAllPublicUsers() {
            return axiosClient.get("/dashboard").then((response) => {
                return response;
            });
        },
        delUser({ commit }) {
            return axiosClient.delete("/settings").then((response) => {
                commit("logout");
                return response;
            });
        },
    },
    mutations: {
        logout: () => {
            sessionStorage.removeItem("TOKEN");
        },
        reset: (state) => {
            state.user.link = [];
            state.user.data = {};
        },
        setUser: (state, user) => {
            state.user.data = user;
        },
        setPublicUser: (state, user) => {
            state.user.data.public = user;
        },
        setToken: (state, token) => {
            sessionStorage.setItem("TOKEN", token);
            state.user.token = token;
        },
        setLink: (state, link) => {
            state.user.link = link;
        },
        updateLink: (state, linkData) => {
            state.user.link[linkData.index] = linkData.link;
        },

        addLink: (state, link) => {
            if (!state.user.link) {
                state.user.link = [link];
            } else {
                state.user.link.push(link);
            }
        },
        setImage: (state, image) => {
            state.user.data.image = image;
        },
        delLink: (state, link) => {
            let index = state.user.link.map((item) => item.id).indexOf(link);
            state.user.link.splice(index, 1);
        },
        changeTheme: (state) => {
            state.theme = !state.theme;
        },
        closeError: (state) => {
            state.error = false;
        },
        showError: (state) => {
            state.error = true;
        },
        error: (state) => {
            state.error = false;
        },
    },
    modules: {},
});

export default store;
