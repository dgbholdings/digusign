'use strict';

var Document = require('../api/document/document.model');
var User = require('../api/user/user.model');
var Tx = require('./tx');
var async = require('neo-async');


const document = {

    findDocument: function(hash){
      return new Promise(function(resolve, reject){
        Document.findOne({hash: hash}, function(err, doc){
          if(!err && doc){
            console.log(doc)
            return resolve(doc);
          }
          reject("Could not find document");
        });
      });
    },

    createAndSend: function(obj){
      let time = Date.now() / 1000 | 0;

      return new Promise(function(resolve, reject){

        var newDoc = new Document({
          hash: obj.hash,
          type: obj.type,
          message: obj.message,
          address: obj.address,
          timesent: time,
          paid: true
        });
        if(obj.notes){
          newDoc.notes = obj.notes;
        }
        if(obj.name){
          newDoc.name = obj.name;
        }

        async.waterfall([
          function(callback){
            newDoc.role = obj.role;
            var tx = new Tx(newDoc);

            tx.createAndSend().then(function(txid){
              newDoc.txid = txid;
              console.log(newDoc)
              callback(null);
            }).catch(function(err){
              return callback(err);
            });
          }, function(callback){
            User.findOne({address: newDoc.address}, function(err, user){
              if(err || !user){
                return callback("No user or error");
              }

              user.documents.push({hash: newDoc.hash, txid: newDoc.txid});

              user.save(function(err){
                if(err){
                  return callback(err);
                }
                callback();
              });
            });
          }, function(callback){
            newDoc.save(function(err){
              if(err){
                return callback(err);
              }
              callback();
            });
          }
        ], function(err){
          console.log(err)
          if(err) return reject(err);
          resolve(newDoc.txid);
        });

      });


    }

};


module.exports = document;