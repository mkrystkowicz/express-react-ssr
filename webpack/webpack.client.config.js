const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharedConfig = require('./webpack.shared.config.js');

const clientPort = 8080;

const config = {
  target: 'web',
  entry: path.join(__dirname, '..', '/client/index.js' ),
  output: {
    path: path.join(__dirname, '..', '/build/client'),
    filename: 'scripts/bundle.js',
    publicPath: `http://localhost:${clientPort}/`,
  },
  devServer: {
    port: clientPort,
    liveReload: true,
  },
};

module.exports = merge(sharedConfig, config);
