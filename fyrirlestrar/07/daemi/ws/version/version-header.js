const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.format({
    'application/vnd.example.foo.v1+json': () => {
      return res.status(200).json({ version: 1 });
    },
    'application/vnd.example.foo.v2+json': () => {
      return res.status(200).json({ version: 2 });
    },
    'default': function() {
      return res.status(415).json({ error: 'Unsupported Media Type' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
