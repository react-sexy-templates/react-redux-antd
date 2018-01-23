require('./check-version')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
// const proxyMiddleware = require('http-proxy-middleware')
const opn = require('opn')
const path = require('path')

const webpackConfig = process.env.NODE_ENV === 'dev'
  ? require('./webpack.dev.conf')
  : require('./webpack.prod.conf')
const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = webpackHotMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
})

compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// Object.keys(proxyTable).forEach(function(context) {
//   const options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(options.filter || context, options))
// })

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)

app.use(hotMiddleware)

let uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at '+ uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  if(autoOpenBrowser && process.env.NODE_ENV === 'dev') {
    opn(uri)
  }
})