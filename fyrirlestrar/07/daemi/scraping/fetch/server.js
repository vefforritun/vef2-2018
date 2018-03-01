const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/error', (req, res) => {
  res.status(400).send('400 villa');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/headers', (req, res) => {
  const header = req.header('x-oli');

  if (header) {
    res.send(`Þú sendir header: ${header}`);
  } else {
    res.send('Engin header');
  }
});

app.post('/post', (req, res) => {
  const { foo, bar } = req.body;
  console.log(req.body)

  res.send(`foo = ${foo}, bar = ${bar}`);
});

const host = 'localhost';
const port = 5000;
app.listen(port, () => {
  console.info(`Server running at http://${host}:${port}/`);
});
