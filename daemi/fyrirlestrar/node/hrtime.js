const time = process.hrtime();
setTimeout(() => {
  const diff = process.hrtime(time);
  const elapsed = diff[0] * 1e9 + diff[1];

  console.log(`Took ${elapsed} nanoseconds`);
  console.log(`Took ${elapsed/1e6} milliseconds`);
  console.log(`Took ${elapsed/1e9} seconds`);
}, 1000);
