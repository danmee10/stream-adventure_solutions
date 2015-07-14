var through = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();
var loud = tr.select('.loud').createStream();

var stream = through(write);
function write (buff, enc, next) {
  this.push(buff.toString().toUpperCase());
  next();
}
loud.pipe(stream).pipe(loud)



process.stdin.pipe(tr).pipe(process.stdout);
