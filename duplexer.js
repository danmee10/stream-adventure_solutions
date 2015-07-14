var duplex = require('duplexer');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  var process = spawn(cmd, args);

  return duplex(process.stdin, process.stdout);
};