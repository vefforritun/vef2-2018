const fs = require('fs');

// lesum skrá gegnum straum
const readStream = fs.createReadStream('data.txt');

const chunks = [];

readStream.on('data', chunk => {
  console.log('got chunk!');
  chunks.push(chunk);
});

readStream.on('close', () => {
  console.log('file read');
});
