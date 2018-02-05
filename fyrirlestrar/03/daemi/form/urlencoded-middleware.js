const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post" enctype="application/x-www-form-urlencoded">
  <input type="text" name="data">
  <button>Senda</button>
</form>
  `);
});

app.post('/post', (req, res) => {
  res.send(`POST gögn: ${JSON.stringify(req.body)}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
