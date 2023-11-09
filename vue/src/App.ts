import Default from '@/src/layouts/Default.vue';
import authInfo from '../../.tmp/auth_info.json';

export default {
	components: {
		Default
	},
	data() {
		return {
		};
	},
	async mounted() {
		if (import.meta.env.DEV) {
			const
				{accessToken, port} = authInfo;

			window.NL_PORT = port;
			window.NL_TOKEN = accessToken;
		}

		const list = await window.Neutralino.os.execCommand('ls');

		console.log({list});
	}
};
