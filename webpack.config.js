var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    bundle: __dirname + "/app/index.js"
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: {
      name: "TampermonkeyLib",
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