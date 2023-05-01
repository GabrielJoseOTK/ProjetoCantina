const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  RA: {
    type: Number,
    required: true
  },


  });

// Criando o modelo de receita
const cliente = mongoose.model('clientes', clienteSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = cliente;