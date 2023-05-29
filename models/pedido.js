const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: String,

    trim: true
  },
  descricao: {
    type: String,

  },
  status: {
    type: String,

  },

  });

// Criando o modelo de receita
const pedido = mongoose.model('pedido', pedidoSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = pedido;