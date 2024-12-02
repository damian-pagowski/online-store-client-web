const LoginPage = require('../pageobjects/Login.page');
const NavbarPage = require('../pageobjects/Navbar.page');

class LoginSteps {
    openLoginPage() {
        return LoginPage.open();
    }

    loginWithCredentials(username, password) {
        return LoginPage.login(username, password)
    }

    verifyLoginSuccess(username) {
        browser.sleep(1000)
        // expect(NavbarPage.isUserLoggedIn()).toBeTrue();
        return expect(NavbarPage.getLoggedUserName()).toEqual(username);
    }

    logout() {
        return NavbarPage.logoutLink.click();
    }
}

module.exports = new LoginSteps();