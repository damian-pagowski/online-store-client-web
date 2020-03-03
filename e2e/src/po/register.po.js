class Register {
  emailInput = element(by.id("email"));
  passwordInput = element(by.id("password"));
  registerButton = element(by.css("button"));
  loginLink = element(by.linkText("login"));

  setEmail = email => this.emailInput.sendKeys(email);
  setPassword = password => this.passwordInput.sendKeys(password);

  getEmail = () => this.emailInput.getAttribute("value");
  getPassword = () => this.passwordInput.getAttribute("value");

  clickRegister = () => this.registerButton.click();
  clickLogin = () => this.loginLink.click();
}

module.exports = Register;
