const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET request to /products'
  });
});

// TESTING POST REQUEST
router.post('/', (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }
  res.status(201).json({
    message: 'Handling POST request to /products',
    product
  });
});

router.get('/:productId', (req, res) => {
  const id = req.params.productId;
  res.status(200).json({
    message: `Handling GET request to /products/${ id }`
  });
});

module.exports = router;