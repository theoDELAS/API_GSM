const express = require('express');
const Telephones = require('./models/telephone');
const Marques = require('./models/marque');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

const app = express();

Marques.hasMany(Telephones, {
  foreignKey: 'brandId'
});

Telephones.belongsTo(Marques, {
  foreignKey: 'brandId'
});

app.get('/api/telephones', function(req, res) {
  let filter = {};
  let { q } = req.query

  if (q) {
    filter = {
      where: {
        model: {
          [Sequelize.Op.like]: `%${q}%`
        }
      }
    };
  }

  Telephones.findAll(filter).then((telephones) => {
    res.json(telephones);
  });
});

app.get('/api/telephones/:id', function(req, res) {
  let { id } = req.params;

  Telephones.findByPk(id).then((telephone) => {
    if (telephone) {
      res.json(telephone);
    } else {
      res.status(404).send();
    }
  });
});

app.get('/api/marques/:id', function(req, res) {
  let { id } = req.params;

  Marques.findByPk(id, {
    include: [Telephones]
  }).then((marques) => {
    if (marques) {
      res.json(marques);
    } else {
      res.status(404).send();
    }
  });
});

app.listen(8080);