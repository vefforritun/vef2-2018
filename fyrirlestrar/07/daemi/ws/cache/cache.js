const express = require('express');
const app = express();

app.use(express.static('public', {
  maxAge: '1d',
  // etag: false,
}))

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
