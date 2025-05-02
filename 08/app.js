var fs = require('fs');
// fs.readFile('calc.js', 'utf8', function(err, data){console.log(data)});
// fs.writeFile('calc.js', 'console.log("done")', function(err, data){console.log("Data Saved")});
fs.unlink('calc.js', function(err, data){console.log("Deleted")});