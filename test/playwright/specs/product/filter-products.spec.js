const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageObjects/LoginPage');
const ProductListPage = require('../../pageObjects/ProductListPage');
const { validUser } = require('../../fixtures/users.json');


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(validUser.username, validUser.password);
});

test('should filter products by category and subcategory', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    const categoryName = 'games';
    const subcategoryName = 'pc';
    const expectedProducts = ['Hipster Game', 'Divide and Conquer'];

    // Apply category filter
    await productListPage.filterByCategory(categoryName);

    // Apply subcategory filter
    await productListPage.filterBySubcategory(subcategoryName);

    // Ensure at least one result is displayed
    const displayedProducts = await productListPage.getDisplayedProducts();
    expect(displayedProducts.length).toBeGreaterThan(0);

    // Verify expected products are displayed
    const productsDisplayedCorrectly = await productListPage.areProductsDisplayed(expectedProducts);
    expect(productsDisplayedCorrectly).toBe(true);
});