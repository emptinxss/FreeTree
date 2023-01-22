import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store';

export function useLogin() {
	const router = useRouter();
	const user = reactive({
		email: '',
		password: '',
	});

	const login = async () => {
		await store
			.dispatch('login', user)
			.then(() => {
				router.go('/dashboard');
			})
			.catch((err) => {
				store.commit('setError', err);
			});
	};

	onMounted(() => {
		store.commit('reset');
	});
	return { user, login };
}
