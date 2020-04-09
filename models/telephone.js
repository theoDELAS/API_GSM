'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telephone = sequelize.define('Telephone', {
    brandId: DataTypes.INTEGER,
    model: DataTypes.STRING,
    storage: DataTypes.INTEGER,
    ram: DataTypes.INTEGER
  }, {});
  Telephone.associate = function(models) {
    // associations can be defined here
  };
  return Telephone;
};