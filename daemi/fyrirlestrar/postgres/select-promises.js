const { Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';

const client = new Client({
  connectionString,
})
client.connect();

client.query('SELECT * FROM texts')
  .then(res => {
    console.log(res.rows);
    client.end();
  })
  .catch(err => {
    console.error(err);
    client.end();
  });
