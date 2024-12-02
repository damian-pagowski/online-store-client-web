class ProductListPage {
    get carousel() { return $('#carouselProductList'); }
    get listContainer() { return $('.product-list-grid'); }
    
    getProductWithId(id) {
        return $(`#product-${id}`);
    }

    getProducts() {
        return $$('.product-list-item');
    }

    getFirstProduct() {
        return $('.product-list-item');
    }

    getFirstProductName() {
        return $('.product-name').getText();
    }

    getFirstProductPrice() {
        return this.getFirstProduct().$('.product-price').getText();
    }

    async isListCountN(n) {
        const count = await this.getProducts().length;
        return count === n;
    }

    async waitForResultsToHaveCount(n) {
        await browser.waitUntil(
            async () => await this.isListCountN(n),
            { timeout: 6000, timeoutMsg: `Expected ${n} products, but list count did not match.` }
        );
    }
}

module.exports = new ProductListPage();