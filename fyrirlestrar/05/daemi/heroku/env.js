require('dotenv').config();

const express = require('express');
const app = express();

const {
  HOST: hostname = '127.0.0.1',
  PORT: port = 3000,
} = process.env;

console.info(process.env);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
