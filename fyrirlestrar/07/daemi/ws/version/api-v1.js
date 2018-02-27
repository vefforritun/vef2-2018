const express = require('express');
const router = express.Router();

const data = [
  { id: 1, heading: 'Foo', description: 'Foo bar' },
];

router.get('/', (req, res) => {
  res.json(data);
})

module.exports = router;
