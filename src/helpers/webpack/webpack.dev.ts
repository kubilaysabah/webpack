import { type Configuration } from 'webpack'
import type { Configuration as DevConfiguration } from 'webpack-dev-server'
import path from 'path'

const config: Configuration & DevConfiguration = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		hot: true,
		open: true,
		port: 3000,
		historyApiFallback: true,
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
}

export default config
