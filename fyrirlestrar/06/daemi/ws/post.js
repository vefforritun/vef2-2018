const express = require('express');
const app = express();
app.use(express.json());

function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid json' });
  }

  return res.status(500).json({ error: 'Internal server error' });
}

const data = [{ id: 1, title: 'Foo' }];

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/', (req, res) => {
  const { title = '' } = req.body;

  if (title.length === 0) {
    return res.status(400).json({
      field: 'title',
      error: 'Title must be a non-empty string',
    });
  }

  const nextId = data.map(i => i.id).reduce((a, b) => a > b ? a : b + 1, 1);

  const item = { id: nextId, title }
  data.push(item);

  return res.status(201).json(item);
});

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});

/*
> curl -vH "Content-Type: application/json" -d '{x}' http://localhost:3000/
{"error":"Invalid json"}

> curl -vH "Content-Type: application/json" -d '{"title":""}' http://localhost:3000/
{"field":"title","error":"Title must be a non-empty string"}

> curl -vH "Content-Type: application/json" -d '{"title":"bar"}' http://localhost:3000/
{"id":2,"title":"foo"}
*/
