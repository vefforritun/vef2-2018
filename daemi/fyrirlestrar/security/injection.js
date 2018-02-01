const { Client } = require('pg');
const express = require('express');
const xss = require('xss');  // eslint-disable-line
const connectionString = 'postgres://:@localhost/test';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Skrá nemenda</h2>
    <form method="post" action="/post">
      <input type="text" name="data">
      <button>Senda</button>
    </form>
    <p><a href="/students ">Skoða nemendur</a></p>
  `);
});

async function insert(data) {
  const client = new Client({ connectionString });
  await client.connect();

  // EKKI HERMA! SQL INJECTION!!
  await client.query(`INSERT INTO students(name) VALUES('${data}')`);

  await client.end();
}

async function select() {
  const client = new Client({ connectionString });
  await client.connect();

  const res = await client.query('SELECT * FROM students WHERE graduated = false');

  await client.end();
  return res.rows;
}

async function selectById(id) {
  const client = new Client({ connectionString });
  await client.connect();

  // EKKI HERMA! SQL INJECTION!!
  const res = await client.query(`SELECT * FROM students WHERE graduated = false AND id = ${id}`);

  await client.end();
  return res.rows;
}

app.get('/student', async (req, res) => {
  const { id } = req.query;

  const student = await selectById(id);

  if (student.length === 0) {
    res.send('Engin nemandi');
  }

  const [{
    name,
    date,
  }] = student;

  res.send(`
  <h2>Nemandi</h2>
  <p>Nafn: ${name}</p>
  <p>Skráning: ${date}</p>
`);
});

app.get('/students', async (req, res) => {
  const students = await select();

  const output = students
    .map(s => `<a href="/student?id=${s.id}">${s.name}</a>`)
    .join('</li><li>');

  res.send(`
  <ul>
    <li>${output}</li>
  </ul>`);
});

app.post('/post', async (req, res) => {
  const { data } = req.body;

  // XSS möguleiki! nota xss() utanum data til að verjast
  await insert(data);

  res.send(`
    <p>Gögn vistuð!</p>
    <p><a href="/students ">Skoða nemendur</a></p>
  `);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
