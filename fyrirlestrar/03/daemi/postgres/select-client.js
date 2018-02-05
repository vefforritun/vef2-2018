const { Client } = require('pg')

const client = new Client({
  user: '',
  host: 'localhost',
  database: 'examples',
  password: '',
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
