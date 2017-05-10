module.exports = function(sequelize, DataTypes) {
  let Burger;
  let schema = {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  };


  Burger = sequelize.define("Burgers",schema);
  return Burger;
};