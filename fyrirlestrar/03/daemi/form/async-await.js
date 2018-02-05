const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('<a href="/error">Villa</a>');
});

async function errorMiddleware(req, res) {
  console.log(foo);
}

async function errorHandledMiddleware(req, res, next) {
  async function x(req, res) {
    console.log(foo);
  }

  return x(req, res).catch(next);
}

function catchErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  }
}

app.get('/error', errorMiddleware);
app.get('/error-handled', errorHandledMiddleware);
app.get('/error2', catchErrors(errorMiddleware));

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('Villa!');
}

app.use(errorHandler);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
