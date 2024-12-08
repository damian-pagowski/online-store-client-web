const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageObjects/LoginPage');
const NavbarComponent = require('../../pageObjects/NavbarComponent');
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

  const navbar = new NavbarComponent(page);
  await navbar.logout();

  const isLogoutVisible = await navbar.isLogoutLinkVisible();
  expect(isLogoutVisible).toBe(false);
  const isLoginVisible = await navbar.isLoginLinkVisible();
  expect(isLoginVisible).toBe(true);
});