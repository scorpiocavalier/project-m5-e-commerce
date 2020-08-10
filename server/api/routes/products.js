const express = require('express');
const router = express.Router();

const items = require('../../data/items.json');

router.get('/', (req, res) => {
  res.status(200).json(items);
});

// TESTING POST REQUEST
router.post('/', (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: 'Handling POST request to /products',
    product
  });
});

router.get('/:productId', (req, res) => {
  const id = req.params.productId;
  const item = items.find(item => item.id == id)
  res.status(200).json({ content: item });
});

module.exports = router;