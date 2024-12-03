const loginSteps = require('../../steps/login.steps');
const navbarSteps = require('../../steps/navbar.steps');
const { validUser } = require('../../fixtures/users.json');

beforeEach(async () => {
    await loginSteps.openLoginPage();
    await loginSteps.loginWithCredentials(validUser.username, validUser.password);
});

it('should log out the user and redirect to the login page', async () => {
    await navbarSteps.logout();
    const isLogoutVisible = await navbarSteps.isLogoutLinkVisible();
    expect(isLogoutVisible).toBe(false);
    const isLoginVisible = await navbarSteps.isLoginLinkVisible();
    expect(isLoginVisible).toBe(true);
});