const { Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';

const client = new Client({
  connectionString,
})
client.connect();

client.query('SELECT * FROM texts', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.rows);
  client.end();
});
