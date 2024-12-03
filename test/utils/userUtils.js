const crypto = require('crypto');

const generateUser = () => {
    const username = crypto.randomUUID().split('-')[0];
    const email =  `${username}@example.com`;
    const validPassword = 'Password123!';
    return { email, validPassword, username }
};


module.exports = { generateUser };