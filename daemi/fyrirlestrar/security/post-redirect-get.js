const express = require('express');

const app = express();

app.set('x-powered-by', false);

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/post">
      <input type="text" name="data">
      <button>Senda</button>
    </form>
  `);
});

app.post('/post', (req, res) => {
  // res.send('Gögn móttekin!');
  res.redirect('/thanks');
});

app.get('/thanks', (req, res) => {
  res.send('Gögn móttekin!');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
