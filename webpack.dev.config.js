module.exports = {
  entry: {
    app: "./js/app.js",
    html: "./index.html",
  },
  
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/dist"
  },
};
