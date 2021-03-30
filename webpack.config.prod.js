const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

process.env.NODE_ENV = 'production';
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ASSET_PATH,
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
          },
        },
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  plugins: [
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify('http://localhost:3001'),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      minify: {
        // see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CleanWebpackPlugin(),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
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
