# HTTP Server in Node.js

This is a simple HTTP Server tutorial.  In this tutorial we create a HTTP Server using <a href="https://nodejs.org/en" TARGET="_blank">Node.js</a> and will display the historic 'Hello World' statement.

Using your favorite text editor, create a file called server.js.

// Load the http module
var http = require('http');

var port = 8000;

// Config HTTP Server
var server = http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('Hello NodeJS World!');
});

// Listen to port 8080
server.listen(port);

// console.log to terminal
console.log('Server running at http://127.0.0.1:' + port);
