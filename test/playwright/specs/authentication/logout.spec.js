const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageObjects/LoginPage');
const NavbarPage = require('../../pageObjects/NavbarPage');
const { validUser }  = require('../../fixtures/users.json');
let loginPage;
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);
});

test('should log out the user', async ({ page }) => {
  const loggedUserName = await loginPage.getLoggedUserName();
  expect(loggedUserName.trim()).toBe(validUser.username);

  const navbarPage = new NavbarPage(page);
  await navbarPage.logout();

  const isLogoutVisible = await navbarPage.isLogoutLinkVisible();
  expect(isLogoutVisible).toBe(false);
  const isLoginVisible = await navbarPage.isLoginLinkVisible();
  expect(isLoginVisible).toBe(true);
});