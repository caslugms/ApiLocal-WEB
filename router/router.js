const express = require('express');
const router = express.Router();
const sampleData = require('../data/sample.data');

router.get('/items', (req, res) => {
  res.json(sampleData);
});

router.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = sampleData.find(item => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item não encontrado' });
  }
});

router.post('/items', (req, res) => {
  const newItem = {
    id: sampleData.length + 1,
    name: req.body.name,
    age: req.body.age,
    cidade: req.body.cidade
  };

  sampleData.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;
