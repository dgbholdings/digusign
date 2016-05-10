'use strict';

var express = require('express');
var Bitid = require('bitid');
var auth = require('../auth.service');
var crypto = require('crypto');
var Users = require('../../api/user/user.model');
var userSocket = require('../../api/user/user.socket');
var app = require('../../app');
var io = app.io;

var router = express.Router();

router
  .get('/login', function(req, res){
    if(req.user) return res.redirect('/user');

    let nonce = new Nonce(req.sessionID);
    let bitid = new Bitid({nonce: nonce.id, callback: 'http://localhost:9000/auth/bitid/callback', unsecure: true});
    res.status(200).json({nonce: nonce.id, uri: bitid.uri, qrcode: bitid.qrcode})
  })

  .post('/callback', function(req, res, next){
    let params = req.body;
    let address = params.address;
    console.log(params)
    let bitid = new Bitid({uri: params.uri, signature: params.signature, address: address, callback: 'http://localhost:9000/auth/bitid/callback'});

    if(bitid.signatureValid()){
      console.log('yes');

      Users.findOne({address: address}, function(err, found){
        if(err) { console.log(err); }
        if(!found){
          var user = new Users({
            address: address,
            bitid: bitid,
            role: 'paid'
          });
          console.log(user);
          user.save(function(err, saved){
            if(err) { console.log(err); }
            req.user = saved;

            //done(null, saved);
            //auth.setTokenCookie
            let token = auth.signToken(user._id, user.role);
            userSocket.emitToken(token);
            res.status(200).json({address: address, bitid: bitid.nonce, token: token});
          });
        } else {
          req.user = found;
          let token = auth.signToken(found._id, found.role);
          userSocket.emitToken(token);
          res.status(200).json({address: address, bitid: bitid.nonce, token: token});
        }
      });
    } else {
      return res.status(400);
    }
  });

function Nonce(sid) {
  this.sid = sid;
  this.uid = null;
  // Initializes a value for the nonce (let's call that the nonce id)
  this.nid = crypto.randomBytes(8).toString('hex');
  // Sets the creation date
  this.created = Date.now();
}

Nonce.prototype.expired = function() {
  return Date.now() - this.created > EXPIRATION_DELAY * 1000;
}

Nonce.prototype.__defineGetter__('id', function() {
  return this.nid;
});


module.exports = router;