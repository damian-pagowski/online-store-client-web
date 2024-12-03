const searchSteps = require('../../steps/search.steps');
const loginSteps = require('../../steps/login.steps');
const { validUser } = require('../../fixtures/users.json');

beforeEach(async () => {
    await loginSteps.openLoginPage();
    await loginSteps.loginWithCredentials(validUser.username, validUser.password);
});

it('should display relevant results for a search query', async () => {
    const searchTerm = 'durian';

    // Perform search
    await searchSteps.searchProduct(searchTerm);

    // Verify search results
    const resultsRelevant = await searchSteps.areSearchResultsRelevant(searchTerm);
    expect(resultsRelevant).toBe(true);

    // Verify that results are displayed
    const searchResults = await searchSteps.getSearchResults();
    expect(searchResults.length).toBeGreaterThan(0);
});
