import {ref} from 'vue';

const
	showLoader = ref(false);

export function useUi() {

	return {
		showLoader
	};
}
