const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

Object.keys(webpackBaseConfig.entry).forEach(name => {
  webpackBaseConfig.entry[name] = [
    './build/dev-client'
  ].concat(webpackBaseConfig.entry[name])
})

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...['index'].map(
      v =>
        new HtmlWebpackPlugin({
          statPrefix: 'dev-',
          filename: v + '.html',
          template: 'src/index.html',
          inject: true,
          chunks: [v]
        })
    ),
    new FriendlyErrorsPlugin()
  ]
})