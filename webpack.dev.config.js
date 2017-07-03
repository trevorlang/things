const path = require('path');
const webpack = require('webpack');
const baseConfig = require("./webpack.base.config.js");

baseConfig.devServer = {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 8080
};

module.exports = baseConfig;
