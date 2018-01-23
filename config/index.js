
module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    proxyTable: {}
  },
  build: {
    env: require('./prod.env'),
  }
}