const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const notifySchema = new mongoose.Schema({
  pedido: {
    type: String,

  },
  idcliente: {
    type: String,

  },

  status: {
    type: String,

  },

  });

// Criando o modelo de receita
const notify = mongoose.model('notify', notifySchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = notify;