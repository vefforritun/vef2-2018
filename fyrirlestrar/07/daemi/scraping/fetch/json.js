require('isomorphic-fetch');

async function get() {
  const response = await fetch('http://localhost:5000/json');
  console.log('GET response status', response.status);
  const text = await response.json();
  console.log('GET response json', text);
}

get().catch(err => console.error(err));
