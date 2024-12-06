const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageObjects/LoginPage');
const NavbarPage = require('../../pageObjects/NavbarPage');
const ProductListPage = require('../../pageObjects/ProductListPage');
const { validUser } = require('../../fixtures/users.json');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(validUser.username, validUser.password);
});

test('should display relevant results for a search query', async ({ page }) => {
  const navbarPage = new NavbarPage(page);
  const productListPage = new ProductListPage(page);
  const searchTerm = 'durian';

  await navbarPage.performSearch(searchTerm);

  // Verify search results are relevant
  const areResultsRelevant = await productListPage.areSearchResultsRelevant(searchTerm);
  expect(areResultsRelevant).toBe(true);

  // Verify that results are displayed
  const searchResults = await productListPage.getDisplayedProducts();
  expect(searchResults.length).toBeGreaterThan(0);
});