class Navbar {
  loginLink = element(by.id("login-link"));
  logoutLink = element(by.id("logout-link"));
  cartLink = element(by.id("cart-link"));
  cartSize = element(by.id("cart-size"));
  homeLink = element(by.id("home-link"));

  clickLogin = () => this.loginLink.click();
  clickCart = () => this.cartLink.click();
  clickHome = () => this.homeLink.click();
  getCartSize = () => this.cartSize.getAttribute("value");
}

module.exports = Navbar;
