const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageObjects/LoginPage');
const userFixtures = require('../../fixtures/users.json');

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const { password, username } = userFixtures.invalidUser;

  await loginPage.open();
  await loginPage.login(username, password);

  const loginError = await loginPage.loginError;
  await expect(loginError).toBeVisible();
});