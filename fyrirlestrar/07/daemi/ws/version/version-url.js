const express = require('express');
const app = express();

const apiv1 = require('./api-v1');
const apiv2 = require('./api-v2');

app.use('/v1', apiv1);
app.use('/v2', apiv2);

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
