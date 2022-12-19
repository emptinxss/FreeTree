import { createRouter, createWebHistory } from "vue-router";

import Welcome from "../components/views/Welcome.vue";
import Dashboard from "../components/views/Dashboard.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import Settings from "../components/views/Settings.vue";
import Login from "../components/views/Login.vue";
import Register from "../components/views/Register.vue";
import NotFound from "../components/views/NotFound.vue";
import UserNotFound from "../components/views/UserNotFound.vue";
import MyLinks from "../components/views/MyLinks.vue";
import UserTree from "../components/views/UserTree.vue";
import store from "../store";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/auth",
            redirect: "/login",
            name: "Auth",
            component: AuthLayout,
            meta: { isGuest: true },
            children: [
                {
                    path: "/",
                    component: Welcome,
                },
                {
                    path: "/login",
                    name: "Login",
                    component: Login,
                },
                {
                    path: "/register",
                    name: "Register",
                    component: Register,
                },
            ],
        },
        {
            path: "/dashboard",
            component: DefaultLayout,
            meta: { requiresAuth: true },
            children: [
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                },
                {
                    path: "/mylinks",
                    name: "MyLinks",
                    component: MyLinks,
                },
                {
                    path: "/settings",
                    name: "Settings",
                    component: Settings,
                },

                {
                    path: "/:patchMatch(.*)*",
                    name: "NotFound",
                    component: NotFound,
                },
            ],
        },
        {
            path: "/:name",
            name: "UserTree",
            component: UserTree,
        },

        {
            path: "/:name",
            component: AuthLayout,
            children: [
                {
                    path: "/:name",
                    name: "UserNotFound",
                    component: UserNotFound,
                },
            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next("/login");
    } else if (store.state.user.token && to.meta.isGuest) {
        next("/dashboard");
    } else {
        next();
    }
});

export default router;
