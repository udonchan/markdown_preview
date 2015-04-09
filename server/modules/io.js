"use strict";

var io, currentString;

module.exports.onTargetFileChanged = function(data){
    currentString = data;
    if(io === undefined){
        return;
    }
    io.sockets.emit('push', data);
};

module.exports.start = function(){
    var app = require('../app');
    var server = app.listen(app.get('port'), function() {
        console.log('server listening on port ' + server.address().port);
    });
    io = require('socket.io')(server);
    io.on('connection', function(socket){
        socket.emit('push', currentString);
    });
};
