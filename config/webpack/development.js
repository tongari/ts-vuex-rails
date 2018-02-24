const environment = require('./environment')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
environment.plugins.set(
  'WebpackBuildNotifierPlugin',
  new WebpackBuildNotifierPlugin()
)
module.exports = environment.toWebpackConfig()
