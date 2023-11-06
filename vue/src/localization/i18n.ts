import * as VueI18n from 'vue-i18n';
import cs_CZ from './cs_CZ.json';

export default VueI18n.createI18n({
	legacy: false,
	locale: 'cs',
	fallbackLocale: 'cs',
	messages: {
		cs: {
			...cs_CZ
		}
	}
});
