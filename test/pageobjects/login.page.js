const { $ } = require('@wdio/globals')

class LoginPage {
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-btn'); }
    get registerLink() { return $('#link-to-register'); }
    get loginLogo() { return $('#logo-login'); }
    get loginError() { return $('#login-error'); }

    async login (username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    setEmail(email) {
        this.emailInput.setValue(email);
    }

    setPassword(password) {
        this.passwordInput.setValue(password);
    }

    getEmail() {
        return this.emailInput.getValue();
    }

    getPassword() {
        return this.passwordInput.getValue();
    }

    open(){
        browser.url('/login');
    }
}

module.exports = new LoginPage();