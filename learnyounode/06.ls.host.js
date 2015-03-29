fs = require('fs');
path = require('path');
lsmod = require('./module06');

function print_results(err, data) {
   console.log(data.join("\n"));
}

lsmod(process.argv[2], process.argv[3], print_results);
