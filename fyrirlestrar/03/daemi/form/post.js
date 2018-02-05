const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post">
  <input type="text" name="data">
  <input type="text" name="foo">
  <button>Senda</button>
</form>
  `);
});

app.use((req, res, next) => {
  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', () => {
    req.body = chunks.join();
    next();
  });
});

app.post('/post', (req, res) => {
  res.send(`POST gögn: ${req.body}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
