//  curl "http://127.0.0.1:3000/" -v  -H "Accept-Encoding: gzip"

const express = require('express');
const compression = require('compression');

const app = express();

// threshold, minimum content size before compressing
app.use(compression({ threshold: 0 }));

app.get('/', (req, res) => {

  res.send('<p>Halló heimur</p>');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
