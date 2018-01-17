const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer()
server.on('request', (request, response) => {
  const { method, url, headers } = request;

  console.log('method:', method);
  console.log('url:', url);
  console.log('headers:', headers);

  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body:', body);
  });

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.write(`
<form method="post">
  <input type="text" name="foo">
  <button>Senda</button>
</form>
  `);
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
