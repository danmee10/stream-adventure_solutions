var http = require('http');
var through = require('through2');
var stream = through(write);

function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var server = http.createServer(function (req, res) {
  if (req.method !== "POST") {
    res.end("POSTs only!");
  }

  req.pipe(stream).pipe(res);
});
server.listen(process.argv[2]);

