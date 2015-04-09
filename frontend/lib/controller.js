"use strict";

var socket = require("../util/socket_provider").socket;
var $ = require('jQuery');
var markdown = require( "markdown" ).markdown;

var $main;

$(document).ready(function(){
    $main = $('div#main');
    socket.on('push', function(data){
        var html = markdown.toHTML(data);
        $main.html(html);
    });
});
