export const generateUser = () => {
    const username = `user${Date.now()}`;
    return {
        username,
        email: `${username}@example.com`,
        password: 'secret',
    };
};