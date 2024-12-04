class RegisterPage {
    visit() {
        cy.visit('/register');
    }

    setEmail(email) {
        cy.get('#email').type(email); 
    }

    setPassword(password) {
        cy.get('#password').type(password); 
    }

    clickRegister() {
        cy.get('#register-btn').click();
    }

    assertLoginRedirect() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
        cy.get('#logged-user').should('exist');
    }
}

export default new RegisterPage();