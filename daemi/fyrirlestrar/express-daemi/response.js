const express = require('express');
const app = express();
const subapp = express();

app.get('/', (req, res) => {
  console.log('Headers sent?', res.headersSent);

  // res.write('foo');

  // getum ennþá átt við headers
  if (!res.headersSent) {
    res.set('Foo', 'bar');
    res.send('hello world');
  } else {
    res.end();
  }
});

app.get('/json', (req, res) => {
  res.json({
    foo: 'bar',
    baz: 123,
  });
});

app.get('/404', (req, res) => {
  res.status(404).send('404 Not Found');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
