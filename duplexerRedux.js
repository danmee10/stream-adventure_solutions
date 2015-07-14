var duplex = require('duplexer');
var through = require('through2').obj;


module.exports = function (counter) {
  var countryCounts = {};

  var tranStream = through(write, end);
  function write(buff, enc, next) {
    countryCounts[buff.country] = (countryCounts[buff.country] || 0) + 1;
    next();
  };

  function end (done) {
    counter.setCounts(countryCounts);
    done();
  }

  return duplex(tranStream, counter);
};
