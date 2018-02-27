const express = require('express');
const app = express();
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgres://:@localhost/mock';
const port = 3000;

async function select(offset = 0, limit = 10) {
  const client = new Client({
    connectionString,
  })
  await client.connect();
  try {
    const q = 'SELECT * FROM MOCK_DATA ORDER BY last_name OFFSET $1 LIMIT $2';
    const res = await client.query(q, [offset, limit]);

    return res.rows;
  } catch (e) {
    console.error('Error selecting', e);
  }

  await client.end();
}

app.get('/', async (req, res) => {
  let { offset = 0, limit = 10 } = req.query;
  offset = Number(offset);
  limit = Number(limit);

  const rows = await select(offset, limit);

  const result = {
    _links: {
      self: {
        href: `http://localhost:${port}/?offset=${offset}&limit=${limit}`
      }
    },
    items: rows
  };

  if (offset > 0) {
    result._links['prev'] = {
      href: `http://localhost:${port}/?offset=${offset-limit}&limit=${limit}`
    }
  }

  if (rows.length <= limit) {
    result._links['next'] = {
      href: `http://localhost:${port}/?offset=${Number(offset)+limit}&limit=${limit}`
    }
  }

  res.json(result);
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
