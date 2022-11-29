const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

// Registrar o crear usuarios
router.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener todos los usuario
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener un usuario especifico

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  console.log(res);
});

// actualizar usuario
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const {
    name, usuario, contrasena, email,
  } = req.body;
  userSchema
    .updateOne({ _id: id }, {
      $set: {
        name, usuario, contrasena, email,
      },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// eliminar ususario
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
