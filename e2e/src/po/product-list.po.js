class ProductList {
  carousel = element(by.id("carouselProductList"));
  listContainer = element(by.css(".product-list-grid"));
  baseUrl = "https://damian-estore-client.herokuapp.com";
  products = element.all(by.css(".product-list-item"));

  go = function() {
    browser.driver.get(this.baseUrl);
  };

  getProducts = () => this.products
}

module.exports = ProductList;
