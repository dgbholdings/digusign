/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var socket = require('../../config/socketio');


//exports.register = function(socket) {
//  var self = this;
//  this.id = socket.id;
//}

var socket = module.exports = {
  id: null
};

socket.stuff = function(sock, io){
    this.socket = sock;
    this.id = sock.id;
};

socket.emitToken = function(token){
  this.socket.emit('token', token);
}