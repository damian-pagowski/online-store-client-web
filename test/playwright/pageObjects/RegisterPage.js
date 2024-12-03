class RegisterPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('#email');
      this.passwordInput = page.locator('#password');
      this.registerButton = page.locator('#register-btn');
      this.loggedUserName = page.locator('#logged-user');
    }
  
    async open() {
      await this.page.goto('/register');
    }
  
    async register(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.registerButton.click();
    }
  
    async getLoggedInUserName() {
        return await this.loggedUserName.textContent();
    }
  }
  
  module.exports = RegisterPage;