const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scriptExtensions = /\.(js|jsx|mjs)$/;

module.exports = {
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
  ],
};
