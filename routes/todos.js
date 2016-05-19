var express = require('express');
var router = express.Router();

// www.example.com/todos/
router.get('/',function(req,res,next){
  res.json({"message" : "Hello, this is the todo message."});
});

module.exports = router;
