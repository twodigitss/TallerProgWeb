// models/user.js
const mongoose = require('mongoose');
const LavadoSchema = new mongoose.Schema({
  tipoPrenda: { type: String, required: true, description:'Tipo de prenda' },
  descripcion: { type: String, description:'Descripción del servicio' },
  precio: { type: Number, required: true, description:'Precio del servicio' },
  cliente: { type: String, required: true, description:'Nombre del cliente' },
  telefonoCliente: { type: String, description:'Teléfono del cliente' },
  estado: { type: String, enum: ['pendiente', 'en proceso', 'completado'], default: 'pendiente', description:'Estado del servicio' },
  instruccionesEspeciales: { type: String, description:'Instrucciones especiales para el lavado' },
  fechaRecibido: { type: Date, description:'Fecha de recibido' },
  fechaEntrega: { type: Date, description:'Fecha estimada de entrega' },
});

module.exports = mongoose.model('Lavado', LavadoSchema);
