const path = require('path')
const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.conf')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    new OptimizeCSSPlugin(),
    ...['index'].map(
      v =>
        new HtmlWebpackPlugin({
          statPrefix: 'online',
          filename: v + '.html',
          template: 'src/index.html',
          chunks: ['common', v],
          inject: true,
          minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: false
          },
          chunksSortMode: 'dependency'
        })
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
  ]
})