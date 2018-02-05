const fs = require('fs');
let num;

function addOne() {
  // number.txt inniheldur "1"
  fs.readFile('number.txt', (err, fileContents) => {
    num = parseInt(fileContents, 10);
  });
}

addOne();

console.log(num);
