import loginPage from '../../pageObjects/loginPage.js';
import navbarComponent from '../../pageObjects/navbarComponent.js';
import users from '../../fixtures/users.json';

describe('Login Tests', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('should login successfully with valid credentials', () => {
        const { username, password } = users.validUser;
        loginPage.login(username, password);
        navbarComponent.getLoggedUserName().should('contain.text', username);
    });

    it('should display an error message for invalid credentials', () => {
        const { username, password } = users.invalidUser;
        loginPage.login(username, password);
        loginPage.getLoginError().should('be.visible').and('contain.text', 'Invalid password. Please try again.');
    });
});

