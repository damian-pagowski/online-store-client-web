const registerPage = require('../pageobjects/register.page');

class RegisterSteps {
    async setEmail(email) {
        await registerPage.emailInput.setValue(email);
    }

    async setPassword(password) {
        await registerPage.passwordInput.setValue(password);
    }

    async clickRegister() {
        await registerPage.registerButton.click();
    }

    async isLoginLinkVisible() {
        return await registerPage.loginLink.isDisplayed();
    }

    async performRegistration(email, password) {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickRegister();
    }

    openLoginPage() {
        return registerPage.open();
    }
}

module.exports = new RegisterSteps();