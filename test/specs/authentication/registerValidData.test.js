const registerSteps = require('../../steps/register.steps');
const loginSteps = require('../../steps/login.steps');

const { generateUser } = require('../../utils/userUtils');

describe('User Registration - Valid Data', () => {
    beforeEach(async () => {
        await browser.url('/register');
    });

    it('should successfully register a new user and redirect to the login page', async () => {
        const { email, validPassword, username } = generateUser();
        // Perform registration
        await registerSteps.performRegistration(email, validPassword);
        // Verify user is logged in after registration
        await loginSteps.verifyLoginSuccess(username);

    });
});