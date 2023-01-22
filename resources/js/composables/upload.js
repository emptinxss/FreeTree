import { reactive, ref } from 'vue';
import store from '../store';

export function useUpload() {
	const saveImage = ref('');
	const imageFile = (event) => {
		saveImage.value = event;
	};
	const edit = ref(false);
	const uploadImage = () => {
		const imageData = new FormData();
		imageData.append('image', saveImage.value);
		store
			.dispatch('saveImage', imageData)
			.then((response) => {
				store.commit('setModal', response);
				imageData.delete('image');
				saveImage.value = '';
				edit.value = false;
			})
			.catch((err) => {
				store.commit('setError', err);
			});
	};

	return {
		edit,
		saveImage,
		imageFile,
		uploadImage,
	};
}
