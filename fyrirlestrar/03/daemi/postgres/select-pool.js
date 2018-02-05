const { Pool, Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';

const pool = new Pool({
  connectionString,
})

pool.query('SELECT * FROM texts', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.rows);
  pool.end();
});
