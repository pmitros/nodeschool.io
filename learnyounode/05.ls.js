fs = require('fs');
path = require('path');

function filter(item) {
    return path.extname(item) === "."+process.argv[3];
}

function callback(err, list) {
    console.log(list.filter(filter).join('\n'));
}

fs.readdir(process.argv[2], callback)
