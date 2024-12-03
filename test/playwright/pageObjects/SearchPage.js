class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchResults = page.locator('.product-list-item');
    this.productNameSelector = '.product-name';
  }


}

module.exports = SearchPage;