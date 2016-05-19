module.exports = function(sequelize, DataTypes){

  var UserColumns = {
    username : DataTypes.STRING,
    email : DataTypes.STRING,
    password : DataTypes.STRING
  };

  var UserConfig = {
    classMethods: {}
  };

  var User = sequelize.define("User", UserColumns, UserConfig);

  return User;

};
