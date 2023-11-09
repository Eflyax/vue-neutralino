import {createApp} from 'vue';
import App from './App.vue';
import i18n from './localization/i18n';
import mitt from 'mitt';
import router from './router';

const
	emitter = mitt(),
	app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.config.globalProperties.standalone = false;

app.use(router)
	.use(i18n)
	.mount('#app');
