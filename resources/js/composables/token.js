import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import store from '../store';

export function useToken() {
	const token = computed(() => {
		return store.state.user.token;
	});
	const show = ref(true);
	const toggleToken = () => {
		show.value = !show.value;
	};
	const hiddenToken = computed(() => {
		if (show.value) return token.value.slice(0, 0) + '********************';
		return token.value;
	});

	return { token, show, hiddenToken, toggleToken };
}
