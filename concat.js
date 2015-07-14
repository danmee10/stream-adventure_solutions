var concat = require('concat-stream');

process.stdin.pipe(concat(function(buff){
  var reversed = buff.toString().split('').reverse().join('');
  console.log(reversed);
}));