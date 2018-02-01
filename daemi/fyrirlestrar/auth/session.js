const express = require('express');
const session = require('express-session');

const sessionSecret = 'leyndarmál';

const app = express();
app.use(session({
  name: 'counter.sid',
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  const { originalUrl } = req;
  let { views } = req.session;

  if (!views) {
    req.session.views = {};
    views = {};
  }

  if (!views[originalUrl]) {
    views[originalUrl] = 0;
  }

  views[originalUrl] += 1;

  next();
});

app.get('/', (req, res) => {
  const url = '/';
  const count = req.session.views[url] || 0;
  res.send(`Þú hefur opnað ${url} ${count} sinnum`);
});

app.get('/foo', (req, res) => {
  const url = '/foo';
  const count = req.session.views[url] || 0;
  res.send(`Þú hefur opnað ${url} ${count} sinnum`);
});

app.get('/bar', (req, res) => {
  const url = '/bar';
  const count = req.session.views[url] || 0;
  res.send(`Þú hefur opnað ${url} ${count} sinnum`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
