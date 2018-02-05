const { Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';

const client = new Client({
  connectionString,
})
client.connect();

const query = 'INSERT INTO texts(name, text) VALUES($1, $2) RETURNING *';
const values = ['Foo', 'Foo bar'];

async function insert() {
  try {
    const res = await client.query(query, values);
    console.log(res.rows);
  } catch(err) {
    console.log(err);
  }

  await client.end();
}

insert().catch(e => console.error(e));
