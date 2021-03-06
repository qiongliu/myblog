var fs = require('fs');
var path = require('psth');
var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../model/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup 注册页
router.get('/', checkNotLogin, function(req, res, next) {
  // res.send(req.flash());
  res.render('signup');
});

// POST /signup 用户注册
router.post('/', checkNotLogin, function(req, res, next) {
  // res.send(req.flash());
  var name = req.fields.name;
  var gender = req.fields.gender;
  var bio = req.fields.bio;
  var avatar = req.fields.avatar.path.split(path.sep).pop();
  var password = req.fields.password;
  var repassword = req.fields.repassword;
});

module.exports = router;