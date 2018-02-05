const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <a href="/download">Download</a>
  `);
});

app.get('/download', (req, res) => {
  const filename = 'test.txt';
  res.set('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(`hello world`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
