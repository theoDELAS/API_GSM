'use strict';
module.exports = (sequelize, DataTypes) => {
  const Marque = sequelize.define('Marque', {
    brand: DataTypes.STRING
  }, {});
  Marque.associate = function(models) {
    // relation
  };
  return Marque;
};