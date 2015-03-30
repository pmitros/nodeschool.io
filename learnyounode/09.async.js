http = require('http');
concatStream = require('concat-stream')

function write_output(data) {
    d = {}
    for(var x = 0; x<data.length; x++) {
	d[data[x][0]] = data[x][1];
    }
    console.log(d['0']);
    console.log(d['1']);
    console.log(d['2']);
}

output = concatStream(write_output)
writes = 0

d = {}
function callback(count) {
  return function(response) {
    response.setEncoding('utf-8');
    response.pipe(concatStream(function (data) {
	output.write([[count, data]]);
	writes += 1;
	if(writes === 3) {
	    output.end();
	}
    }));
}}

http.get(process.argv[2], callback(0));
http.get(process.argv[3], callback(1));
http.get(process.argv[4], callback(2));
