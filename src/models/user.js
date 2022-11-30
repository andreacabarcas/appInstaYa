const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  contrasena: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  direccion_recogida: {
    type: String,
    required: true
  },
  ciudad_recogida: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', userSchema,'usuarios');
