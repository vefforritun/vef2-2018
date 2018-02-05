import foo from './export';
import { bar } from './export';
import { bar as baz} from './export';

console.log(foo);
console.log(bar);
console.log(baz);
