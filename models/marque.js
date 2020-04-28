const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('Marques', {
  id: {
    field: 'brandId',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  brand: {
    field: 'brand',
    type: Sequelize.STRING
  },
  createdAt: {
    field: 'createdAt',
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});