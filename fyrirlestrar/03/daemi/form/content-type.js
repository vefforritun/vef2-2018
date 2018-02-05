const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
<form method="get" action="/get">
  <input type="text" name="data">
  <button>Senda</button>
</form>
  `);
});

app.get('/text', (req, res) => {
  res.type('text');
  res.send('hello world');
});

app.get('/html', (req, res) => {
  res.set('Content-Type', 'text/html; charset=iso-8859-1');
  res.send(`<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>Halló &amp; &lt; &gt; heimur</title>
  </head>

  <body>
    <p>Halló heimur!</p>
  </body>
</html>
`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
