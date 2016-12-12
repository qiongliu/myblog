var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('index',{
		name: 'liu',
		h1: '<h1>hello</h1>'
	})
})

module.exports = router;