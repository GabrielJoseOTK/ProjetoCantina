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
  const { cliente, descricao, status} = req.body;

  try {
    const novapedido = await pedido.create({
      cliente,
      descricao,
      status

    });

    return res.status(201).json({ novapedido });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/create', async (req, res) => {
  const { cliente, pedido, status} = req.body;
  try {
    const pedidos = new pedido(req.body);
    await pedidos.save();
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

// Rota para buscar uma receita específica pelo seu ID
router.get('/pelonome/:cliente', async (req, res) => {
  const cliente  = req.params.cliente;

  try {
    let pedidos = await pedido.find(function(pedidos) {
      return pedidos.cliente === cliente;
    });

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

router.get('/cancelarpedido/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const noti = await pedido.findById(_id);
    noti.status = "Cancelado";
    noti.save();

    if (!noti) {
      return res.status(404).send();
    }

    res.send(noti);
  } catch (error) {
    res.status(400).send(error);
  }
});





router.post('/pedidosespecificos', async (req, res) => {
  try {
    const cliente  = req.body._id;
    const { status } = req.body;
    const pedidos = await pedido.find({ status, cliente });
    if (!pedidos) {
      return res.send('Não há');
    }
    res.send(pedidos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro');
  }
});

module.exports = router;

