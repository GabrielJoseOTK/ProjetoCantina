const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente');

// Criar uma nova receita
// const novaReceita = new Receita({
//   nome: 'Bolo de cenoura',
//   ingredientes: ['cenoura', 'açúcar', 'farinha', 'óleo', 'ovos'],
//   modoDePreparo: 'Bata os ingredientes no liquidificador e leve ao forno por 30 minutos.'
// });



router.post('/teste', async (req, res) => {
  const nomes = req.body.nome;


    res.send(nomes+"ok");

});
router.post('/inserir', async (req, res) => {
  const { nome, RA} = req.body;

  try {
    const novocliente = await cliente.create({
      nome,
      RA

    });

    return res.status(201).json({ cliente });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/create', async (req, res) => {
  const {nome, RA} = req.body;
  try {
    const clientes = new cliente(req.body);
    await clientes.save();
    res.status(201).send(clientes);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/lista', async (req, res) => {
  try {
    const clientes = await cliente.find({});
    res.send(clientes);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/lista', async (req, res) => {
  try {
    const clientes = await cliente.find({});
    res.send(clientes);
  } catch (error) {
    res.status(500).send();
  }
});


// Rota para buscar uma receita específica pelo seu ID
router.get('/encontrar/:id', async (req, res) => {
  const _id  = req.params.id;

  try {
    const clientes = await cliente.findById(_id);

    if (!clientes) {
      return res.status(404).send();
    }

    res.send(clientes);
  } catch (error) {
    res.status(500).send();
  }
});


// Rota para atualizar uma receita pelo seu ID
router.patch('/atualizardados/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const clientes = await cliente.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!clientes) {
      return res.status(404).send();
    }

    res.send(clientes);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/deletarcliente/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const clientes = await cliente.findByIdAndDelete(_id);

    if (!clientes) {
      return res.status(404).send();
    }

    res.send(clientes);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
