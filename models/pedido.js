const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: String,
    required: true,
    trim: true
  },
  pedido: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },

  });

// Criando o modelo de receita
const pedido = mongoose.model('pedidos', pedidoSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = pedido;