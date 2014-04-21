exports.beginSocket = function(io){
  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
  });
}