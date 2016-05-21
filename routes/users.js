var express = require('express');
var router = express.Router();
var models = require('../models');

// localhost:3000/users/
router.get('/', function(req, res, next) {
  models.User.findAll({})
  .then(function(users){
    res.json(users);
  }).catch(function(error){
    res.json(error);
  });
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

router.put('/update/:id', function(req,res,next){
  models.User.update(req.body,{
     where: { id : req.params.id }
  }).then(function (result) {
    
  });
});


router.delete('/delete/:id', function(req, res, next){
  models.User.destroy({where: {id : req.params.id}})
  .then(function(result){
    console.log("Deleted user : " + req.params.id);
  });
});

module.exports = router;
