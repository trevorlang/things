const path = require('path');

module.exports = {
  context: __dirname + "/src",

  entry: {
    app: "./js/app.js",
    html: "./index.html",
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/dist"
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader","babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  }
};
