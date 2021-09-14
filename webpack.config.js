var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: __dirname + "/app/index.js"
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: "tampermonkeyLib",
    libraryTarget: "umd"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    hot: false,
    liveReload: false,
    compress: true,
    port: 9000,
  }
}