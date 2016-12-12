var express = require('express');
var router = express();

var checkLogin = require('../middlewares/check.js').checkLogin;

//所有用户或者特定用户的文章页
router.get('/',function(req,res,next){
	res.send(req.flash());
});

//发表文章
router.post('/',checkLogin,function(req,res,next){
	res.send(req.flash());
});

//文章发表页面
router.get('/create',checkLogin,function(req,res,next){
	res.send(req.flash());
});

//文章页
router.get('/:postId',function(req,res,next){
	res.send(req.flash());
});

//更新文章页
router.get('/:postId/edit',checkLogin,function(req,res,next){
	res.send(req.flash());
});

//更新文章页面
router.post('/:postId/edit',checkLogin,function(req,res,next){
	res.send(req.flash());
});

//删除文章
router.get('/:postId/remove', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

//创建留言
router.post('/:postId/comment', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

//删除留言
router.get('/:postId/comment/:commentId/remove',checkLogin,function(req,res,next){
	res.send(req.flash());
});

module.exports = router;

