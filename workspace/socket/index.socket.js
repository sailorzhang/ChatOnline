exports.beginSocket = function (io) {
    var _ = require('underscore');
    var users = [];
    io.sockets.on('connection', function (socket) {
        console.log('connection');
        socket.emit('connection');

        socket.on('IN', function (data) {
            console.log('IN');
            users.push(data.username);
            socket.set('username', data.username, function () {
                io.sockets.emit("RefreshUsers", { UserList: users });
            });
        });

        socket.on('disconnect', function () {
            console.log('disconnect');
            socket.get('username', function (err, username) {
                users = _.without(users, username);
                io.sockets.emit("RefreshUsers", { UserList: users });
            });
        });
    });
}