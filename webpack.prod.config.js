const webpack = require('webpack');
const baseConfig = require("./webpack.base.config.js");

baseConfig.devtool = "cheap-module-source-map";

baseConfig.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            "ENV": JSON.stringify("production")
        }
    })
];

module.exports = baseConfig;
