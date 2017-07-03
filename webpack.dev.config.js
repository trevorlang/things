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
};
