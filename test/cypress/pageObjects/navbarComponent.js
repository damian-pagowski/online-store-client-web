class NavbarComponent {
  
    getLoginLink() {
        return cy.get('#login-link');
    }

    getLogoutLink() {
        return cy.get('#logout-link');
    }

    getLoggedUserName() {
        return cy.get('#logged-user');
    }

    getSearchInput() {
        return cy.get('#product-search-input');
    }

    getSearchButton() {
        return cy.get('#product-search-button');
    }

    async performSearch(searchTerm) {
        const queryPattern = `/products?search=${searchTerm}`;
        cy.intercept('GET', queryPattern).as('searchResults');
        this.getSearchInput().type(searchTerm);
        this.getSearchButton().click(); 
        cy.wait('@searchResults');
    }

    logout() {
        this.getLogoutLink().should('be.visible').click();
    }

    isLogoutLinkVisible() {
        return this.getLogoutLink().should('be.visible');
    }

    isLoginLinkVisible() {
        return this.getLoginLink().should('be.visible');
    }
}

export default new NavbarComponent();