'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
  address: {type: String, index: true},
  hash: {type: String, index:true},
  message: String,
  txid: String,
  name: String,
  type: String,
  paid: Boolean,
  notes: String,
  timeadded: Number,
  timesent: Number
});


module.exports = mongoose.model('Document', DocumentSchema);
