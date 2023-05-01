const express = require('express');
const router = express.Router();
const pedido = require('../models/pedido');

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
  const { nome, preco, descricao} = req.body;

  try {
    const novacantina = await cantina.create({
      nome,
      preco,
      descricao

    });

    return res.status(201).json({ cantina });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/create', async (req, res) => {
  const { nome, preco, descricao} = req.body;
  try {
    const cardapio = new cantina(req.body);
    await cardapio.save();
    res.status(201).send(cardapio);
  } catch (error) {
    res.status(400).send(error);
  }
});





router.get('/listapedido', async (req, res) => {
  try {
    const pedidos = await pedido.find({});
    res.send(pedidos);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/listapedidos', async (req, res) => {
  try {
    const pedidos = await pedido.find({});
    res.send(pedidos);
  } catch (error) {
    res.status(500).send();
  }
});


// Rota para buscar uma receita específica pelo seu ID
router.get('/encontrarpedido/:id', async (req, res) => {
  const _id  = req.params.id;

  try {
    const pedidos = await pedido.findById(_id);

    if (!pedidos) {
      return res.status(404).send();
    }

    res.send(pedidos);
  } catch (error) {
    res.status(500).send();
  }
});






// Rota para atualizar uma receita pelo seu ID
router.patch('/atualizarpedido/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const pedidos = await pedido.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!pedidos) {
      return res.status(404).send();
    }

    res.send(pedidos);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/deletarpedido/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const pedidos = await pedido.findByIdAndDelete(_id);

    if (!pedidos) {
      return res.status(404).send();
    }

    res.send(pedidos);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;

