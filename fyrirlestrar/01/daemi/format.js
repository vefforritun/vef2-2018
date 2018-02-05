
const util = require('util');

const string = 'halló heimur';
const num = 123.456;
const obj = { foo: 'bar', baz: string };

const formatted = util.format('%s %i %f %j %o', string, num, num, obj, obj);
console.log(formatted);
