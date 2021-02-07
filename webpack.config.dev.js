const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

process.env.NODE_ENV = 'development';
const ASSET_PATH = process.env.ASSET_PATH || '/';
const API_URL =
  (process.env.API_URL &&
    (process.env.API_URL.endsWith('api') || `${process.env.API_URL}/api`)) ||
  'http://localhost:3001/api';

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ASSET_PATH,
  },
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3000,
    watchOptions: {
      ignored: ['node_modules'],
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        API_URL: JSON.stringify(API_URL),
        NODE_PATH: JSON.stringify('./src'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader?url=false'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 8*1024
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
};
