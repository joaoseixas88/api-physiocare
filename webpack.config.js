/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')
const { isLocal } = slsw.lib.webpack
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'node',
  stats: 'normal',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  mode: isLocal ? 'development' : 'production',
  optimization: { concatenateModules: false },
  resolve: { 
		extensions: ['.js', '.ts'],
		plugins: [new TsconfigPathsPlugin()]
	 },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, '.webpack'),
  },
	module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}