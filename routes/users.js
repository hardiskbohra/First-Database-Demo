var express = require('express');
var router = express.Router();
var models = require('../models');

// localhost:3000/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// localhost:3000/users/add
router.post('/add', function(req, res, next){
  var newUser = models.User.build(req.body);

  newUser.save()
  .then(function(anotherUser){
    res.json(anotherUser);
  }).catch(function(error){
    res.json(error);
  });
});

module.exports = router;
