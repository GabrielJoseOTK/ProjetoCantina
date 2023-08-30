const express = require('express');
const router = express.Router();
const cantina = require('../models/cantina');

router.post('/inserir', async (req, res) => {
  const { nome, preco, descricao,quantidade} = req.body;

  try {
    const novacantina = await cantina.create({
      nome,
      preco,
      descricao,
      quantidade

    });

    return res.status(201).json({ cantina });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/create', async (req, res) => {
  const { nome, preco, descricao,quantidade} = req.body;
  try {
    const cardapio = new cantina(req.body);
    await cardapio.save();
    res.status(201).send(cardapio);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/cardapio', async (req, res) => {
  try {
    const cantinas = await cantina.find({});
    res.send(cantinas);
  } catch (error) {
    res.status(500).send();
  }
});




// Rota para buscar uma receita específica pelo seu ID
router.get('/encontrar/:id', async (req, res) => {
  const _id  = req.params.id;

  try {
    const cantinas = await cantina.findById(_id);

    if (!cantinas) {
      return res.status(404).send();
    }

    res.send(cantinas);
  } catch (error) {
    res.status(500).send();
  }
});


router.post('/okk', async (req, res) => {
  const nomes = req.body.nome;


    res.send(nomes+"ok");

});




// Rota para atualizar uma receita pelo seu ID
router.patch('/atualizarcardapio/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const recipe = await cantina.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!recipe) {
      return res.status(404).send();
    }

    res.send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/deletarcardapio/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const recipe = await cantina.findByIdAndDelete(_id);

    if (!recipe) {
      return res.status(404).send();
    }

    res.send(recipe);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;

