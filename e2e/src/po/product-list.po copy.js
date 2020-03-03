class ProductList {
  carousel = element(by.id("carouselProductList"));

  baseUrl = "https://damian-estore-client.herokuapp.com";
  go = function() {
    browser.get(this.baseUrl);
  };

  getProducts = () => element.all(by.css(".product-list-item"));
}

module.exports = ProductList;
