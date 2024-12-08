class ProductListPage {
    constructor(page) {
        this.page = page;
        this.categorySelector = (category) => this.page.locator(`#${category}`);
        this.subcategorySelector = (subcategory) => this.page.locator(`#${subcategory}`);
        this.productListGrid = this.page.locator('.product-list-grid');
        this.productListItems = this.page.locator('.product-list-item');
        this.productNameSelector = this.page.locator('.product-name');

    }

    async filterByCategory(categoryName) {
        await this.categorySelector(categoryName).click();
    }

    async filterBySubcategory(subcategoryName) {
        await this.subcategorySelector(subcategoryName).click();
    }

    async getDisplayedProducts() {
        return this.productNameSelector.allInnerTexts();
    }

    async areSearchResultsRelevant(searchTerm) {
        const productNames = await this.getDisplayedProducts()
        return productNames.every((name) => name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    async areProductsDisplayed(expectedProducts) {
        const displayedProducts = await this.getDisplayedProducts();
        return expectedProducts.every((product) => displayedProducts.includes(product));
    }
}

module.exports = ProductListPage;