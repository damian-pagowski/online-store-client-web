import loginPage from '../../pageObjects/loginPage';
import navbarComponent from '../../pageObjects/navbarComponent';
import productListPage from '../../pageObjects/productListPage';
import { validUser } from '../../fixtures/users.json';

describe('Search products', () => {
    beforeEach(() => {
        loginPage.visit();
        loginPage.login(validUser.username, validUser.password);
    });

    it('should display relevant results for a search query', () => {
        const searchTerm = 'durian';

        navbarComponent.performSearch(searchTerm);

        productListPage.areSearchResultsRelevant(searchTerm).should('be.true');

        productListPage.getDisplayedProducts().should('have.length.greaterThan', 0);
    });
});