http = require('http');

function callback(response) {
    response.setEncoding('utf-8');
    response.on("data", console.log);
}

http.get(process.argv[2], callback);
