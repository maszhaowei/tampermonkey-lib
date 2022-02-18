var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    bllib: path.join(__dirname, "bilibililive/main.js"),
    commonlib: path.join(__dirname, "common/main.js"),
    tampermonkeylib: path.join(__dirname, "tampermonkey/main.js"),
    sitelib: path.join(__dirname, "site/main.js"),
    playerlib: path.join(__dirname, 'player/main.js'),
    zwlib: path.join(__dirname, "index.js"),
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: {
      name: "[name]",
      type: "umd"
    },
    compareBeforeEmit: true
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