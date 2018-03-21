
// gervifall fyrir login
function login(username, password) {
  return new Promise((resolve, reject) => {
    const user = {
      name: 'Herra admin',
      username: 'admin',
    }

    if (username === 'error') {
      return reject('Villa');
    }

    if (username === 'admin' && password === '123') {
      return setTimeout(() => resolve({ loggedin: true, user }), 1000);
    }

    if (username !== 'admin') {
      return setTimeout(() => resolve({ loggedin: false, error: 'Notandi ekki til' }), 500);
    }

    return setTimeout(() => resolve({ loggedin: false, error: 'Vitlaust lykilorð' }), 500);
  });
}

export default {
  login
}
