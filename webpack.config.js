const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = () => {
	// Dotenv: return a object with keys
	const env = dotenv.config().parsed;

	// return a object with key name "process.env.<VAR>" for each env variable
	const envKeys = Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});

	return {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/'
		},
		mode: 'development',
		module: {
			rules: [
				{
					test: /\.(js|jsx|ts|tsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.(scss|sass)$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: 'asset/resource'
				},
				{
					test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
					type: 'asset/inline'
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.jsx'],
			plugins: [new TsconfigPathsPlugin()]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './public/index.html')
			}),
			new CleanWebpackPlugin(),
			new webpack.DefinePlugin(envKeys)
		],
		devServer: {
			historyApiFallback: true,
			port: 3000,
			open: true,
			compress: true,
			hot: true,
			static: path.join(__dirname, 'public')
		}
	};
};
