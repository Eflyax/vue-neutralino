import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import vue from '@vitejs/plugin-vue';

export default defineConfig(configOpts => {
	const
		env = loadEnv(configOpts.mode, process.cwd(), ''),
		target = env.BUILD_TARGET || 'app',
		buildTargetConfigFn = buildTargets[target];

	if (!buildTargetConfigFn) {
		throw new Error('Unknown BUILD_TARGET=' + target);
	}

	return {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "src/scss/colors.scss";'
				}
			}
		},
		base: '/',
		...buildTargetConfigFn(configOpts, env),
		server: {
			host: true,
			port: env.APP_PORT
		},
		preview: {
			host: true,
			port: env.APP_PORT
		}
	};
});

const buildTargets: Record<string, (config: ConfigEnv, env: Record<string, string>) => UserConfig> = {
	app: (config, env) => {
		return {
			plugins: [
				viteTsconfigPaths({
					extensions: ['.js', '.ts', '.vue'],
					loose: true
				}),
				vue()
			],
			define: {
				'process.env.NODE_ENV': `"${env.NODE_ENV || 'production'}"`
			}
		};
	}
};
