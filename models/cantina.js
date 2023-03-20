const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const cantinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  preco: {
    type: String,
    required: true
  },
  descricao: {
  type: String
  }
  });

// Criando o modelo de receita
const cantina = mongoose.model('cardapio', cantinaSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = cantina;