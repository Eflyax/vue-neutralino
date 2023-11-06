import {createApp} from 'vue';
import * as mdijs from '@mdi/js';
import App from './App.vue';
import i18n from './localization/i18n';
import mdiVue from 'mdi-vue/v3';
import mitt from 'mitt';
import router from './router';

const
	emitter = mitt(),
	app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.standalone = false;

app.use(router)
	.use(i18n)
	.use(mdiVue, {
		icons: mdijs
	})
	.mount('#app');
