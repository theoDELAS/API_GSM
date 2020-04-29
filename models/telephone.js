const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('Telephones', {
  id: {
    field: 'phoneId',
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  model: {
    field: 'model',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Le model est obligatoire'
      }
    }
  },
  storage: {
    field: 'storage',
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Le stockage est obligatoire'
      }
    }
  },
  ram: {
    field: 'ram',
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        args: true,
        msg: 'La ram est obligatoire'
      }
    }
  },
  release: {
    field: 'release',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'La date de sortie est obligatoire'
      }
    }
  },
  inch: {
    field: 'inch',
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        args: true,
        msg: 'La taille du téléphone est obligatoire'
      }
    }
  },
  screenType: {
    field: 'screenType',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'La taille de l\'écran est obligatoire'
      }
    }
  },
  os: {
    field: 'os',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Le systeme d\'exploitation est obligatoire'
      }
    }
  },
  processor: {
    field: 'processor',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Le processeur est obligatoire'
      }
    }
  },
  price: {
    field: 'price',
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Le prix est obligatoire'
      }
    }
  },
  imgLink: {
    field: 'img_link',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Une photo du telephone est obligatoire'
      }
    }
  },
  brand: {
    field: 'brand',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'La marque du téléphone est obligatoire'
      }
    }
  }
}, {
  timestamps: false
});