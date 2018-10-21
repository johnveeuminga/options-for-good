const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'node_modules/bootstrap/scss/_functions.scss'),
        path.resolve(__dirname, 'src/styles/style.scss'),
        path.resolve(__dirname, 'node_modules/bootstrap/scss/_variables.scss'),        
        path.resolve(__dirname, 'node_modules/bootstrap/scss/_mixins.scss'),        
      ]
    }
  }
}
