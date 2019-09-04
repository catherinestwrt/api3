const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send(req.body.name);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(id)
});

module.exports = router;