'use strict'

var bitcore = require('bitcore-lib');
var request = require('request');


let ownAddr = "DH8oqi3ff3SnwZaUvxQ2XfEGBB3Dtt3mbF";
let ownPrivKey = "L1GYHShpFY4NfsynqyW3JXhEEGXfwkViapFAEjmVX6VXpDEtXDxE";

var tx = function(obj){
  this.address = obj.address;
  this.role = obj.role;
  this.message = obj.message;
  this.rawtx = null;
  this.fee = null;
  this.txid = null;
  this.utxos = [];
}

tx.prototype.getUtxo = function(){
  var self = this;
  return new Promise(function(resolve, reject){

    request('http://digiexplorer.info/api/addr/' + ownAddr + '/utxo', function(err, res, body){
      if(!err && res.statusCode === 200){
        self.utxos = JSON.parse(body);
        return resolve();
      }
      reject("Could not connect to digiexplorer");
    });
  });
};

tx.prototype.getFee = function(){
  if(this.role === 'free'){
    this.fee = 10;
  } else if (this.role === 'paid'){
    this.fee = 5;
  } else {
    this.fee = 0;
  }
};

tx.prototype.createTx = function(){
  var self = this;
  return new Promise(function(resolve, reject){
    try{ 
      var newTx = new bitcore.Transaction()
        .from(self.utxos)
        .to(self.address, 100000000)
        .change(ownAddr)
        .addData(self.message)
        .sign(ownPrivKey)

      self.rawtx = newTx.serialize();
      console.log(self)

      return resolve(null);
    } catch(e){
      reject(e);
    }
  });
};

tx.prototype.sendTx = function(){
  var self = this;
  return new Promise(function(resolve, reject){

    request.post('http://digiexplorer.info/api/tx/send', { form: {rawtx: self.rawtx}}, function(err, res, body){
      if(!err && res.statusCode === 200){
        let json = JSON.parse(body)
        self.txid = json.txid;
        return resolve();
      }
      reject();
    });
  });
};

tx.prototype.createAndSend = function(obj){
  var self = this;
  return new Promise(function(resolve, reject){

    self.getUtxo().then(function(){
      return self.createTx();
    }).then(function(){
      console.log(self)
      return self.sendTx();
    }).then(function(){
      resolve(self.txid);
    }).catch(function(err){
      console.log(err);
      reject(err);
    });
  });
};

module.exports = tx;