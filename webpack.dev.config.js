module.exports = {
  entry: {
    app: "./dist/app.js",
    html: "./dist/index.html",
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
