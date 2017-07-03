'use strict';

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("../webpack.dev.config.js");

var app = express(),
    DIST_DIR = path.join(__dirname, "dist"),
    HTML_FILE = path.join(DIST_DIR, "index.html"),
    is_development = process.env.NODE_ENV !== "production",
    DEFAULT_PORT = 8080,
    compiler = webpack(config);

app.set("port", process.env.PORT || DEFAULT_PORT);

console.log("Starting up server");

console.log("Current environment:" + process.env.NODE_ENV);

if (false) {

  console.log('Welcome to Dev');

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get("*", function (req, res, next) {

    console.log("Request received");

    compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static(DIST_DIR));

  app.get("*", function (req, res) {
    return res.sendFile(HTML_FILE);
  });
}

app.listen(app.get("port"));
