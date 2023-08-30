const express = require('express');
const router = express.Router();
const notify = require('../models/notify');

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
  const {pedido,idcliente, status} = req.body;

  try {
    const noti = await notify.create({
      pedido,
      idcliente,
      status

    });

    return res.status(201).json({ noti });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/pelonome/:idcliente', async (req, res) => {
  const idcliente  = req.params.idcliente;

  try {
    let noti = await notify.find({ idcliente: idcliente });

    if (!noti) {
      return res.status(404).send();
    }

    res.send(noti);
  } catch (error) {
    res.status(500).send();
  }
});


router.post('/create', async (req, res) => {
  const { pedido, idcliente,  status} = req.body;
  try {
    const noti = new notify(req.body);
    await noti.save();
    res.status(201).send(noti);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/numero_notify/:idcliente/:status', async (req, res) => {
  const idcliente = req.params.idcliente;
  const status = req.params.status;

  try {
    const noti = await notify.find({ idcliente: idcliente, status: status });
    const numero_notify = noti.length;
    res.status(200).send({ numero_notify });
  } catch (error) {
    res.status(400).send({ error: 'Erro ao obter o número de notificações.' });
  }
});






router.get('/listanoti', async (req, res) => {
  try {
    const noti = await notify.find({});
    res.send(noti);
  } catch (error) {
    res.status(500).send();
  }
});



// Rota para buscar uma receita específica pelo seu ID
router.get('/encontrarnoti/:id', async (req, res) => {
  const _id  = req.params.id;

  try {
    const noti = await notify.findById(_id);

    if (!noti) {
      return res.status(404).send();
    }

    res.send(noti);
  } catch (error) {
    res.status(500).send();
  }
});








// Rota para atualizar uma receita pelo seu ID
router.patch('/atualizarnoti/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const noti = await notify.findById(_id);
    noti.status = "visualizado";
    noti.save();

    if (!noti) {
      return res.status(404).send();
    }

    res.send(noti);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/deletarnoti/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const noti = await notify.findByIdAndDelete(_id);

    if (!noti) {
      return res.status(404).send();
    }

    res.send(noti);
  } catch (error) {
    res.status(500).send();
  }
});


module.exports = router;

