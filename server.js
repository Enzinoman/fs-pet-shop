'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/guests') {
    var guests = ['Mary', 'Don'];
    var guestsJSON = JSON.stringify(guests);

    res.setHeader('Content-Type', 'application/json');
    res.end(guestsJSON);
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});