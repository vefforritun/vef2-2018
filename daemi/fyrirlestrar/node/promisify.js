const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

readFileAsync('data.txt')
  .then(data => {
    console.log(data.toString('utf8'));
  })
  .catch(err => {
    console.error(err);
  });
