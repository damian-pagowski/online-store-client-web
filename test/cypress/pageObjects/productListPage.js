class ProductListPage {
  
    filterByCategory(categoryName) {
        cy.get(`#${categoryName}`).click();
    }

    filterBySubcategory(subcategoryName) {
        cy.get(`#${subcategoryName}`).click();
    }

    getDisplayedProducts() {
        return cy.get('.product-name').then((elements) => {
            return [...elements].map((el) => el.innerText);
        });
    }

    areSearchResultsRelevant(searchTerm) {
        return this.getDisplayedProducts().then((productNames) => {
            return productNames.every((name) => name.toLowerCase().includes(searchTerm.toLowerCase()));
        });
    }

    areProductsDisplayed(expectedProducts) {
        return this.getDisplayedProducts().then((displayedProducts) => {
            return expectedProducts.every((product) => displayedProducts.includes(product));
        });
    }
}

export default new ProductListPage();