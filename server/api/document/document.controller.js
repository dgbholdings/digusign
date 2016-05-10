'use strict';

var Document = require('../../components/document');

exports.signDoc = function(req, res){
  let params = req.body;
  let message = params.hash;
  console.log(params)

  if(params.type){
    message = params.type + " " + params.hash;
  }

  let obj = {
    hash: params.hash,
    type: params.type,
    message: message,
    address: req.user.address,
    role: req.user.role
  }

  if(params.name){
    obj.name = params.name;
  }

  console.log(obj)

  Document.createAndSend(obj).then(function(txid){
    console.log(txid);
    res.status(200).json({txid: txid});
  }).catch(function(err){
    res.status(400).json(err);
  })

}

exports.findDoc = function(req, res){
  Document.findDocument(req.params.id).then(function(doc){
    res.status(200).json(doc);
  }).catch(function(err){
    res.status(400).json(err);
  });
}

