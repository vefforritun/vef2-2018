const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

async function main() {
  let data = '';
  try {
    data = await readFileAsync('data.txt');
  } catch (e) {
    console.error('error', e);
  }
  console.log(data.toString('utf8'));
}

main().catch(err => { console.error(err); });
