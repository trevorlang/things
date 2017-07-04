const path = require('path');

module.exports = {

  entry: {
    "main": "./src/js/app.js",
    "index": "./src/index.html"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/"),
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },

  devServer: {
    contentBase: "dist",
    compress: true,
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "react-hot-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          plugins: ['transform-runtime', 'transform-object-rest-spread'],
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  }
};
