const productListPage = require('../pageobjects/productList.page');


class SearchSteps {
    async setSearchInput(searchTerm) {
        await productListPage.searchInput.setValue(searchTerm);
    }

    async submitSearch() {
        await productListPage.searchButton.click();
    }

    async getSearchResults() {
        return await productListPage.products;
    }

    async searchProduct(searchTerm) {
        await this.setSearchInput(searchTerm);
        await this.submitSearch();
    }

    async areSearchResultsRelevant(searchTerm) {
        const results = await this.getSearchResults();
        for (const result of results) {
            const productName = await result.getText();
            if (!productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
        }
        return true;
    }
}

module.exports = new SearchSteps();