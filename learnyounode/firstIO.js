var fs = require('fs');
var file = process.argv[2];
var buf = fs.readFileSync(file);
var string = buf.toString();
console.log(string.split('\n').length - 1);