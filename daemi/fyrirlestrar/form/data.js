const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

function template(name = '', email = '', ssn = '') {
  return `
  <form method="post" action="/post">
    <label>Nafn: <input required type="text" name="name" value="${name}"></label>
    <label>Netfang: <input required type="email" name="email" value="${email}"></label>
    <label>
      Kennitala:
      <input
        required
        type="text"
        pattern="^[0-9]{6}-?[0-9]{4}$"
        name="ssn"
        value="${ssn}"
      >
    </label>
    <button>Senda</button>
  </form>
  `;
}

app.get('/', (req, res) => {
  res.send(template());
});

app.post('/post', (req, res) => {
  const {
    name = '',
    email = '',
    ssn = '',
  } = req.body;

  const errors = [];

  // Þetta er bara validation! Ekki sanitization
  if (name === '') {
    errors.push('Nafn má ekki vera tómt');
  }

  if (email === '' || email.indexOf('@') < 0) {
    errors.push('Netfang má ekki vera tómt og verður að innihalda @');
  }

  if (ssn === '' || /^[0-9]{6}-?[0-9]{4}$/.test(ssn)) {
    errors.push('Kennitala má ekki vera tóm og verður að vera tíu tölustafir');
  }

  if (errors.length > 0) {
    return res.send(`${template(name, email, ssn)}
    <p>Villur:</p>
    <ul>
      <li>${errors.join('</li><li>')}</li>
    </ul>`);
  }

  return res.send('<p>Skráning móttekin</p>');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
