// only use as an example

const http = require('http');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);

const hostname = '127.0.0.1';
const port = 3000;

function contentType(ext) {
  switch (ext) {
    case '.css':
      return 'text/css';
    case '.html':
      return 'text/html';
    default:
      return 'text/plain';
  }
}

function template(title, body) {
  return `<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <nav>
      <ul>
        <li><a href="/">Forsíða</a></li>
        <li><a href="about.html">Um</a></li>
        <li><a href="/clock">Klukka</a></li>
      </ul>
    </nav>
    <main>
      ${body}
    </main>
  </body>
</html>`;
}

const server = http.createServer()
server.on('request', async (request, response) => {
  const { url } = request;

  const extension = path.extname(url).toLowerCase();

  try {
    const file = path.basename(url);
    const content = await readFileAsync(file);
    response.writeHead(200, { 'Content-Type': contentType(extension) });

    // send response and return –– do not run anything below
    return response.end(content);
  } catch (e) {
    console.log(e);
    // unable to read file ¯\_(ツ)_/¯
  }

  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  if (url === '/') {
    response.write(template('Forsíða', '<p>Halló heimur</p>'));
  } else if (url === '/clock') {
    response.write(template('Klukka', `<p>Klukkan er ${new Date().toUTCString()}</p>`));
  } else {
    response.write(template('404 fannst ekki', `<p>${url} fannst ekki</p>`));
    response.statusCode = 404;
  }

  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
