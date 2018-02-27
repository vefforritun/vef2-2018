const express = require('express');
const router = express.Router();

const data = [
  { id: 1, title: 'Foo', description: 'Foo bar' },
];

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/new', (req, res) => {
  res.json('New endpoint!');
})

module.exports = router;
