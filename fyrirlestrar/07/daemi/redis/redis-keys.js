const redis = require('redis');
const util = require('util');

const redisOptions = {
  url: 'redis://127.0.0.1:6379/0'
}

const client = redis.createClient(redisOptions);

const asyncGet = util.promisify(client.get).bind(client);
const asyncMset = util.promisify(client.mset).bind(client);
const asyncKeys = util.promisify(client.keys).bind(client);
const asyncDel = util.promisify(client.del).bind(client);

async function call() {
  // multi set á nokkrum lyklum og flettum upp eftir pattern
  await asyncMset('foo:1', '1', 'foo:2', '2', 'foo:3', 3);
  const keys = await asyncKeys('foo:*');
  console.log(keys);

  // eyðum síðan öllum með del
  await asyncDel.apply(client, keys);
  const keys2 = await asyncKeys('foo:*');
  console.log(keys2);

  client.quit();
}

call().catch(err => { console.error(err); });
