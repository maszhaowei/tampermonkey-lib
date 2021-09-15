var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    commonlib: path.join(__dirname, "common/common.js"),
    tampermonkeylib: path.join(__dirname, "tampermonkey/main.js"),
    zwlib: path.join(__dirname, "index.js"),
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: {
      name: "[name]",
      type: "umd"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
        }]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    compress: true,
    port: 9000,
    liveReload: true,
    hot: false
  }
}