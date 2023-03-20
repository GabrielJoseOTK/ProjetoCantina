const express = require('express');
const router = express.Router();
const Cantina = require('../models/Cantina');

router.post('/', async (req, res) => {
  const { title, description, ingredients, instructions, author } = req.body;

  try {
    const cantina = await Cantina.create({
      title,
      description,
      ingredients,
      instructions,
      author
    });

    return res.status(201).json({ cantina });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

