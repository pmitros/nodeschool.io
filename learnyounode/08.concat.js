http = require('http');
concatStream = require('concat-stream')

function callback(response) {
    response.setEncoding('utf-8');
    response.pipe(concatStream(function (data) {console.log(data.length); console.log(data);}))
}

http.get(process.argv[2], callback);
