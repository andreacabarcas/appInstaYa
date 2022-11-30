const mongoose = require('mongoose');

const medidas = mongoose.Schema({
  largo: {type:Number, required:true},
  ancho: {type:Number, required:true},
  alto: {type:Number, required:true}
});

const ordenesSchema = mongoose.Schema({
  usuario: {
    type: String,
    required: true,
  },
  nombre_destinatario: {
    type: String,
    required: true,
  },
  cedula_destinatario: {
    type: String,
    required: true,
  },
  direccion_entrega: {
    type: String,
    required: true,
  },
  ciudad_entrega: {
    type: String,
    required: true,
  },
  fecha_hora: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  dimensiones: {
    type: medidas,
    required: true,
  },
  delicado: {
    type: Boolean,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('ordenes', ordenesSchema,'ordenes');
