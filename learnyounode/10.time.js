var net = require('net');
var sft = require('strftime');

var server = net.createServer(function (socket) {
    socket.write(sft("%Y-%m-%d %H:%M\n"));
    socket.end();
})

server.listen(process.argv[2])
