var fs = require('fs');

var file = process.argv[2];

buf = fs.readFile(file, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});