const path = require('path');
const baseConfig = require('../webpack.config.base.cjs')
const { merge } = require('webpack-merge')

const mode = process.env.mode === 'production' ? 'production' : 'development';

const serverConfig = {
  mode,
  name: 'server',
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '..', 'server', 'server.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'server.js'
  },
};

module.exports = merge(baseConfig, serverConfig);
