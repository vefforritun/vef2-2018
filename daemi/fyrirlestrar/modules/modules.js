const a = require('./module-a');
const file = require('./file');
const b = require('./module-b');
const c = require('./module-c');
const json = require('./json.json');

console.log(a);
console.log(a.baz(1, 2));

console.log(file());

console.log(b);

console.log(c);

console.log(json);
