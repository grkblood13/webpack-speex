const path = require('path')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // https://exerror.com/module-not-found-error-cant-resolve-fs-in/
  resolve: {
    fallback: {
    	"util": require.resolve('util'),
        "fs": false
    }
  },
  // https://github.com/twbs/bootstrap/issues/20709#issuecomment-305736814
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
