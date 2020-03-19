class Login {
  emailInput = element(by.id("email"));
  passwordInput = element(by.id("password"));
  loginButton = element(by.id("login-btn"));
  registerLink = element(by.id("link-to-register"));
  loginLogo = element(by.id("logo-login"));

  setEmail = email => this.emailInput.sendKeys(email);
  setPassword = password => this.passwordInput.sendKeys(password);

  getEmail = () => this.emailInput.getAttribute("value");
  getPassword = () => this.passwordInput.getAttribute("value");

  clickLogin = () => this.loginButton.click();
  clickRegister = () => this.registerLink.click();
}

module.exports = Login;
