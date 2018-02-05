const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    method: ${req.method}<br>
    url: ${req.url}<br>
    originalUrl: ${req.originalUrl}<br>
    ip: ${req.ip}<br>
    protocol: ${req.protocol}<br>
    hostname: ${req.hostname}<br>
    query: ${JSON.stringify(req.query)}<br>
    <br>
    User-agent: ${req.get('User-agent')}<br>
    Host: ${req.get('Host')}<br>
    <br>
    accepts json? ${req.accepts('json')}<br>
    accepts foo? ${req.accepts('foo')}<br>
  `);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
