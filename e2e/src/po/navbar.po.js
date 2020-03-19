class Navbar {
  loginLink = element(by.id("login-link"));
  logoutLink = element(by.id("logout-link"));
  loggedUserName = element(by.id("logged-user"));
  cartLink = element(by.id("cart-link"));
  cartSize = element(by.id("cart-size"));
  homeLink = element(by.id("home-link"));

  searchInput = element(by.id("product-search-input"));
  searchButton = element(by.id("product-search-button"));

  setSearchInput = text => this.searchInput.sendKeys(text);
  submitSearch = () => this.searchButton.click();
  clickLogin = () => this.loginLink.click();
  clickLogout = () => this.logoutLink.click();

  clickCart = () => this.cartLink.click();
  clickHome = () => this.homeLink.click();
  getCartSize = () => this.cartSize.getAttribute("value");
  getLoggedUserName = () => this.loggedUserName.getText();
}

module.exports = Navbar;
