const express = require('express');
const app = express();

const data = [
  { id: 1, title: 'Foo' },
  { id: 2, title: 'Bar' }
];

app.get('/', (req, res) => {
  res.json(data);
});

app.get('/:id', (req, res) => {
  const { id } = req.params;

  const item = data.find(i => i.id === parseInt(id, 10));

  if (item) {
    return res.json(item);
  }

  res.status(404).json({ error: 'Not found' });
});

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});

/*
> curl http://localhost:3000
[{"id":1,"title":"Foo"},{"id":2,"title":"Bar"}]

> curl http://localhost:3000/2
{"id":2,"title":"Bar"}
*/
