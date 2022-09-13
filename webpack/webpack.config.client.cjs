const path = require('path');
const baseConfig = require('../webpack.config.base.cjs');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.mode === 'production' ? 'production' : 'development';

const clientConfig = {
  mode,
  name: 'client',
  target: 'web',
  entry: {
    server: path.resolve(__dirname, '..', 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'public'),
    publicPath: 'public',
    filename: 'client.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    }),
  ],
};

module.exports = merge(baseConfig, clientConfig);
