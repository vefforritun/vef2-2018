const express = require('express');
const xss = require('xss');  // eslint-disable-line

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<h2>GET</h2>
<form method="get" action="/get">
  <input type="text" name="data">
  <button>Senda</button>
</form>
<h2>POST</h2>
<form method="post" action="/post">
  <input type="text" name="data">
  <button>Senda</button>
</form>
  `);
});

app.get('/get', (req, res) => {

  const { data } = req.query;

  // XSS möguleiki! nota xss() utanum data til að verjast
  res.send(`Þú sendir: ${data}`);
});

app.post('/post', (req, res) => {
  const { data } = req.body;

  // XSS möguleiki! nota xss() utanum data til að verjast
  res.send(`Þú sendir: ${data}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
