import path from 'path'
import { type Configuration, DefinePlugin } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as dotenv from 'dotenv'
dotenv.config()
import ESLintPlugin from 'eslint-webpack-plugin'

const config: Configuration = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React - Webpack Configuration',
			filename: 'index.html',
			template: './src/assets/templates/index.html',
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
		new DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed),
		}),
		new ESLintPlugin({
			extensions: ['ts', 'tsx'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: 'defaults' }],
								'@babel/preset-react',
								'@babel/preset-typescript',
							],
						},
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					publicPath: './src/assets',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
				loader: 'url-loader',
				options: {
					limit: 8192,
				},
			},
		],
	},
}

export default config
