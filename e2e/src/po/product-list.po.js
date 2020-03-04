class ProductList {
  carousel = element(by.id("carouselProductList"));
  listContainer = element(by.css(".product-list-grid"));
  baseUrl = "https://damian-estore-client.herokuapp.com";

  go = function() {
    browser.driver.get(this.baseUrl);
  };

  getProducts = () => element.all(by.css(".product-list-item"));
}

module.exports = ProductList;