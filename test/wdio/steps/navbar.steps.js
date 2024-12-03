const NavbarPage = require('../pageobjects/navbar.page');

class NavbarSteps {
    async isLogoutLinkVisible() {
        return await NavbarPage.logoutLink.isDisplayed();
    }

    async isLoginLinkVisible() {
        return await NavbarPage.loginLink.isDisplayed();
    }

    logout() {
        return NavbarPage.logoutLink.click();
    }

    async failsafeLogout() {
        if (await NavbarPage.logoutLink.waitForDisplayed({ timeout: 5000 })) {
            const logout = await NavbarPage.logoutLink;
            await logout.click();
        } else {
            console.log("Logout link is not visible within the timeout. Cannot perform logout.");
        }
    }


}

module.exports = new NavbarSteps();