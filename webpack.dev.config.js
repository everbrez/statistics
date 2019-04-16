const path = require('path')

const config = {
  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  devServer: {
    port: 8888,
    proxy: {
      // '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'build'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
  },
}

module.exports = config
