const { environment } = require('@rails/webpacker')
// const vue =  require('./loaders/vue')

environment.loaders.append('vue',{
  test: /\.vue$/,
  exclude: /(node_modules)|(\.DS_Store$)/,
  use: [
    {
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader',
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
      }
    },
  ]}
)

environment.loaders.append('ts',{
  test: /\.(ts|tsx)?$/,
  exclude: /(node_modules)|(\.DS_Store$)/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
  ]}
)

// environment.loaders.append('vue', vue)
module.exports = environment
