import Welcome from '../pages/Welcome.vue';
import Dashboard from '../pages/Dashboard.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import Settings from '../pages/Settings.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import NotFound from '../pages/NotFound.vue';
import UserNotFound from '../pages/UserNotFound.vue';
import MyLinks from '../pages/MyLinks.vue';
import UserTree from '../pages/UserTree.vue';

const routes = [
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            {
                path: '/',
                component: Welcome,
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/register',
                name: 'Register',
                component: Register,
            },
        ],
    },
    {
        path: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: '/mylinks',
                name: 'MyLinks',
                component: MyLinks,
            },
            {
                path: '/settings',
                name: 'Settings',
                component: Settings,
            },
            {
                path: '/:patchMatch(.*)*',
                name: 'NotFound',
                component: NotFound,
            },
        ],
    },
    {
        path: '/users/:name',
        name: 'UserTree',
        component: UserTree,
    },
    {
        path: '/users/:name',
        component: AuthLayout,
        children: [
            {
                path: '/users/:name',
                name: 'UserNotFound',
                component: UserNotFound,
            },
        ],
    },
];

export default routes;
