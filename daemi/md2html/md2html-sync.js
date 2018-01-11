// Ekki nota þetta dæmi í neinu alvöru

const fs = require('fs');
const MarkdownIt = require('markdown-it');
const util = require('util');

const encoding = 'utf8';
const input = 'test.md';
const output = 'test.html';

function read(file) {
  const data = fs.readFileSync(file)

  return data.toString(encoding);
}

function write(filepath, content) {
  const md = new MarkdownIt();
  const result = md.render(content);

  fs.writeFileSync(filepath, result, { encoding });
}

const data = read(input);
write(output, data);
console.log(`Done writing ${output}`);
