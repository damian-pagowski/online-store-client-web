import loginPage from '../../pageObjects/loginPage';
import productListPage from '../../pageObjects/productListPage';
import { validUser } from '../../fixtures/users.json';

describe('Filter products by category and subcategory', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.login(validUser.username, validUser.password);
    });

    it('should filter products by category and subcategory', () => {
        const categoryName = 'games';
        const subcategoryName = 'pc';
        const expectedProducts = ['Hipster Game', 'Divide and Conquer'];

        // Apply category filter
        productListPage.filterByCategory(categoryName);

        // Apply subcategory filter
        productListPage.filterBySubcategory(subcategoryName);

        // Ensure at least one result is displayed
        productListPage.getDisplayedProducts().should('have.length.greaterThan', 0);

        // Verify expected products are displayed
        productListPage.areProductsDisplayed(expectedProducts).should('be.true');
    });
});