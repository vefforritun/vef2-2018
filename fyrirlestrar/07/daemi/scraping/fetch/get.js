require('isomorphic-fetch');

async function get() {
  const response = await fetch('http://localhost:5000');
  console.log('GET response status', response.status);
  const text = await response.text();
  console.log('GET response text', text);
}

get().catch(err => console.error(err));
