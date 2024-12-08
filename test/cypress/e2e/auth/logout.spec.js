import loginPage from '../../pageObjects/loginPage.js';
import navbarComponent from '../../pageObjects/navbarComponent.js';
import users from '../../fixtures/users.json';

describe('Logout Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        const { username, password } = users.validUser;
        loginPage.login(username, password);
    });

    it('should log out the user and redirect to the login page', () => {
        navbarComponent.logout();
        navbarComponent.getLogoutLink().should('not.exist');
        navbarComponent.getLoginLink().should('be.visible');
    });
});