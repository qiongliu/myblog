var express = require('express');
var router = express();

router.get('/:name',function(req,res){
	res.send('hello' + req.params.name);
})

module.exports = router;