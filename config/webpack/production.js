const environment = require('./environment')
const webpack = require('webpack')
environment.plugins.delete('UglifyJs')
environment.plugins.set(
  'UglifyJs',
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    parallel: true,
    compress: {
      warnings: false,
      drop_console: true
    },
    output: {
      comments: false
    }
  })
)
module.exports = environment.toWebpackConfig()
