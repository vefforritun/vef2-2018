const fs = require('fs');
const MarkdownIt = require('markdown-it');
const util = require('util');

const encoding = 'utf8';
const input = 'test.md';
const output = 'test.html';

function read(file, cb) {
  fs.readFile(file, (err, data) => {
    cb(data.toString(encoding));
  });
}

function write(filepath, content, cb) {
  const md = new MarkdownIt();
  const result = md.render(content);

  fs.writeFile(filepath, result, { encoding }, (err, data) => {
    cb();
  });
}

read(input, (data) => {
  write(output, data, () => {
    console.log(`Done writing ${output}`);
  });
});
