const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'');

  res.send(`
  <p>Halló heimur</p>
  <img src="https://www.hi.is/sites/default/files/drupal/pallas_vert.svg">
`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
