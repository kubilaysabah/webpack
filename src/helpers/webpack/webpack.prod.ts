import { type Configuration } from 'webpack'

const config: Configuration = {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
}

export default config
