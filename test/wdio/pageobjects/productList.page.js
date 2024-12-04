class ProductListPage {
    get carousel() { return $('#carouselProductList'); }
    get listContainer() { return $('.product-list-grid'); }
    
    get searchInput() {
        return $('#product-search-input');
    }

    get searchButton() {
        return $('#product-search-button');
    }

    get products() {
        return $$('.product-list-item');
    }

    get productsNames() {
        return $$('.product-list-item .product-name');
    }

    get showAll() { return $('=Show All'); }

    getCategory(categoryName) {
        return $(`#${categoryName}`);
    }

    getSubcategory(subcategoryName) {
        return $(`#${subcategoryName}`);
    }
    
}

module.exports = new ProductListPage();