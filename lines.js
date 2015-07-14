var through = require('through2');
var split = require('split');

var stream = through(write);
var index = 1;

function write (buffer, encoding, next) {
  if (index%2 === 0) {
    this.push(buffer.toString().toUpperCase() + "\n");
  } else {
    this.push(buffer.toString().toLowerCase() + "\n");
  }
  index++;
  next();
}

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);