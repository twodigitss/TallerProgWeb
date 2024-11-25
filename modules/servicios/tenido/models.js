// models/user.js
const mongoose = require('mongoose');

const TenidoSchema = new mongoose.Schema({
  ordenId: { type: String, required: true, unique: true, description: 'Número de orden de teñido' },
  clienteNombre: { type: String, required: true, description: 'Nombre del cliente' },
  clienteTelefono: { type: String, required: true, description: 'Teléfono del cliente' },
  tipoTela: { type: String, required: true, description: 'Tipo de tela a teñir' },
  colorOriginal: { type: String, description: 'Color original de la prenda' },
  colorDeseado: { type: String, required: true, description: 'Color deseado para el teñido' },
  fechaRecepcion: { type: Date, default: Date.now, description: 'Fecha de recepción de la prenda' },
  fechaEntrega: { type: Date, description: 'Fecha estimada de entrega' },
  estado: { 
    type: String, 
    enum: ['recibido', 'en proceso', 'teñido', 'secado', 'finalizado', 'entregado'], 
    default: 'recibido',
    description: 'Estado actual del proceso de teñido'
  },
  observaciones: { type: String, description: 'Observaciones adicionales sobre el servicio' },
  precio: { type: Number, required: true, description: 'Precio del servicio de teñido' },
});

module.exports = mongoose.model('Tenido', TenidoSchema);
