const filterSteps = require('../../steps/filter.steps');
const loginSteps = require('../../steps/login.steps');
const { validUser } = require('../../fixtures/users.json');

beforeEach(async () => {
    await loginSteps.openLoginPage();
    await loginSteps.loginWithCredentials(validUser.username, validUser.password);
});

it('should filter products by category and subcategory', async () => {
    const categoryName = 'games';
    const subcategoryName = 'pc';
    const expectedProducts = ['Hipster Game', 'Divide and Conquer'];

    // Apply category filter
    await filterSteps.filterByCategory(categoryName);

    // Apply subcategory filter
    await filterSteps.filterBySubcategory(subcategoryName);

    // Ensure at least one result is displayed
    const displayedProducts = await filterSteps.getDisplayedProducts();
    expect(displayedProducts.length).toBeGreaterThan(0);

    // Verify expected products are displayed
    const productsDisplayedCorrectly = await filterSteps.areProductsDisplayed(expectedProducts);
    expect(productsDisplayedCorrectly).toBe(true);
});