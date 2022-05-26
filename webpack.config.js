// https://exerror.com/module-not-found-error-cant-resolve-fs-in/
const path = require('path')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
        "fs": false
    }
  }
}
