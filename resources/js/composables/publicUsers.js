import { ref } from '@vue/reactivity';
import { onMounted } from 'vue';
import store from '../store';

export function usePublicUsers() {
	const imageURL = new URL('../../../uploads/', import.meta.url).href;
	const defaultUserImage = new URL('../../assets/user.png', import.meta.url)
		.href;

	const users = ref('');

	onMounted(() => {
		store
			.dispatch('getAllPublicUsers')
			.then((response) => {
				users.value = response.data.data;
			})
			.catch((err) => {
				store.commit('setError', err);
			});
	});

	return { imageURL, defaultUserImage, users };
}
