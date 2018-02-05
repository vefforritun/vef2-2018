const express = require('express');
const path = require('path');

const app = express();

app.locals.foo = function(bar) {
  return `foo ${bar}!`;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Forsíða' });
});

app.get('/about', (req, res) => {
  const staff = ['Jón', 'Gunna'];
  const extra = '<p><strong>Þessi síða er í vinnslu</strong></p>';
  res.render('about', { title: 'Um', staff, extra });
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
