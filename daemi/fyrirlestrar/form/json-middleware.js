// curl -H "Content-Type: application/json" -d '{"foo": "bar"}' http://localhost:3000/

const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  res.send(`POST gögn: ${JSON.stringify(req.body)}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
