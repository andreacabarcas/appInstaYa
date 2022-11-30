const express = require('express');
const orderSchema = require('../models/registroordenes');

const router = express.Router();

// Registrar o crear ordenes
router.post('/ordenes', (req, res) => {
  const user = orderSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener todas las ordenes
router.get('/ordenes', (req, res) => {
  orderSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener una orden especifica

router.get('/ordenes/:id', (req, res) => {
  const { id } = req.params;
  orderSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  console.log(res);
});

// actualizar orden
router.put('/ordenes/:id', (req, res) => {
  const { id } = req.params;
  const {
    nombre_destinatario, cedula_destinatario, direccion_entrega, ciudad_entrega, dimensiones, delicado, peso
  } = req.body;
  orderSchema
    .updateOne({ _id: id }, {
      $set: {
        nombre_destinatario, cedula_destinatario, direccion_entrega, ciudad_entrega, dimensiones, delicado, peso
      },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// eliminar orden
router.delete('/ordenes/:id', (req, res) => {
  const { id } = req.params;
  orderSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
