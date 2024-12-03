const LoginPage = require('../pageobjects/Login.page');
const NavbarPage = require('../pageobjects/Navbar.page');

class LoginSteps {
    openLoginPage() {
        return LoginPage.open();
    }

    loginWithCredentials(username, password) {
        return LoginPage.login(username, password)
    }

    async verifyLoginSuccess(username) {
        const loggerUser = await NavbarPage.getLoggedUserName();
        return expect(loggerUser).toEqual(username);
    }
    async verifyLoginErrorMessage() {
        const hasError = await LoginPage.loginError.isDisplayed()
        return expect(hasError).toBe(true);
    }


}

module.exports = new LoginSteps();