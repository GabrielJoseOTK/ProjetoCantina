const express = require('express');
const router = express.Router();
const cantina = require('../models/cantina');

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

module.exports = router;

