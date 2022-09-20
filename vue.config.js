const path = require('path')
function resolve(absPath) {
  return path.resolve(__dirname, absPath)
}

module.exports = {
  publicPath: '/',

  pages: {
    index: {
      entry: 'example/main.js',
      title: 'Example'
    }
  },

  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('/example'))
  }
}
