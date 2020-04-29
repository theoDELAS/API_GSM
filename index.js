const express = require('express');
const bodyParser = require('body-parser');
const Telephones = require('./models/telephone');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

const app = express();

app.use(bodyParser.json());

app.post('/api/addPhone', function(req, res) {
  Telephones.create({
    model: req.body.model,
    storage: req.body.storage,
    ram: req.body.ram,
    release: req.body.release,
    inch: req.body.inch,
    screenType: req.body.screenType,
    os: req.body.os,
    processor: req.body.processor,
    price: req.body.price,
    imgLink: req.body.imgLink,
    brand: req.body.brand
  }).then(phone => {
    res.json(phone);
  }, validation => {
    res.status(422).json({
      errors: validation.errors.map(error => {
        return {
          attribute: error.path,
          message: error.message
        };
      })
    });
  });
});

app.delete('/api/deletePhone/:id', function(req, res) {
  let { id } = req.params;

  Telephones.findByPk(id).then(phone => {
    phone.destroy().then(() => {
      res.status(204).send();
    });
  });
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

app.get('/api/telephone/:id', function(req, res) {
  let { id } = req.params;

  Telephones.findByPk(id).then((telephone) => {
    if (telephone) {
      res.json(telephone);
    } else {
      res.status(404).send();
    }
  });
});

app.get('/api/telephones/:brand', function(req, res) {
  let { brand } = req.params;

  Telephones.findAll({
    where: {
      model: brand
    }
  }).then((telephones) => {
    if (telephones) {
      res.json(telephones);
    } else {
      res.status(404).send();
    }
  });
});

app.listen(8080);