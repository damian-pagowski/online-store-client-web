class NavbarPage {
    constructor(page) {
      this.page = page;
      this.logoutLink = page.locator('#logout-link');
      this.loginLink = page.locator('#login-link');
      this.loggedUserName = page.locator('#logged-user');
      this.searchInput = page.locator('#product-search-input');
      this.searchButton = page.locator('#product-search-button');
    }
  
    async performSearch(searchTerm) {
      await this.searchInput.fill(searchTerm);
      await this.searchButton.click();
    }
  
    async logout() {
      if (await this.logoutLink.isVisible()) {
        await this.logoutLink.click();
      }
    }
  
    async isLogoutLinkVisible() {
      return this.logoutLink.isVisible();
    }
  
    async isLoginLinkVisible() {
      return this.loginLink.isVisible();
    }
  }
  
  module.exports = NavbarPage;