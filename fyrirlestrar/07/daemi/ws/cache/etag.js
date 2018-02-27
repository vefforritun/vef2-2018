const express = require('express');
const app = express();

// *allar* request með If-None-Match haus munu fá upprunalegu gögn þar sem við
// skilum alltaf sama etag
app.set('etag', (body, encoding) => {
  return '123';
});

app.get('/', (req, res) => {
  res.json({ date: new Date() });
});

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
