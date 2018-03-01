require('isomorphic-fetch');

async function post() {
  const options = {
    headers: { 'X-oli': 'Hææ' },
    method: 'GET',
  };

  const response = await fetch('http://localhost:5000/headers', options);
  const text = await response.text();
  console.log('Response', text);
}

post().catch(err => console.error(err));
