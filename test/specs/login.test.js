const loginSteps = require('../steps/login.steps');
const users = require('../fixtures/users.json');

describe('Login Feature', () => {

    beforeEach(async () => {
        await loginSteps.openLoginPage();
    });

    it('should login successfully with valid credentials', async () => {
        const { email, password, username } = users.validUser;
        await loginSteps.loginWithCredentials(email, password);
        await loginSteps.verifyLoginSuccess(username);
    });

    // afterEach(() => {
    //     if (NavbarPage.isUserLoggedIn()) {
    //         loginSteps.logout();
    //     }
    // });
});