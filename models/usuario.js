const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  senha: {
    type: String,
    required: true
  },
  //cliente, ou dono
  nivel: {
    type: String,
    required: true
  },
  //logado ou não
  login: {
    type: String,
  },


  });

// Criando o modelo de receita
const usuario = mongoose.model('usuarios', usuarioSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = usuario;