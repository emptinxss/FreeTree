import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import routes from './routes'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.state.user.token) {
		next('/login')
	} else if (store.state.user.token && to.meta.isGuest) {
		next('/dashboard')
	} else {
		next()
	}
})

export default router
