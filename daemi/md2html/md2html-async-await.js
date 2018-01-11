const fs = require('fs');
const MarkdownIt = require('markdown-it');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const encoding = 'utf8';
const input = 'test.md';
const output = 'test.html';

async function read(file) {
  const data = await readFileAsync(file);

  return data.toString(encoding);
}

async function write(filepath, content) {
  const md = new MarkdownIt();
  const result = md.render(content);

  return writeFileAsync(filepath, result, { encoding });
}

async function main() {
  const data = await read(input);
  await write(output, data);
  console.log(`Done writing ${output}`)
}

main();
