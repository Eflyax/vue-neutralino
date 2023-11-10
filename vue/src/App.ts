import {filesystem} from '@neutralinojs/lib';
import authInfo from '../../.tmp/auth_info.json';
import Default from '@/src/layouts/Default.vue';

export default {
	components: {
		Default
	},
	data() {
		return {
		};
	},
	mounted() {
		console.log('Mounted');

		if (import.meta.env.DEV) {
			const
				{accessToken, port} = authInfo;

			window.NL_PORT = port;
			window.NL_TOKEN = accessToken;
			window.NL_ARGS = [];
		}

		window.Neutralino.init();

		// console.log({'windNeu': window.Neutralino});
		// console.log({'windNeu': window.Neutralino.os.getEnvs()});

		// window.Neutralino.os.getEnvs().then(foo => {
		// 	console.log({foo});
		// });
		// window.Neutralino.os.execCommand('./vue/dist/server')

		// setTimeout(() => {
		// 	console.log({OS: window});

		// 	console.log('now');
		// 	window.Neutralino.os.execCommand('ls -la')
		// 		.then((foo) => {
		// 			console.log(foo);
		// 		});
		// }, 2_000);

		window.Neutralino.os.execCommand('ls -la')
			.then(foo => {
				console.log(foo.stdOut.toString());
			});
	}
};
