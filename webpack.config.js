var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    commonlib: path.join(__dirname, "common/common.js"),
    tampermonkeylib: "./index.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: {
      name: "[name]",
      type: "umd"
    }
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