const fs = require('fs');
const MarkdownIt = require('markdown-it');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const encoding = 'utf8';
const input = 'test.md';
const output = 'test.html';

function read(file) {
  return readFileAsync(file)
    .then(data => data.toString(encoding));
}

function write(filepath, content) {
  const md = new MarkdownIt();
  const result = md.render(content);

  return writeFileAsync(filepath, result, { encoding });
}

read(input)
  .then(data => write(output, data))
  .then(data => console.log(`Done writing ${output}`));
