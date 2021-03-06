class Register {
  emailInput = element(by.id("email"));
  passwordInput = element(by.id("password"));
  registerButton = element(by.id("register-btn"));
  loginLink = element(by.id("link-to-login"));

  setEmail = email => this.emailInput.sendKeys(email);
  setPassword = password => this.passwordInput.sendKeys(password);

  getEmail = () => this.emailInput.getAttribute("value");
  getPassword = () => this.passwordInput.getAttribute("value");

  clickRegister = () => this.registerButton.click();
  clickLogin = () => this.loginLink.click();
}

module.exports = Register;
