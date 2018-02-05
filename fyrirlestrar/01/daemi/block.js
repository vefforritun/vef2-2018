setTimeout(() => {
  console.log('Finished@' + new Date().toTimeString());
}, 1000);

const s = new Date();
console.log('Start@' + s.toTimeString());

let i = 0;
const iterateForInMs = 10;
while(new Date().getTime() < s.getTime() + iterateForInMs) {
   i++;
}
console.log('Exit@' + new Date().toTimeString());
console.log(i + ' iterations.');
