var socket = io('http://' + location.host);
window.onbeforeunload = function(event){
    socket.disconnect();
};

module.exports.socket = socket;
