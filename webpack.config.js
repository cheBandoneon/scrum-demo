const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ["@babel/polyfill" , './src/index.js'],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				include: [
       			 path.resolve(__dirname, "./src/styles/")
   				 ],
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}]
	},
	devServer: {
		port: 3000,
		open: true,
		proxy: {
		  '/api/v1': 'http://localhost:8080'
		}
	  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}