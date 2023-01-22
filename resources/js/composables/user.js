import { computed, onMounted } from 'vue';
import store from '../store';

export function useUser() {
	const user = computed(() => {
		return store.state.user.data;
	});

	onMounted(() => {
		store.dispatch('getUser').catch((err) => console.log(err));
	});

	return { user };
}
