const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/error', (req, res) => {
  throw new Error('Villa!');
});

function notFoundHandler(req, res, next) {
  res.status(404).send('404 Not Found');
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('Villa!');
}

app.use(notFoundHandler);
app.use(errorHandler);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
