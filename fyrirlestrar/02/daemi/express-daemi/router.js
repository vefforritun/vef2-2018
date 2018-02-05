const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Foo!');
});

router.get(/foo.*$/, (req, res) => {
  res.send(`Þú ert á ${req.originalUrl}`);
});

router.get('/bar/:data', (req, res) => {
  res.send(`Data = ${req.params.data}`);
});

module.exports = router;
