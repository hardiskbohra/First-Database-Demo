var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.User.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(user,cb,errcb) {
		var newUser = models.User.build(user);
		return newUser.save()
		.then(cb).error(errcb);
	},

	update : function function(id,updatedUser,cb,errcb) {
		return models.User.update(updatedUser,{
		    where: { id : id }
		}).then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.User.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;