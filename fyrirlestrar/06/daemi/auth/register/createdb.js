require('dotenv').config();

const fs = require('fs');
const util = require('util');

const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

const readFileAsync = util.promisify(fs.readFile);

const schemaFile = './schema.sql';

async function query(q) {
  const client = new Client({ connectionString });

  await client.connect();

  try {
    const result = await client.query(q);

    const { rows } = result;
    return rows;
  } catch (err) {
    console.error('Error running query');
    throw err;
  } finally {
    await client.end();
  }
}

async function create() {
  const data = await readFileAsync(schemaFile);

  await query(data.toString('utf-8'));

  console.info('Schema created');
}

create().catch((err) => {
  console.error('Error creating schema', err);
});
