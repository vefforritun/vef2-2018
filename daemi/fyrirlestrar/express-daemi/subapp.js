const express = require('express');
const app = express();
const subapp = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

subapp.get('/', (req, res) => {
  res.send('hello from subapp');
});

app.use('/sub', subapp);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
