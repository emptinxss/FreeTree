import axios from "axios";
import axiosClient from "../axios";

export default {
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
        return axiosClient.get("/users/data").then((response) => {
            commit("setUser", response.data.data);
            return response;
        });
    },
    mylinks({ commit }) {
        return axiosClient.get("/links").then((response) => {
            commit("setLink", response.data.data);
            return response;
        });
    },
    newLink({ commit }, link) {
        return axiosClient.post("/links/new", link).then((response) => {
            commit("addLink", response.data.data);
            return response;
        });
    },
    delLink({ commit }, linkId) {
        return axiosClient.delete(`/links/${linkId}`).then((response) => {
            commit("delLink", linkId);
            return response;
        });
    },
    saveSettings({ commit }, userSettings) {
        return axiosClient
            .put("/users/settings/edit", userSettings)
            .then((response) => {
                commit("setUser", response.data.data);
                return response;
            });
    },
    saveImage({ commit }, image) {
        return axiosClient
            .post("/users/settings/edit/upload/image", image)
            .then((response) => {
                commit("setImage", response.data.data);
                return response;
            });
    },
    saveSettingsLinks({ commit }, [linkId, linkSettings]) {
        return axiosClient
            .post(`/links/${linkId}`, linkSettings)
            .then((response) => {
                commit("updateLink", response.data.data);
                return response;
            });
    },
    publicUser({ commit }, user) {
        return axiosClient
            .post("/users/settings/public", user)
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
        return axiosClient.delete("/users/settings").then((response) => {
            commit("logout");
            return response;
        });
    },
};
