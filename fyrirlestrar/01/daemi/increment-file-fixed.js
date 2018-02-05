const fs = require('fs');
let num;

function addOne(callback) {
  fs.readFile('number.txt', 'utf8', (err, fileContents) => {
    num = parseInt(fileContents, 10);
    num = num + 1;
    callback(num);
  });
}

addOne(num => {
  console.log(num)
});
