const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('Telephones', {
  id: {
    field: 'phoneId',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  model: {
    field: 'model',
    type: Sequelize.STRING
  },
  storage: {
    field: 'storage',
    type: Sequelize.INTEGER
  },
  ram: {
    field: 'ram',
    type: Sequelize.INTEGER
  },
  createdAt: {
    field: 'createdAt',
    type: Sequelize.DATE
  },
  inch: {
    field: 'inch',
    type: Sequelize.INTEGER
  },
  screenType: {
    field: 'screenType',
    type: Sequelize.STRING
  },
  os: {
    field: 'os',
    type: Sequelize.STRING
  },
  processor: {
    field: 'processor',
    type: Sequelize.STRING
  },
  price: {
    field: 'price',
    type: Sequelize.INTEGER
  },
  imgLink: {
    field: 'img_link',
    type: Sequelize.STRING
  },
  brandId: {
    field: 'brandId',
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false
});