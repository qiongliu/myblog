var express = require('express');
var router = express();

var checkNotLogin = require('../middlewares/check.js').checkNotLogin;

// GET /signin 登录页
router.get('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;