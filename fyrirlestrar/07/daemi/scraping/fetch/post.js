require('isomorphic-fetch');

async function post() {
  const data = { foo: 'hér er foo', bar: 'foobar' };

  const options = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const response = await fetch('http://localhost:5000/post', options);
  const text = await response.text();
  console.log(`Response = ${text}`);
}

post().catch(err => console.error(err));
