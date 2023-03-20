const Receita = require('./models/receita');

// Criar uma nova receita
const novaReceita = new Receita({
  nome: 'Bolo de cenoura',
  ingredientes: ['cenoura', 'açúcar', 'farinha', 'óleo', 'ovos'],
  modoDePreparo: 'Bata os ingredientes no liquidificador e leve ao forno por 30 minutos.'
});

novaReceita.save((err, receita) => {
  if (err) {
    console.log(err);
  } else {
    console.log(receita);
  }
});

// Listar todas as receitas
Receita.find((err, receitas) => {
  if (err) {
    console.log(err);
  } else {
    console.log(receitas);
  }
});

// Encontrar uma receita pelo nome
Receita.findOne({nome: 'Bolo de cenoura'}, (err, receita) => {
  if (err) {
    console.log(err);
  } else {
    console.log(receita);
  }
});

// Atualizar uma receita pelo id
Receita.findByIdAndUpdate('id-da-receita', {nome: 'Bolo de cenoura com cobertura de chocolate'}, (err, receita) => {
  if (err) {
    console.log(err);
  } else {
    console.log(receita);
  }
});

// Excluir uma receita pelo id
Receita.findByIdAndDelete('id-da-receita', (err, receita) => {
  if (err) {
    console.log(err);
  } else {
    console.log(receita);
  }
});