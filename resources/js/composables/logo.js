import { computed } from '@vue/runtime-core';
import store from '../store';

export function useLogo() {
	const image = new URL('../../assets/i.png', import.meta.url).href;
	const darkImage = new URL('../../assets/u2.png', import.meta.url).href;

	const theme = computed(() => {
		return store.state.theme;
	});

	return { image, darkImage, theme };
}
