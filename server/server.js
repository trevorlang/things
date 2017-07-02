#!/usr/bin/env nodejs

const path = require('path');
const fs = require('fs');
const http = require('http');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080, 'localhost');
});

console.log('Server running at http://localhost:8080/');
