const express = require('express');
const router = require('./router');
const app = express();

app.use('/foo', router);

app.get('/', (req, res) => {
  res.redirect('/foo');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
