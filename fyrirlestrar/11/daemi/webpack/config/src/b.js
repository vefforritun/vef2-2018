const calculate = require('./calculate');
import range from 'lodash/range';

// getum blandað saman, en ef við notum default export verðum við að
// sækja það úr `default` ef við notum require
const hello = require('./module').default;

hello('b');
console.log(calculate(10, 10));
console.log(range(1, 10));
