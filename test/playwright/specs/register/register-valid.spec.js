const { test, expect } = require('@playwright/test');
const RegisterPage = require('../../pageObjects/RegisterPage');
const { generateNewUser } = require('../../utils/userUtils');

test('Signup with valid credentials', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const newUser = generateNewUser();

    await registerPage.open();
    await registerPage.register(newUser.email, newUser.password);

    const loggedUserName = await registerPage.getLoggedInUserName();
    expect(loggedUserName.trim()).toBe(newUser.username);

});