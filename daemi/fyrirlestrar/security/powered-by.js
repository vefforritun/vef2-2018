const express = require('express');

const app = express();

app.set('x-powered-by', false);

app.get('/', (req, res) => {
  res.send('<p>Halló heimur</p>');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
