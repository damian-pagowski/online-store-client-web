const crypto = require('crypto');

function generateNewUser() {
  const username = `user_${crypto.randomBytes(4).toString('hex')}`;
  const email = `${username}@example.com`;
  const password = 'secret';

  return { username, email, password };
}

module.exports = { generateNewUser };