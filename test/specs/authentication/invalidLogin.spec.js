const loginSteps = require('../../steps/login.steps');
const users = require('../../fixtures/users.json');

beforeEach(async () => {
    await  loginSteps.openLoginPage();
  });

it('should not login with invalid credentials', async () => {
    const { password, username } = users.invalidUser;
    await loginSteps.loginWithCredentials(username, password);
    await loginSteps.verifyLoginErrorMessage();
});

