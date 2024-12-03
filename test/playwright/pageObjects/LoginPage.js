class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-btn');
        this.loggedUserName = page.locator('#logged-user');
        this.loginError = page.locator('#login-error');
    }

    async open() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getLoggedUserName() {
        return await this.loggedUserName.textContent();
    }
}

module.exports = LoginPage;