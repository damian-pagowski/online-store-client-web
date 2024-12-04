import registerPage from '../../pageObjects/registerPage.js';
import { generateUser } from '../../support/utils/userUtils.js';

describe('User Registration - Valid Data', () => {
    it('should successfully register a new user and redirect to the home page', () => {
        const { email, password, username } = generateUser();

        registerPage.visit();
        registerPage.setEmail(email);
        registerPage.setPassword(password);
        registerPage.clickRegister();

        registerPage.assertLoginRedirect();

        cy.get('#logged-user').should('contain', username);
    });
});