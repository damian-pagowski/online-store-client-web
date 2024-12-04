class LoginPage {
    visit() {
        cy.visit('/login');
    }

    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#login-btn').click();
    }

    getLoginError() {
        return cy.get('#login-error');
    }
}

export default new LoginPage();