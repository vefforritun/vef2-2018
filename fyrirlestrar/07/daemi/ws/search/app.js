const express = require('express');
const app = express();
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgres://:@localhost/mock';
const port = 3000;

async function select(search = '') {
  const client = new Client({
    connectionString,
  })
  await client.connect();
  try {
    const q = `
      SELECT * FROM MOCK_DATA
      WHERE
        to_tsvector('english', catch_phrase) @@ to_tsquery('english', $1)
        OR
        to_tsvector('english', first_name) @@ to_tsquery('english', $1)
    `;
    const res = await client.query(q, [search]);

    return res.rows;
  } catch (e) {
    console.error('Error selecting', e);
  }

  await client.end();
}

app.get('/', async (req, res) => {
  const { search } = req.query;

  const rows = await select(search);

  res.json(rows);
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
