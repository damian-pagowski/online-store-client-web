const productListPage = require('../pageobjects/productList.page');

class FilterSteps {
    async filterByCategory(categoryName) {
        const category = await productListPage.getCategory(categoryName);
        await category.click();
    }

    async filterBySubcategory(subcategoryName) {
        const subcategory = await productListPage.getSubcategory(subcategoryName);
        await subcategory.click();
    }

    async getDisplayedProducts() {
        return await productListPage.products;
    }

    async areProductsDisplayed(productNames) {
        const displayedProductNames = await (await productListPage.productsNames).map(async el  => await el.getText());
        return productNames.every((name) => displayedProductNames.includes(name));
    }
}

module.exports = new FilterSteps();