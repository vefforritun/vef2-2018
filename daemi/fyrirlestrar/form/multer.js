const express = require('express');
const multer = require('multer');
const upload = multer();

const app = express();

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post" enctype="multipart/form-data">
  <input type="file" name="data">
  <input type="file" name="data">
  <button>Senda</button>
</form>
  `);
});

app.post('/post', upload.array('data'), (req, res, next) => {
  console.log(JSON.stringify(req.files));

  const [{
    originalname: filename = '',
    mimetype = '',
    buffer = null,
  }] = req.files;

  res.send(`Innihald ${filename} af gerð ${mimetype} er ${buffer.toString('utf8')}`)
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
