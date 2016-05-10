'use strict';

var express = require('express');
var controller = require('./document.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/', auth.isAuthenticated(), controller.signDoc);
router.get('/find/:id', controller.findDoc);

module.exports = router;
