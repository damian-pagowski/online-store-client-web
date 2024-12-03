const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageObjects/LoginPage');
const userFixtures = require('../../fixtures/users.json');

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const { password, username } = userFixtures.validUser;
    await loginPage.open();
    await loginPage.login(username, password);
    const loggedUserName = await loginPage.getLoggedUserName();
    expect(loggedUserName.trim()).toBe(username);
});