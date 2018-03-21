const express = require('express');
const cookieParser = require('cookie-parser');

// ATH þetta dæmi virkar aðeins ef opnað á http://127.0.0.0.1:3000 ekki á
// http://localhost:3000 því cookie er aðeins sett ef lén hefur amk einn punkt
const hostname = '127.0.0.1';
const port = 3000;

const cookieSecret = 'h4p8ysö8s9fyspodijcpiy8t';

const app = express();
app.use(cookieParser(cookieSecret));

app.get('/', (req, res) => {
  const { cookies } = req;

  res.cookie('session', 'hello world!', { domain: hostname, httpOnly: false });

  res.cookie('data', { foo: 'bar' }, { domain: hostname, httpOnly: true });

  res.cookie('signed', 'top secret', { domain: hostname, signed: true });

  res.cookie('2min', 'expiring in two minutes', { domain: hostname, expires: new Date(Date.now() + 120000) });

  res.cookie('10years', 'expiring in ten years', { domain: hostname, expires: new Date(Date.now() + 3.154e+11) });

  res.send(`<p>Cookies: ${JSON.stringify(cookies)}</p>`);
});

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
