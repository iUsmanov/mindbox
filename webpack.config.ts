import path from 'path';
import webpack from 'webpack';
import { webpackConfiguration } from './config/webpack/buildWebpackConfig';
import { BuildEnv, BuildOptions, BuildPaths } from './config/webpack/types/config';

export default (env: BuildEnv): webpack.Configuration => {
	// I had to add `?` в следующих 4 строках из-за cypress's components testing
	const port = env?.port || 3000;
	const mode = env?.mode || 'development';
	const analyze = env?.analyze || false;
	const apiURL = env?.apiURL || 'http://localhost:8000';
	const isDev = mode === 'development';
	const environ = 'app';

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const buildOptions: BuildOptions = {
		buildPaths: paths,
		mode,
		isDev,
		port,
		analyze,
		apiURL,
		environ,
	};

	return webpackConfiguration(buildOptions);
};
// @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest jest jest-environment-jsdom
