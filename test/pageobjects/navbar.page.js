class NavbarPage {
    get loginLink() { return $('#login-link'); }
    get logoutLink() { return $('#logout-link'); }
    get loggedUserName() { return $('#logged-user'); }
    get cartLink() { return $('#cart-link'); }
    get cartSize() { return $('#cart-size'); }
    get homeLink() { return $('#home-link'); }
    get searchInput() { return $('#product-search-input'); }
    get searchButton() { return $('#product-search-button'); }

    setSearchInput(text) {
        this.searchInput.setValue(text);
    }

    getCartSize() {
        return this.cartSize.getText();
    }

    getLoggedUserName() {
        return this.loggedUserName.getText();
    }
}

module.exports = new NavbarPage();