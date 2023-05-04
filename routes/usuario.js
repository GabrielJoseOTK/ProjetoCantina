const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario');

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
  const { nome, senha, nivel} = req.body;

  try {
    const novousuario = await usuario.create({
      nome,
      senha,
      nivel

    });

    return res.status(201).json({ usuario });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/create', async (req, res) => {
  const { nome, senha, nivel, login} = req.body;
  try {
    const usuarios = new usuario(req.body);
    await usuarios.save();
    res.status(201).send(usuarios);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/lista', async (req, res) => {
  try {
    const usuarios = await usuario.find({});
    res.send(usuarios);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/lista', async (req, res) => {
  try {
    const usuarios = await usuario.find({});
    res.send(usuarios);
  } catch (error) {
    res.status(500).send();
  }
});


// Rota para buscar uma receita específica pelo seu ID
router.get('/encontrar/:id', async (req, res) => {
  const _id  = req.params.id;

  try {
    const usuarios = await usuario.findById(_id);

    if (!usuarios) {
      return res.status(404).send();
    }

    res.send(usuarios);
  } catch (error) {
    res.status(500).send();
  }
});


// Rota para atualizar uma receita pelo seu ID
router.patch('/atualizardados/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const usuarios = await usuario.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!usuarios) {
      return res.status(404).send();
    }

    res.send(usuarios);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para atualizar uma receita pelo seu ID
router.patch('/logar_deslogar/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const usuarios = await usuario.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!usuarios) {
      return res.status(404).send();
    }

    res.send(usuarios);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/deletarusuario/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const usuarios = await usuario.findByIdAndDelete(_id);

    if (!usuarios) {
      return res.status(404).send();
    }

    res.send(usuarios);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
