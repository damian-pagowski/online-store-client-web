const loginSteps = require('../../steps/login.steps');
const users = require('../../fixtures/users.json');

beforeEach(() => {
    loginSteps.openLoginPage();
});

it('should login successfully with valid credentials', async () => {
    const { password, username } = users.validUser;
    await loginSteps.loginWithCredentials(username, password);
    await loginSteps.verifyLoginSuccess(username);
});

