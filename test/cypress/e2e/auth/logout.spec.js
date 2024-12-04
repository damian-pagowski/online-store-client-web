import loginPage from '../../pageObjects/loginPage.js';
import navbarPage from '../../pageObjects/navbarPage.js';
import users from '../../fixtures/users.json';

describe('Logout Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        const { username, password } = users.validUser;
        loginPage.login(username, password);
    });

    it('should log out the user and redirect to the login page', () => {
        navbarPage.logout();
        navbarPage.getLogoutLink().should('not.exist');
        navbarPage.getLoginLink().should('be.visible');
    });
});