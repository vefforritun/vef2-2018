const express = require('express');
const app = express();

const data = [
  { id: 1, title: 'Foo' },
  { id: 2, title: 'Bar' },
  { id: 3, title: 'Jón' },
  { id: 4, title: 'Gunna' },
];

app.get('/', (req, res) => {
  res.json(data);
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;

  const item = data.find(i => i.id === parseInt(id, 10));

  if (item) {
    data.splice(data.indexOf(item), 1);
    return res.status(204).end();
  }

  res.status(404).json({ error: 'Not found' });
});

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});

/*
> curl -X DELETE http://localhost:3000/5
{"error":"Not found"}

>  curl -X DELETE http://localhost:3000/2

*/
