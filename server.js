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
